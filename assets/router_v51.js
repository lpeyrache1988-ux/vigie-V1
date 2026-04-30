// ═══════════════════════════════════════════════════════════════════
// VIGIE ROUTER V51 — Surcouche non destructive sur router_v46.js
// Priorité : case forcé > pilier > expression exacte > synonymes >
//            mots-clés forts > neg_keywords > score > désambiguïsation
//            > fallback explicite
// ═══════════════════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── Normalisation robuste (accents, apostrophes, casse) ──────────
  function norm(s){
    if(!s) return '';
    return String(s)
      .toLowerCase()
      .replace(/[''`]/g, "'")
      .replace(/[œ]/g, 'oe')
      .replace(/[æ]/g, 'ae')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9 '_-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // ── Synonymes & expansions ───────────────────────────────────────
  const SYNONYMS = {
    // CAF
    'trop-percu':         ['trop percu','trop-percu','indu','indus','dette caf','remboursement caf'],
    'caf fraude':         ['fraude caf','fausse declaration caf','controle caf'],
    'caf bonne foi':      ['trop percu bonne foi','bonne foi caf','erreur declaration caf'],
    'remise gracieuse':   ['remise gracieuse caf','effacement dette','abandon creance caf'],
    // Banque
    'fraude cb':          ['fraude carte','fraude carte bancaire','paiement frauduleux','achat non reconnu','carte debitee','debit inconnu carte'],
    'virement frauduleux':['virement non autorise','virement arnaque','escroquerie virement','j ai fait un virement','on m a fait faire'],
    'surendettement':     ['surendette','dettes impossibles','commission surendettement','banque de france dossier'],
    // France Travail
    'radiation':          ['radie pole emploi','radiation france travail','radiation ft','pole emploi radie'],
    'are refus':          ['are refusee','allocation chomage refus','france travail refus are','refus are'],
    'mediateur ft':       ['mediateur france travail','cra france travail','commission recours france travail'],
    // CPAM
    'cpam refus':         ['refus remboursement cpam','cpam ne rembourse pas','refus prise en charge','remboursement refuse cpam'],
    'ald':                ['affection longue duree','ald refus','ald cpam'],
    // Logement
    'depot garantie':     ['depot de garantie','caution non rendue','retenue caution','garantie locative'],
    'insalubre':          ['logement insalubre','taudis','humidite logement','chauffage en panne','logement dangereux'],
    'expulsion':          ['expulsion locataire','procedure expulsion','commandement quitter'],
    // Impôts
    'impot caf':          [],  // ambiguous — triggers disambiguation
    'rectification':      ['proposition rectification','redressement fiscal','controle fiscal'],
    'l64':                ['abus de droit','l 64','article l64'],
    // Passeport / vie civile
    'passeport mineur':   ['passeport enfant','passeport fils','passeport fille','passeport moins de 18 ans'],
    'titre sejour':       ['titre de sejour bloque','prefecture sans reponse','anef bloque','recepisse expire','sejour irregulier'],
    // Consommation
    'garantie produit':   ['garantie legale','produit defectueux','garantie conformite','produit en panne','vice cache'],
    'conso arnaque':      ['demarchage abusif','contrat force','retractation','droit retractation'],
    // Retraite
    'trimestres':         ['trimestres manquants','releve carriere','erreur retraite'],
  };

  // ── Pilier inféré depuis flow_id / tags / id ─────────────────────
  function inferPillar(s){
    const fid = norm(s.flow_id || s.pack_id || s.id || '');
    const tags = (s.tags || []).map(norm);
    if(fid.startsWith('tax') || fid.includes('impot') || tags.includes('impots')) return 'impots';
    if(fid.startsWith('caf') || tags.includes('caf')) return 'caf';
    if(fid.startsWith('banque') || fid.startsWith('bank') || tags.includes('banque')) return 'banque';
    if(fid.startsWith('france_travail') || fid.startsWith('ft_') || fid.startsWith('work_') || tags.includes('travail')) return 'travail';
    if(fid.startsWith('ameli') || fid.startsWith('cpam') || tags.includes('sante')) return 'sante';
    if(fid.startsWith('housing') || fid.startsWith('logement') || fid.startsWith('dalo') || tags.includes('logement')) return 'logement';
    if(fid.startsWith('justice') || fid.startsWith('fine') || tags.includes('justice')) return 'justice';
    if(fid.startsWith('arnaques') || fid.startsWith('scam') || tags.includes('arnaques')) return 'arnaques';
    if(fid.includes('passport') || fid.includes('cni') || fid.includes('vie_civile') || fid.includes('mariage') || fid.includes('prefecture') || tags.includes('vie_civile')) return 'institutions';
    if(tags.includes('retraite')) return 'retraite';
    if(tags.includes('consommation') || fid.startsWith('conso')) return 'consommation';
    return 'autres';
  }

  // ── Scorer un scénario contre une requête ────────────────────────
  function scoreScenario(s, q_norm, q_toks, pillar){
    let score = 0;

    // 1. Neg keywords — pénalité forte
    for(const nk of (s.neg_keywords || [])){
      if(q_norm.includes(norm(nk))){ score -= 6; }
    }

    // 2. Pilier filtre (si fourni, boost ou élimination douce)
    if(pillar){
      const sp = inferPillar(s);
      if(sp === pillar) score += 8;
      else if(sp !== pillar) score -= 2; // pénalité douce, pas élimination
    }

    // 3. Patterns regex
    for(const rx of (s.patterns || [])){
      try{ if(rx && rx.test && rx.test(q_norm)) score += 8; }catch(e){}
    }

    // 4. keywords_any — match partiel et exact
    for(const kw of (s.keywords_any || [])){
      const kn = norm(kw);
      if(!kn) continue;
      if(q_norm.includes(kn)){
        // Bonus longueur : un mot-clé précis vaut plus
        score += 5 + Math.min(15, kn.length);
      } else {
        // Match par tokens : si tous les tokens du kw sont présents
        const kwToks = kn.split(' ').filter(Boolean);
        if(kwToks.length >= 2 && kwToks.every(t => q_norm.includes(t))){
          score += 3 + Math.min(8, kn.length);
        }
      }
    }

    // 5. Synonymes expansions
    for(const [syn, variants] of Object.entries(SYNONYMS)){
      const sn = norm(syn);
      const allForms = [sn, ...variants.map(norm)];
      const kws_n = (s.keywords_any || []).map(norm);
      const hasKw = kws_n.some(k => k.includes(sn) || allForms.some(v => k.includes(v)));
      const qMatchesSyn = allForms.some(v => v && q_norm.includes(v));
      if(hasKw && qMatchesSyn) score += 4;
    }

    // 6. Tags & label boost
    const hay = norm((s.label||'') + ' ' + (s.id||'') + ' ' + (s.tags||[]).join(' '));
    for(const tok of q_toks){
      if(tok.length >= 3 && hay.includes(tok)) score += 1;
    }
    if(q_norm.length > 3 && hay.includes(q_norm)) score += 3;

    return score;
  }

  // ── Vérifier si désambiguïsation nécessaire ──────────────────────
  function needsDisambig(top){
    if(!top || top.length < 2) return false;
    if(top[0].score <= 0) return false;
    const diff = top[0].score - top[1].score;
    // Ambiguïté si écart faible ET plusieurs piliers différents
    if(diff <= 4 && top[1].score > 2) return true;
    return false;
  }

  // ── Route principale ─────────────────────────────────────────────
  function route(q, pillar, forcedCaseId){
    q = (q || '').trim();
    pillar = (pillar || '').trim().toLowerCase();
    forcedCaseId = (forcedCaseId || '').trim();

    const q_norm = norm(q);
    const q_toks = q_norm.split(' ').filter(t => t.length >= 2);

    const scenarios = window.VIGIE_SCENARIOS || [];

    // ── Priorité 1 : case forcé par URL ─────────────────────────────
    if(forcedCaseId){
      const forced = scenarios.find(s => s.id === forcedCaseId);
      if(forced) return { match: forced, matchScore: 999, top: [{s:forced,score:999}], candidates: [], forced: true };
      // Chercher dans registry
      const rc = (window.VIGIE_REGISTRY_CASES || []).find(c => c.id === forcedCaseId);
      if(rc){
        const synth = {
          id: rc.id, label: rc.label, flow_id: rc.flow_id, pack_id: rc.pack_id,
          tags: [rc.pillar||''],
          todo: ['Qualifier la situation et rassembler les pièces.','Agir via le canal officiel indiqué.','Conserver les preuves d\'envoi et de réponse.'],
          urgency: { kind:'none', hint:'Délai indicatif — vérifiez votre courrier officiel.' }
        };
        return { match: synth, matchScore: 999, top: [{s:synth,score:999}], candidates: [], forced: true };
      }
    }

    // ── Score tous les scénarios ─────────────────────────────────────
    const scored = [];
    for(const s of scenarios){
      const sc = scoreScenario(s, q_norm, q_toks, pillar);
      if(sc > 0) scored.push({ s, score: sc });
    }
    scored.sort((a, b) => b.score - a.score);
    const top = scored.slice(0, 5);

    // ── Cas spéciaux : ambiguïtés connues ───────────────────────────
    const isImpotCaf = q_toks.includes('impot') && (q_toks.includes('caf') || q_norm.includes('caf'));
    if(isImpotCaf && top.length >= 2){
      return {
        match: null,
        matchScore: 0,
        top,
        candidates: top.map(t => t.s).slice(0, 3),
        needsDisambig: true,
        disambigHint: 'Votre question concerne-t-elle les impôts ou la CAF ?'
      };
    }

    // ── Désambiguïsation auto ────────────────────────────────────────
    if(top.length >= 2 && needsDisambig(top)){
      return {
        match: null,
        matchScore: top[0]?.score || 0,
        top,
        candidates: top.map(t => t.s).slice(0, 3),
        needsDisambig: true,
        disambigHint: null
      };
    }

    // ── Match unique ─────────────────────────────────────────────────
    if(top.length > 0 && top[0].score >= 5){
      // Tenter aussi le fallback legacy router_v46 pour comparer
      let legacyMatch = null;
      if(window.VIGIE_ROUTE_V46){
        try{
          const lr = window.VIGIE_ROUTE_V46.route(q, pillar);
          legacyMatch = lr.match;
        }catch(e){}
      }
      const match = top[0].s;
      return {
        match,
        matchScore: top[0].score,
        top,
        candidates: top.map(t => t.s).slice(0, 3),
        legacyMatch,
        needsDisambig: false
      };
    }

    // ── Fallback legacy router_v46 ───────────────────────────────────
    if(window.VIGIE_ROUTE_V46){
      try{
        const lr = window.VIGIE_ROUTE_V46.route(q, pillar);
        if(lr.match){
          return { ...lr, matchScore: lr.matchScore || 1, fromLegacy: true };
        }
      }catch(e){}
    }

    // ── Fallback générique ───────────────────────────────────────────
    return {
      match: null,
      matchScore: 0,
      top: [],
      candidates: [],
      needsDisambig: false,
      fallback: true,
      fallbackHint: 'Situation non reconnue. Essayez le parcours guidé ou reformulez votre problème.'
    };
  }

  // ── Helpers ──────────────────────────────────────────────────────
  function getPillarFromScenario(s){
    if(!s) return 'autres';
    return inferPillar(s);
  }

  function getConfidenceLabel(score){
    if(score >= 20) return { label: 'Reconnu', level: 'high' };
    if(score >= 10) return { label: 'Probable', level: 'medium' };
    if(score >= 5)  return { label: 'Possible', level: 'low' };
    return { label: 'Incertain', level: 'none' };
  }

  function getRiskLabel(urgencyKind){
    const map = {
      'legal_deadline':  { label: 'Délai légal — agir vite', color: 'red' },
      'admin_deadline':  { label: 'Délai administratif', color: 'amber' },
      'immediate':       { label: 'Urgence immédiate', color: 'red' },
      'none':            { label: 'Pas d\'urgence immédiate', color: 'green' },
    };
    return map[urgencyKind] || { label: 'Vérifier votre courrier', color: 'slate' };
  }

  // ── Export ───────────────────────────────────────────────────────
  window.VIGIE_ROUTE_V51 = {
    route,
    norm,
    inferPillar,
    getPillarFromScenario,
    getConfidenceLabel,
    getRiskLabel,
    needsDisambig,
    SYNONYMS
  };

  // Rétro-compatibilité : si router_v46 déjà chargé, on ne le remplace pas
  // On expose V51 en priorité et laisse V46 comme fallback interne
  console.log('[Vigie] Router V51 chargé — ' + (window.VIGIE_SCENARIOS || []).length + ' scénarios disponibles');

})();
