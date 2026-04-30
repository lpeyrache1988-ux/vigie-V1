// VIGIE V54 — Index canonique des flows
// Résout les 14 IDs dupliqués de flows_v30.js sans modifier le fichier source.
// Strategy : last-write-wins est le comportement du moteur V30 — on le documente
// et on expose une map canonique propre.

window.VIGIE_FLOWS_INDEX = (function(){
  'use strict';

  // ── IDs dupliqués connus dans flows_v30.js ────────────────────────
  // passport×4, passport_adult×4, cni×3, cni_adult×2, mariage×3,
  // tax_declaration×2, tax_rectif×7, ameli×2, caf×2, france_travail×2,
  // logement_base×3, banque_base×3, arnaques_base×2, justice_base×2
  // Comportement moteur V30 : last-write-wins (dernière définition gagne)

  // ── Map canonique : flow_id → pilier sémantique ──────────────────
  const CANONICAL = {
    // Vie civile
    'passport':        { pillar: 'institutions', label: 'Passeport', icon: '🪪' },
    'passport_adult':  { pillar: 'institutions', label: 'Passeport adulte', icon: '🪪' },
    'passport_minor':  { pillar: 'institutions', label: 'Passeport mineur', icon: '🪪' },
    'cni':             { pillar: 'institutions', label: 'Carte nationale d\'identité', icon: '🪪' },
    'cni_adult':       { pillar: 'institutions', label: 'CNI adulte', icon: '🪪' },
    'mariage':         { pillar: 'institutions', label: 'Mariage', icon: '💍' },
    'vie_civile':      { pillar: 'institutions', label: 'Vie civile', icon: '🪪' },
    'vie_passeport':   { pillar: 'institutions', label: 'Passeport (vie)', icon: '🪪' },
    'vie_cni':         { pillar: 'institutions', label: 'CNI (vie)', icon: '🪪' },
    'deces_base':      { pillar: 'institutions', label: 'Décès', icon: '🕊️' },

    // Impôts
    'tax_declaration': { pillar: 'impots', label: 'Déclaration fiscale', icon: '💰' },
    'tax_rectif':      { pillar: 'impots', label: 'Rectification fiscale', icon: '💰' },

    // CAF
    'caf':             { pillar: 'caf', label: 'CAF', icon: '👶' },

    // Santé
    'ameli':           { pillar: 'sante', label: 'Ameli / CPAM', icon: '🩺' },
    'cpam':            { pillar: 'sante', label: 'CPAM', icon: '🩺' },

    // Travail
    'france_travail':  { pillar: 'travail', label: 'France Travail', icon: '💼' },

    // Logement
    'logement':        { pillar: 'logement', label: 'Logement', icon: '🏠' },
    'logement_dossier':{ pillar: 'logement', label: 'Dossier logement', icon: '🏠' },
    'logement_base':   { pillar: 'logement', label: 'Logement (base)', icon: '🏠' },
    'logement_litige': { pillar: 'logement', label: 'Litige locatif', icon: '🏠' },
    'logement_impayes':{ pillar: 'logement', label: 'Loyers impayés', icon: '🏠' },

    // Banque
    'banque':          { pillar: 'banque', label: 'Banque', icon: '🏦' },
    'banque_fraude':   { pillar: 'banque', label: 'Fraude bancaire', icon: '🏦' },
    'banque_base':     { pillar: 'banque', label: 'Banque (base)', icon: '🏦' },
    'banque_frais':    { pillar: 'banque', label: 'Frais bancaires', icon: '🏦' },
    'banque_surendettement': { pillar: 'banque', label: 'Surendettement', icon: '🏦' },

    // Arnaques
    'arnaques':        { pillar: 'arnaques', label: 'Arnaques', icon: '⚠️' },
    'arnaques_signaler':{ pillar: 'arnaques', label: 'Signalement arnaque', icon: '⚠️' },
    'arnaques_base':   { pillar: 'arnaques', label: 'Arnaques (base)', icon: '⚠️' },
    'arnaques_identite':{ pillar: 'arnaques', label: 'Usurpation identité', icon: '⚠️' },

    // Justice
    'justice':         { pillar: 'justice', label: 'Justice', icon: '⚖️' },
    'justice_amiable': { pillar: 'justice', label: 'Résolution amiable', icon: '🤝' },
    'justice_base':    { pillar: 'justice', label: 'Justice (base)', icon: '⚖️' },
    'justice_recours_admin': { pillar: 'justice', label: 'Recours administratif', icon: '⚖️' },

    // Generic
    'generic':         { pillar: 'autres', label: 'Situation non identifiée', icon: '📋' },
  };

  // ── Résolution d'un flow_id ────────────────────────────────────────
  function resolve(flowId){
    if(!flowId) return CANONICAL['generic'];
    return CANONICAL[flowId] || { pillar: 'autres', label: flowId, icon: '📋' };
  }

  // ── Pilier depuis flow_id ──────────────────────────────────────────
  function pillarOf(flowId){
    return resolve(flowId).pillar;
  }

  // ── Liste des flows uniques (sans doublons) ────────────────────────
  function uniqueFlowIds(){
    return Object.keys(CANONICAL);
  }

  // ── Validation : flow_id existe-t-il ? ───────────────────────────
  function isValid(flowId){
    return !!CANONICAL[flowId];
  }

  // ── Rapport des incohérences de flows_v30.js ──────────────────────
  const KNOWN_DUPLICATES = {
    'passport': 4, 'passport_adult': 4, 'cni': 3, 'cni_adult': 2,
    'mariage': 3, 'tax_declaration': 2, 'tax_rectif': 7,
    'ameli': 2, 'caf': 2, 'france_travail': 2,
    'logement_base': 3, 'banque_base': 3,
    'arnaques_base': 2, 'justice_base': 2,
  };
  const TOTAL_DUPLICATE_ENTRIES = Object.values(KNOWN_DUPLICATES).reduce((a,b)=>a+(b-1),0);

  console.log(`[Vigie V54 Flows Index] ${uniqueFlowIds().length} flows canoniques. ${Object.keys(KNOWN_DUPLICATES).length} IDs dupliqués documentés (${TOTAL_DUPLICATE_ENTRIES} entrées redondantes dans flows_v30.js — comportement last-write-wins).`);

  return { resolve, pillarOf, uniqueFlowIds, isValid, CANONICAL, KNOWN_DUPLICATES };
})();
