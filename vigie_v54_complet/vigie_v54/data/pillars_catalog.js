// pillars_catalog.js — V49 : ajout piliers Retraite et Consommation
// Les piliers existants sont conservés intégralement.
window.VIGIE_PILLARS = [
  {
    "id": "logement",
    "label": "Logement",
    "icon": "🏠",
    "iconBg": "rgba(79,134,255,.14)",
    "iconColor": "#2D5CC7",
    "problems": [
      {
        "title": "Dépôt de garantie non rendu",
        "why": "Retenues contestées ou délai dépassé.",
        "steps": ["Vérifier état des lieux + délai légal","Envoyer mise en demeure","Demander conseil ADIL","Conciliateur puis tribunal si besoin"],
        "links": [
          {"label":"ANIL — Trouver votre ADIL","url":"https://www.anil.org/lanil-et-les-adil/votre-adil/","tag":"aide"},
          {"label":"Conciliateurs — Trouver une permanence","url":"https://www.conciliateurs.fr/Trouver-une-permanence","tag":"médiation"},
          {"label":"Service-Public — Conciliateur de justice","url":"https://www.service-public.gouv.fr/particuliers/vosdroits/F1736","tag":"officiel"}
        ],
        "templates": ["mise_en_demeure_depot_garantie.md"]
      }
    ]
  },
  {
    "id": "impots",
    "label": "Impôts",
    "icon": "💰",
    "iconBg": "rgba(242,178,74,.18)",
    "iconColor": "#9A6A16",
    "problems": [
      {
        "title": "Contester un impôt / avis",
        "why": "Erreur de calcul, mauvaise base, situation non prise en compte.",
        "steps": ["Identifier l'impôt contesté + date","Rassembler justificatifs","Déposer une réclamation (en ligne ou courrier)","Suivre la réponse (délai indicatif)"],
        "links": [
          {"label":"Impots.gouv — Je veux contester un impôt","url":"https://www.impots.gouv.fr/particulier/je-veux-contester-un-impot-je-fais-une-reclamation","tag":"officiel"},
          {"label":"Impots.gouv — Déposer une réclamation","url":"https://www.impots.gouv.fr/particulier/deposer-une-reclamation","tag":"officiel"},
          {"label":"Economie.gouv — Je saisis le Médiateur","url":"https://www.economie.gouv.fr/mediateur/je-saisis-le-mediateur","tag":"médiation"}
        ],
        "templates": ["reclamation_impots.md"]
      },
      {
        "title": "Contrôle / demande de justificatifs",
        "why": "Demande d'éclaircissements ou pièces manquantes.",
        "steps": ["Noter les délais","Répondre point par point","Joindre pièces + explications","Demander un délai si nécessaire"],
        "links": [{"label":"Impots.gouv — Contacts","url":"https://www.impots.gouv.fr/contacts","tag":"officiel"}],
        "templates": ["reponse_demande_justificatifs.md"]
      }
    ]
  },
  {
    "id": "caf",
    "label": "CAF & aides",
    "icon": "👶",
    "iconBg": "rgba(116,179,255,.16)",
    "iconColor": "#2D5CC7",
    "problems": [
      {
        "title": "Trop-perçu / dette CAF",
        "why": "Recalcul de droits (ressources, foyer, période).",
        "steps": ["Comprendre période + motif","Demander le détail du calcul","Recours CRA (commission)","Défenseur des droits si blocage"],
        "links": [
          {"label":"CAF — Contester une notification de dette","url":"https://www.caf.fr/allocataires/caf-de-loire-atlantique/offre-de-service/accident-de-vie/dettes-et-recours/comment-contester-une-notification-de-dette-ou-de-non-droit","tag":"officiel"},
          {"label":"Défenseur des droits — Demander de l'aide","url":"https://www.defenseurdesdroits.fr/demander-de-laide-au-defenseur-des-droits-146","tag":"institution"}
        ],
        "templates": ["recours_caf_cra.md"]
      }
    ]
  },
  {
    "id": "banque",
    "label": "Banque",
    "icon": "🏦",
    "iconBg": "rgba(123,200,164,.20)",
    "iconColor": "#2E6B55",
    "problems": [
      {
        "title": "Fraude carte bancaire / opération non autorisée",
        "why": "Phishing, piratage, utilisation frauduleuse.",
        "steps": ["Opposition immédiate","Signaler (Perceval) / plainte si besoin","Réclamation écrite banque","Médiateur bancaire puis justice"],
        "links": [
          {"label":"Service-Public — Fraude à la carte bancaire","url":"https://www.service-public.gouv.fr/particuliers/vosdroits/F31324","tag":"officiel"},
          {"label":"Economie.gouv — Fraude/vol de carte : que faire","url":"https://www.economie.gouv.fr/particuliers/mes-droits-conso/eviter-les-arnaques/que-faire-en-cas-de-fraude-de-perte-ou-de-vol-de-votre-carte-bancaire","tag":"officiel"}
        ],
        "templates": ["reclamation_banque_fraude.md"]
      },
      {
        "title": "Litige avec sa banque (frais, refus…)",
        "why": "Désaccord sur une décision, frais, clôture…",
        "steps": ["Écrire au service réclamation","Demander médiation bancaire","Comparer avec fiches conso","Association de consommateurs si besoin"],
        "links": [
          {"label":"Economie.gouv — Litige avec sa banque","url":"https://www.economie.gouv.fr/particuliers/litige-avec-sa-banque","tag":"officiel"},
          {"label":"UFC-Que Choisir — Déposer un litige","url":"https://www.quechoisir.org/un-litige/dpt.php","tag":"association"}
        ],
        "templates": ["reclamation_banque_litige.md"]
      }
    ]
  },
  {
    "id": "arnaques",
    "label": "Arnaques",
    "icon": "⚠️",
    "iconBg": "rgba(240,106,106,.14)",
    "iconColor": "#B64141",
    "problems": [
      {
        "title": "Phishing / faux sites / usurpation",
        "why": "SMS/mail, faux impôts/CAF, faux colis…",
        "steps": ["Conserver preuves, ne pas répondre","Sécuriser comptes (MFA, mots de passe)","Signaler/porter plainte si préjudice","Surveiller comptes/identité"],
        "links": [
          {"label":"Cybermalveillance.gouv.fr","url":"https://www.cybermalveillance.gouv.fr/","tag":"officiel"},
          {"label":"Perceval — Signaler une fraude CB","url":"https://www.masecurite.interieur.gouv.fr/fr/demarches/signaler-une-escroquerie","tag":"officiel"}
        ],
        "templates": ["signalement_arnaque.md"]
      }
    ]
  },
  {
    "id": "travail",
    "label": "Travail / emploi",
    "icon": "💼",
    "iconBg": "rgba(234,242,255,.95)",
    "iconColor": "#3A66C9",
    "problems": [
      {
        "title": "Saisir les prud'hommes (litige salarié/employeur)",
        "why": "Salaire, rupture, documents fin de contrat…",
        "steps": ["Essayer une résolution amiable écrite","Préparer pièces (contrat, bulletins, échanges)","Saisir CPH","Aide : point-justice, syndicat, avocat"],
        "links": [
          {"label":"Service-Public — Saisir le conseil de prud'hommes","url":"https://www.service-public.gouv.fr/particuliers/vosdroits/F2360","tag":"officiel"},
          {"label":"Justice.fr — Saisir le conseil de prud'hommes","url":"https://www.justice.fr/notice/idtdb248-saisir-conseil-prud-hommes","tag":"officiel"}
        ],
        "templates": ["mise_en_demeure_documents_fin_contrat.md"]
      }
    ]
  },
  {
    "id": "sante",
    "label": "Santé / CPAM",
    "icon": "🩺",
    "iconBg": "rgba(72,199,142,.14)",
    "iconColor": "#1A7A52",
    "problems": [
      {
        "title": "Remboursement refusé / droits fermés",
        "why": "Droits Ameli inactifs, prise en charge refusée, ALD contestée.",
        "steps": ["Vérifier droits sur Ameli.fr","Contacter CPAM par écrit","Recours CRA si refus","Médiateur CPAM ou Défenseur des droits"],
        "links": [
          {"label":"Ameli.fr — Mes droits et démarches","url":"https://www.ameli.fr/assure/droits-demarches","tag":"officiel"},
          {"label":"Service-Public — Recours contre décision CPAM","url":"https://www.service-public.fr/particuliers/vosdroits/F2026","tag":"officiel"}
        ],
        "templates": []
      }
    ]
  },
  {
    "id": "justice",
    "label": "Droit & justice",
    "icon": "⚖️",
    "iconBg": "rgba(255,184,92,.14)",
    "iconColor": "#9A6A16",
    "problems": [
      {
        "title": "Accès au droit (Point-justice / CDAD)",
        "why": "Orientation neutre, gratuite, confidentielle.",
        "steps": ["Trouver un point-justice/CDAD","Préparer résumé + pièces","Obtenir orientation (conciliateur, avocat, médiateur…)"],
        "links": [
          {"label":"Justice.gouv — CDAD (accès au droit)","url":"https://www.justice.gouv.fr/annuaire/lieux-daccueil-dinformation/conseils-departementaux-dacces-au-droit","tag":"officiel"},
          {"label":"CNB — Annuaire des avocats de France","url":"https://cnb.avocat.fr/annuaire-des-avocats-de-france","tag":"avocats"},
          {"label":"Défenseur des droits — Formulaire en ligne","url":"https://formulaire.defenseurdesdroits.fr/","tag":"institution"}
        ],
        "templates": ["demande_point_justice.md"]
      }
    ]
  },
  {
    "id": "institutions",
    "label": "Mairie / ANTS",
    "icon": "🪪",
    "iconBg": "rgba(91,141,239,.12)",
    "iconColor": "#2D5CC7",
    "problems": [
      {
        "title": "Saisir une médiation (administration)",
        "why": "Quand une réclamation n'aboutit pas.",
        "steps": ["Faire une 1ère démarche/réclamation","Conserver décision/rejet","Saisir le médiateur compétent","Respecter les délais de recours"],
        "links": [
          {"label":"Economie.gouv — Médiateur","url":"https://www.economie.gouv.fr/mediateur","tag":"médiation"},
          {"label":"Service-Public — Demander une médiation (Bercy)","url":"https://www.service-public.gouv.fr/particuliers/vosdroits/R14962","tag":"officiel"}
        ],
        "templates": ["saisine_mediateur.md"]
      }
    ]
  },
  {
    "id": "retraite",
    "label": "Retraite",
    "icon": "👴",
    "iconBg": "rgba(168,210,168,.20)",
    "iconColor": "#2E6B3A",
    "problems": [
      {
        "title": "Erreur sur le relevé de carrière / trimestres manquants",
        "why": "Des périodes de travail peuvent être absentes ou mal comptabilisées.",
        "steps": ["Télécharger le relevé sur info-retraite.fr","Identifier les périodes manquantes","Contacter la caisse avec justificatifs","Recours si refus de rectification"],
        "links": [
          {"label":"Info-retraite.fr — Mon relevé de carrière","url":"https://www.info-retraite.fr/portail-services/home/mon-espace-retraite.html","tag":"officiel"},
          {"label":"Service-Public — Corriger des erreurs sur le relevé","url":"https://www.service-public.fr/particuliers/vosdroits/F31249","tag":"officiel"}
        ],
        "templates": []
      },
      {
        "title": "Pension de réversion (conjoint décédé)",
        "why": "La réversion n'est pas automatique — il faut en faire la demande.",
        "steps": ["Identifier toutes les caisses du défunt","Rassembler acte de mariage + décès + ressources","Déposer la demande auprès de chaque caisse","Contester si refus (tribunal judiciaire pôle social)"],
        "links": [
          {"label":"Info-retraite.fr — La réversion","url":"https://www.info-retraite.fr/portail-services/home/ma-retraite-de-base/ma-situation-personnelle/pension-de-reversion.html","tag":"officiel"},
          {"label":"Service-Public — Pension de réversion","url":"https://www.service-public.fr/particuliers/vosdroits/F13552","tag":"officiel"}
        ],
        "templates": []
      }
    ]
  },
  {
    "id": "consommation",
    "label": "Consommation",
    "icon": "🛒",
    "iconBg": "rgba(255,200,80,.14)",
    "iconColor": "#9A6A16",
    "problems": [
      {
        "title": "Produit défectueux / garantie légale",
        "why": "Tout produit vendu est couvert 2 ans par la garantie légale de conformité.",
        "steps": ["Signaler le défaut au vendeur par écrit","Demander réparation, remplacement ou remboursement","Saisir le médiateur de la consommation si refus","Tribunal de proximité en dernier recours"],
        "links": [
          {"label":"Service-Public — Garantie légale de conformité","url":"https://www.service-public.fr/particuliers/vosdroits/F11094","tag":"officiel"},
          {"label":"DGCCRF — SignalConso","url":"https://signal.conso.gouv.fr/","tag":"signalement"}
        ],
        "templates": []
      },
      {
        "title": "Litige e-commerce / colis non reçu",
        "why": "Commande non livrée, retour refusé, remboursement bloqué.",
        "steps": ["Contacter le vendeur par écrit","Ouvrir un litige sur la plateforme","Chargeback bancaire si CB","SignalConso + médiateur de la consommation"],
        "links": [
          {"label":"DGCCRF — SignalConso","url":"https://signal.conso.gouv.fr/","tag":"signalement"},
          {"label":"Service-Public — Droit de rétractation","url":"https://www.service-public.fr/particuliers/vosdroits/F10485","tag":"officiel"},
          {"label":"Médiation de la consommation — Trouver son médiateur","url":"https://www.economie.gouv.fr/mediation-conso/liste-des-mediateurs-references","tag":"médiation"}
        ],
        "templates": []
      }
    ]
  }
];

// Alias pour compatibilité avec les composants qui utilisent window.PILLARS
window.PILLARS = window.VIGIE_PILLARS;
