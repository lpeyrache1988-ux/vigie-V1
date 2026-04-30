window.VIGIE_FLOWS = [
  {
    id: "passport",
    label: "Passeport",
    keywords: ["passeport", "voyage", "passport"],
    base_score: 10,
    deadline_anchor: "date_rdv",
    default_strategy: "standard",
    strategies: {
      standard: {
        title: "Procédure standard (ANTS → RDV mairie → dépôt → retrait)",
        legal_delay_days: 0,
        pack_id: "passport",
        checklist_id: "passport_adult",
        notes: "Les délais réels dépendent de votre mairie et de la période. Préparez le dossier à 100% avant le RDV."
      },
      minor: {
        title: "Procédure mineur (autorité parentale + pièces spécifiques)",
        legal_delay_days: 0,
        pack_id: "passport",
        checklist_id: "passport_minor",
        notes: "Pour mineur : prévoir pièces du parent et preuve d'autorité. Anticiper les pièces manquantes."
      },
      urgent_trip: {
        title: "Urgence départ : sécuriser RDV + dossier complet (priorité anti-refus)",
        legal_delay_days: 0,
        pack_id: "passport",
        checklist_id: "passport_adult",
        notes: "Si départ proche, l'objectif est surtout d'éviter un refus au guichet. Vérifier photo + justificatif."
      }
    },
    rules: [
      { if:{ person:"minor" }, add_score: 15, pick_strategy:"minor", priority: 10 },
      { if:{ trip_urgent:"yes" }, add_score: 25, pick_strategy:"urgent_trip", priority: 20 }
    ]
  },
  {
    id: "cni",
    label: "Carte d'identité",
    keywords: ["cni", "carte d'identité", "carte identite", "identité", "identite"],
    base_score: 10,
    deadline_anchor: "date_rdv",
    default_strategy: "standard",
    strategies: {
      standard: { title:"Procédure standard (ANTS → RDV mairie → dépôt → retrait)", legal_delay_days:0, pack_id:"cni", checklist_id:"cni_adult" },
      urgent: { title:"Urgence : éviter refus au guichet (dossier complet)", legal_delay_days:0, pack_id:"cni", checklist_id:"cni_adult", notes:"En cas de départ proche, priorité au dossier complet." }
    },
    rules: [
      { if:{ trip_urgent:"yes" }, add_score: 20, pick_strategy:"urgent" }
    ]
  },
  {
    id: "mariage",
    label: "Mariage",
    keywords: ["mariage", "se marier", "marier", "wedding"],
    base_score: 15,
    deadline_anchor: "date_rdv",
    default_strategy: "standard",
    strategies: {
      standard: { title:"Constituer et déposer le dossier en mairie", legal_delay_days:0, pack_id:"mariage", checklist_id:"mariage",
        notes:"Les pièces et délais varient selon la mairie (nationalité, domicile, acte de naissance, etc.)."
      }
    },
    // Pas de règles spécifiques pour l’instant (les règles logement avaient été copiées ici par erreur en V38)
    rules: []
  },
  {
    id: "tax_declaration",
    label: "Impôts — Déclaration",
    keywords: ["déclaration impôts","declaration impots","corriger déclaration","corriger declaration","déclarer impôts","declarer impots"],
    base_score: 20,
    default_strategy: "standard",
    strategies: { standard: { title:"Déclarer / corriger en ligne", legal_delay_days:0, pack_id:"tax_declaration", checklist_id:null } },
    // Pas de règles spécifiques (les règles banque avaient été copiées ici par erreur en V38)
    rules: []
  }
,
  {
    id: "tax_rectif",
    label: "Impôts — Proposition de rectification",
    keywords: [
      "proposition de rectification", "rectification", "redressement", "abus de droit", "l64",
      "pénalités", "penalites", "majoration", "amende fiscale",
      "impot", "impôts", "impots"
    ],
    base_score: 40,
    deadline_anchor: "date_received",
    default_strategy: "prep",
    strategies: {
      prep: {
        title:"Préparer une réponse argumentée (pièces + chronologie)",
        legal_delay_days: 30,
        pack_id: "tax_rectif",
        checklist_id:"tax_rectif",
        notes:"Le délai dépend du courrier et des prorogations. Vérifier la mention exacte dans la proposition."
      },
      critical: {
        title:"Délai critique : envoyer une réponse conservatoire + demander prorogation",
        legal_delay_days: 7,
        pack_id:"tax_rectif",
        checklist_id:"tax_rectif",
        notes:"Si délai très court : sécuriser un envoi immédiat, puis compléter ensuite."
      },
      high_risk: {
        title:"Risque élevé : stratégie renforcée (expert/avocat conseillé)",
        legal_delay_days: 30,
        pack_id:"tax_rectif",
        checklist_id:"tax_rectif",
        notes:"Si abus de droit/pénalités lourdes : préparer une défense structurée et documentée."
      }
    },
    rules: [
      { if:{ delay_left:"short" }, add_score: 35, pick_strategy:"critical", priority: 100 },
      { if:{ l64:"yes" }, add_score: 30, pick_strategy:"high_risk", priority: 80 },
      { if:{ amount:"high" }, add_score: 15, pick_strategy:"high_risk", priority: 70 }
    ]
  },
  {
    id: "ameli",
    label: "Ameli / CPAM",
    keywords: ["ameli","cpam","assurance maladie","attestation","droits"],
    base_score: 15,
    default_strategy: "standard",
    strategies: { standard: { title:"Vérifier vos droits (Ameli)", legal_delay_days:0, pack_id:"ameli", checklist_id:null } },
    rules: []
  }
,
  {
    id: "caf",
    label: "CAF",
    keywords: [
      "caf","apl","rsa","prime d'activité","prime d activite","prime activite",
      "trop-perçu","trop percu","indu","indus","remboursement","recouvrement",
      "allocations"
    ],
    base_score: 20,
    default_strategy: "standard",
    strategies: { standard: { title:"Suivre un dossier CAF", legal_delay_days:0, pack_id:"caf", checklist_id:null } },
    rules: []
  }
,
  {
    id: "france_travail",
    label: "France Travail",
    keywords: ["france travail","pole emploi","pôle emploi","actualisation","chômage","chomage"],
    base_score: 20,
    default_strategy: "standard",
    strategies: { standard: { title:"Gérer son dossier France Travail", legal_delay_days:0, pack_id:"france_travail", checklist_id:null } },
    rules: []
  }
,

  {
    id: "logement",
    label: "Logement",
    keywords: ["logement","bail","bailleur","loyer","propriétaire","proprietaire","locataire","expulsion","caution","dépôt de garantie","depot de garantie","travaux","insalubre","voisinage"],
    base_score: 18,
    deadline_anchor: null,
    default_strategy: "litige",
    strategies: {
      dossier: { title:"Constituer un dossier logement / entrée", legal_delay_days:0, pack_id:"logement_dossier", checklist_id:"logement_base" },
      litige: { title:"Litige logement : agir et se protéger", legal_delay_days:0, pack_id:"logement_litige", checklist_id:"logement_base" },
      impayes: { title:"Impayés / risque expulsion : agir vite", legal_delay_days:0, pack_id:"logement_impayes", checklist_id:"logement_base" }
    },
    rules: [
      { if:{ logement_topic:"dossier" }, add_score: 0, pick_strategy:"dossier", priority: 10 },
      { if:{ logement_topic:"litige" }, add_score: 0, pick_strategy:"litige", priority: 10 },
      { if:{ logement_topic:"impayes" }, add_score: 30, pick_strategy:"impayes", priority: 20 }
    ]
  },
  {
    id: "banque",
    label: "Banque",
    keywords: [
      "banque","carte","cb","carte bancaire","fraude bancaire","opération contestée","operation contestee",
      "phishing","hameçonnage",
      "prélèvement inconnu","prelevement inconnu","prélèvements inconnus","prelevements inconnus",
      "virement frauduleux","virement",
      "opposition","perceval",
      "frais bancaires","decouvert","surendettement"
    ],
    base_score: 24,
    deadline_anchor: null,
    default_strategy: "frais",
    strategies: {
      fraude: { title:"Fraude/contestation : opposition et démarches", legal_delay_days:0, pack_id:"banque_fraude", checklist_id:"banque_base" },
      frais: { title:"Frais/découvert : comprendre et agir", legal_delay_days:0, pack_id:"banque_frais", checklist_id:"banque_base" },
      surendettement: { title:"Surendettement : préparer et orienter", legal_delay_days:0, pack_id:"banque_surendettement", checklist_id:"banque_base" }
    },
    rules: [
      { if:{ banque_topic:"fraude" }, add_score: 40, pick_strategy:"fraude", priority: 20 },
      { if:{ banque_topic:"frais" }, add_score: 0, pick_strategy:"frais", priority: 10 },
      { if:{ banque_topic:"surendettement" }, add_score: 20, pick_strategy:"surendettement", priority: 15 }
    ]
  },
  {
    id: "arnaques",
    label: "Arnaques",
    keywords: ["arnaque","phishing","hameçonnage","sms","mail","usurpation","piraté","pirate","compte piraté","scam","faux site","escroquerie"],
    base_score: 17,
    deadline_anchor: null,
    default_strategy: "signaler",
    strategies: {
      signaler: { title:"Signaler + sécuriser", legal_delay_days:0, pack_id:"arnaques_signaler", checklist_id:"arnaques_base" },
      identite: { title:"Usurpation / comptes piratés", legal_delay_days:0, pack_id:"arnaques_identite", checklist_id:"arnaques_base" }
    },
    rules: [{ if:{ mode:"signaler" }, add_score:0, pick_strategy:"signaler", priority:10 },{ if:{ mode:"identite" }, add_score:0, pick_strategy:"identite", priority:10 }]
  },
  {
    id: "justice",
    label: "Droit & justice",
    // Ajout "aide juridictionnelle" pour matcher les cas réels (accès au droit)
    keywords: ["justice","recours","tribunal","conciliateur","médiation","mediation","defenseur des droits","plainte","litige","aide juridictionnelle","aj"],
    base_score: 16,
    deadline_anchor: null,
    default_strategy: "amiable",
    strategies: {
      amiable: { title:"Résoudre à l'amiable", legal_delay_days:0, pack_id:"justice_amiable", checklist_id:"justice_base" },
      recours_admin: { title:"Recours administratif", legal_delay_days:0, pack_id:"justice_recours_admin", checklist_id:"justice_base" }
    },
    rules: [{ if:{ mode:"amiable" }, add_score:0, pick_strategy:"amiable", priority:10 },{ if:{ mode:"recours_admin" }, add_score:0, pick_strategy:"recours_admin", priority:10 }]
  },


  {
    id: "vie_civile",
    label: "Vie civile (CNI, passeport, actes, décès)",
    keywords: ["passeport","carte d'identité","carte d identite","cni","acte de naissance","acte","naissance","mariage","décès","deces","succession","ants","mairie","visa","esta","eta"],
    base_score: 12,
    deadline_anchor: null,
    default_strategy: "actes",
    strategies: {
      passport: { title:"Passeport : préparer la demande", legal_delay_days:0, pack_id:"vie_passeport", checklist_id:"passport_adult",
        next_links: [
          {label:"ANTS (pré-demande)", href:"https://passeport.ants.gouv.fr/", external:true},
          {label:"Carte : mairies équipées", href:"map.html?type=mairie&filter=passeport", external:false},
          {label:"France Diplomatie (visa)", href:"https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/", external:true},
          {label:"ESTA officiel (USA)", href:"https://esta.cbp.dhs.gov/", external:true},
          {label:"UK ETA officiel", href:"https://www.gov.uk/eta", external:true}
        ],
        letters: ["generic_info"]
      },
      cni: { title:"Carte d'identité : préparer la demande", legal_delay_days:0, pack_id:"vie_cni", checklist_id:"passport_adult",
        next_links: [
          {label:"ANTS", href:"https://ants.gouv.fr/", external:true},
          {label:"Carte : mairies équipées", href:"map.html?type=mairie&filter=cni", external:false}
        ],
        letters: ["generic_info"]
      },
      actes: { title:"Actes d'état civil : demander un document", legal_delay_days:0, pack_id:null, checklist_id:null,
        next_links: [
          {label:"Service-Public", href:"https://www.service-public.fr/particuliers/vosdroits/N359", external:true},
          {label:"Carte : mairie", href:"map.html?type=mairie", external:false}
        ],
        letters: ["generic_info"]
      },
      deces: { title:"Décès : prévenir et organiser", legal_delay_days:0, pack_id:null, checklist_id:"deces_base",
        next_links: [
          {label:"Carte : mairie", href:"map.html?type=mairie", external:false},
          {label:"Recours & aides", href:"recours_nationaux.html", external:false},
          {label:"Dashboard", href:"dashboard.html", external:false}
        ],
        letters: ["deces_informer_organisme","deces_banque","deces_resiliation_contrat"]
      }
    },
    rules: [
      { if:{ vie_topic:"passport" }, add_score: 0, pick_strategy:"passport", priority: 10 },
      { if:{ vie_topic:"cni" }, add_score: 0, pick_strategy:"cni", priority: 10 },
      { if:{ vie_topic:"actes" }, add_score: 0, pick_strategy:"actes", priority: 10 },
      { if:{ vie_topic:"deces" }, add_score: 10, pick_strategy:"deces", priority: 20 }
    ]
  },

  {
    id: "generic",
    label: "Général",
    keywords: [],
    base_score: 10,
    deadline_anchor: null,
    default_strategy: "generic",
    strategies: {
      generic: { title:"Orientation générale", legal_delay_days:0, pack_id:null, checklist_id:null, notes:"Décrivez votre situation plus précisément pour un parcours guidé." }
    },
    rules: []
  }
];
