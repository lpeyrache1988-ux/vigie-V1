// VIGIE V51 — Correctifs ciblés de keywords et scénarios manquants
// Surcouche non destructive : aucune suppression, aucun remplacement.
// Stratégie : push() + patch des keywords_any sur les scénarios existants.
window.VIGIE_SCENARIOS = window.VIGIE_SCENARIOS || [];

// ── Helper : patcher les keywords d'un scénario existant ────────────
(function(){
  function patchKeywords(id, extraKeywords) {
    const s = window.VIGIE_SCENARIOS.find(x => x.id === id);
    if(s) {
      s.keywords_any = Array.from(new Set([...(s.keywords_any||[]), ...extraKeywords]));
    }
  }

  // ── CPAM — refund_delay : ajouter "refus remboursement" ────────────
  patchKeywords('cpam_refund_delay', [
    'cpam refus remboursement',
    'refus remboursement cpam',
    'cpam ne rembourse pas',
    'remboursement refuse cpam',
    'cpam refus prise en charge',
    'soins non remboursés cpam',
  ]);

  // ── CAF remise gracieuse : ajouter bonne foi ──────────────────────
  patchKeywords('caf_remise_gracieuse', [
    'trop perçu caf bonne foi',
    'trop percu bonne foi',
    'bonne foi caf',
    'erreur declaration caf',
    'trop percu involontaire',
  ]);

  // ── France Travail radiation ──────────────────────────────────────
  patchKeywords('ft_radiation_missed_appointment', [
    'france travail radiation',
    'radié france travail',
    'radie pole emploi',
    'radiation injustifiée',
    'radiation ft',
  ]);

  // ── ARE refus ────────────────────────────────────────────────────
  patchKeywords('ft_are_refusal', [
    'are refus',
    'allocation chomage refus',
    'france travail refus are',
    'chomage refus indemnisation',
    'refus are france travail',
    'allocation chomage refusee',
  ]);

  // ── Housing deposit : ajouter dépôt de garantie ──────────────────
  patchKeywords('housing_deposit_return', [
    'dépôt de garantie',
    'depot de garantie',
    'caution logement non rendue',
    'dépôt garantie non restitué',
    'retenue sur caution',
  ]);

  // ── Garantie produit : priorité sur justice ───────────────────────
  patchKeywords('conso_garantie_conformite', [
    'garantie produit',
    'garantie légale de conformité',
    'produit en panne garantie',
    'garantie légale',
    'vice caché',
    'produit non conforme',
  ]);
  // Ajouter neg_keywords sur justice_small_claim pour éviter la collision
  const jsc = window.VIGIE_SCENARIOS.find(x => x.id === 'justice_small_claim');
  if(jsc) {
    jsc.neg_keywords = Array.from(new Set([...(jsc.neg_keywords||[]), 'garantie produit', 'garantie légale']));
  }


  // ── Housing eviction : ajouter "expulsion locataire" ──────────────
  patchKeywords('housing_eviction_notice', [
    'expulsion locataire',
    'expulsé logement',
    'procedure expulsion',
    'expulsion en cours',
    'commandement quitter les lieux',
  ]);

  // ── Scam : ajouter "phishing arnaque" sur scam_fake_admin_site ────
  patchKeywords('scam_fake_admin_site', [
    'arnaque phishing',
    'phishing',
    'faux site impots',
    'faux site caf',
    'faux email administration',
    'sms frauduleux',
  ]);

  // ── Tax rectif L64 : ajouter sur tax_audit_request_docs ──────────
  patchKeywords('tax_audit_request_docs', [
    'rectification l64',
    'l 64 abus de droit',
    'abus de droit fiscal',
    'proposition rectification l64',
    'proposition de rectification',
    'redressement fiscal l64',
  ]);


  // ── titre de séjour routing fix ──────────────────────────────────
  patchKeywords('prefecture_titre_sejour_recours', [
    'titre de sejour bloque',
    'titre sejour bloque',
    'prefecture refus titre sejour',
    'prefecture sans reponse',
  ]);
  // Pénalité sur la scène générique pour ne pas capter "titre de séjour"
  const prs = window.VIGIE_SCENARIOS.find(x => x.id === 'prefecture_residence_permit');
  if(prs) {
    prs.neg_keywords = Array.from(new Set([...(prs.neg_keywords||[]), 'bloque', 'refuse', 'sans reponse']));
  }

  console.log('[Vigie V51] Keyword patches appliqués');
})();

