(function(){
  const LS_KEY = "vigie_v30_state";
  const STATE_VERSION = 40; // V40

  function nowISO(){ return new Date().toISOString(); }
  function uid(){ return "d_" + Math.random().toString(36).slice(2,10) + Date.now().toString(36).slice(2,6); }

  function ensureDossierV40(d){
    d = d || {};
    if(!d.answers) d.answers = {};
    if(!d.checklist) d.checklist = {};
    if(!d.todo) d.todo = {}; // tâches cochables (V40)
    if(!Array.isArray(d.timeline)) d.timeline = []; // étapes (V40)
    // V42.1 extras (safe: on ajoute sans modifier l'existant)
    if(!Array.isArray(d.documents)) d.documents = []; // {name, kind, added_at, note}
    if(!Array.isArray(d.notes)) d.notes = [];         // {text, added_at}
    if(!Array.isArray(d.dates)) d.dates = [];         // {label, date}
    if(typeof d.has_documents !== 'boolean') d.has_documents = (d.documents.length>0);
    if(!d.created_at) d.created_at = nowISO();
    if(!d.updated_at) d.updated_at = nowISO();
    return d;
  }

  function migrateState(s){
    s = s || {};
    if(!s.state_version) s.state_version = 30;
    if(!Array.isArray(s.dossiers)) s.dossiers = [];
    s.dossiers = s.dossiers.map(ensureDossierV40);
    s.state_version = STATE_VERSION;
    return s;
  }

  function loadState(){
    try{
      const raw = localStorage.getItem(LS_KEY) || "{}";
      const s = JSON.parse(raw) || {};
      return migrateState(s);
    }catch(e){
      return migrateState({});
    }
  }
  function saveState(s){
    // éviter perte de données en cas de QuotaExceededError
    try{
      s = migrateState(s);
      localStorage.setItem(LS_KEY, JSON.stringify(s));
    }catch(e){
      console.warn('Vigie: impossible de sauvegarder (quota navigateur)', e);
      // on ne supprime rien automatiquement : l'utilisateur garde le contrôle
      alert("⚠️ Espace de stockage navigateur plein. Supprime un dossier dans le Dashboard puis réessaie.");
    }
  }

  function getDossiers(){
    const s = loadState();
    return s.dossiers || [];
  }
  function setDossiers(d){
    const s = loadState();
    s.dossiers = d;
    saveState(s);
  }
  function getActiveId(){
    return loadState().active_dossier_id || null;
  }
  function setActiveId(id){
    const s = loadState(); s.active_dossier_id = id; saveState(s);
  }
  function getDossier(id){
    return getDossiers().find(x=>x.id===id) || null;
  }
  function upsertDossier(d){
    const ds = getDossiers();
    const i = ds.findIndex(x=>x.id===d.id);
    if(i>=0) ds[i] = d; else ds.unshift(d);
    setDossiers(ds);
  }
  function createDossier({query, flowId, cp}){
    const d = {
      id: uid(),
      query: query || "",
      flow_id: (function(){
        const scen = (window.VIGIE_MATCH_SCENARIO ? window.VIGIE_MATCH_SCENARIO(query) : null);
        const fid = flowId || (scen && scen.flow_id) || "generic";
        return fid;
      })(),
      cp: cp || "",
      created_at: nowISO(),
      updated_at: nowISO(),
      answers: {},
      checklist: {},
      pack_id: null,
      result: null
    };
    
    // Apply scenario overrides (V41 scenario engine)
    const scen = (window.VIGIE_MATCH_SCENARIO ? window.VIGIE_MATCH_SCENARIO(query) : null);
    if(scen){
      d.scenario_id = scen.id;
      d.scenario_label = scen.label || scen.id;
      d.tags = Array.isArray(scen.tags) ? scen.tags.slice(0) : [];
      if(scen.pack_id){ d.pack_id = scen.pack_id; d.answers.__pack_id = scen.pack_id; }
      if(scen.checklist_id){ d.checklist_id = scen.checklist_id; d.answers.__checklist_id = scen.checklist_id; }
      if(scen.urgency) d.urgency = scen.urgency;
      if(Array.isArray(scen.todo)) d.todo = scen.todo.reduce((acc, t, i)=>{ acc["s"+(i+1)] = {label:t, done:false}; return acc; }, {});
      if(Array.isArray(scen.timeline)) d.timeline = scen.timeline.slice(0);
      // Allow scenario to force a strategy (used by evalFlow)
      if(scen.force_strategy){
        d.answers.__strategy_key = scen.force_strategy;
      }
    }
upsertDossier(d);
    setActiveId(d.id);
    return d;
  }

  function parseDateInput(v){
    // Parse YYYY-MM-DD safely in local time (avoid UTC/Safari day-shift)
    if(!v) return null;
    const m = String(v).trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(m){
      const y = +m[1], mo = +m[2], da = +m[3];
      const d = new Date(y, mo-1, da, 12, 0, 0, 0); // noon local avoids DST edge cases
      return isNaN(d.getTime()) ? null : d;
    }
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d;
  }
  function addDays(date, days){
    const d = new Date(date.getTime());
    d.setDate(d.getDate() + (days||0));
    return d;
  }
  function fmtDate(d){
    if(!d) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth()+1).padStart(2,'0');
    const da = String(d.getDate()).padStart(2,'0');
    return `${da}/${m}/${y}`;
  }

  function severityFromScore(score){
    if(score >= 80) return {key:"critique", badge:"red"};
    if(score >= 45) return {key:"modéré", badge:"amber"};
    return {key:"simple", badge:"green"};
  }

  function matchFlow(query){
    const scen = (window.VIGIE_MATCH_SCENARIO ? window.VIGIE_MATCH_SCENARIO(query) : null);
    const norm = (s)=>String(s||"")
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const q = norm(query||"");
    // If a scenario matches, prefer its flow_id (still allow keyword tie-break inside that flow)
    if(scen && scen.flow_id){
      const flows = window.VIGIE_FLOWS || [];
      const f0 = flows.find(f=>f.id===scen.flow_id);
      if(f0) return f0;
    }

    const flows = window.VIGIE_FLOWS || [];
    let best = null;
    let bestScore = -1;

    for(const f of flows){
      const kws = f.keywords || [];
      let s = 0;
      let hits = 0;
      for(const k of kws){
        if(!k) continue;
        const kk = norm(k);
        if(q.includes(kk)){
          // Pondération : plus le mot-clé est spécifique (long), plus ça compte.
          s += 10 + Math.min(20, kk.length);
          hits++;
        }
      }
      // petit bonus pour les flows "spécialistes" (uniquement si on a au moins 1 hit)
      if(hits > 0) s += Math.round((f.base_score || 0) / 10);

      // pénalité légère pour les flows très larges (ex: "vie_civile")
      if(kws.length >= 10) s = s * 0.72;

      if(s > bestScore){
        bestScore = s;
        best = f;
      }
    }

    // si rien ne matche (score quasi nul), fallback sur generic
    if(!best || bestScore <= 1){
      return flows.find(x=>x.id==="generic") || flows[0];
    }
    return best;
  }

  function evalFlow(flow, inputs){
    // scoring model: base + rules
    inputs = inputs || {};
    const forcedStrategy = inputs.__strategy_key || null;

    let score = flow.base_score || 10;
    let chosen = null;
    let chosenPriority = -1;

    for(const r of (flow.rules||[])){
      let ok = true;
      for(const k in (r.if||{})){
        if(String(inputs[k] ?? "") !== String(r.if[k])) ok = false;
      }
      if(ok){
        score += (r.add_score||0);
        if(r.pick_strategy){
          const pr = (typeof r.priority==='number') ? r.priority : 0;
          if(pr > chosenPriority){
            chosenPriority = pr;
            chosen = r.pick_strategy;
          }
        }
      }
    }

    // choose best strategy: chosen or default
    const strategies = flow.strategies || {};
    const sKey = forcedStrategy || chosen || flow.default_strategy;
    const strat = strategies[sKey] || Object.values(strategies)[0] || {title:"Conseils généraux", legal_delay_days:0, pack_id:null};

    // compute deadline if a date anchor exists
    let anchor = null;
    if(flow.deadline_anchor === "date_received"){
      anchor = parseDateInput(inputs.date_received);
    }else if(flow.deadline_anchor === "date_rdv"){
      anchor = parseDateInput(inputs.date_rdv);
    }
    let deadline = null;
    if(anchor && strat.legal_delay_days){
      deadline = addDays(anchor, strat.legal_delay_days);
    }

    const sev = severityFromScore(score);

    return {
      flow_id: flow.id,
      score,
      severity: sev.key,
      severity_badge: sev.badge,
      strategy_key: sKey,
      strategy_title: strat.title,
      legal_delay_days: strat.legal_delay_days || 0,
      deadline: deadline ? deadline.toISOString() : null,
      deadline_label: deadline ? fmtDate(deadline) : "",
      pack_id: inputs.__pack_id || strat.pack_id || flow.pack_id || null,
      checklist_id: inputs.__checklist_id || strat.checklist_id || flow.checklist_id || null,
      notes: strat.notes || ""
    };
  }

  function checklistStats(checklistDef, checkedMap){
    const items = (checklistDef?.items||[]);
    let reqTotal=0, reqOk=0, total=items.length, ok=0;
    for(const it of items){
      const v = !!checkedMap[it.id];
      if(v) ok++;
      if(it.required){
        reqTotal++;
        if(v) reqOk++;
      }
    }
    const completeness = total ? Math.round(ok*100/total) : 0;
    const required_ok = reqTotal ? (reqOk===reqTotal) : true;
    return {total, ok, completeness, required_ok};
  }

  function geoLookup(cp){
    cp = (cp||"").trim();
    const g = window.VIGIE_GEO || {};
    if(g[cp]) return {found:true, ...g[cp]};
    return {found:false};
  }

  // expose
  window.V30 = {
    loadState, saveState,
    getDossiers, getDossier, getActiveId, setActiveId,
    createDossier, upsertDossier,
    parseDateInput, addDays, fmtDate,
    matchFlow, evalFlow,
    checklistStats,
    geoLookup
  };
})();
