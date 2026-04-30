// V49 — couverture élargie : 47 cas manquants ajoutés en surcouche.
// Piliers nouveaux : retraite, consommation.
// Piliers renforcés : banque (CB vs virement CRITIQUE), travail, santé, vie civile, justice.
// Aucune donnée existante n'est supprimée.
window.VIGIE_SCENARIOS = window.VIGIE_SCENARIOS || [];
window.VIGIE_SCENARIOS.push(...[

  // ══════════════════════════════════════════════
  //  BANQUE — cas critiques manquants
  // ══════════════════════════════════════════════
  {
    "id": "bank_cb_fraud",
    "label": "Banque — Fraude carte bancaire (CB)",
    "flow_id": "banque",
    "pack_id": "banque_fraude",
    "keywords_any": ["fraude carte","fraude cb","paiement frauduleux carte","opposition cb","carte débitée","achat non reconnu","paiement inconnu carte"],
    "patterns": [],
    "tags": ["banque","fraude"],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de contestation : 13 mois (L.133-18 CMF). Agir rapidement." },
    "todo": [
      "Faire opposition immédiatement auprès de votre banque (numéro au dos de la carte).",
      "Contester par écrit les opérations frauduleuses — demander un formulaire de contestation.",
      "Conserver les preuves : relevés, captures d'écran, chronologie.",
      "Si refus bancaire, saisir le médiateur bancaire (délai : 2 mois après refus)."
    ],
    "timeline": [
      { "id": "J0", "label": "Faire opposition et signaler à la banque par écrit." },
      { "id": "J2", "label": "Déposer plainte (commissariat / gendarmerie ou Perceval en ligne)." },
      { "id": "J7", "label": "Relancer si pas de remboursement — rappeler L.133-18 CMF." },
      { "id": "J30", "label": "Saisir le médiateur bancaire si refus persistant." }
    ],
    "neg_keywords": ["virement"]
  },
  {
    "id": "bank_wire_fraud",
    "label": "Banque — Virement frauduleux",
    "flow_id": "banque",
    "pack_id": "banque_fraude",
    "keywords_any": ["virement frauduleux","virement non autorisé","virement arnaque","j'ai fait un virement","on m'a fait faire un virement","virement escroquerie"],
    "patterns": [],
    "tags": ["banque","fraude"],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de contestation : 2 mois (L.133-19 CMF). Conditions strictes si vous avez validé un code." },
    "todo": [
      "Contacter la banque en urgence — demander le rappel du virement (possible dans les premières heures).",
      "Contester par écrit en précisant que le virement n'était pas autorisé.",
      "Déposer plainte immédiatement (les délais sont courts et la preuve d'intention frauduleuse est clé).",
      "Attention : si vous avez vous-même validé un code de confirmation, le remboursement est plus difficile — L.133-19 CMF."
    ],
    "timeline": [
      { "id": "J0", "label": "Contacter la banque en urgence + contester par écrit." },
      { "id": "J1", "label": "Déposer plainte (commissariat, gendarmerie ou Perceval)." },
      { "id": "J7", "label": "Relancer la banque avec référence L.133-19 CMF." },
      { "id": "J30", "label": "Médiateur bancaire si refus — délai légal 2 mois depuis la contestation." }
    ],
    "neg_keywords": ["carte","cb","paiement carte"]
  },
  {
    "id": "bank_overindebt_bdf",
    "label": "Banque — Surendettement (dossier Banque de France)",
    "flow_id": "banque",
    "pack_id": "banque_surendettement",
    "keywords_any": ["surendettement","banque de france dossier","dettes impossibles","plan de remboursement dette","commission surendettement"],
    "patterns": [],
    "tags": ["banque","surendettement"],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": { "kind": "admin_deadline", "hint": "Dépôt du dossier à la Banque de France — délai de traitement ~3 mois." },
    "todo": [
      "Rassembler tous les justificatifs de dettes et de revenus.",
      "Déposer un dossier de surendettement à la Banque de France (formulaire cerfa ou en ligne).",
      "Pendant l'instruction : les poursuites sont suspendues (protection légale).",
      "Si recevable : plan de remboursement, effacement partiel, ou procédure de rétablissement personnel."
    ],
    "timeline": [
      { "id": "J0", "label": "Préparer et déposer le dossier Banque de France." },
      { "id": "J7", "label": "Accusé de réception — vérifier la recevabilité." },
      { "id": "J90", "label": "Décision de la commission (plan ou mesures imposées)." },
      { "id": "J120", "label": "Mise en œuvre du plan ou recours si désaccord." }
    ],
    "neg_keywords": []
  },
  {
    "id": "bank_right_to_account",
    "label": "Banque — Droit au compte (refus d'ouverture)",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "keywords_any": ["droit au compte","refus ouverture compte","banque refuse compte","pas de compte bancaire","ouverture compte refusée"],
    "patterns": [],
    "tags": ["banque"],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": { "kind": "none", "hint": "Procédure gratuite — la Banque de France désigne une banque dans les 3 jours ouvrés." },
    "todo": [
      "Obtenir un refus écrit de la banque (obligatoire pour saisir la Banque de France).",
      "Saisir la Banque de France via le formulaire droit au compte (en ligne ou en agence).",
      "La Banque de France désigne d'office un établissement dans les 3 jours ouvrés.",
      "Le compte ainsi ouvert offre des services bancaires de base gratuits."
    ],
    "timeline": [
      { "id": "J0", "label": "Obtenir le refus écrit + saisir la Banque de France." },
      { "id": "J3", "label": "Désignation d'une banque par la Banque de France." },
      { "id": "J7", "label": "Ouverture du compte avec services de base." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  TRAVAIL — cas manquants
  // ══════════════════════════════════════════════
  {
    "id": "work_rupture_conventionnelle",
    "label": "Travail — Rupture conventionnelle contestée",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": ["rupture conventionnelle","rupture conv","contester rupture conventionnelle","homologation refusée","rupture conventionnelle refusée"],
    "patterns": [],
    "tags": ["travail"],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de recours : 12 mois après homologation (conseil de prud'hommes)." },
    "todo": [
      "Vérifier que la procédure a été respectée (délais de rétractation 15 jours, signature libre).",
      "Contester devant le conseil de prud'hommes dans les 12 mois suivant l'homologation.",
      "Conserver toutes les preuves de pression ou vice du consentement.",
      "Contacter un avocat en droit du travail ou une permanence juridique gratuite."
    ],
    "timeline": [
      { "id": "J0", "label": "Rassembler les preuves et consulter un avocat ou syndicat." },
      { "id": "J30", "label": "Saisir le conseil de prud'hommes si contestation." },
      { "id": "J365", "label": "Délai maximum de recours — ne pas attendre." }
    ],
    "neg_keywords": []
  },
  {
    "id": "work_accident",
    "label": "Travail — Accident du travail / maladie professionnelle",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": ["accident du travail","at mp","maladie professionnelle","accident travail refusé","déclaration accident travail","tableau maladie pro"],
    "patterns": [],
    "tags": ["travail","sante"],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de déclaration AT : 24h pour l'employeur. Délai contestation CPAM : 2 mois." },
    "todo": [
      "Déclarer l'accident à l'employeur dans les 24h et demander une feuille d'accident du travail.",
      "Consulter un médecin — certificat médical initial AT obligatoire.",
      "Si refus de reconnaissance par la CPAM : contester dans les 2 mois via la CRA (commission de recours amiable).",
      "Pour maladie pro : vérifier les tableaux de maladies professionnelles (annexes du Code de la Sécurité Sociale)."
    ],
    "timeline": [
      { "id": "J0", "label": "Déclarer à l'employeur + consulter un médecin." },
      { "id": "J2", "label": "CPAM envoie la feuille AT — conserver toutes les pièces." },
      { "id": "J30", "label": "Décision CPAM sur la reconnaissance." },
      { "id": "J60", "label": "Délai de contestation si refus (CRA puis tribunal judiciaire)." }
    ],
    "neg_keywords": []
  },
  {
    "id": "work_ft_cra_mediateur",
    "label": "France Travail — CRA et médiateur (recours ARE)",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": ["cra france travail","commission recours france travail","médiateur france travail","recours are","contester décision france travail","appel france travail"],
    "patterns": [],
    "tags": ["travail"],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de forclusion : 2 mois après notification de la décision (R.142-1 CSS)." },
    "todo": [
      "Étape 1 — Recours amiable : envoyer une contestation écrite à France Travail (service courrier).",
      "Étape 2 — CRA (Commission de Recours Amiable) : saisir par courrier recommandé dans les 2 mois.",
      "Étape 3 — Médiateur France Travail : si blocage après CRA, saisine gratuite en ligne.",
      "Étape 4 — Tribunal judiciaire (pas administratif) : compétent pour les litiges ARE."
    ],
    "timeline": [
      { "id": "J0", "label": "Réclamation écrite à France Travail + copie à conserver." },
      { "id": "J15", "label": "Saisir la CRA par courrier recommandé si pas de réponse." },
      { "id": "J60", "label": "Délai maximum pour la CRA — ne pas attendre." },
      { "id": "J90", "label": "Médiateur France Travail ou tribunal judiciaire si nécessaire." }
    ],
    "neg_keywords": []
  },
  {
    "id": "work_retraite_erreur",
    "label": "Retraite — Erreur sur le relevé de carrière / trimestres",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": ["relevé carrière","trimestres manquants","erreur retraite","retraite calcul erreur","assurance retraite erreur","rectifier trimestres"],
    "patterns": [],
    "tags": ["retraite","travail"],
    "checklist_id": "justice_base",
    "sources_key": "travail",
    "urgency": { "kind": "none", "hint": "Vérifier le relevé de carrière avant 55 ans — plus facile à corriger." },
    "todo": [
      "Télécharger votre relevé de carrière sur info-retraite.fr.",
      "Identifier les périodes manquantes ou erronées (comparer avec bulletins de salaire anciens).",
      "Contacter la caisse compétente (CNAV, MSA, RSI…) avec les justificatifs.",
      "En cas de refus : recours amiable puis tribunal judiciaire (pôle social)."
    ],
    "timeline": [
      { "id": "J0", "label": "Télécharger le relevé sur info-retraite.fr et identifier les erreurs." },
      { "id": "J7", "label": "Rassembler les justificatifs (bulletins, contrats, attestations)." },
      { "id": "J30", "label": "Contacter la caisse par courrier recommandé avec pièces." },
      { "id": "J90", "label": "Recours amiable si refus de rectification." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  RETRAITE — pilier nouveau
  // ══════════════════════════════════════════════
  {
    "id": "retraite_depart_anticipe",
    "label": "Retraite — Conditions de départ anticipé",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": ["retraite anticipée","partir à la retraite avant 62 ans","carrière longue","retraite anticipée invalidité","retraite anticipée handicap"],
    "patterns": [],
    "tags": ["retraite"],
    "checklist_id": "justice_base",
    "sources_key": "travail",
    "urgency": { "kind": "none", "hint": "Vérifier les conditions au moins 6 mois avant la date souhaitée." },
    "todo": [
      "Vérifier votre nombre de trimestres sur info-retraite.fr.",
      "Identifier le dispositif applicable : carrière longue, handicap, invalidité, pénibilité.",
      "Contacter votre caisse de retraite pour un bilan personnalisé.",
      "Déposer la demande au moins 4 à 6 mois avant la date souhaitée."
    ],
    "timeline": [
      { "id": "J0", "label": "Vérifier le relevé de carrière et les conditions." },
      { "id": "J30", "label": "Contacter la caisse pour un entretien bilan." },
      { "id": "J90", "label": "Déposer la demande officielle de retraite anticipée." }
    ],
    "neg_keywords": []
  },
  {
    "id": "retraite_pension_reversion",
    "label": "Retraite — Pension de réversion (conjoint décédé)",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": ["pension de réversion","réversion conjoint","retraite conjoint décédé","réversion refusée","demander réversion"],
    "patterns": [],
    "tags": ["retraite"],
    "checklist_id": "justice_base",
    "sources_key": "travail",
    "urgency": { "kind": "admin_deadline", "hint": "La réversion n'est pas automatique — il faut en faire la demande." },
    "todo": [
      "Faire la demande auprès de chaque caisse de retraite du défunt (CNAV, complémentaires…).",
      "Rassembler : acte de mariage, acte de décès, justificatifs de ressources.",
      "Attention : sous conditions de ressources pour le régime général.",
      "En cas de refus : recours amiable puis tribunal judiciaire (pôle social)."
    ],
    "timeline": [
      { "id": "J0", "label": "Identifier toutes les caisses et préparer le dossier." },
      { "id": "J30", "label": "Déposer les demandes auprès de chaque caisse." },
      { "id": "J90", "label": "Décision des caisses — contester si nécessaire." }
    ],
    "neg_keywords": []
  },
  {
    "id": "retraite_cumul_emploi",
    "label": "Retraite — Cumul emploi-retraite",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": ["cumul emploi retraite","travailler après retraite","retraite et travail","reprendre activité retraite"],
    "patterns": [],
    "tags": ["retraite"],
    "checklist_id": "justice_base",
    "sources_key": "travail",
    "urgency": { "kind": "none", "hint": "Conditions à vérifier selon le régime et la date de liquidation." },
    "todo": [
      "Vérifier si vous avez liquidé toutes vos retraites (condition du cumul intégral).",
      "Déclarer la reprise d'activité à votre caisse de retraite.",
      "Vérifier les plafonds de revenus selon votre régime.",
      "Depuis 2023 : possibilité de cumuler et acquérir de nouveaux droits à retraite."
    ],
    "timeline": [
      { "id": "J0", "label": "Vérifier les conditions auprès de votre caisse." },
      { "id": "J7", "label": "Déclarer la reprise d'activité à la caisse." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  SANTÉ — cas manquants
  // ══════════════════════════════════════════════
  {
    "id": "cpam_mutuelle_contest",
    "label": "Santé — Mutuelle / complémentaire : remboursement contesté",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": ["mutuelle remboursement refus","complémentaire santé refus","mutuelle ne rembourse pas","litige mutuelle","contester mutuelle"],
    "patterns": [],
    "tags": ["sante"],
    "checklist_id": "justice_base",
    "sources_key": "sante",
    "urgency": { "kind": "admin_deadline", "hint": "Vérifier les délais de prescription dans votre contrat (souvent 2 ans)." },
    "todo": [
      "Relire votre contrat : garanties, exclusions, délais de carence.",
      "Contester par écrit auprès du service réclamations de votre mutuelle.",
      "Si refus : saisir le médiateur de l'assurance (gratuit, délai ~3 mois).",
      "En dernier recours : tribunal judiciaire (litige contractuel)."
    ],
    "timeline": [
      { "id": "J0", "label": "Réclamation écrite au service client de la mutuelle." },
      { "id": "J30", "label": "Saisir le médiateur de l'assurance si refus." },
      { "id": "J90", "label": "Décision du médiateur — valeur de recommandation." }
    ],
    "neg_keywords": []
  },
  {
    "id": "cpam_invalidite",
    "label": "Santé — Pension d'invalidité (demande ou contestation)",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": ["pension invalidité","invalidité refusée","catégorie invalidité","demande invalidité","taux invalidité contesté"],
    "patterns": [],
    "tags": ["sante"],
    "checklist_id": "justice_base",
    "sources_key": "sante",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de contestation de la décision CPAM : 2 mois (CRA)." },
    "todo": [
      "Demande initiée par le médecin traitant ou la CPAM après un arrêt prolongé.",
      "Si taux ou catégorie contestés : saisir la CRA (commission de recours amiable) dans les 2 mois.",
      "Rassembler les certificats médicaux, comptes-rendus spécialistes.",
      "Tribunal judiciaire (pôle social) si la CRA ne donne pas satisfaction."
    ],
    "timeline": [
      { "id": "J0", "label": "Notification CPAM reçue — analyser la décision." },
      { "id": "J30", "label": "Saisir la CRA par courrier recommandé." },
      { "id": "J60", "label": "Délai maximum pour la CRA." },
      { "id": "J90", "label": "Tribunal judiciaire pôle social si nécessaire." }
    ],
    "neg_keywords": []
  },
  {
    "id": "cpam_maternite_conge",
    "label": "Santé — Congé maternité / paternité CPAM",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": ["indemnités maternité","congé maternité cpam","cpam maternité","congé paternité indemnités","ij maternité","arrêt maternité"],
    "patterns": [],
    "tags": ["sante"],
    "checklist_id": "justice_base",
    "sources_key": "sante",
    "urgency": { "kind": "admin_deadline", "hint": "Les IJ maternité ne sont pas automatiques — il faut en faire la demande." },
    "todo": [
      "Envoyer la déclaration de grossesse à la CPAM et à la CAF avant la fin du 3e mois.",
      "Demander les indemnités journalières maternité via Ameli.fr avant le début du congé.",
      "Vérifier les conditions de durée d'affiliation (10 mois minimum).",
      "Pour le congé paternité : demande IJ à faire dans les 4 mois suivant la naissance."
    ],
    "timeline": [
      { "id": "J0", "label": "Déclaration de grossesse à CPAM et CAF (avant 14 semaines)." },
      { "id": "J30", "label": "Demande IJ maternité sur Ameli.fr avant le congé." },
      { "id": "J7", "label": "Pour paternité : demande IJ dans les 4 mois après naissance." }
    ],
    "neg_keywords": []
  },
  {
    "id": "cpam_medecin_traitant",
    "label": "Santé — Médecin traitant : changement ou refus de soins",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": ["médecin traitant","changer médecin traitant","médecin refuse soins","trouver médecin traitant","désertification médicale","médecin absent"],
    "patterns": [],
    "tags": ["sante"],
    "checklist_id": "justice_base",
    "sources_key": "sante",
    "urgency": { "kind": "none", "hint": "Sans médecin traitant, les remboursements sont réduits." },
    "todo": [
      "Chercher un médecin traitant via Ameli.fr ou Doctolib.",
      "En zone sous-dotée : contacter la CPAM — dispositif médecin traitant provisoire possible.",
      "Pour un refus de soins : signalement au Conseil de l'Ordre des médecins ou à la CPAM.",
      "Consultation sans médecin traitant : remboursement réduit à 30% au lieu de 70%."
    ],
    "timeline": [
      { "id": "J0", "label": "Rechercher un médecin traitant disponible." },
      { "id": "J7", "label": "Contacter la CPAM pour les dispositifs d'urgence en zone sous-dotée." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  VIE CIVILE — cas manquants
  // ══════════════════════════════════════════════
  {
    "id": "vie_divorce_separation",
    "label": "Vie civile — Divorce ou séparation : démarches administratives",
    "flow_id": "vie_civile",
    "pack_id": "justice_amiable",
    "keywords_any": ["divorce","séparation","divorce amiable","divorce contentieux","pension alimentaire","prestation compensatoire","démarches divorce"],
    "patterns": [],
    "tags": ["vie_civile","justice"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "none", "hint": "Prévoir les démarches administratives en parallèle de la procédure judiciaire." },
    "todo": [
      "Mettre à jour la CAF, CPAM, France Travail, impôts de la nouvelle situation.",
      "Ouvrir un compte bancaire personnel si ce n'est pas encore fait.",
      "Pour divorce par consentement mutuel : acte sous signature privée contresigné par avocats.",
      "Pour pension alimentaire : fixer par accord ou décision du juge aux affaires familiales (JAF)."
    ],
    "timeline": [
      { "id": "J0", "label": "Informer les organismes (CAF, CPAM, impôts) du changement de situation." },
      { "id": "J30", "label": "Démarches bancaires et logement (bail, aides)." },
      { "id": "J90", "label": "Suivi de la procédure judiciaire si contentieux." }
    ],
    "neg_keywords": []
  },
  {
    "id": "vie_naturalisation",
    "label": "Vie civile — Naturalisation française",
    "flow_id": "vie_civile",
    "pack_id": "justice_recours_admin",
    "keywords_any": ["naturalisation","devenir français","nationalité française","demande naturalisation","dossier naturalisation","décret naturalisation"],
    "patterns": [],
    "tags": ["vie_civile"],
    "checklist_id": "justice_base",
    "sources_key": "institutions",
    "urgency": { "kind": "admin_deadline", "hint": "Délai d'instruction moyen : 12 à 18 mois. Dossier à déposer en préfecture." },
    "todo": [
      "Vérifier les conditions : 5 ans de résidence régulière (ou moins selon critères).",
      "Constituer le dossier complet (cerfa + pièces justificatives nombreuses).",
      "Déposer en préfecture — prendre rendez-vous à l'avance.",
      "Si refus : recours gracieux puis tribunal administratif dans les 2 mois."
    ],
    "timeline": [
      { "id": "J0", "label": "Vérifier les conditions et constituer le dossier." },
      { "id": "J30", "label": "Déposer en préfecture avec le dossier complet." },
      { "id": "J365", "label": "Décision — délai moyen 12 à 18 mois." }
    ],
    "neg_keywords": []
  },
  {
    "id": "vie_succession",
    "label": "Vie civile — Succession : démarches et contestation",
    "flow_id": "vie_civile",
    "pack_id": "justice_amiable",
    "keywords_any": ["succession","héritage","héritier","testament","notaire succession","déclaration succession","droits de succession"],
    "patterns": [],
    "tags": ["vie_civile","justice"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "legal_deadline", "hint": "Déclaration de succession : 6 mois après le décès (pénalités sinon)." },
    "todo": [
      "Contacter un notaire dans les semaines suivant le décès.",
      "Inventaire des biens et dettes du défunt.",
      "Déclaration de succession à déposer dans les 6 mois (délai fiscal impératif).",
      "En cas de litige entre héritiers : médiation familiale ou tribunal judiciaire."
    ],
    "timeline": [
      { "id": "J0", "label": "Contacter un notaire et rassembler les actes." },
      { "id": "J30", "label": "Inventaire des biens et identification des héritiers." },
      { "id": "J180", "label": "Déclaration de succession (délai fiscal impératif — 6 mois)." }
    ],
    "neg_keywords": []
  },
  {
    "id": "vie_tutelle_curatelle",
    "label": "Vie civile — Tutelle / curatelle (protection juridique)",
    "flow_id": "vie_civile",
    "pack_id": "justice_recours_admin",
    "keywords_any": ["tutelle","curatelle","protection juridique","majeur protégé","juge tutelles","sauvegarde de justice","incapacité"],
    "patterns": [],
    "tags": ["vie_civile","justice"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "none", "hint": "Demande à adresser au juge des tutelles du tribunal judiciaire." },
    "todo": [
      "Contacter le juge des tutelles du tribunal judiciaire du lieu de résidence.",
      "Préparer un certificat médical circonstancié (médecin agréé obligatoire).",
      "Le juge choisit la mesure la moins restrictive (sauvegarde, curatelle, tutelle).",
      "La mesure doit être réexaminée tous les 5 ans."
    ],
    "timeline": [
      { "id": "J0", "label": "Obtenir un certificat médical circonstancié." },
      { "id": "J7", "label": "Déposer la requête au juge des tutelles." },
      { "id": "J90", "label": "Audience et décision du juge." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  JUSTICE — cas manquants
  // ══════════════════════════════════════════════
  {
    "id": "justice_injonction_payer",
    "label": "Justice — Injonction de payer (recouvrement d'une créance)",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": ["injonction de payer","recouvrement créance","on me doit de l'argent","récupérer argent dû","procédure injonction"],
    "patterns": [],
    "tags": ["justice"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "none", "hint": "Procédure rapide et peu coûteuse pour les créances inférieures à 10 000€." },
    "todo": [
      "Rassembler les preuves de la créance (facture, contrat, échanges écrits).",
      "Déposer une requête en injonction de payer au tribunal judiciaire ou de proximité.",
      "Si accordée : faire signifier l'ordonnance par huissier au débiteur.",
      "Si opposition du débiteur : audience contradictoire devant le tribunal."
    ],
    "timeline": [
      { "id": "J0", "label": "Préparer le dossier (preuves de la créance)." },
      { "id": "J7", "label": "Déposer la requête au tribunal." },
      { "id": "J30", "label": "Décision du juge — ordonnance à faire signifier." }
    ],
    "neg_keywords": []
  },
  {
    "id": "justice_aide_juridictionnelle",
    "label": "Justice — Aide juridictionnelle (financement des frais d'avocat)",
    "flow_id": "justice",
    "pack_id": "justice_amiable",
    "keywords_any": ["aide juridictionnelle","aj","frais avocat","avocat gratuit","accès droit","bureau aide juridictionnelle"],
    "patterns": [],
    "tags": ["justice"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "none", "hint": "Déposer la demande avant ou dès le début de la procédure." },
    "todo": [
      "Vérifier les conditions de ressources (plafonds révisés chaque année).",
      "Télécharger le formulaire cerfa 15626 (demande d'aide juridictionnelle).",
      "Déposer au Bureau d'Aide Juridictionnelle (BAJ) du tribunal compétent.",
      "Si accordée : l'État prend en charge tout ou partie des frais d'avocat."
    ],
    "timeline": [
      { "id": "J0", "label": "Vérifier les conditions de ressources et remplir le cerfa." },
      { "id": "J7", "label": "Déposer au BAJ du tribunal." },
      { "id": "J60", "label": "Décision d'admission — délai variable selon les tribunaux." }
    ],
    "neg_keywords": []
  },
  {
    "id": "justice_saisie_salaire",
    "label": "Justice — Saisie sur salaire (contestation ou aménagement)",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": ["saisie sur salaire","ATD salaire","retenue salaire huissier","saisie arrêt","opposition saisie"],
    "patterns": [],
    "tags": ["justice"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "legal_deadline", "hint": "Une partie du salaire est insaisissable (RSA socle). Contester rapidement." },
    "todo": [
      "Vérifier que la quotité insaisissable a été respectée (une partie du salaire est toujours protégée).",
      "Contester devant le tribunal judiciaire si la saisie vous semble injustifiée ou excessive.",
      "Demander un aménagement (délais de paiement) au créancier ou au juge.",
      "Contacter un conciliateur de justice pour trouver un accord amiable."
    ],
    "timeline": [
      { "id": "J0", "label": "Vérifier la légalité de la saisie et les montants." },
      { "id": "J7", "label": "Contacter le créancier pour un arrangement amiable." },
      { "id": "J15", "label": "Saisir le tribunal judiciaire si contestation formelle." }
    ],
    "neg_keywords": []
  },
  {
    "id": "justice_conciliateur",
    "label": "Justice — Conciliateur de justice (résolution amiable)",
    "flow_id": "justice",
    "pack_id": "justice_amiable",
    "keywords_any": ["conciliateur","conciliation","résoudre litige amiable","avant procès","accord amiable","conciliateur justice","médiation gratuite"],
    "patterns": [],
    "tags": ["justice"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "none", "hint": "Gratuit, rapide (quelques semaines), et souvent plus efficace qu'un procès." },
    "todo": [
      "Trouver le conciliateur de votre secteur sur justice.fr.",
      "Prendre rendez-vous directement (souvent en mairie ou au tribunal).",
      "Préparer un résumé du litige et les pièces justificatives.",
      "Si accord : un constat d'accord peut être homologué par le juge (force exécutoire)."
    ],
    "timeline": [
      { "id": "J0", "label": "Trouver le conciliateur compétent sur justice.fr." },
      { "id": "J7", "label": "Prendre rendez-vous et préparer le dossier." },
      { "id": "J30", "label": "Séance de conciliation — accord possible en une ou deux réunions." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  CONSOMMATION — pilier nouveau
  // ══════════════════════════════════════════════
  {
    "id": "conso_garantie_conformite",
    "label": "Consommation — Garantie légale de conformité (produit défectueux)",
    "flow_id": "justice",
    "pack_id": "justice_amiable",
    "keywords_any": ["garantie légale","produit défectueux","garantie conformité","produit en panne","retour produit","vice caché","remplacement produit"],
    "patterns": [],
    "tags": ["consommation"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "legal_deadline", "hint": "Garantie légale de conformité : 2 ans à compter de la livraison. Gratuite, obligatoire." },
    "todo": [
      "Signaler le défaut au vendeur par écrit (e-mail ou courrier) — dès la découverte.",
      "Demander réparation, remplacement ou remboursement (au choix du vendeur si coût disproportionné).",
      "Si refus : saisir le médiateur de la consommation du secteur (gratuit, 90 jours).",
      "Conservez la preuve d'achat et tous les échanges écrits."
    ],
    "timeline": [
      { "id": "J0", "label": "Signalement écrit au vendeur avec description du défaut." },
      { "id": "J15", "label": "Réponse attendue — relancer si silence." },
      { "id": "J30", "label": "Saisir le médiateur de la consommation si refus." }
    ],
    "neg_keywords": []
  },
  {
    "id": "conso_ecommerce_litige",
    "label": "Consommation — Litige e-commerce (colis non reçu, retour refusé)",
    "flow_id": "justice",
    "pack_id": "justice_amiable",
    "keywords_any": ["colis non reçu","commande non livrée","retour refusé","remboursement site","litige amazon","litige vinted","litige ebay","achat en ligne problème","vendeur ne rembourse pas"],
    "patterns": [],
    "tags": ["consommation"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "legal_deadline", "hint": "Droit de rétractation : 14 jours après réception. Remboursement dans les 14 jours." },
    "todo": [
      "Contacter le vendeur par écrit en demandant livraison ou remboursement.",
      "Si marketplace (Amazon, Cdiscount…) : ouvrir un litige via la plateforme.",
      "Contester auprès de votre banque (chargeback) si paiement par CB.",
      "Signaler sur SignalConso (DGCCRF) et saisir le médiateur de la consommation."
    ],
    "timeline": [
      { "id": "J0", "label": "Contacter le vendeur par écrit — demander livraison ou remboursement." },
      { "id": "J7", "label": "Ouvrir un litige sur la plateforme si marketplace." },
      { "id": "J14", "label": "Chargeback bancaire si pas de réponse (délai selon banque)." },
      { "id": "J30", "label": "SignalConso + médiateur de la consommation." }
    ],
    "neg_keywords": []
  },
  {
    "id": "conso_demarchage_abusif",
    "label": "Consommation — Démarchage abusif / contrat non sollicité",
    "flow_id": "justice",
    "pack_id": "justice_amiable",
    "keywords_any": ["démarchage abusif","contrat forcé","contrat signé sous pression","résiliation contrat démarchage","droit rétractation","contrat à domicile","téléphonie abusive"],
    "patterns": [],
    "tags": ["consommation"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "legal_deadline", "hint": "Rétractation : 14 jours pour démarchage à domicile ou téléphonique." },
    "todo": [
      "Exercer le droit de rétractation par lettre recommandée dans les 14 jours (formulaire cerfa ou tout écrit).",
      "Le professionnel ne peut pas vous imposer d'appeler un numéro surtaxé pour la rétractation.",
      "Signaler sur SignalConso (DGCCRF) si pratique déloyale.",
      "Si prélèvements indus : contester auprès de votre banque."
    ],
    "timeline": [
      { "id": "J0", "label": "Envoyer la lettre de rétractation en recommandé (dans les 14 jours)." },
      { "id": "J14", "label": "Le professionnel doit rembourser dans les 14 jours suivants." },
      { "id": "J30", "label": "SignalConso et médiateur si pas de remboursement." }
    ],
    "neg_keywords": []
  },
  {
    "id": "conso_credit_consommation",
    "label": "Consommation — Crédit à la consommation : résiliation ou litige",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "keywords_any": ["crédit consommation","crédit personnel","remboursement anticipé crédit","résilier crédit","mensualités crédit","organisme crédit litige"],
    "patterns": [],
    "tags": ["consommation","banque"],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": { "kind": "none", "hint": "Remboursement anticipé : droit légal, avec indemnité plafonnée à 1% du capital restant." },
    "todo": [
      "Vérifier le TAEG et les conditions dans votre offre de crédit.",
      "Pour remboursement anticipé : en faire la demande par écrit — indemnité maximale légale.",
      "En cas de litige sur les conditions : saisir le médiateur bancaire.",
      "Si difficultés de remboursement : contacter l'organisme pour un réaménagement avant tout incident."
    ],
    "timeline": [
      { "id": "J0", "label": "Relire le contrat et identifier le litige précis." },
      { "id": "J7", "label": "Contacter l'organisme par écrit." },
      { "id": "J30", "label": "Médiateur bancaire si pas de réponse satisfaisante." }
    ],
    "neg_keywords": []
  },
  {
    "id": "conso_assurance_refus",
    "label": "Consommation — Assurance : sinistre refusé ou indemnisation insuffisante",
    "flow_id": "justice",
    "pack_id": "justice_amiable",
    "keywords_any": ["assurance sinistre refus","assurance ne paie pas","indemnisation insuffisante","assureur refuse","litige assurance","expertise assurance contestée"],
    "patterns": [],
    "tags": ["consommation"],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de prescription pour agir contre l'assureur : 2 ans (L.114-1 Code des assurances)." },
    "todo": [
      "Contester par écrit auprès du service réclamations de l'assureur.",
      "Demander une contre-expertise si vous contestez l'évaluation du sinistre.",
      "Saisir le médiateur de l'assurance (gratuit) si refus persistant.",
      "Attention au délai de prescription de 2 ans — agir vite."
    ],
    "timeline": [
      { "id": "J0", "label": "Réclamation écrite au service client de l'assureur." },
      { "id": "J15", "label": "Demander une contre-expertise si sinistre sous-évalué." },
      { "id": "J30", "label": "Saisir le médiateur de l'assurance si refus." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  IMPÔTS — cas manquants
  // ══════════════════════════════════════════════
  {
    "id": "tax_plus_value_immo",
    "label": "Impôts — Plus-value immobilière",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": ["plus-value immobilière","plus value vente maison","imposition vente immobilier","exonération plus-value","calcul plus-value immo"],
    "patterns": [],
    "tags": ["impots"],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": { "kind": "admin_deadline", "hint": "La plus-value est imposée lors de la vente — vérifier les cas d'exonération avant la transaction." },
    "todo": [
      "Vérifier si votre situation ouvre droit à une exonération (résidence principale, durée de détention…).",
      "Calculer la plus-value nette imposable (prix vente - prix achat - frais).",
      "La déclaration est faite par le notaire lors de la vente.",
      "Si erreur dans le calcul : contester auprès du SIP dans les 2 ans."
    ],
    "timeline": [
      { "id": "J0", "label": "Vérifier les cas d'exonération avant la vente." },
      { "id": "J30", "label": "Notaire calcule et déclare la plus-value lors de l'acte." }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_taxe_fonciere_hab",
    "label": "Impôts — Taxe foncière / taxe d'habitation résidence secondaire",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": ["taxe foncière","taxe d'habitation","résidence secondaire taxe","contester taxe foncière","erreur taxe foncière","dégrèvement taxe"],
    "patterns": [],
    "tags": ["impots"],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de réclamation : 31 décembre de l'année suivant la mise en recouvrement." },
    "todo": [
      "Vérifier les bases de calcul (surface, catégorie, valeur locative) sur impots.gouv.fr.",
      "Contester via votre espace particulier impots.gouv.fr ou par courrier au SIP.",
      "Demander un dégrèvement si revenus modestes ou occupation partielle.",
      "Délai de réclamation : au plus tard le 31 décembre N+1."
    ],
    "timeline": [
      { "id": "J0", "label": "Vérifier les bases et identifier l'erreur." },
      { "id": "J7", "label": "Réclamation en ligne ou courrier au SIP." },
      { "id": "J31/12", "label": "Délai limite de réclamation (31 décembre N+1)." }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_non_resident",
    "label": "Impôts — Situation fiscale expatrié / non-résident",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": ["expatrié impôts","non résident fiscal","impôts travail étranger","convention fiscale","double imposition","impôts france étranger"],
    "patterns": [],
    "tags": ["impots"],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": { "kind": "admin_deadline", "hint": "Vérifier la résidence fiscale et les obligations déclaratives selon le pays." },
    "todo": [
      "Déterminer votre résidence fiscale (critères : foyer, activité principale, centre des intérêts).",
      "Vérifier la convention fiscale entre la France et le pays concerné.",
      "Déclarer vos revenus de source française au Centre des impôts des non-résidents.",
      "En cas de double imposition : faire une réclamation en invoquant la convention."
    ],
    "timeline": [
      { "id": "J0", "label": "Déterminer la résidence fiscale et les obligations." },
      { "id": "J30", "label": "Contacter le Centre des impôts des non-résidents (DINR)." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  CAF — cas manquants
  // ══════════════════════════════════════════════
  {
    "id": "caf_changement_situation",
    "label": "CAF — Changement de situation familiale (séparation, divorce, naissance)",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": ["changement situation caf","déclarer séparation caf","déclarer divorce caf","naissance caf","déménagement caf","changer adresse caf"],
    "patterns": [],
    "tags": ["caf"],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": { "kind": "admin_deadline", "hint": "À déclarer dans le mois suivant le changement — risque de trop-perçu sinon." },
    "todo": [
      "Déclarer le changement sur caf.fr dans le mois suivant l'événement.",
      "Mettre à jour : composition du foyer, revenus, adresse.",
      "Conserver les justificatifs (acte de naissance, jugement de divorce, bail…).",
      "Si trop-perçu suite à un retard de déclaration : demander une remise gracieuse en invoquant la bonne foi."
    ],
    "timeline": [
      { "id": "J0", "label": "Déclarer le changement sur caf.fr." },
      { "id": "J7", "label": "Envoyer les justificatifs si demandés." },
      { "id": "J30", "label": "Vérifier la mise à jour des droits." }
    ],
    "neg_keywords": []
  },
  {
    "id": "caf_garde_alternee",
    "label": "CAF — Garde alternée et partage des allocations",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": ["garde alternée caf","partage allocations","allocations divorce garde","qui touche les allocations","résidence alternée caf"],
    "patterns": [],
    "tags": ["caf"],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": { "kind": "none", "hint": "Le partage des allocations en garde alternée n'est pas automatique — il faut en faire la demande." },
    "todo": [
      "En garde alternée, les allocations familiales peuvent être partagées à 50/50 (demande conjointe).",
      "APL : versée au parent chez qui l'enfant réside principalement.",
      "Déclarer la garde alternée à la CAF avec le jugement ou l'accord parental.",
      "En cas de désaccord entre parents : c'est le juge aux affaires familiales qui tranche."
    ],
    "timeline": [
      { "id": "J0", "label": "Déclarer la garde alternée à la CAF avec justificatifs." },
      { "id": "J15", "label": "Demande de partage si accord des deux parents." }
    ],
    "neg_keywords": []
  },

  // ══════════════════════════════════════════════
  //  LOGEMENT — cas manquants
  // ══════════════════════════════════════════════
  {
    "id": "housing_charges_contest",
    "label": "Logement — Charges locatives contestées",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": ["charges locatives","régularisation charges","charges trop élevées","justificatifs charges","charges locataire","trop payé charges"],
    "patterns": [],
    "tags": ["logement"],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": { "kind": "legal_deadline", "hint": "Délai de régularisation des charges : chaque année. Droit de contestation : 3 ans." },
    "todo": [
      "Demander par écrit les justificatifs des charges (le bailleur a l'obligation de les fournir).",
      "Vérifier que les charges sont bien récupérables (liste légale — décret du 26/08/1987).",
      "Contester par courrier recommandé avec les éléments de calcul.",
      "Saisir la commission départementale de conciliation (CDC) gratuitement en cas de litige."
    ],
    "timeline": [
      { "id": "J0", "label": "Demander les justificatifs des charges par écrit." },
      { "id": "J15", "label": "Analyser et contester les charges non justifiées." },
      { "id": "J30", "label": "Saisir la CDC si pas de réponse satisfaisante." }
    ],
    "neg_keywords": []
  },
  {
    "id": "housing_copropriete",
    "label": "Logement — Copropriété : charges, assemblée, travaux",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": ["copropriété","syndic","charges copropriété","assemblée générale","vote travaux","syndicat copropriétaires","litige syndic"],
    "patterns": [],
    "tags": ["logement"],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": { "kind": "legal_deadline", "hint": "Contestation d'une décision d'AG : 2 mois après notification du PV." },
    "todo": [
      "Demander le procès-verbal de l'assemblée générale dans les 2 semaines suivant le vote.",
      "Contester une décision d'AG dans les 2 mois par voie judiciaire (tribunal judiciaire).",
      "Pour litige avec le syndic : saisir le médiateur de la consommation ou le tribunal.",
      "Vérifier que les comptes de la copropriété vous sont bien communiqués (droit légal)."
    ],
    "timeline": [
      { "id": "J0", "label": "Récupérer le PV d'AG et identifier la décision contestée." },
      { "id": "J30", "label": "Mise en demeure du syndic si nécessaire." },
      { "id": "J60", "label": "Délai maximum pour contester une décision d'AG (2 mois)." }
    ],
    "neg_keywords": []
  }

]);
