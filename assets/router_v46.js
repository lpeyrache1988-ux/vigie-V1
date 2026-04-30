(function(){
  function inferPillarFromScenario(s){
    const fid = (s.flow_id||s.pack_id||s.id||'').toString();
    if(fid.startsWith('tax')) return 'impots';
    if(fid.startsWith('caf')) return 'caf';
    if(fid.startsWith('banque')) return 'banque';
    if(fid.startsWith('arnaques')) return 'arnaques';
    if(fid.startsWith('france_travail')) return 'travail';
    if(fid.startsWith('justice')) return 'justice';
    if(fid.startsWith('logement')) return 'logement';
    return 'institutions';
  }

  function scoreScenario(s, query){
    const q = (query||'').toLowerCase();
    if(!q) return 0;
    const toks = q.split(/\s+/).filter(Boolean);
    let score = 0;
    // negative keywords
    try{
      (s.neg_keywords||[]).forEach(nk=>{
        if(q.includes(String(nk).toLowerCase())) score -= 4;
      });
    }catch(e){}
    // patterns
    try{
      (s.patterns||[]).forEach(rx=>{
        try{ if(rx && rx.test && rx.test(query)) score += 6; }catch(e){}
      });
    }catch(e){}
    // keywords_any
    try{
      (s.keywords_any||[]).forEach(kw=>{
        const k = String(kw).toLowerCase();
        if(k && q.includes(k)) score += 5;
        toks.forEach(t=>{ if(k && k.includes(t)) score += 1; });
      });
    }catch(e){}
    // tags / label
    const hay = ((s.label||'')+' '+(s.id||'')+' '+(s.tags||[]).join(' ')).toLowerCase();
    toks.forEach(t=>{ if(hay.includes(t)) score += 1; });
    if(hay.includes(q)) score += 2;
    return score;
  }

  function matchScenario(query, pillar){
    const q = (query||'').trim();
    const p = (pillar||'').trim().toLowerCase();
    const list = (window.VIGIE_SCENARIOS||[]).slice();
    const filtered = p ? list.filter(s=>inferPillarFromScenario(s)===p) : list;
    let best=null, bestScore=0;
    const scored=[];
    filtered.forEach(s=>{
      const sc = scoreScenario(s, q);
      if(sc>0) scored.push({s, score: sc});
      if(sc>bestScore){ bestScore=sc; best=s; }
    });
    // If pillar not provided and best is weak but there are close competitors from different pillars, we will disambiguate
    const top = scored.sort((a,b)=>b.score-a.score).slice(0,3);
    return { best, bestScore, top, scoredCount: scored.length };
  }

  function route(q, pillar){
    q = (q||'').trim();
    pillar = (pillar||'').trim();
    const m = matchScenario(q, pillar);
    let match = m.best;
    // candidates from registry (for UI suggestions)
    let candidates = window.VIGIE_FIND_CASES ? window.VIGIE_FIND_CASES({q, pillar}) : [];
    candidates = (candidates||[]).slice(0,6);
    return { q, pillar, match, matchScore: m.bestScore, top: m.top, candidates };
  }

  function shouldDisambiguate(r){
    if(!r || !r.q) return false;
    // Disambiguate if no confident match or if top 2 are close
    if(!r.match) return true;
    const top = r.top || [];
    if(top.length>=2){
      const a=top[0].score, b=top[1].score;
      if(b>0 && (a-b) <= 2) return true;
    }
    return false;
  }

  window.VIGIE_ROUTE_V46 = { route, shouldDisambiguate, matchScenario, inferPillarFromScenario };
})();
