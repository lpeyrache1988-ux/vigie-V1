// V42.1 — Surcouche "assistant humain" (sans perte de données)
// - Mode "Je ne sais pas" guidé
// - Désambiguïsation si scénario incertain
// - Action unique + score dossier
// - Structuration dossier (docs/notes/dates)
(function(){
  const V42_1 = {};

  function esc(s){
    return String(s??"").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  // --- Dossier extras (safe) ---
  V42_1.ensureDossierExtras = function(d){
    if(!d) return d;
    if(!Array.isArray(d.documents)) d.documents = [];   // {name, kind, added_at, note}
    if(!Array.isArray(d.notes)) d.notes = [];           // {text, added_at}
    if(!Array.isArray(d.dates)) d.dates = [];           // {label, date}
    if(typeof d.has_documents !== 'boolean') d.has_documents = (d.documents.length>0);
    return d;
  };

  // --- Scoring (simple + rassurant) ---
  V42_1.computeScore = function(d){
    let score = 78;
    const urgKind = d?.urgency?.kind || d?.urgency || null;
    const deadline = d?.result?.deadline || d?.answers?.date_deadline || null;
    const dd = deadline ? new Date(deadline) : null;
    const now = new Date();
    if(urgKind === 'immediate' || urgKind === 'legal_deadline') score -= 18;
    if(dd && isFinite(dd.getTime())){
      const diff = (dd - now) / (1000*3600*24);
      if(diff < 0) score -= 18;
      else if(diff <= 2) score -= 12;
      else if(diff <= 7) score -= 6;
    }
    if(d?.has_documents === false) score -= 10;
    if(d?.query && d.query.length < 8) score -= 6;
    return Math.max(30, Math.min(95, Math.round(score)));
  };

  V42_1.difficultyLabel = function(score){
    if(score >= 80) return 'plutôt simple';
    if(score >= 65) return 'moyenne';
    return 'complexe';
  };

  // --- Next action (1 seule) ---
  V42_1.getNextAction = function(d){
    // Priorité : première tâche todo non faite si dispo
    const todo = d?.todo || {};
    for(const k of Object.keys(todo)){
      const t = todo[k];
      if(t && !t.done && t.label) return t.label;
    }
    // Sinon : premier item de timeline non fait
    const tl = Array.isArray(d?.timeline) ? d.timeline : [];
    for(const s of tl){
      if(s && !s.done && (s.label||s.what)) return (s.label||s.what);
    }
    // fallback
    return 'Ouvrir le pack et suivre les étapes.';
  };

  // --- Candidates scoring (pour désambiguïsation) ---
  function scoreScenario(q, s){
    const query = (q||'').trim();
    if(!query) return -1;
    const lc = query.toLowerCase();
    let sc = s.score || 0;
    let matched = 0;
    let anyHits = 0;
    // patterns
    for(const rx of (s.patterns||[])){
      try{ if(rx && rx.test(query)){ matched++; sc += 20; } }catch(e){}
    }
    // keywords_any
    for(const kw of (s.keywords_any||[])){
      if(!kw) continue;
      const k = String(kw).toLowerCase();
      if(k && lc.includes(k)){ anyHits++; sc += 10 + Math.min(10, k.length/2); }
    }
    // keywords_all
    if(Array.isArray(s.keywords_all) && s.keywords_all.length){
      for(const kw of s.keywords_all){
        const k = String(kw||'').toLowerCase();
        if(k && !lc.includes(k)) return -1;
      }
      sc += 30;
    }
    // negatives
    if(Array.isArray(s.neg_keywords)){
      for(const kw of s.neg_keywords){
        const k = String(kw||'').toLowerCase();
        if(k && lc.includes(k)) return -1;
      }
    }
    const guard = (s.min_hits ?? 1);
    if((matched + anyHits) < guard) return -1;
    return sc;
  }

  V42_1.getScenarioCandidates = function(query, topN){
    topN = topN || 3;
    const arr = (window.VIGIE_SCENARIOS||[]).map(s=>({ s, score: scoreScenario(query, s) }))
      .filter(x=>x.score>=0)
      .sort((a,b)=>b.score-a.score)
      .slice(0, topN);
    return arr.map(x=>({ id: x.s.id, label: x.s.label||x.s.id, score: x.score, flow_id:x.s.flow_id, pack_id:x.s.pack_id }));
  };

  // --- Désambiguïsation 1-question ---
  V42_1.maybeDisambiguate = function(query, onPick){
    const c = V42_1.getScenarioCandidates(query, 3);
    if(c.length < 2) return false;
    const top = c[0];
    const second = c[1];
    const lowConfidence = top.score < 45;
    const close = (top.score - second.score) <= 12;
    if(!(lowConfidence || close)) return false;

    const body = `
      <p class="p">Je vois plusieurs situations possibles. Choisis la plus proche :</p>
      <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); margin-top:10px">
        ${c.map(x=>`
          <button class="btn" data-sid="${esc(x.id)}">${esc(x.label)}</button>
        `).join('')}
      </div>
      <p class="small" style="margin-top:10px">Astuce : si tu n’es pas sûr, choisis celle qui correspond à l’organisme (CAF / impôts / banque…).</p>
    `;
    if(window.VUX && VUX.showModal){
      VUX.showModal('Précise votre situation', body);
      setTimeout(()=>{
        document.querySelectorAll('#vux_modal [data-sid]').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            const sid = btn.getAttribute('data-sid');
            VUX.hideModal();
            onPick && onPick(sid);
          });
        });
      }, 0);
    }
    return true;
  };

  // --- Mode "Je ne sais pas" ---
  const GUIDE = [
    {
      id: 'what',
      q: 'Que vous arrive-t-il ?',
      options: [
        { label: '💸 On me demande de payer / rembourser', v: 'payer' },
        { label: '❌ On m’a coupé un droit / un paiement', v: 'droit' },
        { label: '📄 J’ai reçu un courrier et je ne comprends pas', v: 'courrier' },
        { label: '🚨 Urgence (saisie, huissier, fraude)', v: 'urgence' }
      ]
    },
    {
      id: 'who',
      q: 'Qui vous contacte ? (au mieux)',
      options: [
        { label: 'CAF / aides', v: 'caf' },
        { label: 'Impôts (DGFiP)', v: 'impots' },
        { label: 'CPAM / Ameli', v: 'cpam' },
        { label: 'Banque', v: 'banque' },
        { label: 'Amende (ANTAI / Trésor)', v: 'amende' },
        { label: 'Je ne sais pas', v: 'unknown' }
      ]
    }
  ];

  function guideQuery(state){
    const w = state.what;
    const who = state.who;
    const pieces = [];
    if(who && who !== 'unknown') pieces.push(who);
    if(w === 'payer') pieces.push('payer remboursement');
    if(w === 'droit') pieces.push('droit suspendu paiement coupé');
    if(w === 'courrier') pieces.push('courrier reçu incompréhensible');
    if(w === 'urgence') pieces.push('urgence saisie fraude huissier');
    return pieces.join(' ');
  }

  V42_1.startUnknownGuide = function(){
    let idx = 0;
    const state = {};
    function renderStep(){
      const step = GUIDE[idx];
      const body = `
        <p class="p">${esc(step.q)}</p>
        <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); margin-top:10px">
          ${step.options.map(o=>`<button class="btn" data-v="${esc(o.v)}">${esc(o.label)}</button>`).join('')}
        </div>
        <div style="height:10px"></div>
        <button class="btn" id="v42_back" style="display:${idx===0?'none':'inline-flex'}">⬅ Retour</button>
      `;
      VUX.showModal('Guidage rapide', body);
      setTimeout(()=>{
        const back = document.getElementById('v42_back');
        if(back) back.addEventListener('click', ()=>{ idx = Math.max(0, idx-1); renderStep(); });
        document.querySelectorAll('#vux_modal [data-v]').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            state[step.id] = btn.getAttribute('data-v');
            if(idx < GUIDE.length-1){ idx++; renderStep(); return; }
            // fin : construire requête + créer dossier
            VUX.hideModal();
            const q = guideQuery(state);
            if(window.V30 && V30.createDossier){
              const d = V30.createDossier({ query: q, flowId: 'generic', cp: '' });
              location.href = `wizard.html?id=${encodeURIComponent(d.id)}`;
            }
          });
        });
      }, 0);
    }
    if(!window.VUX){ alert('UI manquante'); return; }
    renderStep();
  };

  // --- Inject cards in wizard ---
  V42_1.injectWizardTopCards = function(dossier){
    if(!window.VUX) return;
    dossier = V42_1.ensureDossierExtras(dossier);
    // Avoid double insert
    if(document.getElementById('v42_1_topcards')) return;

    const score = V42_1.computeScore(dossier);
    const diff = V42_1.difficultyLabel(score);
    const next = V42_1.getNextAction(dossier);

    // If user chose a strategy in result page, show it (UX only)
    let chosen = dossier?.answers?.__chosen_strategy || '';
    let chosenLabel = '';
    let chosenAction = '';
    try{
      const scen = (window.VIGIE_MATCH_SCENARIO && dossier?.query) ? window.VIGIE_MATCH_SCENARIO(dossier.query) : null;
      const list = (window.VIGIE_GET_STRATEGIES_V44 && scen) ? window.VIGIE_GET_STRATEGIES_V44(scen) : [];
      const hit = list.find(x=>x.id===chosen) || null;
      if(hit){ chosenLabel = hit.label || ''; chosenAction = hit.action_now || ''; }
    }catch(e){}
    const urgKind = dossier?.urgency?.kind || dossier?.urgency || null;
    const urgent = (urgKind === 'immediate' || urgKind === 'legal_deadline');
    const cardCls = urgent ? 'cardUrgent' : '';

    const html = `
      <div id="v42_1_topcards">
        <div class="card ${cardCls}">
          <div class="h2">👉 Action maintenant</div>
          ${chosenLabel ? `<div class="tag" style="margin-top:8px">Stratégie : <b>${esc(chosenLabel)}</b></div>` : ''}
          <p class="p" style="margin-top:6px">${esc(chosenAction || next)}</p>
          <div style="height:8px"></div>
          <button class="btn primary" id="v42_do_now">Agir maintenant</button>
          <span class="tag" style="margin-left:8px">${urgent?'🔴 immédiat':'🔵 suivi'}</span>
          <p class="small" style="margin-top:10px">✔ Situation fréquente — vous pouvez agir. Tout reste local.</p>
        </div>
        <div style="height:10px"></div>
        <div class="card">
          <div class="h2">📊 Votre dossier</div>
          <div class="kpi" style="margin-top:10px">
            <div class="kbox"><div class="kbig">${score}%</div><div class="ksmall">Chance de réussite (indicative)</div></div>
            <div class="kbox"><div class="kbig">${esc(diff)}</div><div class="ksmall">Difficulté</div></div>
          </div>
        </div>
      </div>
    `;
    VUX.insertBefore('#host', html);
    setTimeout(()=>{
      const btn = document.getElementById('v42_do_now');
      if(btn){
        btn.addEventListener('click', ()=>{
          // scroll vers actions/timeline/checklist si dispo
          const el = document.getElementById('actionsBlock');
          if(el){
            const top = el.getBoundingClientRect().top + window.scrollY - 12;
            window.scrollTo({top, behavior:'smooth'});
          }else{
            window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'});
          }
        });
      }
    }, 0);
  };

  // --- Collapse details by default in wizard (reduce stress) ---
  V42_1.collapseDetails = function(){
    document.querySelectorAll('details').forEach(d=>{ d.open = false; });
  };

  // --- Hook index: add "Je ne comprends pas" ---
  V42_1.initIndex = function(){
    const btn = document.getElementById('unknown_btn');
    if(btn){
      btn.addEventListener('click', (e)=>{ e.preventDefault(); V42_1.startUnknownGuide(); });
    }
  };

  // --- Create dossier with disambiguation when searching ---
  V42_1.createDossierSmart = function({query, flowId, cp, onCreated}){
    // If low confidence, ask user to pick scenario (still no data loss)
    const handled = V42_1.maybeDisambiguate(query, (scenarioId)=>{
      // create dossier using scenario label to bias matching
      const q2 = `${query} ${scenarioId}`;
      const d = V30.createDossier({query: q2, flowId: flowId||'generic', cp: cp||''});
      if(onCreated) onCreated(d);
      else location.href = `wizard.html?id=${encodeURIComponent(d.id)}`;
    });
    if(handled) return null;
    const d = V30.createDossier({query, flowId, cp});
    if(onCreated) onCreated(d);
    return d;
  };

  window.V42_1 = V42_1;
})();