// ── Nouveaux scénarios manquants ─────────────────────────────────────
window.VIGIE_SCENARIOS.push(...[

  // ── Logement insalubre ──────────────────────────────────────────
  {
    "id": "housing_insalubre",
    "label": "Logement — Insalubrité / danger (signalement)",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "logement insalubre", "taudis", "humidité logement", "moisissures logement",
      "chauffage en panne location", "logement dangereux", "insalubrité",
      "logement sans chauffage", "dégâts des eaux bailleur", "toiture percée"
    ],
    "patterns": [],
    "tags": ["logement"],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": { "kind": "admin_deadline", "hint": "Délai indicatif — signaler à la mairie ou à l'ARS selon la gravité." },
    "todo": [
      "Documenter l'insalubrité : photos datées, courriers échangés avec le bailleur.",
      "Envoyer une mise en demeure écrite au propriétaire (recommandé avec accusé).",
      "Signaler à la mairie (arrêté de péril) ou à l'ARS (insalubrité au sens sanitaire).",
      "Saisir la commission départementale de conciliation (CDC) ou le tribunal judiciaire."
    ],
    "timeline": [
      { "id": "J0", "label": "Documenter et envoyer mise en demeure au bailleur." },
      { "id": "J15", "label": "Signaler à la mairie ou à l'ARS si pas de réponse." },
      { "id": "J30", "label": "Saisir la CDC ou le tribunal judiciaire si nécessaire." }
    ],
    "neg_keywords": []
  },

  // ── Vie civile — Passeport mineur ────────────────────────────────
  {
    "id": "vie_passeport_mineur",
    "label": "Vie civile — Passeport pour mineur",
    "flow_id": "passport",
    "pack_id": "passport",
    "keywords_any": [
      "passeport mineur", "passeport enfant", "passeport fils", "passeport fille",
      "passeport moins de 18 ans", "passeport adolescent", "renouvellement passeport mineur",
      "passeport pour mon fils", "passeport pour ma fille", "demande passeport mineur"
    ],
    "patterns": [],
    "tags": ["vie_civile", "institutions"],
    "checklist_id": "passport_minor",
    "sources_key": "institutions",
    "urgency": { "kind": "none", "hint": "Délai variable selon la mairie et la période. Anticiper." },
    "todo": [
      "Le mineur doit être présent au dépôt du dossier avec le ou les représentants légaux.",
      "Pièces supplémentaires : justificatif autorité parentale, pièce d'identité du parent.",
      "Pré-demande en ligne sur ANTS (passeport.ants.gouv.fr) avant le RDV mairie.",
      "En cas de garde alternée : accord des deux parents ou décision de justice."
    ],
    "timeline": [
      { "id": "J0", "label": "Pré-demande ANTS en ligne et prise de RDV mairie." },
      { "id": "J7", "label": "RDV mairie avec le mineur et le(s) représentant(s) légaux." },
      { "id": "J21", "label": "Retrait du passeport (délai indicatif — variable)." }
    ],
    "neg_keywords": ["adulte", "retraite", "senior"]
  },

  // ── Impôts — ESFP vs VC ─────────────────────────────────────────
  {
    "id": "tax_esfp_vs_vc",
    "label": "Impôts — ESFP vs vérification de comptabilité : connaître ses droits",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "esfp", "examen situation fiscale personnelle", "vérification comptabilité",
      "contrôle fiscal domicile", "agent fisc visite", "droit être assisté contrôle"
    ],
    "patterns": [],
    "tags": ["impots"],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": { "kind": "legal_deadline", "hint": "En cas d'ESFP, le droit à l'assistance d'un conseil est absolu (L.47 LPF). Délai de réponse : vérifier le courrier." },
    "todo": [
      "Identifier la procédure : ESFP (examen situation personnelle) ou VC (vérification comptabilité).",
      "Pour un ESFP : vous pouvez exiger d'être assisté d'un conseil (avocat, comptable) — L.47 LPF.",
      "Demander une prorogation du délai de réponse si nécessaire (avant l'échéance).",
      "Ne jamais signer un document sans avoir lu et compris son contenu."
    ],
    "timeline": [
      { "id": "J0", "label": "Identifier le type de contrôle sur le courrier reçu." },
      { "id": "J2", "label": "Mandater un conseil si ESFP ou enjeux importants." },
      { "id": "J30", "label": "Répondre dans le délai (indicatif — vérifier le courrier)." }
    ],
    "neg_keywords": []
  },

  // ── CAF — Garde alternée allocation ─────────────────────────────
  {
    "id": "caf_garde_alternee",
    "label": "CAF — Garde alternée et partage des allocations",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": [
      "garde alternée caf", "partage allocations garde", "résidence alternée allocations",
      "allocations divorce garde", "qui touche les allocations garde alternée",
      "apl garde alternée", "rsa garde alternée enfant"
    ],
    "patterns": [],
    "tags": ["caf"],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": { "kind": "none", "hint": "Délai indicatif : déclarer le changement dans le mois suivant la décision judiciaire." },
    "todo": [
      "Déclarer la garde alternée à la CAF avec le jugement ou l'accord parental.",
      "Les allocations familiales peuvent être partagées à 50/50 (demande conjointe des deux parents).",
      "APL : versée au parent chez qui l'enfant réside à titre principal.",
      "En cas de désaccord entre parents : le juge aux affaires familiales (JAF) tranche."
    ],
    "timeline": [
      { "id": "J0", "label": "Déclarer le changement de situation à la CAF." },
      { "id": "J15", "label": "Demande de partage des allocations si accord des deux parents." }
    ],
    "neg_keywords": []
  },

  // ── MDPH — Délai et blocage ──────────────────────────────────────
  {
    "id": "mdph_delay_rights",
    "label": "MDPH — Délai de traitement / décision contestée",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": [
      "mdph délai", "mdph bloqué", "mdph sans réponse", "aah refusée",
      "reconnaissance handicap refus", "rqth refus", "pch refusée",
      "contester décision mdph", "mdph recours", "aeeh refusée"
    ],
    "patterns": [],
    "tags": ["sante", "justice"],
    "checklist_id": "justice_base",
    "sources_key": "sante",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de contestation d'une décision MDPH : 2 mois (recours amiable puis tribunal administratif)." },
    "todo": [
      "Délai légal de traitement MDPH : 4 mois. En cas de silence, saisir le Défenseur des droits.",
      "Pour contester une décision : recours amiable auprès de la MDPH dans les 2 mois.",
      "Si refus maintenu : recours contentieux devant le tribunal administratif dans les 2 mois suivants.",
      "Pour l'AAH : le tribunal compétent est le tribunal judiciaire (pôle social)."
    ],
    "timeline": [
      { "id": "J0", "label": "Recevoir la décision — noter la date de notification." },
      { "id": "J30", "label": "Recours amiable MDPH (délai : 2 mois depuis notification)." },
      { "id": "J60", "label": "Délai maximum recours amiable." },
      { "id": "J120", "label": "Recours contentieux si rejet (tribunal compétent selon prestation)." }
    ],
    "neg_keywords": []
  },

  // ── Titre de séjour — voies de recours ──────────────────────────
  {
    "id": "prefecture_titre_sejour_recours",
    "label": "Préfecture — Titre de séjour : refus ou absence de réponse",
    "flow_id": "vie_civile",
    "pack_id": "justice_recours_admin",
    "keywords_any": [
      "titre de séjour refusé", "refus titre séjour", "préfecture refus",
      "préfecture sans réponse titre séjour", "anef bloqué", "recépissé expiré",
      "oqtf", "convocation préfecture", "rejet demande titre séjour",
      "décision préfet", "recours refus titre séjour"
    ],
    "patterns": [],
    "tags": ["vie_civile", "institutions"],
    "checklist_id": "justice_base",
    "sources_key": "institutions",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de recours contre un refus préfectoral : 2 mois (tribunal administratif). En cas d'OQTF : délais spéciaux — agir immédiatement." },
    "todo": [
      "Recours gracieux (lettre à la préfecture) : dans les 2 mois suivant le refus.",
      "Recours hiérarchique (au préfet) : possible en parallèle.",
      "Recours contentieux : tribunal administratif, dans les 2 mois suivant la décision.",
      "En cas d'OQTF : délais très courts — consulter immédiatement un avocat en droit des étrangers ou une association spécialisée."
    ],
    "timeline": [
      { "id": "J0", "label": "Recevoir le refus — noter la date et les voies de recours indiquées." },
      { "id": "J15", "label": "Recours gracieux à la préfecture (recommandé)." },
      { "id": "J60", "label": "Délai maximum recours contentieux (tribunal administratif)." }
    ],
    "neg_keywords": []
  },

  // ── Consommation — garantie légale prioritaire ───────────────────
  {
    "id": "conso_garantie_legale_v2",
    "label": "Consommation — Garantie légale de conformité (2 ans)",
    "flow_id": "justice",
    "pack_id": "justice_amiable",
    "keywords_any": [
      "garantie 2 ans", "produit en panne dans les 2 ans", "refus garantie vendeur",
      "garantie légale conformité", "vice caché achat", "produit défectueux retour",
      "garantie non appliquée", "vendeur refuse garantie"
    ],
    "patterns": [],
    "tags": ["consommation"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "legal_deadline", "hint": "Délai légal : 2 ans à compter de la livraison. Gratuit, obligatoire, ne peut pas être refusé." },
    "todo": [
      "La garantie légale de conformité est obligatoire — le vendeur ne peut pas la refuser.",
      "Signaler le défaut par écrit au vendeur dès la découverte.",
      "Demander réparation, remplacement ou remboursement.",
      "Si refus : médiateur de la consommation (gratuit, 90 jours) puis tribunal de proximité."
    ],
    "timeline": [
      { "id": "J0", "label": "Signalement écrit au vendeur (e-mail ou courrier)." },
      { "id": "J15", "label": "Relancer si silence — préciser la référence légale." },
      { "id": "J30", "label": "Saisir le médiateur de la consommation si refus persistant." }
    ],
    "neg_keywords": []
  }

]);
