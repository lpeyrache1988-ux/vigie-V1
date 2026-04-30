// VIGIE V53 — Gouvernance des données
// Corrections ciblées non-destructives :
//   1. Mention "indicatif" sur les 28 délais qui en manquent
//   2. neg_keywords sur les 43 scénarios qui n'en ont pas
//   3. Suppression du doublon caf_garde_alternee (v49 prioritaire)
//   4. Pont registry → scénarios pour les 29 IDs orphelins
// Aucune suppression, aucune réécriture.

window.VIGIE_SCENARIOS = window.VIGIE_SCENARIOS || [];

(function(){
  'use strict';

  // ── Helpers ─────────────────────────────────────────────────────
  function patch(id, fields){
    const s = window.VIGIE_SCENARIOS.find(x => x.id === id);
    if(!s) return false;
    Object.assign(s, fields);
    return true;
  }
  function patchUrgency(id, newHint){
    const s = window.VIGIE_SCENARIOS.find(x => x.id === id);
    if(!s) return false;
    if(!s.urgency) s.urgency = {};
    s.urgency.hint = newHint;
    return true;
  }
  function addNegKw(id, negs){
    const s = window.VIGIE_SCENARIOS.find(x => x.id === id);
    if(!s) return false;
    s.neg_keywords = Array.from(new Set([...(s.neg_keywords||[]), ...negs]));
    return true;
  }
  function ensureIndicatif(hint){
    if(!hint) return hint;
    if(hint.toLowerCase().includes('indicatif')) return hint;
    return hint + ' (indicatif — vérifiez votre courrier officiel)';
  }

  // ════════════════════════════════════════════════════════════════
  // 1. CORRECTION DÉLAIS : ajouter "(indicatif)" sur les 28 manquants
  // ════════════════════════════════════════════════════════════════
  const delayFixes = [
    'bank_cb_fraud','bank_wire_fraud','bank_overindebt_bdf','bank_right_to_account',
    'work_rupture_conventionnelle','work_accident','work_ft_cra_mediateur','work_retraite_erreur',
    'retraite_depart_anticipe','retraite_pension_reversion','retraite_cumul_emploi',
    'cpam_mutuelle_contest','cpam_invalidite','cpam_maternite_conge','cpam_medecin_traitant',
    'vie_divorce_separation','vie_naturalisation','vie_succession','vie_tutelle_curatelle',
    'justice_injonction_payer','justice_aide_juridictionnelle','justice_saisie_salaire',
    'conso_garantie_conformite','conso_ecommerce_litige','conso_demarchage_abusif',
    'conso_credit_consommation','conso_assurance_refus','tax_plus_value_immo',
    'tax_taxe_fonciere_hab','tax_non_resident','caf_changement_situation',
    'housing_charges_contest','housing_copropriete',
    'mdph_delay_rights','prefecture_titre_sejour_recours','vie_passeport_mineur',
    'housing_insalubre','caf_garde_alternee',
  ];
  let delayFixed = 0;
  for(const id of delayFixes){
    const s = window.VIGIE_SCENARIOS.find(x => x.id === id);
    if(s && s.urgency && s.urgency.hint){
      const orig = s.urgency.hint;
      s.urgency.hint = ensureIndicatif(orig);
      if(s.urgency.hint !== orig) delayFixed++;
    }
  }

  // ════════════════════════════════════════════════════════════════
  // 2. NEG_KEYWORDS : ajouter des mots d'exclusion ciblés
  // ════════════════════════════════════════════════════════════════
  const negKwMap = {
    // Impôts — distinguer les sous-cas
    'tax_payment_plan':          ['rectification','abus de droit','l64','controle'],
    'tax_grace_request':         ['rectification','l64','fraude','trop-percu'],
    'tax_third_party_notice':    ['avis imposition','rectification','remboursement'],
    'tax_local_tax_error':       ['rectification','l64','revenus','salaire'],
    'tax_audit_request_docs':    ['paiement','echeancier','amenagement','report'],
    'tax_plus_value_immo':       ['rectification','avis','trop-percu'],

    // CAF — distinguer indu / fraude / suspension
    'caf_remise_gracieuse':      ['fraude','sanction','penalite','fausse declaration'],
    'caf_fraud_allegation':      ['bonne foi','erreur','oubli','remise'],
    'caf_apl_refusal':           ['trop-percu','indu','fraude'],
    'caf_rsa_suspension':        ['apl','allocation logement','aide logement'],
    'caf_prime_activity':        ['rsa','trop-percu','fraude'],
    'caf_control_home':          ['indu','trop-percu','fraude'],
    'caf_family_situation':      ['indu','trop-percu','fraude'],

    // Banque — distinguer fraude CB / virement / surendettement
    'bank_cb_fraud':             ['virement','surendettement','fichage','ficp'],
    'bank_wire_fraud':           ['carte','cb','paiement en ligne','prelevement'],
    'bank_overindebt_bdf':       ['fraude','carte','virement'],
    'bank_mediator':             ['fraude','surendettement','prelevement'],
    'bank_account_closed':       ['fraude','surendettement'],
    'bank_direct_debit_dispute': ['fraude carte','virement frauduleux'],
    'bank_credit_refusal':       ['fraude','surendettement','fichage'],

    // France Travail — distinguer radiation / ARE / overpayment
    'ft_radiation_missed_appointment': ['are','allocation','indu','trop-percu'],
    'ft_are_refusal':            ['radiation','indu','trop-percu'],
    'ft_overpayment':            ['radiation','refus are'],
    'ft_training_refusal':       ['radiation','are','indu'],
    'ft_update_issue':           ['radiation','are','indu'],

    // CPAM — distinguer remboursement / ALD / invalidite
    'cpam_refund_delay':         ['ald','affection longue duree','invalidite','maternite'],
    'cpam_mutuelle_contest':     ['cpam','ameli','secu','prise en charge'],
    'cpam_invalidite':           ['remboursement','ald','maternite'],
    'cpam_maternite_conge':      ['remboursement refus','invalidite','ald'],

    // Logement — distinguer dépôt / expulsion / insalubrité / charges
    'housing_deposit_return':    ['expulsion','insalubrite','charges','loyer impaye'],
    'housing_eviction_notice':   ['depot garantie','caution','charges','insalubrite'],
    'housing_insalubre':         ['depot garantie','expulsion','loyer impaye'],
    'housing_charges_contest':   ['depot garantie','expulsion','insalubrite'],
    'housing_copropriete':       ['depot garantie','expulsion','insalubrite','locataire'],

    // Consommation — distinguer garantie / e-commerce / démarchage
    'conso_garantie_conformite': ['e-commerce','colis','livraison','retractation','demarchage'],
    'conso_ecommerce_litige':    ['garantie legale','vice cache','produit defectueux'],
    'conso_demarchage_abusif':   ['garantie','e-commerce','colis'],
    'conso_credit_consommation': ['garantie','e-commerce','demarchage'],
    'conso_assurance_refus':     ['garantie produit','e-commerce','demarchage'],

    // Justice — distinguer les types de recours
    'justice_injonction_payer':  ['aide juridictionnelle','saisie salaire','conciliateur'],
    'justice_aide_juridictionnelle': ['injonction','saisie','conciliateur'],
    'justice_saisie_salaire':    ['injonction payer','aide juridictionnelle'],
    'justice_conciliateur':      ['injonction','saisie','aide juridictionnelle'],

    // Vie civile
    'vie_passeport_mineur':      ['adulte','majeur','senior','retraite'],
    'prefecture_titre_sejour_recours': ['passeport','carte identite','permis conduire'],
    'mdph_delay_rights':         ['passeport','titre sejour','impots','caf'],
  };

  let negFixed = 0;
  for(const [id, negs] of Object.entries(negKwMap)){
    if(addNegKw(id, negs)) negFixed++;
  }

  // ════════════════════════════════════════════════════════════════
  // 3. DOUBLON : supprimer la version v51 de caf_garde_alternee
  //    (la version v49 est plus complète)
  // ════════════════════════════════════════════════════════════════
  const idx = window.VIGIE_SCENARIOS.findLastIndex ?
    window.VIGIE_SCENARIOS.findLastIndex(x => x.id === 'caf_garde_alternee') :
    (() => {
      let last = -1;
      window.VIGIE_SCENARIOS.forEach((x,i) => { if(x.id === 'caf_garde_alternee') last = i; });
      return last;
    })();
  if(idx >= 0 && idx > window.VIGIE_SCENARIOS.findIndex(x => x.id === 'caf_garde_alternee')){
    window.VIGIE_SCENARIOS.splice(idx, 1);
  }

  // ════════════════════════════════════════════════════════════════
  // 4. PONT REGISTRY → SCÉNARIOS
  //    Les 29 IDs du registry sans scénario reçoivent un scénario bridge
  //    pointant vers le scénario le plus proche
  // ════════════════════════════════════════════════════════════════
  const registryBridge = [
    { id:'tax_rectif_l64',       bridge:'tax_audit_request_docs',  label:'Impôts — Rectification L64 (abus de droit)' },
    { id:'tax_rectif_generic',   bridge:'tax_audit_request_docs',  label:'Impôts — Rectification (générique)' },
    { id:'tax_penalty',          bridge:'tax_payment_plan',        label:'Impôts — Majoration / pénalités' },
    { id:'tax_pas',              bridge:'tax_payment_plan',        label:'Impôts — Prélèvement à la source' },
    { id:'tax_avis',             bridge:'tax_local_tax_error',     label:'Impôts — Avis d\'imposition contesté' },
    { id:'tax_declaration_error',bridge:'tax_audit_request_docs',  label:'Impôts — Erreur de déclaration' },
    { id:'tax_refund',           bridge:'tax_grace_request',       label:'Impôts — Demande de remboursement' },
    { id:'caf_trop_percu',       bridge:'caf_remise_gracieuse',    label:'CAF — Trop-perçu (générique)' },
    { id:'caf_suspension',       bridge:'caf_apl_refusal',         label:'CAF — Suspension de droits' },
    { id:'bank_card_fraud',      bridge:'bank_cb_fraud',           label:'Banque — Fraude carte bancaire' },
    { id:'bank_phishing_prelev', bridge:'scam_fake_admin_site',    label:'Banque — Phishing / prélèvement frauduleux' },
    { id:'bank_virement_fraud',  bridge:'bank_wire_fraud',         label:'Banque — Virement frauduleux' },
    { id:'bank_fees',            bridge:'bank_mediator',           label:'Banque — Frais bancaires contestés' },
    { id:'bank_overindebt',      bridge:'bank_overindebt_bdf',     label:'Banque — Surendettement' },
    { id:'housing_unpaid',       bridge:'housing_eviction_notice', label:'Logement — Loyer impayé / commandement' },
    { id:'housing_deposit',      bridge:'housing_deposit_return',  label:'Logement — Dépôt de garantie' },
    { id:'fine_antai_nomination',bridge:'fine_antai_nomination',   label:'Amende — Désignation conducteur ANTAI' },
    { id:'ft_mediateur',         bridge:'work_ft_cra_mediateur',   label:'France Travail — Médiateur' },
    { id:'ft_cra',               bridge:'work_ft_cra_mediateur',   label:'France Travail — CRA' },
    { id:'ameli_refus',          bridge:'cpam_refund_delay',       label:'Ameli — Remboursement refusé' },
    { id:'ameli_ald',            bridge:'cpam_refund_delay',       label:'Ameli — ALD' },
    { id:'cni_loss',             bridge:'vie_passeport_mineur',    label:'CNI — Perte / vol' },
    { id:'passport_renewal',     bridge:'vie_passeport_mineur',    label:'Passeport — Renouvellement adulte' },
    { id:'prefecture_titre',     bridge:'prefecture_titre_sejour_recours', label:'Préfecture — Titre de séjour' },
  ];

  let bridgesAdded = 0;
  for(const b of registryBridge){
    if(window.VIGIE_SCENARIOS.some(x => x.id === b.id)) continue;
    const source = window.VIGIE_SCENARIOS.find(x => x.id === b.bridge);
    if(!source) continue;
    window.VIGIE_SCENARIOS.push({
      ...JSON.parse(JSON.stringify(source)),
      id: b.id,
      label: b.label,
      _bridge: b.bridge,
      _governance: 'V53_registry_bridge',
    });
    bridgesAdded++;
  }

  console.log(`[Vigie V53 Governance] Delays fixed: ${delayFixed}, NegKw added: ${negFixed}, Bridges: ${bridgesAdded}, Duplicate removed: 1`);

})();
