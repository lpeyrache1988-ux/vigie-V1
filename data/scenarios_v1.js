window.VIGIE_SCENARIOS = [
  // --- Impôts ---
  {
    id: "tax_rectif_l64",
    label: "Impôts — Proposition de rectification / abus de droit (L64)",
    flow_id: "tax_rectif",
    score: 120,
    patterns: [
      /proposition de rectification/i,
      /\bL\s*64\b/i,
      /abus de droit/i
    ],
    keywords_any: ["proposition", "rectification", "l64", "abus de droit", "l.64"],
    pack_id: "tax_rectif",
    tags: ["impots","controle","l64"],
    urgency: { kind: "legal_deadline", hint: "Délai de réponse souvent court après réception du courrier (vérifier la date de réception)." },
    todo: [
      "Retrouver la date de réception (enveloppe, AR, portail impots.gouv)",
      "Identifier le délai indiqué dans le courrier (réponse / observations)",
      "Lister les faits et pièces justificatives (chronologie, flux, contrats)",
      "Rédiger des observations structurées + demander prorogation si nécessaire",
      "Envoyer en recommandé / via messagerie sécurisée selon le canal indiqué"
    ],
    timeline: [
      { id:"t1", label:"Comprendre la rectification (motifs, bases, montants)" },
      { id:"t2", label:"Constituer les preuves (contrats, virements, attestations)" },
      { id:"t3", label:"Répondre / demander prorogation" },
      { id:"t4", label:"Suivi (réponse admin, échange contradictoire)" }
    ]
  },
  {
    id: "tax_penalty",
    label: "Impôts — Pénalités / majorations",
    flow_id: "tax_rectif",
    score: 70,
    keywords_any: ["majoration", "pénalité", "penalite", "amende fiscale", "10%", "40%", "80%"],
    patterns: [/majoration/i, /p[ée]nalit/i],
    pack_id: "tax_rectif",
    tags: ["impots","penalites"],
    todo: [
      "Vérifier le motif exact de la pénalité (retard, mauvaise foi, manœuvres)",
      "Rassembler les preuves de bonne foi / circonstances",
      "Demander remise gracieuse si pertinent (motivée, chiffrée)",
      "Contester le bien‑fondé si erreur de droit ou de fait"
    ]
  },

    {
    id: "tax_pas",
    label: "Impôts — Prélèvement à la source (PAS) / taux",
    flow_id: "tax_rectif",
    score: 90,
    keywords_any: ["prélèvement à la source", "prelevement a la source", "pas", "taux", "contemporain"],
    patterns: [/pr[ée]l[ée]vement\s+.*\s+source/i, /\bPAS\b/],
    neg_keywords: ["banque"],
    pack_id: "tax_rectif",
    tags: ["impots","pas"],
    todo: [
      "Vérifier votre taux et la source de l’erreur (employeur, DGFiP, déclaration)",
      "Mettre à jour la situation sur impots.gouv (taux, revenus estimés)",
      "Faire une réclamation via messagerie sécurisée si nécessaire",
      "Conserver les justificatifs (bulletins, avis, échanges)"
    ]
  },
  {
    id: "tax_avis",
    label: "Impôts — Avis d’imposition / taxe (contestation)",
    flow_id: "tax_rectif",
    score: 85,
    keywords_any: ["avis d'imposition", "avis d’imposition", "taxe foncière", "taxe d'habitation", "cotisation", "réclamation impôts"],
    patterns: [/avis d['’]imposition/i, /taxe fonci/i],
    pack_id: "tax_rectif",
    tags: ["impots","avis"],
    todo: [
      "Identifier l’impôt concerné et l’année",
      "Vérifier bases (revenus, parts, valeur locative, exonérations)",
      "Déposer une réclamation motivée (en ligne ou courrier selon cas)",
      "Payer d’abord si exigible, ou demander sursis de paiement si applicable"
    ]
  },
  {
    id: "tax_declaration_error",
    label: "Impôts — Erreur de déclaration / correction",
    flow_id: "tax_declaration",
    score: 75,
    keywords_any: ["erreur déclaration", "erreur declaration", "corriger déclaration", "rectifier déclaration", "déclaration revenus", "declaration revenus"],
    patterns: [/erreur\s+d[ée]claration/i, /(corriger|rectifier).*(d[ée]claration)/i],
    pack_id: "tax_declaration",
    tags: ["impots","declaration"],
    todo: [
      "Identifier l’erreur (revenus, charges, parts, prélèvement à la source)",
      "Corriger via la déclaration en ligne si ouvert, sinon via service de correction / réclamation",
      "Joindre les justificatifs",
      "Conserver une copie (PDF) et la preuve d’envoi"
    ]
  },
  {
    id: "tax_refund",
    label: "Impôts — Remboursement attendu / trop perçu",
    flow_id: "tax_declaration",
    score: 70,
    keywords_any: ["remboursement impôts", "remboursement impot", "trop perçu impôts", "trop percu impots"],
    patterns: [/remboursement.*imp[ôo]ts?/i, /trop\s+per[çc]u.*imp[ôo]ts?/i],
    pack_id: "tax_declaration",
    tags: ["impots","remboursement"],
    todo: [
      "Vérifier votre espace impots.gouv (paiements, remboursements, RIB)",
      "Contrôler le RIB enregistré et l’adresse",
      "Envoyer un message via la messagerie sécurisée",
      "Conserver avis et preuves"
    ]
  },
// --- CAF ---
  {
    id: "caf_trop_percu",
    label: "CAF — Trop-perçu / demande de remboursement",
    flow_id: "caf",
    score: 80,
    keywords_any: ["caf", "trop-perçu", "trop perçu", "rembourser", "indu", "créance", "creance"],
    patterns: [/caf/i, /(trop[-\s]?per[çc]u|indu|cr[ée]ance)/i],
    pack_id: "caf",
    tags: ["caf","aides","trop_percu"],
    urgency: { kind:"admin_deadline", hint:"Vérifier le délai de contestation indiqué sur la notification d’indu." },
    todo: [
      "Demander le détail du calcul (périodes, bases, ressources retenues)",
      "Vérifier vos déclarations (ressources, situation familiale/logement)",
      "Si erreur : faire une réclamation motivée + pièces",
      "Si dette réelle : demander remise gracieuse / échéancier (situation financière)",
      "Conserver toutes les preuves d’envoi et accusés"
    ],
    timeline: [
      { id:"c1", label:"Comprendre l’indu (période, motif, calcul)" },
      { id:"c2", label:"Choisir stratégie (contester / remise / échéancier)" },
      { id:"c3", label:"Envoyer la réclamation + pièces" },
      { id:"c4", label:"Suivi (réponse CAF, commission, médiation)" }
    ]
  },
  {
    id: "caf_suspension",
    label: "CAF — Aide suspendue / droit coupé",
    flow_id: "caf",
    score: 75,
    keywords_any: ["caf", "suspendu", "suspension", "radiation", "apl supprimée", "rsa suspendu", "prime d'activité suspendue"],
    patterns: [/caf/i, /(suspend|supprim|radiat|coup[ée])/i],
    pack_id: "caf",
    tags: ["caf","aides","suspension"],
    todo: [
      "Identifier la cause (pièce manquante, contrôle, incohérence, actualisation)",
      "Vérifier l’espace CAF / messages + demander la liste des pièces attendues",
      "Déposer immédiatement les justificatifs manquants (preuve de dépôt)",
      "Faire une réclamation si décision injustifiée (faits + pièces)",
      "Demander un rendez‑vous / médiation si blocage"
    ]
  },

  // --- Banque / fraude ---
  {
    id: "bank_card_fraud",
    label: "Banque — Fraude carte / paiement non autorisé",
    flow_id: "banque",
    score: 95,
    keywords_any: ["fraude", "cb", "carte", "paiement non autorisé", "payment non autorise", "phishing", "arnaque bancaire"],
    patterns: [/(paiement|transaction).*(non\s+autoris)/i, /\bfraude\b/i, /\bcb\b/i],
    pack_id: "banque_fraude",
    tags: ["banque","fraude","urgence"],
    urgency: { kind:"immediate", hint:"Faire opposition immédiatement puis confirmer par écrit." },
    todo: [
      "Faire opposition immédiatement (carte / accès en ligne)",
      "Déposer plainte / main courante si nécessaire (selon cas)",
      "Contester par écrit les opérations non autorisées (délais à respecter)",
      "Surveiller le compte et sécuriser (mots de passe, 2FA, appareils)",
      "Saisir médiateur bancaire si refus de remboursement"
    ],
    timeline: [
      { id:"b1", label:"Opposition / sécurisation" },
      { id:"b2", label:"Contestation écrite des opérations" },
      { id:"b3", label:"Relance / médiateur" }
    ]
  },
  {
    id: "bank_fees",
    label: "Banque — Frais abusifs",
    flow_id: "banque",
    score: 60,
    keywords_any: ["frais", "agios", "commission d'intervention", "incidents", "frais abusifs"],
    patterns: [/(frais|agios|commission)/i],
    pack_id: "banque_frais",
    tags: ["banque","frais"]
  },
  {
    id: "bank_overindebt",
    label: "Banque — Surendettement",
    flow_id: "banque",
    score: 85,
    keywords_any: ["surendettement", "dossier bdf", "banque de france", "commission de surendettement"],
    patterns: [/surendett/i, /banque de france/i],
    pack_id: "banque_surendettement",
    tags: ["banque","surendettement"]
  },

  // --- Logement ---
  {
    id: "housing_unpaid",
    label: "Logement — Loyers impayés",
    flow_id: "logement",
    score: 90,
    keywords_any: ["loyer impayé", "impayés", "commandement de payer", "expulsion", "huissier"],
    patterns: [/(impay|commandement de payer|expuls|huissier)/i],
    pack_id: "logement_impayes",
    tags: ["logement","impayes","urgence"],
    urgency: { kind:"legal_deadline", hint:"Délais très courts en cas de commandement/assignation : agir vite." }
  },
  {
    id: "housing_dispute",
    label: "Logement — Litige bail / propriétaire",
    flow_id: "logement",
    score: 65,
    keywords_any: ["bail", "propriétaire", "locataire", "état des lieux", "dépôt de garantie", "retenue"],
    patterns: [/(d[ée]p[ôo]t de garantie|[ée]tat des lieux|retenue)/i],
    pack_id: "logement_litige",
    tags: ["logement","litige"]
  },
  {
    id: "housing_insalubre",
    label: "Logement — Insalubrité / logement indécent",
    flow_id: "logement",
    score: 85,
    keywords_any: ["insalubre", "moisissure", "humidité", "logement indécent", "caf aide logement insalubre"],
    patterns: [/(insalubr|ind[ée]cent|moisiss|humidit)/i],
    pack_id: "logement_litige",
    tags: ["logement","insalubrite"]
  },

  // --- Amendes / justice ---
  {
    id: "fine_contest",
    label: "Amende — Contestation",
    flow_id: "justice",
    score: 70,
    keywords_any: ["amende", "pv", "contravention", "contester", "radar", "stationnement"],
    patterns: [/(amende|contravention|pv)/i, /contest/i],
    pack_id: "justice_recours_admin",
    tags: ["amende","contestation"]
  },
  {
    id: "scam_report",
    label: "Arnaques — Signaler",
    flow_id: "arnaques",
    score: 75,
    keywords_any: ["arnaque", "escroquerie", "phishing", "usurpation", "spam", "signalement"],
    patterns: [/(arnaque|escroquer|phishing|usurp)/i],
    pack_id: "arnaques_signaler",
    tags: ["arnaques","signalement"]
  },

  // --- Santé / Ameli ---
  {
    id: "ameli_refus",
    label: "Santé — AMELI refus de remboursement",
    flow_id: "ameli",
    score: 70,
    keywords_any: ["ameli", "cpam", "refus", "remboursement", "indus", "trop perçu cpam"],
    neg_keywords: ["impot","impôts","impots","taxe"],
    patterns: [/(ameli|cpam)/i, /(refus|rembours|indu)/i],
    pack_id: "ameli",
    tags: ["sante","ameli"]
  }
];

// Match scenario: returns best scenario object or null
window.VIGIE_MATCH_SCENARIO = function(query){
  const q = (query||"").trim();
  if(!q) return null;
  const lc = q.toLowerCase();
  let best = null;
  let bestScore = -1;

  for(const s of (window.VIGIE_SCENARIOS||[])){
    let sc = s.score || 0;

    // patterns (regex)
    const pats = s.patterns || [];
    let matched = 0;
    for(const rx of pats){
      try{
        if(rx && rx.test(q)){ matched++; sc += 20; }
      }catch(e){}
    }

    // keywords_any
    const any = s.keywords_any || [];
    let anyHits = 0;
    for(const kw of any){
      if(!kw) continue;
      const k = String(kw).toLowerCase();
      if(lc.includes(k)){ anyHits++; sc += 10 + Math.min(10, k.length/2); }
    }

    // optional keywords_all
    if(Array.isArray(s.keywords_all) && s.keywords_all.length){
      let allOk = true;
      for(const kw of s.keywords_all){
        const k = String(kw||"").toLowerCase();
        if(k && !lc.includes(k)) allOk = false;
      }
      if(!allOk) continue;
      sc += 30;
    }

    // negative keywords
    if(Array.isArray(s.neg_keywords)){
      let bad=false;
      for(const kw of s.neg_keywords){
        const k = String(kw||"").toLowerCase();
        if(k && lc.includes(k)) bad=true;
      }
      if(bad) continue;
    }

    // minimum match guard: require at least one hit if scenario is specific
    const guard = (s.min_hits ?? 1);
    if((matched + anyHits) < guard) continue;

    if(sc > bestScore){
      bestScore = sc;
      best = s;
    }
  }
  return best;
};