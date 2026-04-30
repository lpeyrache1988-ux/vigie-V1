// VIGIE V52 — Moteur de reconnaissance de courriers
// Mode "j'ai reçu un courrier" : identifie l'organisme, le type de décision, les délais
window.VIGIE_COURRIER_READER = (function(){
  'use strict';

  // ── Patterns de reconnaissance ─────────────────────────────────────
  const PATTERNS = [

    // ═══ IMPÔTS ══════════════════════════════════════════════════════
    {
      id: 'impots_proposition_rectification',
      organisme: 'Direction Générale des Finances Publiques (DGFiP)',
      type: 'Proposition de rectification',
      pillar: 'impots',
      scenario_id: 'tax_audit_request_docs',
      urgency: 'legal_deadline',
      keywords: ['proposition de rectification','article l57','rectification contradictoire','suite à la vérification'],
      neg_keywords: ['accusé de réception'],
      delai: '30 jours pour répondre (indicatif — vérifiez la date sur le courrier)',
      action_immediate: 'Lire attentivement, identifier les points contestés, répondre point par point dans le délai',
      risques: ['Silence = acceptation de la rectification','Délai court — ne pas attendre'],
      sources: [{ label:'Impôts — Contester une rectification', url:'https://www.impots.gouv.fr/particulier/je-veux-contester-un-impot-je-fais-une-reclamation' }],
      lettre_id: 'impots_reclamation',
    },
    {
      id: 'impots_avis_imposition',
      organisme: 'Direction Générale des Finances Publiques (DGFiP)',
      type: 'Avis d\'imposition',
      pillar: 'impots',
      scenario_id: 'tax_local_tax_error',
      urgency: 'admin_deadline',
      keywords: ["avis d'imposition",'impôt sur le revenu','taxe foncière',"taxe d'habitation","référence de l'avis"],
      neg_keywords: ['proposition de rectification'],
      delai: 'Réclamation possible jusqu\'au 31 décembre de l\'année N+1 (indicatif)',
      action_immediate: 'Vérifier le calcul, comparer avec la déclaration, identifier les éventuelles erreurs',
      risques: ['Délai de réclamation limité','Paiement tardif = majoration'],
      sources: [{ label:'Impôts — Contester un avis', url:'https://www.impots.gouv.fr/particulier/je-veux-contester-un-impot-je-fais-une-reclamation' }],
      lettre_id: 'impots_reclamation',
    },
    {
      id: 'impots_satd',
      organisme: 'Direction Générale des Finances Publiques (DGFiP)',
      type: 'Avis à Tiers Détenteur / SATD',
      pillar: 'impots',
      scenario_id: 'tax_third_party_notice',
      urgency: 'legal_deadline',
      keywords: ['avis à tiers détenteur','satd','saisie administrative','saisie à tiers détenteur','opposition administrative'],
      neg_keywords: [],
      delai: 'Action immédiate recommandée — la saisie peut être bloquée rapidement',
      action_immediate: 'Contacter immédiatement le SIP, prouver le paiement ou la contestation en cours',
      risques: ['Blocage du compte bancaire','Saisie sur salaire possible'],
      sources: [{ label:'Service-Public — SATD', url:'https://www.service-public.fr/particuliers/vosdroits/F22998' }],
      lettre_id: 'impots_delai',
    },

    // ═══ CAF ════════════════════════════════════════════════════════
    {
      id: 'caf_notification_indu',
      organisme: 'Caisse d\'Allocations Familiales (CAF)',
      type: 'Notification d\'indu / trop-perçu',
      pillar: 'caf',
      scenario_id: 'caf_remise_gracieuse',
      urgency: 'legal_deadline',
      keywords: ['indus','indu','trop-perçu','trop perçu','somme indûment versée','remboursement des sommes'],
      neg_keywords: ['fraude','sanction'],
      delai: 'Contestation : 2 mois à compter de la notification (CRA)',
      action_immediate: 'Vérifier le motif, demander le détail du calcul, contester si erreur ou demander un délai',
      risques: ['Retenue sur les prochaines allocations','Passage en recouvrement forcé'],
      sources: [
        { label:'CAF — Contester une notification de dette', url:'https://www.caf.fr/allocataires/caf-de-loire-atlantique/offre-de-service/accident-de-vie/dettes-et-recours/comment-contester-une-notification-de-dette-ou-de-non-droit' },
        { label:'Défenseur des droits', url:'https://formulaire.defenseurdesdroits.fr/' }
      ],
      lettre_id: 'caf_reexamen',
    },
    {
      id: 'caf_suspension_droits',
      organisme: 'Caisse d\'Allocations Familiales (CAF)',
      type: 'Suspension ou réduction de droits',
      pillar: 'caf',
      scenario_id: 'caf_apl_refusal',
      urgency: 'legal_deadline',
      keywords: ['suspension','vos droits sont suspendus','votre droit est suspendu','pièces justificatives','mise à jour de votre dossier'],
      neg_keywords: [],
      delai: 'Transmettre les pièces demandées rapidement — suspension levée dès réception',
      action_immediate: 'Identifier les pièces manquantes, les transmettre via Mon Compte CAF',
      risques: ['Interruption des versements','Délai de régularisation variable'],
      sources: [{ label:'CAF.fr — Mon compte', url:'https://www.caf.fr/allocataires/mes-services-en-ligne/bienvenue-sur-mon-compte' }],
      lettre_id: 'caf_reexamen',
    },
    {
      id: 'caf_controle',
      organisme: 'Caisse d\'Allocations Familiales (CAF)',
      type: 'Convocation à un contrôle',
      pillar: 'caf',
      scenario_id: 'caf_control_home',
      urgency: 'admin_deadline',
      keywords: ['contrôle','visite à domicile','agent de contrôle','enquêteur','vérification de votre situation'],
      neg_keywords: [],
      delai: 'Se présenter à la date indiquée — possibilité de reporter sur demande',
      action_immediate: 'Préparer les justificatifs (loyer, revenus, composition du foyer), rester factuel',
      risques: ['Refus de présentation = signalement potentiel','Déclarations incorrectes = sanctions'],
      sources: [{ label:'CAF — Le contrôle des droits', url:'https://www.caf.fr/allocataires/vies-de-famille/article/le-controle-des-droits' }],
      lettre_id: 'generic_info',
    },

    // ═══ BANQUE ══════════════════════════════════════════════════════
    {
      id: 'banque_mise_en_demeure',
      organisme: 'Établissement bancaire',
      type: 'Mise en demeure de paiement',
      pillar: 'banque',
      scenario_id: 'bank_overindebt_bdf',
      urgency: 'legal_deadline',
      keywords: ['mise en demeure','incident de paiement','fichage bancaire','ficp','formel','sans suite favorable'],
      neg_keywords: [],
      delai: 'Agir avant l\'échéance indiquée pour éviter le fichage FICP',
      action_immediate: 'Contacter la banque pour négocier un rééchelonnement, ou déposer un dossier de surendettement',
      risques: ['Fichage FICP','Procédure judiciaire','Saisie sur compte'],
      sources: [
        { label:'Banque de France — Surendettement', url:'https://www.banque-france.fr/fr/particuliers/difficultes-bancaires/le-surendettement' },
        { label:'Médiateur bancaire', url:'https://www.economie.gouv.fr/particuliers/litige-avec-sa-banque' }
      ],
      lettre_id: 'banque_contestation',
    },
    {
      id: 'banque_rejet_remboursement_fraude',
      organisme: 'Établissement bancaire',
      type: 'Refus de remboursement suite à fraude',
      pillar: 'banque',
      scenario_id: 'bank_cb_fraud',
      urgency: 'legal_deadline',
      keywords: ['refus de remboursement','nous ne pouvons pas donner suite','opération non remboursable','négligence grave'],
      neg_keywords: [],
      delai: 'Saisir le médiateur bancaire dans les 2 mois suivant le refus',
      action_immediate: 'Contester par écrit en citant L.133-18 ou L.133-19 CMF selon le type de fraude',
      risques: ['Délai de prescription du médiateur : 1 an','Perte définitive si inaction'],
      sources: [
        { label:'Service-Public — Fraude bancaire', url:'https://www.service-public.fr/particuliers/vosdroits/F31324' },
        { label:'Médiateur bancaire', url:'https://www.economie.gouv.fr/particuliers/litige-avec-sa-banque' }
      ],
      lettre_id: 'banque_mediateur',
    },

    // ═══ FRANCE TRAVAIL ══════════════════════════════════════════════
    {
      id: 'ft_radiation',
      organisme: 'France Travail (ex Pôle Emploi)',
      type: 'Notification de radiation',
      pillar: 'travail',
      scenario_id: 'ft_radiation_missed_appointment',
      urgency: 'legal_deadline',
      keywords: ['radiation','vous avez été radié','nous avons procédé à votre radiation',"cessation d'inscription"],
      neg_keywords: [],
      delai: 'Contester dans les 2 mois — CRA France Travail puis médiateur',
      action_immediate: 'Répondre par écrit, demander les motifs précis, contester si injustifiée',
      risques: ['Interruption des allocations ARE','Délai de forclusion 2 mois'],
      sources: [{ label:'France Travail — Médiateur', url:'https://www.francetravail.fr/candidat/vos-services-en-ligne/le-mediateur.html' }],
      lettre_id: 'ft_reexamen',
    },
    {
      id: 'ft_refus_are',
      organisme: 'France Travail (ex Pôle Emploi)',
      type: 'Refus d\'ouverture de droits ARE',
      pillar: 'travail',
      scenario_id: 'ft_are_refusal',
      urgency: 'legal_deadline',
      keywords: ['ne pouvons pas ouvrir vos droits',"vos droits à l'allocation","conditions d'affiliation","vous n'avez pas cotisé"],
      neg_keywords: [],
      delai: 'CRA dans les 2 mois suivant la notification',
      action_immediate: 'Vérifier les conditions d\'affiliation, rassembler les preuves de cotisation',
      risques: ['Forclusion à 2 mois','Tribunal judiciaire compétent (pas administratif)'],
      sources: [{ label:'France Travail — Contester', url:'https://www.francetravail.fr/candidat/vos-services-en-ligne/le-mediateur.html' }],
      lettre_id: 'ft_reexamen',
    },

    // ═══ CPAM ════════════════════════════════════════════════════════
    {
      id: 'cpam_refus_remboursement',
      organisme: 'Caisse Primaire d\'Assurance Maladie (CPAM)',
      type: 'Refus de remboursement',
      pillar: 'sante',
      scenario_id: 'cpam_refund_delay',
      urgency: 'legal_deadline',
      keywords: ['refus de prise en charge','ne peut pas être remboursé','soins non remboursables','hors nomenclature','hors nomenclature'],
      neg_keywords: [],
      delai: 'CRA CPAM dans les 2 mois suivant la notification',
      action_immediate: 'Vérifier la nomenclature, obtenir un certificat médical justificatif, saisir la CRA',
      risques: ['Délai de 2 mois pour la CRA','Tribunal judiciaire pôle social ensuite'],
      sources: [{ label:'Ameli — Contester une décision', url:'https://www.ameli.fr/assure/droits-demarches/difficultes-acces-aux-soins/contacter-votre-caisse' }],
      lettre_id: 'ameli_droits',
    },

    // ═══ LOGEMENT ════════════════════════════════════════════════════
    {
      id: 'logement_conge_bailleur',
      organisme: 'Bailleur / propriétaire',
      type: 'Congé donné par le bailleur',
      pillar: 'logement',
      scenario_id: 'housing_eviction_notice',
      urgency: 'legal_deadline',
      keywords: ['donne congé','vous notifie son congé','reprise du logement','vente du logement','délai de préavis'],
      neg_keywords: [],
      delai: 'Préavis de 6 mois (vide) ou 3 mois (meublé) — vérifier la date exacte',
      action_immediate: 'Vérifier la légalité du congé, identifier si priorité d\'achat applicable',
      risques: ['Expulsion à l\'issue du préavis si non conteste et non relogé','Vice de forme possible = congé nul'],
      sources: [
        { label:'Service-Public — Congé bailleur', url:'https://www.service-public.fr/particuliers/vosdroits/F1169' },
        { label:'ANIL — Trouver votre ADIL', url:'https://www.anil.org/lanil-et-les-adil/votre-adil/' }
      ],
      lettre_id: 'generic_contestation',
    },
    {
      id: 'logement_commandement_payer',
      organisme: 'Bailleur / Huissier',
      type: 'Commandement de payer',
      pillar: 'logement',
      scenario_id: 'housing_eviction_notice',
      urgency: 'legal_deadline',
      keywords: ['commandement de payer','vous sommes de payer','à peine de résiliation','clause résolutoire','huissier de justice'],
      neg_keywords: [],
      delai: '2 mois pour régulariser avant saisine du tribunal (indicatif — vérifiez votre courrier)',
      action_immediate: 'Payer ou contacter le bailleur immédiatement, saisir le FSL si difficultés',
      risques: ['Résiliation automatique du bail si non paiement dans le délai','Procédure d\'expulsion'],
      sources: [
        { label:'Service-Public — Commandement de payer', url:'https://www.service-public.fr/particuliers/vosdroits/F1742' },
        { label:'Fonds Solidarité Logement (FSL)', url:'https://www.service-public.fr/particuliers/vosdroits/F1609' }
      ],
      lettre_id: 'generic_contestation',
    },

    // ═══ AMENDES ════════════════════════════════════════════════════
    {
      id: 'amende_antai',
      organisme: 'Agence Nationale de Traitement Automatisé des Infractions (ANTAI)',
      type: 'Avis de contravention / amende',
      pillar: 'justice',
      scenario_id: 'fine_antai_nomination',
      urgency: 'legal_deadline',
      keywords: ['avis de contravention','amende forfaitaire','agence nationale de traitement automatisé','vous avez été verbalisé','excès de vitesse','stationnement'],
      neg_keywords: [],
      delai: '45 jours pour payer (tarif minoré) ou 30 jours pour contester (indicatif — vérifiez la date)',
      action_immediate: 'Décider : payer au tarif minoré, désigner le conducteur, ou contester',
      risques: ['Majoration si non paiement dans le délai','Forclusion de la contestation'],
      sources: [{ label:'ANTAI — Contester une amende', url:'https://www.antai.gouv.fr' }],
      lettre_id: 'generic_contestation',
    },

    // ═══ GÉNÉRIQUE ══════════════════════════════════════════════════
    {
      id: 'generic_mise_en_demeure',
      organisme: 'Inconnu — vérifier l\'en-tête',
      type: 'Mise en demeure / injonction',
      pillar: 'justice',
      scenario_id: null,
      urgency: 'legal_deadline',
      keywords: ['mise en demeure','nous mettons en demeure','à défaut de paiement','procédure judiciaire','à peine de','sans autre préavis'],
      neg_keywords: [],
      delai: 'Vérifier la date et le délai indiqués dans le courrier',
      action_immediate: 'Identifier l\'organisme, lire attentivement les délais, ne pas ignorer',
      risques: ['Engagement de poursuites si inaction'],
      sources: [{ label:'Conciliateur de justice', url:'https://www.conciliateurs.fr/Trouver-une-permanence' }],
      lettre_id: 'generic_contestation',
    },
  ];

  // ── Normalisation ──────────────────────────────────────────────────
  function norm(s){
    if(!s) return '';
    return String(s).toLowerCase()
      .replace(/[''`]/g,"'")
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9 ']/g,' ')
      .replace(/\s+/g,' ').trim();
  }

  // ── Analyser un texte de courrier ──────────────────────────────────
  function analyser(texte){
    if(!texte || texte.trim().length < 10) return null;

    const t = norm(texte);
    const scored = [];

    for(const p of PATTERNS){
      let score = 0;
      // Positive keywords
      for(const kw of p.keywords){
        if(t.includes(norm(kw))) score += 8 + kw.length;
      }
      // Negative keywords
      for(const nk of p.neg_keywords){
        if(t.includes(norm(nk))) score -= 10;
      }
      if(score > 0) scored.push({ pattern: p, score });
    }

    if(!scored.length) return null;
    scored.sort((a, b) => b.score - a.score);

    const best = scored[0].pattern;
    const ambig = scored.length >= 2 && (scored[0].score - scored[1].score) < 8;

    return {
      match: best,
      score: scored[0].score,
      candidates: scored.slice(0, 3).map(s => s.pattern),
      ambiguous: ambig,
      confidence: scored[0].score >= 30 ? 'high' : scored[0].score >= 15 ? 'medium' : 'low',
    };
  }

  // ── Formater le résultat pour affichage ───────────────────────────
  function formatResult(result){
    if(!result) return null;
    const p = result.match;
    return {
      organisme: p.organisme,
      type_courrier: p.type,
      pillar: p.pillar,
      scenario_id: p.scenario_id,
      urgency: p.urgency,
      delai: p.delai,
      action_immediate: p.action_immediate,
      risques: p.risques,
      sources: p.sources,
      lettre_id: p.lettre_id,
      confidence: result.confidence,
      ambiguous: result.ambiguous,
      candidates: result.ambiguous ? result.candidates : [],
    };
  }

  return { analyser, formatResult, PATTERNS, norm };
})();
