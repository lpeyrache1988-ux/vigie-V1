// V48 — scénarios additionnels en surcouche : aucune donnée existante n'est supprimée.
window.VIGIE_SCENARIOS = window.VIGIE_SCENARIOS || [];
window.VIGIE_SCENARIOS.push(...[
  {
    "id": "tax_payment_plan",
    "label": "Impôts — Demander un échéancier de paiement",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "échéancier impôts",
      "delai paiement impots",
      "payer en plusieurs fois impots"
    ],
    "patterns": [],
    "tags": [
      "impots"
    ],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_grace_request",
    "label": "Impôts — Demande de remise gracieuse",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "remise gracieuse impots",
      "remise majoration",
      "difficultés financières impôts"
    ],
    "patterns": [],
    "tags": [
      "impots"
    ],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_third_party_notice",
    "label": "Impôts — Avis à tiers détenteur / SATD",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "satd",
      "avis à tiers détenteur",
      "saisie impots",
      "compte bloqué impots"
    ],
    "patterns": [],
    "tags": [
      "impots"
    ],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_local_tax_error",
    "label": "Impôts — Taxe foncière / habitation : erreur",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "taxe fonciere erreur",
      "taxe habitation erreur",
      "valeur locative",
      "exonération taxe foncière"
    ],
    "patterns": [],
    "tags": [
      "impots"
    ],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_bank_account_foreign",
    "label": "Impôts — Compte étranger / crypto non déclaré",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "compte étranger",
      "crypto non déclaré",
      "binance impots",
      "bitget impots",
      "formulaire 3916"
    ],
    "patterns": [],
    "tags": [
      "impots"
    ],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_family_gift",
    "label": "Impôts — Donation familiale / don manuel à déclarer",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "don manuel",
      "donation familiale",
      "déclaration don",
      "don somme argent"
    ],
    "patterns": [],
    "tags": [
      "impots"
    ],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_self_employed_bic_bnc",
    "label": "Impôts — Micro-entreprise : BIC/BNC ou déclaration",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "micro entreprise impots",
      "auto entrepreneur bic bnc",
      "bic bnc",
      "déclaration auto entrepreneur"
    ],
    "patterns": [],
    "tags": [
      "impots"
    ],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "tax_audit_request_docs",
    "label": "Impôts — Demander les pièces utilisées par le service",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "keywords_any": [
      "demander pièces impots",
      "documents utilisés proposition rectification",
      "pièces citées non fournies"
    ],
    "patterns": [],
    "tags": [
      "impots"
    ],
    "checklist_id": "impots_base",
    "sources_key": "impots",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "caf_remise_gracieuse",
    "label": "CAF — Demander une remise gracieuse",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": [
      "remise gracieuse caf",
      "effacement dette caf",
      "dette caf impossible payer",
      "caf échéancier"
    ],
    "patterns": [],
    "tags": [
      "caf"
    ],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "caf_fraud_allegation",
    "label": "CAF — Suspicion de fraude / fausse déclaration",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": [
      "fraude caf",
      "fausse déclaration caf",
      "controle caf fraude",
      "sanction caf"
    ],
    "patterns": [],
    "tags": [
      "caf"
    ],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "caf_apl_refusal",
    "label": "CAF — Refus ou baisse APL",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": [
      "apl refusée",
      "apl baisse",
      "aide logement caf refus",
      "caf logement"
    ],
    "patterns": [],
    "tags": [
      "caf"
    ],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "caf_rsa_suspension",
    "label": "CAF — RSA suspendu ou réduit",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": [
      "rsa suspendu",
      "rsa coupé",
      "rsa réduit",
      "déclaration trimestrielle rsa"
    ],
    "patterns": [],
    "tags": [
      "caf"
    ],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "caf_prime_activity",
    "label": "CAF — Prime d’activité : refus / baisse",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": [
      "prime activité refus",
      "prime d’activité baisse",
      "prime activite caf"
    ],
    "patterns": [],
    "tags": [
      "caf"
    ],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "caf_control_home",
    "label": "CAF — Contrôle CAF à domicile / demande de pièces",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": [
      "controle caf domicile",
      "caf demande pièces",
      "caf contrôle ressources"
    ],
    "patterns": [],
    "tags": [
      "caf"
    ],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "caf_family_situation",
    "label": "CAF — Couple, séparation ou changement de situation",
    "flow_id": "caf",
    "pack_id": "caf",
    "keywords_any": [
      "séparation caf",
      "couple caf",
      "changement situation caf",
      "concubinage caf"
    ],
    "patterns": [],
    "tags": [
      "caf"
    ],
    "checklist_id": "caf_base",
    "sources_key": "caf",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "bank_direct_debit_dispute",
    "label": "Banque — Contester un prélèvement SEPA",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "keywords_any": [
      "contester prélèvement",
      "prélèvement sepa inconnu",
      "sepa non autorisé"
    ],
    "patterns": [],
    "tags": [
      "banque"
    ],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "bank_account_closed",
    "label": "Banque — Compte clôturé / préavis bancaire",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "keywords_any": [
      "compte clôturé banque",
      "banque ferme mon compte",
      "préavis clôture compte"
    ],
    "patterns": [],
    "tags": [
      "banque"
    ],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "bank_mediator",
    "label": "Banque — Saisir le médiateur bancaire",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "keywords_any": [
      "médiateur bancaire",
      "reclamation banque sans réponse",
      "litige banque médiation"
    ],
    "patterns": [],
    "tags": [
      "banque"
    ],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "bank_credit_refusal",
    "label": "Banque — Crédit refusé / incident de remboursement",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "keywords_any": [
      "crédit refusé",
      "pret refusé",
      "fichage ficp",
      "ficp"
    ],
    "patterns": [],
    "tags": [
      "banque"
    ],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "bank_insurance_borrower",
    "label": "Banque — Assurance emprunteur / résiliation / refus",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "keywords_any": [
      "assurance emprunteur",
      "changer assurance prêt",
      "refus assurance emprunteur"
    ],
    "patterns": [],
    "tags": [
      "banque"
    ],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "bank_chargeback",
    "label": "Banque — Achat non livré / chargeback carte",
    "flow_id": "banque",
    "pack_id": "banque_fraude",
    "keywords_any": [
      "chargeback",
      "achat non livré carte bancaire",
      "litige marchand carte"
    ],
    "patterns": [],
    "tags": [
      "banque"
    ],
    "checklist_id": "banque_base",
    "sources_key": "banque",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "ft_are_refusal",
    "label": "France Travail — ARE refusée",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "are refusée",
      "allocation chômage refus",
      "france travail refus are"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "ft_overpayment",
    "label": "France Travail — Trop-perçu ARE",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "trop perçu france travail",
      "indu chômage",
      "rembourser france travail"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "ft_radiation_missed_appointment",
    "label": "France Travail — Radiation pour rendez-vous manqué",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "radiation rendez vous manqué",
      "absence convocation france travail",
      "radié pole emploi"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "ft_training_refusal",
    "label": "France Travail — Formation refusée / financement bloqué",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "formation refusée france travail",
      "aif refusée",
      "financement formation pole emploi"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "ft_update_issue",
    "label": "France Travail — Actualisation oubliée ou erreur",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "actualisation oubliée",
      "erreur actualisation france travail",
      "paiement bloqué actualisation"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "work_employer_salary",
    "label": "Travail — Salaire non payé",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "salaire non payé",
      "employeur ne paie pas",
      "retard salaire"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "work_dismissal_dispute",
    "label": "Travail — Licenciement contesté",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "licenciement abusif",
      "contester licenciement",
      "convocation entretien préalable"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "work_harassment",
    "label": "Travail — Harcèlement / souffrance au travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "harcèlement travail",
      "souffrance au travail",
      "harcelement moral"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "work_contract_documents",
    "label": "Travail — Documents fin de contrat manquants",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "keywords_any": [
      "attestation employeur manquante",
      "solde tout compte non remis",
      "certificat travail absent"
    ],
    "patterns": [],
    "tags": [
      "travail"
    ],
    "checklist_id": "travail_base",
    "sources_key": "travail",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "cpam_daily_allowance",
    "label": "CPAM — Indemnités journalières non versées",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": [
      "indemnités journalières non versées",
      "ijss",
      "arrêt maladie paiement cpam"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "cpam_refund_delay",
    "label": "CPAM — Remboursement santé en retard",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": [
      "remboursement cpam retard",
      "feuille de soin non remboursée",
      "ameli remboursement bloqué"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "none",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "cpam_rights_closed",
    "label": "CPAM — Droits fermés / carte Vitale bloquée",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": [
      "droits cpam fermés",
      "carte vitale bloquée",
      "droits ameli suspendus"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "cpam_ald_refusal",
    "label": "CPAM — Refus ALD / prise en charge",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": [
      "ald refusée",
      "refus ald",
      "prise en charge 100 refusée"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "cpam_work_accident",
    "label": "CPAM — Accident du travail refusé",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "keywords_any": [
      "accident du travail refusé",
      "maladie professionnelle refusée",
      "cpam accident travail"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "housing_deposit_return",
    "label": "Logement — Dépôt de garantie non rendu",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "caution non rendue",
      "dépôt garantie non rendu",
      "retenue caution abusive"
    ],
    "patterns": [],
    "tags": [
      "logement"
    ],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "housing_repairs_landlord",
    "label": "Logement — Travaux à la charge du bailleur",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "travaux bailleur refuse",
      "propriétaire ne répare pas",
      "chauffage panne location"
    ],
    "patterns": [],
    "tags": [
      "logement"
    ],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "housing_eviction_notice",
    "label": "Logement — Commandement de payer / expulsion",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "commandement de payer",
      "menace expulsion",
      "assignation expulsion"
    ],
    "patterns": [],
    "tags": [
      "logement"
    ],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "housing_rent_increase",
    "label": "Logement — Hausse de loyer contestée",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "augmentation loyer abusive",
      "hausse loyer",
      "révision loyer"
    ],
    "patterns": [],
    "tags": [
      "logement"
    ],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "housing_neighbor_nuisance",
    "label": "Logement — Troubles de voisinage",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "trouble voisinage",
      "nuisances sonores",
      "voisin bruyant"
    ],
    "patterns": [],
    "tags": [
      "logement"
    ],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "housing_dpe_energy",
    "label": "Logement — DPE / passoire thermique / charges",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "dpe location",
      "passoire thermique",
      "charges chauffage abusives"
    ],
    "patterns": [],
    "tags": [
      "logement"
    ],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "social_housing_request",
    "label": "Logement — Demande logement social bloquée",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "logement social bloqué",
      "demande hlm sans réponse",
      "numéro unique logement social"
    ],
    "patterns": [],
    "tags": [
      "logement"
    ],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "dalo_recours",
    "label": "Logement — Recours DALO",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "keywords_any": [
      "dalo recours",
      "logement urgent dalo",
      "commission médiation logement"
    ],
    "patterns": [],
    "tags": [
      "logement"
    ],
    "checklist_id": "logement_base",
    "sources_key": "logement",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "fine_fps_parking",
    "label": "Amende — FPS stationnement contesté",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": [
      "fps stationnement",
      "forfait post stationnement",
      "rapo fps"
    ],
    "patterns": [],
    "tags": [
      "justice"
    ],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "fine_antai_nomination",
    "label": "Amende — Désigner conducteur / ANTAI",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": [
      "désigner conducteur antai",
      "amende entreprise conducteur",
      "antai conducteur"
    ],
    "patterns": [],
    "tags": [
      "justice"
    ],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "fine_license_points",
    "label": "Amende — Retrait de points / permis",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": [
      "retrait de points",
      "permis invalidé",
      "48si",
      "solde points permis"
    ],
    "patterns": [],
    "tags": [
      "justice"
    ],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "justice_small_claim",
    "label": "Justice — Litige consommation / mise en demeure",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": [
      "litige consommateur",
      "mise en demeure vendeur",
      "produit défectueux"
    ],
    "patterns": [],
    "tags": [
      "justice"
    ],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "justice_defender_rights",
    "label": "Institutions — Saisir le Défenseur des droits",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "keywords_any": [
      "défenseur des droits",
      "discrimination administration",
      "service public ne répond pas"
    ],
    "patterns": [],
    "tags": [
      "justice"
    ],
    "checklist_id": "justice_base",
    "sources_key": "justice",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "scam_fake_admin_site",
    "label": "Arnaques — Faux site administratif payant",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "keywords_any": [
      "faux site administratif",
      "site passeport payant arnaque",
      "faux site carte grise"
    ],
    "patterns": [],
    "tags": [
      "arnaques"
    ],
    "checklist_id": "arnaques_base",
    "sources_key": "arnaques",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "scam_identity_theft_bank",
    "label": "Arnaques — Usurpation identité avec compte bancaire",
    "flow_id": "arnaques",
    "pack_id": "arnaques_identite",
    "keywords_any": [
      "usurpation identité bancaire",
      "compte ouvert à mon nom",
      "crédit frauduleux identité"
    ],
    "patterns": [],
    "tags": [
      "arnaques"
    ],
    "checklist_id": "arnaques_base",
    "sources_key": "arnaques",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "scam_online_purchase",
    "label": "Arnaques — Achat internet non livré / faux vendeur",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "keywords_any": [
      "achat internet non livré",
      "faux vendeur",
      "arnaque leboncoin"
    ],
    "patterns": [],
    "tags": [
      "arnaques"
    ],
    "checklist_id": "arnaques_base",
    "sources_key": "arnaques",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "scam_romance_investment",
    "label": "Arnaques — Romance scam / faux investissement",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "keywords_any": [
      "arnaque sentimentale",
      "romance scam",
      "faux investissement",
      "crypto arnaque"
    ],
    "patterns": [],
    "tags": [
      "arnaques"
    ],
    "checklist_id": "arnaques_base",
    "sources_key": "arnaques",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "scam_phone_sms",
    "label": "Arnaques — SMS/appel frauduleux",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "keywords_any": [
      "sms frauduleux",
      "appel frauduleux",
      "smishing",
      "faux conseiller bancaire"
    ],
    "patterns": [],
    "tags": [
      "arnaques"
    ],
    "checklist_id": "arnaques_base",
    "sources_key": "arnaques",
    "urgency": {
      "kind": "none",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "id_lost_stolen",
    "label": "Vie civile — Carte d’identité ou passeport perdu/volé",
    "flow_id": "passport",
    "pack_id": "passport",
    "keywords_any": [
      "carte identité perdue",
      "passeport volé",
      "cni volée",
      "perte papiers identité"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "birth_certificate",
    "label": "Vie civile — Demander un acte de naissance",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "acte de naissance",
      "copie intégrale naissance",
      "extrait naissance"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "none",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "death_procedures",
    "label": "Vie civile — Décès : premières démarches",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "décès démarches",
      "que faire décès",
      "déclarer décès",
      "banque décès proche"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "marriage_file",
    "label": "Vie civile — Préparer un dossier de mariage",
    "flow_id": "mariage",
    "pack_id": "mariage",
    "keywords_any": [
      "dossier mariage mairie",
      "se marier mairie",
      "pièces mariage"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "none",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "driver_license_lost",
    "label": "Vie civile — Permis perdu/volé ou renouvellement",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "permis perdu",
      "permis volé",
      "renouveler permis",
      "ants permis bloqué"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "ants_blocked",
    "label": "Vie civile — Démarche ANTS bloquée",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "ants bloqué",
      "dossier ants sans réponse",
      "carte grise bloquée"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "energy_bill_dispute",
    "label": "Vie courante — Facture énergie contestée",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "facture électricité abusive",
      "facture gaz contestation",
      "litige énergie"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "telecom_cancel",
    "label": "Vie courante — Résilier ou contester frais télécom",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "résiliation internet frais",
      "forfait mobile résiliation",
      "litige opérateur télécom"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "insurance_claim_refused",
    "label": "Vie courante — Assurance refuse indemnisation",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "assurance refuse indemnisation",
      "sinistre refusé",
      "expert assurance contestation"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "school_admin_issue",
    "label": "Institutions — Problème école / inscription / cantine",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "inscription école refusée",
      "cantine refusée",
      "affectation scolaire"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "mdph_delay",
    "label": "Institutions — MDPH : dossier en retard ou refus",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "mdph retard dossier",
      "mdph refus",
      "aah refusée",
      "rqth refusée"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  },
  {
    "id": "prefecture_residence_permit",
    "label": "Institutions — Préfecture / titre de séjour bloqué",
    "flow_id": "vie_civile",
    "pack_id": null,
    "keywords_any": [
      "titre de séjour bloqué",
      "préfecture sans réponse",
      "récépissé expiré",
      "anef bloqué"
    ],
    "patterns": [],
    "tags": [
      "institutions"
    ],
    "checklist_id": "institutions_base",
    "sources_key": "institutions",
    "urgency": {
      "kind": "admin_deadline",
      "hint": "Délai indicatif : vérifier le courrier ou l’espace officiel."
    },
    "todo": [
      "Qualifier la situation et vérifier le courrier ou l’espace officiel.",
      "Rassembler les pièces utiles.",
      "Agir via le canal officiel et conserver une preuve."
    ],
    "timeline": [
      {
        "id": "J0",
        "label": "Qualifier la situation et vérifier le courrier ou l’espace officiel."
      },
      {
        "id": "J2",
        "label": "Rassembler les pièces utiles."
      },
      {
        "id": "J7",
        "label": "Agir via le canal officiel et conserver une preuve."
      },
      {
        "id": "J30",
        "label": "Relancer ou escalader si absence de réponse."
      }
    ],
    "neg_keywords": []
  }
]);
