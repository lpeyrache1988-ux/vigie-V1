window.VIGIE_REGISTRY_CASES = [
  {
    "id": "tax_rectif_l64",
    "label": "Impôts — Proposition de rectification / abus de droit (L64)",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_rectif_generic",
    "label": "Impôts — Proposition de rectification (hors L64)",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_penalty",
    "label": "Impôts — Pénalités / majorations",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_pas",
    "label": "Impôts — Prélèvement à la source (PAS)",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_avis",
    "label": "Impôts — Avis d’imposition / taxe (contester)",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_declaration_error",
    "label": "Impôts — Erreur de déclaration / correction",
    "pillar": "impots",
    "flow_id": "tax_declaration",
    "pack_id": "tax_declaration",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_refund",
    "label": "Impôts — Remboursement attendu",
    "pillar": "impots",
    "flow_id": "tax_declaration",
    "pack_id": "tax_declaration",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "caf_trop_percu",
    "label": "CAF — Trop-perçu / dette",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "caf_suspension",
    "label": "CAF — Aide suspendue / droit coupé",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_card_fraud",
    "label": "Banque — Fraude CB / opération non autorisée",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_fraude",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_phishing_prelev",
    "label": "Banque — Phishing / prélèvements inconnus",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_fraude",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_virement_fraud",
    "label": "Banque — Virement frauduleux",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_fraude",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_fees",
    "label": "Banque — Frais abusifs",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_overindebt",
    "label": "Banque — Surendettement (Banque de France)",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_surendettement",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "housing_unpaid",
    "label": "Logement — Loyers impayés",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_impayes",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "housing_dispute",
    "label": "Logement — Litige bailleur/locataire",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "housing_insalubre",
    "label": "Logement — Insalubrité / logement indécent",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "fine_contest",
    "label": "Amende — Contester (ANTAI/OMP/FPS)",
    "pillar": "justice",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "fine_majoration",
    "label": "Amende — Majoration / saisie",
    "pillar": "justice",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "scam_report",
    "label": "Arnaques — Signaler (phishing / faux sites)",
    "pillar": "arnaques",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "scam_identity",
    "label": "Arnaques — Usurpation d’identité",
    "pillar": "arnaques",
    "flow_id": "arnaques",
    "pack_id": "arnaques_identite",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "ameli_refus",
    "label": "Santé — CPAM/Ameli refus de remboursement",
    "pillar": "institutions",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "ft_radiation",
    "label": "France Travail — Radiation / sanction",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "vie_passeport_adulte",
    "label": "Vie civile — Passeport adulte",
    "pillar": "institutions",
    "flow_id": "passport",
    "pack_id": "passport",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "vie_passeport_mineur",
    "label": "Vie civile — Passeport mineur",
    "pillar": "institutions",
    "flow_id": "passport",
    "pack_id": "passport",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "vie_acte_mariage",
    "label": "Vie civile — Acte de mariage (copie)",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "moyen",
    "external": []
  },
  {
    "id": "vie_livret_famille",
    "label": "Vie civile — Livret de famille",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "moyen",
    "external": []
  },
  {
    "id": "pv_vehicule_vendu",
    "label": "Amende — PV après vente du véhicule",
    "pillar": "justice",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_penalites_amende",
    "label": "Impôts — Pénalités / amende fiscale",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "vie_cni",
    "label": "Vie civile — Carte d’identité",
    "pillar": "institutions",
    "flow_id": "cni_adult",
    "pack_id": "cni",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "vie_mariage",
    "label": "Vie civile — Dossier mariage",
    "pillar": "institutions",
    "flow_id": "mariage",
    "pack_id": "mariage",
    "risk": "moyen",
    "external": []
  },

  {
    "id": "tax_payment_plan",
    "label": "Impôts — Demander un échéancier de paiement",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_grace_request",
    "label": "Impôts — Demande de remise gracieuse",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_third_party_notice",
    "label": "Impôts — Avis à tiers détenteur / SATD",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "tax_local_tax_error",
    "label": "Impôts — Taxe foncière / habitation : erreur",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_bank_account_foreign",
    "label": "Impôts — Compte étranger / crypto non déclaré",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "tax_family_gift",
    "label": "Impôts — Donation familiale / don manuel à déclarer",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_self_employed_bic_bnc",
    "label": "Impôts — Micro-entreprise : BIC/BNC ou déclaration",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "tax_audit_request_docs",
    "label": "Impôts — Demander les pièces utilisées par le service",
    "pillar": "impots",
    "flow_id": "tax_rectif",
    "pack_id": "tax_rectif",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "caf_remise_gracieuse",
    "label": "CAF — Demander une remise gracieuse",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "caf_fraud_allegation",
    "label": "CAF — Suspicion de fraude / fausse déclaration",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "caf_apl_refusal",
    "label": "CAF — Refus ou baisse APL",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "caf_rsa_suspension",
    "label": "CAF — RSA suspendu ou réduit",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "caf_prime_activity",
    "label": "CAF — Prime d’activité : refus / baisse",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "caf_control_home",
    "label": "CAF — Contrôle CAF à domicile / demande de pièces",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "caf_family_situation",
    "label": "CAF — Couple, séparation ou changement de situation",
    "pillar": "caf",
    "flow_id": "caf",
    "pack_id": "caf",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_direct_debit_dispute",
    "label": "Banque — Contester un prélèvement SEPA",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_account_closed",
    "label": "Banque — Compte clôturé / préavis bancaire",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_mediator",
    "label": "Banque — Saisir le médiateur bancaire",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_credit_refusal",
    "label": "Banque — Crédit refusé / incident de remboursement",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_insurance_borrower",
    "label": "Banque — Assurance emprunteur / résiliation / refus",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_frais",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "bank_chargeback",
    "label": "Banque — Achat non livré / chargeback carte",
    "pillar": "banque",
    "flow_id": "banque",
    "pack_id": "banque_fraude",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "ft_are_refusal",
    "label": "France Travail — ARE refusée",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "ft_overpayment",
    "label": "France Travail — Trop-perçu ARE",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "ft_radiation_missed_appointment",
    "label": "France Travail — Radiation pour rendez-vous manqué",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "ft_training_refusal",
    "label": "France Travail — Formation refusée / financement bloqué",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "ft_update_issue",
    "label": "France Travail — Actualisation oubliée ou erreur",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "work_employer_salary",
    "label": "Travail — Salaire non payé",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "work_dismissal_dispute",
    "label": "Travail — Licenciement contesté",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "work_harassment",
    "label": "Travail — Harcèlement / souffrance au travail",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "work_contract_documents",
    "label": "Travail — Documents fin de contrat manquants",
    "pillar": "travail",
    "flow_id": "france_travail",
    "pack_id": "france_travail",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "cpam_daily_allowance",
    "label": "CPAM — Indemnités journalières non versées",
    "pillar": "institutions",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "cpam_refund_delay",
    "label": "CPAM — Remboursement santé en retard",
    "pillar": "institutions",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "risk": "faible",
    "external": []
  },
  {
    "id": "cpam_rights_closed",
    "label": "CPAM — Droits fermés / carte Vitale bloquée",
    "pillar": "institutions",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "cpam_ald_refusal",
    "label": "CPAM — Refus ALD / prise en charge",
    "pillar": "institutions",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "cpam_work_accident",
    "label": "CPAM — Accident du travail refusé",
    "pillar": "institutions",
    "flow_id": "ameli",
    "pack_id": "ameli",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "housing_deposit_return",
    "label": "Logement — Dépôt de garantie non rendu",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "housing_repairs_landlord",
    "label": "Logement — Travaux à la charge du bailleur",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "housing_eviction_notice",
    "label": "Logement — Commandement de payer / expulsion",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "housing_rent_increase",
    "label": "Logement — Hausse de loyer contestée",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "housing_neighbor_nuisance",
    "label": "Logement — Troubles de voisinage",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "housing_dpe_energy",
    "label": "Logement — DPE / passoire thermique / charges",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "social_housing_request",
    "label": "Logement — Demande logement social bloquée",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "dalo_recours",
    "label": "Logement — Recours DALO",
    "pillar": "logement",
    "flow_id": "logement",
    "pack_id": "logement_litige",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "fine_fps_parking",
    "label": "Amende — FPS stationnement contesté",
    "pillar": "justice",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "fine_antai_nomination",
    "label": "Amende — Désigner conducteur / ANTAI",
    "pillar": "justice",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "fine_license_points",
    "label": "Amende — Retrait de points / permis",
    "pillar": "justice",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "justice_small_claim",
    "label": "Justice — Litige consommation / mise en demeure",
    "pillar": "justice",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "justice_defender_rights",
    "label": "Institutions — Saisir le Défenseur des droits",
    "pillar": "justice",
    "flow_id": "justice",
    "pack_id": "justice_recours_admin",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "scam_fake_admin_site",
    "label": "Arnaques — Faux site administratif payant",
    "pillar": "arnaques",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "scam_identity_theft_bank",
    "label": "Arnaques — Usurpation identité avec compte bancaire",
    "pillar": "arnaques",
    "flow_id": "arnaques",
    "pack_id": "arnaques_identite",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "scam_online_purchase",
    "label": "Arnaques — Achat internet non livré / faux vendeur",
    "pillar": "arnaques",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "scam_romance_investment",
    "label": "Arnaques — Romance scam / faux investissement",
    "pillar": "arnaques",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "risk": "rouge",
    "external": []
  },
  {
    "id": "scam_phone_sms",
    "label": "Arnaques — SMS/appel frauduleux",
    "pillar": "arnaques",
    "flow_id": "arnaques",
    "pack_id": "arnaques_signaler",
    "risk": "faible",
    "external": []
  },
  {
    "id": "id_lost_stolen",
    "label": "Vie civile — Carte d’identité ou passeport perdu/volé",
    "pillar": "institutions",
    "flow_id": "passport",
    "pack_id": "passport",
    "risk": "moyen",
    "external": []
  },
  {
    "id": "birth_certificate",
    "label": "Vie civile — Demander un acte de naissance",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "faible",
    "external": []
  },
  {
    "id": "death_procedures",
    "label": "Vie civile — Décès : premières démarches",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "rouge",
    "external": []
  },
  {
    "id": "marriage_file",
    "label": "Vie civile — Préparer un dossier de mariage",
    "pillar": "institutions",
    "flow_id": "mariage",
    "pack_id": "mariage",
    "risk": "faible",
    "external": []
  },
  {
    "id": "driver_license_lost",
    "label": "Vie civile — Permis perdu/volé ou renouvellement",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "moyen",
    "external": []
  },
  {
    "id": "ants_blocked",
    "label": "Vie civile — Démarche ANTS bloquée",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "moyen",
    "external": []
  },
  {
    "id": "energy_bill_dispute",
    "label": "Vie courante — Facture énergie contestée",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "moyen",
    "external": []
  },
  {
    "id": "telecom_cancel",
    "label": "Vie courante — Résilier ou contester frais télécom",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "moyen",
    "external": []
  },
  {
    "id": "insurance_claim_refused",
    "label": "Vie courante — Assurance refuse indemnisation",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "moyen",
    "external": []
  },
  {
    "id": "school_admin_issue",
    "label": "Institutions — Problème école / inscription / cantine",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "moyen",
    "external": []
  },
  {
    "id": "mdph_delay",
    "label": "Institutions — MDPH : dossier en retard ou refus",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "rouge",
    "external": []
  },
  {
    "id": "prefecture_residence_permit",
    "label": "Institutions — Préfecture / titre de séjour bloqué",
    "pillar": "institutions",
    "flow_id": "vie_civile",
    "pack_id": null,
    "risk": "rouge",
    "external": []
  }


];

