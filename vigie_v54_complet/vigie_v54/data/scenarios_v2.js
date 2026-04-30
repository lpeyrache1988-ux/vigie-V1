window.VIGIE_SCENARIOS = [
{
  id: "tax_rectif_l64",
  label: "Impôts — Proposition de rectification / abus de droit (L64)",
  flow_id: "tax_rectif",
  pack_id: "tax_rectif",
  keywords_any: ["proposition de rectification", "L64", "abus de droit", "l.64", "LPF L64", "L64A"],
  patterns: [/proposition de rectification/i, /\\bL\\s*64\\b/i, /abus de droit/i],
  tags: ["impots", "controle", "l64"],
  checklist_id: "impots_rectif",
  sources_key: "tax_rectif",
  urgency: {"kind": "legal_deadline", "hint": "Délai de réponse souvent court après réception (vérifier la date de réception et les mentions du courrier)."},
  todo: ["Retrouver la date de réception (enveloppe, AR, espace impots.gouv).", "Noter le délai indiqué (observations / prorogation) et le canal de réponse.", "Constituer un dossier de preuves (chronologie + pièces classées).", "Rédiger des observations structurées + demander prorogation si nécessaire.", "Envoyer via le canal indiqué (messagerie sécurisée / LRAR) et conserver preuve."],
  timeline: [{"id": "J0", "label": "Lire le courrier + extraire délais/montants/points contestés"}, {"id": "J2", "label": "Monter le dossier de preuves + chronologie"}, {"id": "J7", "label": "Rédiger/valider les observations + demande de prorogation si besoin"}, {"id": "J10", "label": "Envoyer + archiver preuve + préparer échanges contradictoires"}],
  neg_keywords: ["amende", "antai", "caf", "cpam", "ameli", "banque"]
},
{
  id: "tax_rectif_generic",
  label: "Impôts — Proposition de rectification (hors L64)",
  flow_id: "tax_rectif",
  pack_id: "tax_rectif",
  keywords_any: ["proposition de rectification", "rectification", "demande de justifications impots", "contrôle sur pièces", "demande d'éclaircissements"],
  patterns: [/proposition de rectification/i, /demande\\s+de\\s+justific/i, /contr[oô]le\\s+sur\\s+pi[eè]ces/i],
  tags: ["impots", "controle"],
  checklist_id: "tax_rectif",
  sources_key: "tax_rectif",
  urgency: {"kind": "legal_deadline", "hint": "Vérifier le délai de réponse indiqué (souvent 30 jours, parfois prorogeable)."},
  todo: ["Identifier précisément ce qui est contesté (points/annexes/montants).", "Noter le délai et demander une prorogation si nécessaire.", "Répondre point par point avec justificatifs et explications.", "Conserver toutes preuves d’envoi et copies (PDF)."],
  timeline: [{"id": "J0", "label": "Analyser le courrier + extraire questions/délais"}, {"id": "J3", "label": "Rassembler pièces et rédiger réponse point par point"}, {"id": "J7", "label": "Envoyer réponse / demander délai"}, {"id": "J20", "label": "Relancer si besoin / préparer suite"}],
  neg_keywords: ["caf", "cpam", "ameli", "banque", "antai", "amende"]
},
{
  id: "tax_penalty",
  label: "Impôts — Pénalités / majorations",
  flow_id: "tax_rectif",
  pack_id: "tax_rectif",
  keywords_any: ["majoration", "pénalité", "penalite", "10%", "40%", "80%", "intérêts de retard", "interets de retard"],
  patterns: [/majoration/i, /p[ée]nalit/i, /int[ée]r[eê]ts?\\s+de\\s+retard/i],
  tags: ["impots", "penalites"],
  checklist_id: "impots_base",
  sources_key: "impots_reclamation",
  urgency: {"kind": "admin_deadline", "hint": "Les délais dépendent de l’avis/notification : noter la date de réception et l’échéance."},
  todo: ["Vérifier le motif exact (retard, mauvaise foi, manœuvres) et la base juridique mentionnée.", "Rassembler preuves de bonne foi / circonstances (démarches, erreurs matérielles).", "Faire une réclamation sur le bien‑fondé si erreur de fait/droit.", "Demander une remise gracieuse si pertinent (situation, justification)."],
  timeline: [{"id": "J0", "label": "Identifier motif + échéance + montants"}, {"id": "J2", "label": "Préparer preuves + rédaction (réclamation/remise)"}, {"id": "J7", "label": "Dépôt via messagerie sécurisée / courrier"}, {"id": "J30", "label": "Suivi + médiation si blocage"}],
  neg_keywords: ["banque", "caf", "antai", "amende"]
},
{
  id: "tax_pas",
  label: "Impôts — Prélèvement à la source (PAS)",
  flow_id: "tax_rectif",
  pack_id: "tax_rectif",
  keywords_any: ["prélèvement à la source", "prelevement a la source", "pas", "taux", "acompte contemporain"],
  patterns: [/pr[ée]l[ée]vement.*source/i, /\\bPAS\\b/],
  tags: ["impots", "pas"],
  checklist_id: "impots_base",
  sources_key: "impots_contacts",
  urgency: {"kind": "admin_deadline", "hint": "Agir rapidement pour éviter des prélèvements inadaptés (mise à jour du taux/situation)."},
  todo: ["Vérifier le taux appliqué (espace impots.gouv) et l’origine (DGFiP/employeur).", "Mettre à jour la situation/revenus estimés dans l’espace en ligne.", "Contacter via messagerie sécurisée si anomalie persistante.", "Conserver bulletins/avis et captures des modifications."],
  timeline: [{"id": "J0", "label": "Contrôler taux + historique"}, {"id": "J1", "label": "Mettre à jour taux/situation"}, {"id": "J7", "label": "Message au SIP si incohérence"}, {"id": "J30", "label": "Vérifier impact sur prélèvements"}],
  neg_keywords: ["banque", "cb"]
},
{
  id: "tax_avis",
  label: "Impôts — Avis d’imposition / taxe (contester)",
  flow_id: "tax_rectif",
  pack_id: "tax_rectif",
  keywords_any: ["avis d'imposition", "taxe foncière", "taxe d'habitation", "cfe", "cotisation", "réclamation impôts"],
  patterns: [/avis d['’]imposition/i, /taxe fonci/i, /taxe d['’]habitation/i, /\\bCFE\\b/i],
  tags: ["impots", "avis"],
  checklist_id: "impots_base",
  sources_key: "impots_reclamation",
  urgency: {"kind": "admin_deadline", "hint": "La réclamation est enfermée dans des délais : noter l’année et l’avis concerné."},
  todo: ["Identifier l’impôt/année/avis contesté et le motif (base, exonération, erreur).", "Rassembler justificatifs (revenus, situation, valeur locative, etc.).", "Déposer une réclamation motivée (en ligne ou courrier).", "Demander sursis de paiement si applicable (selon cas)."],
  timeline: [{"id": "J0", "label": "Identifier avis + motif + échéance"}, {"id": "J3", "label": "Préparer justificatifs + réclamation"}, {"id": "J7", "label": "Déposer réclamation + conserver preuve"}, {"id": "J45", "label": "Suivi / médiateur si blocage"}],
  neg_keywords: ["amende", "antai", "caf", "banque"]
},
{
  id: "tax_declaration_error",
  label: "Impôts — Erreur de déclaration / correction",
  flow_id: "tax_declaration",
  pack_id: "tax_declaration",
  keywords_any: ["erreur déclaration", "corriger déclaration", "rectifier déclaration", "déclaration revenus", "declaration revenus"],
  patterns: [/erreur\\s+d[ée]claration/i, /(corriger|rectifier).*(d[ée]claration)/i],
  tags: ["impots", "declaration"],
  checklist_id: "impots_base",
  sources_key: "impots_contacts",
  urgency: {"kind": "admin_deadline", "hint": "Selon période : correction en ligne (si ouverte) ou réclamation. Noter l’année."},
  todo: ["Identifier l’erreur (revenus, charges, parts, PAS).", "Corriger via le service en ligne si disponible, sinon déposer une réclamation.", "Joindre justificatifs et explications claires.", "Conserver copie PDF + preuve d’envoi."],
  timeline: [{"id": "J0", "label": "Identifier erreur + année"}, {"id": "J2", "label": "Corriger en ligne / préparer réclamation"}, {"id": "J7", "label": "Envoyer + archiver preuves"}, {"id": "J30", "label": "Suivi + relance si nécessaire"}],
  neg_keywords: ["caf", "banque", "antai"]
},
{
  id: "tax_refund",
  label: "Impôts — Remboursement attendu",
  flow_id: "tax_declaration",
  pack_id: "tax_declaration",
  keywords_any: ["remboursement impôts", "trop perçu impôts", "virement dgfiP", "remboursement dgfip"],
  patterns: [/remboursement.*imp[ôo]ts?/i, /trop\\s+per[çc]u.*imp[ôo]ts?/i],
  tags: ["impots", "remboursement"],
  checklist_id: "impots_base",
  sources_key: "impots_contacts",
  urgency: {"kind": "none", "hint": "Vérifier d’abord l’espace impots.gouv et le RIB enregistré."},
  todo: ["Vérifier espace impots.gouv (paiements/remboursements) et messages.", "Contrôler le RIB enregistré et l’adresse.", "Envoyer un message via la messagerie sécurisée (SIP).", "Conserver captures et avis."],
  timeline: [{"id": "J0", "label": "Contrôler espace + RIB"}, {"id": "J3", "label": "Message SIP si anomalie"}, {"id": "J14", "label": "Relance"}, {"id": "J30", "label": "Escalade médiateur si blocage"}],
  neg_keywords: ["banque fraude", "cb", "caf"]
},
{
  id: "caf_trop_percu",
  label: "CAF — Trop-perçu / dette",
  flow_id: "caf",
  pack_id: "caf",
  keywords_any: ["caf", "trop-perçu", "trop perçu", "indu", "créance", "recouvrement", "rembourser"],
  patterns: [/\\bcaf\\b/i, /(trop[-\\s]?per[çc]u|indu|cr[ée]ance|recouvrement)/i],
  tags: ["caf", "aides", "trop_percu"],
  checklist_id: "caf_decision",
  sources_key: "caf_contester",
  urgency: {"kind": "admin_deadline", "hint": "Vérifier le délai de contestation sur la notification (CRA/recours)."},
  todo: ["Demander le détail du calcul (périodes, ressources retenues).", "Vérifier déclarations et changements de situation.", "Si erreur : réclamation motivée + pièces.", "Si dette réelle : remise gracieuse et/ou échéancier.", "Conserver accusés et preuves de dépôt."],
  timeline: [{"id": "J0", "label": "Lire notification + noter délai"}, {"id": "J2", "label": "Demander détail du calcul / pièces"}, {"id": "J7", "label": "Envoyer réclamation/remise/échéancier"}, {"id": "J30", "label": "Suivi CRA / médiation / Défenseur des droits"}],
  neg_keywords: ["impôts", "antai", "amende", "banque"]
},
{
  id: "caf_suspension",
  label: "CAF — Aide suspendue / droit coupé",
  flow_id: "caf",
  pack_id: "caf",
  keywords_any: ["caf", "suspendu", "suspension", "radiation", "apl supprimée", "rsa suspendu", "prime d'activité suspendue", "dossier incomplet caf"],
  patterns: [/\\bcaf\\b/i, /(suspend|supprim|radiat|coup[ée]|dossier\\s+incomplet)/i],
  tags: ["caf", "aides", "suspension"],
  checklist_id: "caf_decision",
  sources_key: "caf_contester",
  urgency: {"kind": "admin_deadline", "hint": "Agir vite : fournir pièces manquantes et contester si décision injustifiée."},
  todo: ["Identifier le motif (pièce manquante, contrôle, incohérence).", "Vérifier l’espace CAF / messages et récupérer la liste exacte des pièces attendues.", "Déposer les justificatifs immédiatement (preuve de dépôt).", "Si décision injustifiée : réclamation écrite (faits + pièces).", "Demander rendez-vous / médiation si blocage."],
  timeline: [{"id": "J0", "label": "Identifier motif + pièces manquantes"}, {"id": "J1", "label": "Déposer justificatifs + preuve"}, {"id": "J7", "label": "Réclamation si nécessaire"}, {"id": "J30", "label": "Suivi + escalade (médiation/DDD)"}],
  neg_keywords: ["impôts", "banque", "antai"]
},
{
  id: "bank_card_fraud",
  label: "Banque — Fraude CB / opération non autorisée",
  flow_id: "banque",
  pack_id: "banque_fraude",
  keywords_any: ["fraude", "cb", "carte", "paiement non autorisé", "transaction non autorisée", "phishing", "arnaque bancaire"],
  patterns: [/(paiement|transaction).*(non\\s+autoris)/i, /\\bfraude\\b/i, /\\bcb\\b/i],
  tags: ["banque", "fraude", "urgence"],
  checklist_id: "banque_base",
  sources_key: "banque_fraude",
  urgency: {"kind": "immediate", "hint": "Opposition immédiate puis contestation écrite dans les délais."},
  todo: ["Faire opposition immédiatement (carte et accès en ligne).", "Sécuriser comptes (mots de passe, 2FA, appareils).", "Contester par écrit les opérations non autorisées (preuve).", "Déclarer (Perceval) / plainte si nécessaire selon le cas.", "Saisir médiateur bancaire si refus."],
  timeline: [{"id": "T0", "label": "0–30 min : opposition + sécurisation"}, {"id": "J1", "label": "J+1 : contestation écrite + preuves"}, {"id": "J7", "label": "J+7 : relance / médiateur si refus"}, {"id": "J30", "label": "J+30 : escalade (médiation/justice)"}],
  neg_keywords: ["impôts", "caf", "antai", "amende"]
},
{
  id: "bank_phishing_prelev",
  label: "Banque — Phishing / prélèvements inconnus",
  flow_id: "banque",
  pack_id: "banque_fraude",
  keywords_any: ["phishing bancaire", "phishing", "hameçonnage", "prélèvements inconnus", "prelevements inconnus", "prélèvement inconnu", "prelevement inconnu", "banque"],
  patterns: [/phishing|hame[çc]onnage/i, /pr[ée]l[ée]v|prelev/i],
  tags: ["banque", "fraude", "urgence"],
  checklist_id: "banque_base",
  sources_key: "banque_fraude",
  urgency: {"kind": "immediate", "hint": "Opposition/sécurisation immédiate puis contestation écrite."},
  todo: ["Sécuriser l'accès (mots de passe, 2FA).", "Faire opposition si nécessaire.", "Contester les prélèvements/ops non autorisés par écrit.", "Signaler (Perceval) et déposer plainte si nécessaire.", "Médiateur bancaire si refus."],
  timeline: [{"id": "T0", "label": "0–30 min : sécuriser + opposition"}, {"id": "J1", "label": "J+1 : contestation écrite"}, {"id": "J7", "label": "J+7 : relance/médiateur"}],
  neg_keywords: ["impôts", "caf", "antai", "amende"]
},
{
  id: "bank_virement_fraud",
  label: "Banque — Virement frauduleux",
  flow_id: "banque",
  pack_id: "banque_fraude",
  keywords_any: ["virement frauduleux", "virement", "fraude", "banque"],
  patterns: [/virement/i, /fraud/i],
  tags: ["banque", "fraude", "urgence"],
  checklist_id: "banque_base",
  sources_key: "banque_fraude",
  urgency: {"kind": "immediate", "hint": "Agir vite : contacter la banque et documenter."},
  todo: ["Contacter la banque immédiatement (urgence).", "Demander blocage/annulation si possible.", "Envoyer contestation écrite avec preuves.", "Plainte/signalement si nécessaire.", "Médiateur bancaire en cas de refus."],
  timeline: [{"id": "T0", "label": "Immédiat : appeler la banque"}, {"id": "J1", "label": "Écrit + preuves"}, {"id": "J7", "label": "Relance/médiation"}],
  neg_keywords: ["impôts", "caf", "antai", "amende"]
},
{
  id: "bank_fees",
  label: "Banque — Frais abusifs",
  flow_id: "banque",
  pack_id: "banque_frais",
  keywords_any: ["frais abusifs", "agios", "commission d'intervention", "incidents", "frais bancaires"],
  patterns: [/(frais|agios|commission)/i],
  tags: ["banque", "frais"],
  checklist_id: "banque_base",
  sources_key: "banque_litige",
  urgency: {"kind": "none", "hint": "Documenter précisément les frais et demander le geste commercial/rectification."},
  todo: ["Lister les frais contestés (dates, montants, libellés) + relevés.", "Vérifier conventions/plaquettes tarifaires applicables.", "Écrire au service réclamation (demande chiffrée, motivée).", "Saisir le médiateur bancaire si refus/absence de réponse."],
  timeline: [{"id": "J0", "label": "Extraire relevés + liste des frais"}, {"id": "J3", "label": "Réclamation écrite + demande remboursement"}, {"id": "J30", "label": "Relance / médiateur"}, {"id": "J60", "label": "Association conso / action si besoin"}],
  neg_keywords: ["impôts", "caf"]
},
{
  id: "bank_overindebt",
  label: "Banque — Surendettement (Banque de France)",
  flow_id: "banque",
  pack_id: "banque_surendettement",
  keywords_any: ["surendettement", "dossier bdf", "banque de france", "commission de surendettement"],
  patterns: [/surendett/i, /banque de france/i],
  tags: ["banque", "surendettement"],
  checklist_id: "banque_base",
  sources_key: "banque",
  urgency: {"kind": "admin_deadline", "hint": "Évaluer l’urgence (saisies/impayés) et déposer un dossier complet."},
  todo: ["Lister toutes les dettes (montant, créancier, retard).", "Préparer budget (revenus/charges) + justificatifs.", "Déposer un dossier de surendettement (Banque de France).", "Informer/temporiser avec créanciers si nécessaire."],
  timeline: [{"id": "J0", "label": "Inventaire dettes + budget"}, {"id": "J7", "label": "Préparer dossier + justificatifs"}, {"id": "J14", "label": "Dépôt dossier BDF"}, {"id": "J30", "label": "Suivi et mesures"}],
  neg_keywords: ["impôts", "caf"]
},
{
  id: "housing_unpaid",
  label: "Logement — Loyers impayés",
  flow_id: "logement",
  pack_id: "logement_impayes",
  keywords_any: ["loyer impayé", "loyers impayés", "commandement de payer", "expulsion", "huissier"],
  patterns: [/(impay|commandement de payer|expuls|huissier)/i],
  tags: ["logement", "impayes", "urgence"],
  checklist_id: "logement_base",
  sources_key: "logement",
  urgency: {"kind": "legal_deadline", "hint": "Délais très courts en cas de commandement/assignation : agir vite."},
  todo: ["Lire le commandement/acte : dates, montants, délai.", "Contacter bailleur et proposer un plan (écrit).", "Vérifier aides possibles (CAF, FSL, action sociale).", "Consulter ADIL / point-justice en urgence si procédure engagée."],
  timeline: [{"id": "J0", "label": "Analyser acte + délais"}, {"id": "J2", "label": "Négociation/plan écrit + preuves"}, {"id": "J7", "label": "Dépôt demandes aides + dossier"}, {"id": "J30", "label": "Suivi procédure / défense"}],
  neg_keywords: ["impôts", "banque"]
},
{
  id: "housing_dispute",
  label: "Logement — Litige bailleur/locataire",
  flow_id: "logement",
  pack_id: "logement_litige",
  keywords_any: ["dépôt de garantie", "depot de garantie", "état des lieux", "retenue", "travaux", "charges locatives", "propriétaire ne répond pas"],
  patterns: [/(d[ée]p[ôo]t de garantie|[ée]tat des lieux|retenue|charges)/i],
  tags: ["logement", "litige"],
  checklist_id: "logement_base",
  sources_key: "logement_depot_garantie",
  urgency: {"kind": "none", "hint": "Documenter le litige (photos, EDL, échanges) puis mise en demeure."},
  todo: ["Rassembler bail, état des lieux, photos, échanges, quittances.", "Chiffrer la demande (dépôt, travaux, charges) et la formuler clairement.", "Envoyer une mise en demeure (LRAR) au bailleur.", "Saisir ADIL / conciliateur si blocage."],
  timeline: [{"id": "J0", "label": "Rassembler pièces"}, {"id": "J3", "label": "Mise en demeure"}, {"id": "J15", "label": "Conciliateur/ADIL"}, {"id": "J45", "label": "Voie judiciaire si nécessaire"}],
  neg_keywords: ["impôts", "caf"]
},
{
  id: "housing_insalubre",
  label: "Logement — Insalubrité / logement indécent",
  flow_id: "logement",
  pack_id: "logement_litige",
  keywords_any: ["insalubre", "logement indécent", "moisissure", "humidité", "chauffage en panne", "danger"],
  patterns: [/(insalubr|ind[ée]cent|moisiss|humidit|danger)/i],
  tags: ["logement", "insalubrite"],
  checklist_id: "logement_base",
  sources_key: "logement_insalubre",
  urgency: {"kind": "admin_deadline", "hint": "Si risque santé/sécurité : signaler rapidement (mairie/ARS) et documenter."},
  todo: ["Documenter (photos datées, mesures, certificats si besoin).", "Informer bailleur par écrit et demander réparation sous délai.", "Contacter la mairie / service hygiène si danger persistant.", "Consulter ADIL / association logement."],
  timeline: [{"id": "J0", "label": "Photos + preuves + courrier bailleur"}, {"id": "J7", "label": "Relance + signalement mairie si besoin"}, {"id": "J14", "label": "Constat/visite + dossier"}, {"id": "J30", "label": "Suivi + voies de recours"}],
  neg_keywords: ["impôts"]
},
{
  id: "fine_contest",
  label: "Amende — Contester (ANTAI/OMP/FPS)",
  flow_id: "justice",
  pack_id: "justice_recours_admin",
  // Guard: éviter faux positifs (ex: "cOMPe" contient "omp")
  // Exige explicitement une référence santé (ameli/cpam/assurance maladie) + un motif
  min_hits: 3,
  keywords_any: ["amende", "contravention", "pv", "antai", "fps", "stationnement", "radar", "contester amende"],
  patterns: [/(amende|contravention|\\bpv\\b|antai|\\bfps\\b)/i, /contest/i],
  tags: ["amende", "contestation"],
  checklist_id: "amende_base",
  sources_key: "amendes",
  urgency: {"kind": "admin_deadline", "hint": "Respecter le délai de contestation (souvent 45 jours selon type) : noter la date de réception."},
  todo: ["Identifier le type d’amende (ANTAI, FPS, transports) et le délai.", "Rassembler preuves (photos, tickets, justificatifs).", "Déposer contestation selon la procédure (en ligne/courrier).", "Conserver preuve d’envoi et suivre la réponse."],
  timeline: [{"id": "J0", "label": "Lire avis + noter délai + références"}, {"id": "J3", "label": "Préparer preuves + argumentaire"}, {"id": "J7", "label": "Déposer contestation"}, {"id": "J30", "label": "Suivi / relance / recours"}],
  neg_keywords: ["impôts rectification", "caf"]
},
{
  id: "fine_majoration",
  label: "Amende — Majoration / saisie",
  flow_id: "justice",
  pack_id: "justice_recours_admin",
  keywords_any: ["amende majorée", "majoration", "saisie trésor", "avis à tiers détenteur", "atd amende"],
  patterns: [/amende.*major/i, /avis\\s+[àa]\\s+tiers\\s+d[ée]tenteur/i, /\\bATD\\b/i],
  tags: ["amende", "majoration", "urgence"],
  checklist_id: "amende_base",
  sources_key: "amendes",
  urgency: {"kind": "legal_deadline", "hint": "Agir vite : demander explications, contester si possible, ou négocier un délai/échéancier."},
  todo: ["Vérifier l’historique (avis initial, relances) et si vous avez été correctement notifié.", "Contacter le centre des finances publiques / Trésor pour obtenir le détail.", "Déposer une contestation/recours si motif valable (notification, usurpation, erreur).", "Demander un échéancier si la dette est due."],
  timeline: [{"id": "J0", "label": "Récupérer détail + références"}, {"id": "J2", "label": "Contacter Trésor + demander suspension si contestation"}, {"id": "J7", "label": "Recours/échéancier"}, {"id": "J30", "label": "Suivi"}],
  neg_keywords: ["impôts rectification"]
},
{
  id: "scam_report",
  label: "Arnaques — Signaler (phishing / faux sites)",
  flow_id: "arnaques",
  pack_id: "arnaques_signaler",
  keywords_any: ["arnaque", "escroquerie", "phishing", "usurpation", "faux site", "sms impôts", "faux caf", "signalement"],
  patterns: [/(arnaque|escroquer|phishing|usurp|faux\\s+site)/i],
  tags: ["arnaques", "signalement"],
  checklist_id: "arnaques_base",
  sources_key: "arnaques",
  urgency: {"kind": "immediate", "hint": "Sécuriser vos comptes si données communiquées, puis signaler."},
  todo: ["Conserver preuves (SMS, mails, URLs, captures).", "Changer mots de passe + activer 2FA si fuite.", "Contacter banque si paiement/données bancaires.", "Signaler (SignalConso / cybermalveillance / plateforme adaptée)."],
  timeline: [{"id": "T0", "label": "0–30 min : sécurisation comptes"}, {"id": "J1", "label": "J+1 : signalement + dépôt de plainte si préjudice"}, {"id": "J7", "label": "Surveillance comptes/identité"}, {"id": "J30", "label": "Suivi"}],
  neg_keywords: []
},
{
  id: "scam_identity",
  label: "Arnaques — Usurpation d’identité",
  flow_id: "arnaques",
  pack_id: "arnaques_identite",
  keywords_any: ["usurpation d'identité", "usurpation identité", "compte ouvert à mon nom", "faux crédit", "faux abonnement"],
  patterns: [/usurpation\\s+d['’]?identit/i, /ouvert\\s+[àa]\\s+mon\\s+nom/i],
  tags: ["arnaques", "identite"],
  checklist_id: "arnaques_base",
  sources_key: "arnaques",
  urgency: {"kind": "immediate", "hint": "Agir vite : plainte, alertes, sécurisation bancaire et administrative."},
  todo: ["Rassembler preuves (contrats, courriers, emails).", "Déposer plainte (usurpation d’identité) et conserver récépissé.", "Alerter banques/organismes concernés et demander fermeture/rectification.", "Surveiller identité (alertes, consultation BDF si besoin)."],
  timeline: [{"id": "J0", "label": "Collecte preuves + signalement"}, {"id": "J1", "label": "Plainte + demandes de fermeture"}, {"id": "J7", "label": "Suivi organismes"}, {"id": "J30", "label": "Surveillance renforcée"}],
  neg_keywords: []
},
{
  id: "ameli_refus",
  label: "Santé — CPAM/Ameli refus de remboursement",
  flow_id: "ameli",
  pack_id: "ameli",
  // Guard: "remboursement" seul ne suffit pas (évite confusion CAF/banque)
  min_hits: 3,
  keywords_any: ["ameli", "cpam", "assurance maladie", "refus", "remboursement", "indu cpam", "trop perçu cpam", "cra cpam"],
  patterns: [/(ameli|cpam)/i, /(refus|rembours|indu|trop\\s+per[çc]u)/i],
  tags: ["sante", "ameli"],
  checklist_id: "sante_cpam_base",
  sources_key: "ameli_recours",
  urgency: {"kind": "admin_deadline", "hint": "Respecter le délai de recours (CRA) indiqué sur la décision."},
  todo: ["Identifier la décision contestée et le motif (code acte, date).", "Rassembler pièces (décompte, facture, ordonnance si pertinent).", "Faire une réclamation puis saisir la CRA si nécessaire (écrit).", "Conserver preuves et suivre la réponse."],
  timeline: [{"id": "J0", "label": "Lire décision + noter délai"}, {"id": "J3", "label": "Rassembler pièces + réclamation"}, {"id": "J15", "label": "CRA si rejet/absence de réponse"}, {"id": "J60", "label": "Médiation/recours selon situation"}],
  neg_keywords: ["impôt", "taxe"]
},
{
  id: "ft_radiation",
  label: "France Travail — Radiation / sanction",
  flow_id: "france_travail",
  pack_id: "france_travail",
  keywords_any: ["france travail", "pole emploi", "radiation", "sanction", "suppression allocation", "avertissement avant radiation"],
  patterns: [/(france\\s+travail|p[oô]le\\s+emploi)/i, /radiat|sanction|avertissement/i],
  tags: ["france_travail", "emploi"],
  checklist_id: "justice_base",
  sources_key: "france_travail_recours",
  urgency: {"kind": "admin_deadline", "hint": "Les délais de réponse/recours sont courts : répondre immédiatement aux courriers/notifications."},
  todo: ["Lire la notification (motif, date, délai de réponse).", "Rassembler preuves (recherches, convocations, échanges).", "Répondre/contester dans le délai (écrit, structuré).", "Demander un rendez-vous et suivre via l’espace personnel."],
  timeline: [{"id": "J0", "label": "Analyser notification + délai"}, {"id": "J2", "label": "Préparer preuves + réponse"}, {"id": "J7", "label": "Envoyer contestation/observations"}, {"id": "J30", "label": "Suivi + médiation/recours"}],
  neg_keywords: ["caf"]
},
{
  id: "vie_passeport_adulte",
  label: "Vie civile — Passeport adulte",
  flow_id: "passport",
  pack_id: "passport",
  keywords_any: ["passeport adulte", "renouvellement passeport", "passeport rdv mairie"],
  patterns: [/passeport/i],
  tags: ["vie_civile", "passeport"],
  checklist_id: "passport_adult",
  sources_key: "passport",
  urgency: {"kind": "none", "hint": "Anticiper les délais de RDV en mairie (souvent plusieurs semaines)."},
  todo: ["Faire la pré-demande ANTS si possible.", "Prendre rendez-vous en mairie (dépôt du dossier).", "Préparer le dossier (photo, justificatifs, timbre si nécessaire).", "Déposer le dossier et suivre la fabrication."],
  timeline: [{"id": "S0", "label": "Pré-demande + RDV"}, {"id": "S1", "label": "Dossier complet + dépôt"}, {"id": "S3", "label": "Suivi fabrication"}, {"id": "S6", "label": "Retrait en mairie"}],
  neg_keywords: ["mineur"]
},
{
  id: "vie_passeport_mineur",
  label: "Vie civile — Passeport mineur",
  flow_id: "passport",
  pack_id: "passport",
  keywords_any: ["passeport mineur", "passeport enfant", "passeport bébé"],
  patterns: [/passeport/i, /mineur|enfant|b[ée]b[ée]/i],
  tags: ["vie_civile", "passeport", "mineur"],
  checklist_id: "passport_minor",
  sources_key: "passport",
  urgency: {"kind": "none", "hint": "Prévoir autorité parentale et justificatifs du parent."},
  todo: ["Pré-demande ANTS si possible (au nom du mineur).", "Rassembler pièces (livret/acte, autorité parentale, justificatifs).", "Prendre RDV mairie et venir avec le mineur (empreintes selon âge).", "Suivre fabrication puis retrait."],
  timeline: [{"id": "S0", "label": "Pré-demande + RDV"}, {"id": "S1", "label": "Dossier mineur + dépôt"}, {"id": "S3", "label": "Suivi fabrication"}, {"id": "S6", "label": "Retrait en mairie"}],
  neg_keywords: []
},
{
  id: "vie_acte_mariage",
  label: "Vie civile — Acte de mariage (copie)",
  flow_id: "vie_civile",
  pack_id: null,
  keywords_any: ["acte de mariage", "copie acte mariage", "extrait mariage"],
  patterns: [/acte\s+de\s+mariage/i],
  tags: ["vie_civile", "actes"],
  checklist_id: null,
  sources_key: "vie_actes",
  urgency: {"kind": "none", "hint": "Prévoir un délai d'obtention selon la mairie/plateforme."},
  todo: ["Identifier la commune et la date de l'acte.", "Faire la demande via le canal officiel (en ligne/mairie).", "Conserver la preuve de demande."],
  timeline: [{"id":"J0","label":"Identifier mairie/infos"},{"id":"J1","label":"Déposer la demande"},{"id":"J14","label":"Relance si besoin"}],
  neg_keywords: []
},
{
  id: "vie_livret_famille",
  label: "Vie civile — Livret de famille",
  flow_id: "vie_civile",
  pack_id: null,
  keywords_any: ["livret de famille", "duplicata livret", "perdu livret"],
  patterns: [/livret\s+de\s+famille/i],
  tags: ["vie_civile", "actes"],
  checklist_id: null,
  sources_key: "vie_actes",
  urgency: {"kind": "none", "hint": "Prévoir un délai de traitement (mairie)."},
  todo: ["Vérifier les conditions (duplicata, perte/vol).", "Contacter la mairie compétente avec justificatifs.", "Conserver la preuve de demande."],
  timeline: [{"id":"J0","label":"Identifier mairie"},{"id":"J2","label":"Déposer la demande"},{"id":"J21","label":"Suivi"}],
  neg_keywords: []
},
{
  id: "pv_vehicule_vendu",
  label: "Amende — PV après vente du véhicule",
  flow_id: "justice",
  pack_id: "justice_recours_admin",
  keywords_any: ["pv", "amende", "véhicule vendu", "vehicule vendu", "vente du véhicule", "vente vehicule"],
  patterns: [/\bpv\b|amende|contravention/i, /vendu|vente/i],
  tags: ["amende"],
  checklist_id: "amende_base",
  sources_key: "amendes",
  urgency: {"kind": "admin_deadline", "hint": "Agir vite : rassembler preuve de cession et contester dans le délai."},
  todo: ["Rassembler preuve de cession (certificat, date/heure).", "Vérifier si la déclaration de cession a été enregistrée.", "Contester selon la procédure indiquée (canal officiel).", "Conserver preuves d'envoi."],
  timeline: [{"id":"J0","label":"Rassembler preuves"},{"id":"J3","label":"Déposer contestation"},{"id":"J30","label":"Suivi"}],
  neg_keywords: ["impôts"]
},
{
  id: "tax_penalites_amende",
  label: "Impôts — Pénalités / amende fiscale",
  flow_id: "tax_rectif",
  pack_id: "tax_rectif",
  keywords_any: ["amende fiscale", "pénalités impôts", "penalites impots", "majoration impôts", "majoration impots"],
  patterns: [/imp[oô]ts|impots/i, /p[ée]nalit|majoration|amende\s+fisc/i],
  tags: ["impots"],
  checklist_id: "tax_rectif",
  sources_key: "impots_recours",
  urgency: {"kind": "legal_deadline", "hint": "Vérifier le délai indiqué sur le courrier (réclamation/observations)."},
  todo: ["Identifier le courrier/décision (référence, date).", "Noter le délai et le canal de réponse.", "Préparer une réponse structurée et documentée."],
  timeline: [{"id":"J0","label":"Lire courrier + noter délai"},{"id":"J7","label":"Préparer pièces"},{"id":"J20","label":"Envoyer"}],
  neg_keywords: ["antai", "pv"]
},
{
  id: "vie_cni",
  label: "Vie civile — Carte d’identité",
  flow_id: "cni_adult",
  pack_id: "cni",
  keywords_any: ["carte d'identité", "cni", "renouvellement cni"],
  patterns: [/(carte\\s+d['’]identit|\\bCNI\\b)/i],
  tags: ["vie_civile", "cni"],
  checklist_id: "cni_adult",
  sources_key: "cni",
  urgency: {"kind": "none", "hint": "Anticiper le RDV en mairie et vérifier pièces spécifiques à votre situation."},
  todo: ["Pré-demande ANTS si possible.", "Prendre rendez-vous en mairie.", "Préparer dossier (photo, justificatif domicile, acte si demandé).", "Dépôt + suivi + retrait."],
  timeline: [{"id": "S0", "label": "Pré-demande + RDV"}, {"id": "S1", "label": "Dossier + dépôt"}, {"id": "S3", "label": "Suivi"}, {"id": "S6", "label": "Retrait"}],
  neg_keywords: []
},
{
  id: "vie_mariage",
  label: "Vie civile — Dossier mariage",
  flow_id: "mariage",
  pack_id: "mariage",
  keywords_any: ["mariage", "dossier mariage", "se marier", "publication des bans"],
  patterns: [/mariage/i],
  tags: ["vie_civile", "mariage"],
  checklist_id: "mariage",
  sources_key: "mariage",
  urgency: {"kind": "admin_deadline", "hint": "Certaines pièces ont une durée de validité (actes de naissance) : vérifier auprès de la mairie."},
  todo: ["Vérifier la mairie compétente (domicile/résidence).", "Lister pièces demandées par la mairie (variables).", "Réunir actes de naissance et pièces d’identité.", "Déposer le dossier et suivre la publication des bans."],
  timeline: [{"id": "S0", "label": "Prendre contact mairie + liste pièces"}, {"id": "S2", "label": "Réunir pièces (actes, témoins)"}, {"id": "S4", "label": "Dépôt dossier"}, {"id": "S6", "label": "Publication des bans + cérémonie"}],
  neg_keywords: []
}
];

// Match scenario: returns best scenario object or null
window.VIGIE_MATCH_SCENARIO = function(query){
  const q = (query||"").trim();
  if(!q) return null;
  const norm = (s)=>String(s||"")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  const lc = norm(q);
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
      const k = norm(kw);
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
        const k = norm(kw||"");
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