window.VIGIE_FIND_CASES = function(opts){
  opts = opts||{};
  const q = (opts.q||'').toLowerCase();
  const pillar = (opts.pillar||'').toLowerCase();
  let list = (window.VIGIE_REGISTRY_CASES||[]).slice();
  if(pillar) list = list.filter(c=> (c.pillar||'').toLowerCase()===pillar);
  if(!q) return list;
  // score by label/id contains + keywords from scenarios if available
  const scen = (window.VIGIE_SCENARIOS||[]);
  const scenById = {};
  scen.forEach(s=>{ if(s && s.id) scenById[s.id]=s; });
  list.forEach(c=>{
    const s = scenById[c.id]||{};
    const hay = ((c.label||'')+' '+(c.id||'')+' '+(s.keywords_any||[]).join(' ')).toLowerCase();
    let score = 0;
    q.split(/\s+/).filter(Boolean).forEach(tok=>{
      if(hay.includes(tok)) score += 2;
    });
    if(hay.includes(q)) score += 3;
    c.__score = score;
  });
  return list.filter(c=>c.__score>0).sort((a,b)=> (b.__score||0)-(a.__score||0));
};

window.VIGIE_DEBUG = function(){
  try{
    const qs = new URLSearchParams(location.search);
    if(qs.get('debug')==='1') return true;
    if(localStorage.getItem('vigie_debug')==='1') return true;
  }catch(e){}
  return false;
};
