window.VIGIE_CHECKLISTS = {
  deces_base: {
    title: "Décès — documents et informations (base)",
    items: [
      { id:"acte_deces", label:"Actes de décès (plusieurs exemplaires)", required:true, tip:"Demander plusieurs copies.", details:"Utile pour banque, assurances, organismes." },
      { id:"identite_defunt", label:"Pièce d'identité du défunt (si dispo)", required:false, tip:"Copie.", details:"Selon organismes." },
      { id:"livret", label:"Livret de famille / actes", required:false, tip:"Selon situation.", details:"Utile pour démarches famille/succession." },
      { id:"liste_contrats", label:"Liste des contrats/abonnements", required:false, tip:"Énergie, internet, assurance…", details:"Les prélèvements peuvent continuer." },
      { id:"coordonnees", label:"Coordonnées organismes", required:false, tip:"Banques, employeur, retraite…", details:"Facilite les notifications." }
    ]
  },


  logement_base: {
    title: "Logement — Documents de base",
    items: [
      { id:"identite", label:"Pièce d'identité", required:true, tip:"CNI/passeport/titre de séjour.", details:"Copie lisible recto/verso si nécessaire." },
      { id:"revenus", label:"Justificatifs de revenus", required:false, tip:"3 derniers bulletins / attestation.", details:"Selon situation : salaire, chômage, bourse, etc." },
      { id:"domicile", label:"Justificatif de domicile", required:false, tip:"facture / quittance / attestation.", details:"Si hébergé : attestation + ID hébergeant + son justificatif." },
      { id:"bail", label:"Bail / état des lieux", required:false, tip:"si litige/entrée.", details:"Conserver copies et photos datées." }
    ]
  },
  banque_base: {
    title: "Banque — Pièces & preuves",
    items: [
      { id:"releves", label:"Relevés / opérations", required:true, tip:"captures + dates + montants.", details:"Exporter ou prendre capture d'écran." },
      { id:"opposition", label:"Preuve opposition/contestation", required:false, tip:"numéro d'opposition.", details:"Noter date/heure/numéro." },
      { id:"plainte", label:"Plainte (si nécessaire)", required:false, tip:"récépissé.", details:"Conserver le récépissé." }
    ]
  },
  arnaques_base: {
    title: "Arnaques — Informations à conserver",
    items: [
      { id:"preuves", label:"Preuves (SMS, mail, URL)", required:true, tip:"captures d'écran.", details:"Ne supprime pas avant d'avoir capturé." },
      { id:"paiement", label:"Paiement effectué ?", required:false, tip:"montant/date/moyen.", details:"Si oui : opposition + contestation rapidement." }
    ]
  },
  justice_base: {
    title: "Droit & justice — Dossier de base",
    items: [
      { id:"faits", label:"Chronologie des faits", required:true, tip:"dates + événements.", details:"Une frise simple aide beaucoup." },
      { id:"preuves", label:"Preuves (contrats, échanges)", required:true, tip:"emails, photos, documents.", details:"Classer par date." },
      { id:"demande", label:"Votre demande", required:true, tip:"ce que vous voulez obtenir.", details:"Formuler en 1-2 phrases." }
    ]
  },

  passport_adult: {
    title: "Passeport — Dossier (adulte)",
    items: [
      { id:"photo", label:"Photo d'identité conforme", required:true, tip:"Respecter le format et les normes (fond, visage, lunettes, etc.)." , details:"Où faire la photo ?\n• Photographe ou cabine agréée (ePhoto).\n• Utiliser l’outil officiel ANTS/Service-Public pour trouver un point proche.\nExemples : cabines Photomaton (si disponibles) ou photographe habilité.\n\nLiens :\n- ANTS (géolocalisation ePhoto) : https://passeport.ants.gouv.fr/services/geolocaliser-les-photographes-habilites\n- Service-Public (outil) : https://www.service-public.fr/particuliers/vosdroits/R62705" },
      { id:"justif_domicile", label:"Justificatif de domicile", required:true, tip:"Souvent < 3 mois (selon cas), au nom du demandeur." , details:"Justificatifs souvent acceptés (selon mairie) :\n• Facture électricité/gaz/eau/Internet\n• Avis d’imposition\n• Quittance de loyer (agence)\n• Attestation d’assurance logement\n\nSi vous n’en avez pas :\n• Attestation d’hébergement + pièce d’identité de l’hébergeant + son justificatif de domicile.\n\nToujours vérifier la liste exacte sur Service-Public ou le site de votre mairie." },
      { id:"timbre", label:"Timbre fiscal (si nécessaire)", required:false, tip:"Vérifier les cas et montants sur Service-Public." , details:"Où l’acheter :\n• En ligne (timbre fiscal électronique) : https://timbres.impots.gouv.fr\n\nPrix indicatifs (vérifié Service-Public) :\n• Adulte : 86 €\n• Mineur 15–17 ans : 42 €\n• Mineur 0–14 ans : 17 €\n\nAttention aux faux sites : privilégier impots.gouv.fr." },
      { id:"ancien_doc", label:"Ancien passeport (si renouvellement)", required:false, tip:"Apporter l'ancien document si vous l'avez." }
    ]
  },
  passport_minor: {
    title: "Passeport — Dossier (mineur)",
    items: [
      { id:"photo", label:"Photo d'identité conforme", required:true, tip:"Normes photo strictes." , details:"Où faire la photo ?\n• Photographe ou cabine agréée (ePhoto).\n• Utiliser l’outil officiel ANTS/Service-Public pour trouver un point proche.\nExemples : cabines Photomaton (si disponibles) ou photographe habilité.\n\nLiens :\n- ANTS (géolocalisation ePhoto) : https://passeport.ants.gouv.fr/services/geolocaliser-les-photographes-habilites\n- Service-Public (outil) : https://www.service-public.fr/particuliers/vosdroits/R62705" },
      { id:"justif_domicile", label:"Justificatif de domicile (parent)", required:true, tip:"Selon garde/autorité parentale." , details:"Justificatifs souvent acceptés (selon mairie) :\n• Facture électricité/gaz/eau/Internet\n• Avis d’imposition\n• Quittance de loyer (agence)\n• Attestation d’assurance logement\n\nSi vous n’en avez pas :\n• Attestation d’hébergement + pièce d’identité de l’hébergeant + son justificatif de domicile.\n\nToujours vérifier la liste exacte sur Service-Public ou le site de votre mairie." },
      { id:"livret", label:"Livret de famille / acte de naissance", required:true, tip:"Selon les mairies, prévoir l'acte." },
      { id:"autorite", label:"Pièce du parent + preuve d'autorité parentale", required:true, tip:"En cas de séparation, prévoir jugement/accord." }
    ]
  },
  cni_adult: {
    title: "CNI — Dossier (adulte)",
    items: [
      { id:"photo", label:"Photo d'identité conforme", required:true, tip:"Normes photo strictes." },
      { id:"justif_domicile", label:"Justificatif de domicile", required:true, tip:"Souvent < 3 mois." },
      { id:"acte", label:"Acte de naissance (si demandé)", required:false, tip:"Selon situation et mairie." },
      { id:"ancien_doc", label:"Ancienne CNI (si renouvellement)", required:false, tip:"Apporter l'ancien document si vous l'avez." }
    ]
  },
  mariage: {
    title: "Mariage — Dossier (général)",
    items: [
      { id:"cni_epoux", label:"Pièces d'identité des futurs époux", required:true, tip:"CNI/passeport en cours de validité." },
      { id:"justif_domicile", label:"Justificatif de domicile", required:true, tip:"Pour déterminer la mairie compétente." },
      { id:"actes", label:"Actes de naissance", required:true, tip:"Vérifier exigence (moins de 3 mois/6 mois selon pays)." },
      { id:"temoins", label:"Infos des témoins", required:true, tip:"Identité + coordonnées." }
    ]
  },
  tax_rectif: {
    title: "Impôts — Réponse/recours (rectification)",
    items: [
      { id:"courrier", label:"Copie de la proposition de rectification", required:true, tip:"Avec date de réception." },
      { id:"pieces", label:"Pièces justificatives", required:true, tip:"Contrats, relevés, attestations, preuves de réalité économique." },
      { id:"chronologie", label:"Chronologie des faits", required:true, tip:"Dates, actions, interlocuteurs." },
      { id:"strategie", label:"Choix de stratégie (réponse / recours)", required:true, tip:"Selon délai et nature des pénalités." }
    ]
  }

  ,
  impots_base: {
    title: "Impôts — Pièces de base",
    items: [
      { id:"avis", label:"Avis / courrier / notification", required:true, tip:"PDF ou photo lisible + enveloppe si dispo.", details:"La date de réception est souvent déterminante pour les délais." },
      { id:"identite", label:"Identité (CNI/passeport)", required:false, tip:"Copie.", details:"Utile si échanges hors espace en ligne." },
      { id:"justifs", label:"Justificatifs (selon sujet)", required:false, tip:"Revenus, charges, situation familiale, etc.", details:"Préparer les pièces qui prouvent les faits invoqués." },
      { id:"chronologie", label:"Chronologie (dates clés)", required:true, tip:"3–10 lignes.", details:"Courrier reçu, réponses envoyées, paiements, RDV, etc." },
      { id:"preuves_envoi", label:"Preuves d’envoi", required:false, tip:"AR / capture messagerie sécurisée.", details:"Toujours conserver une preuve datée." }
    ]
  },

  impots_rectif: {
    title: "Impôts — Proposition de rectification (dossier)",
    items: [
      { id:"pr", label:"Proposition de rectification (complète)", required:true, tip:"Toutes les pages + annexes.", details:"Inclure la page des délais et voies de recours." },
      { id:"enveloppe", label:"Enveloppe / AR / preuve réception", required:false, tip:"Photo/scan.", details:"Utile pour la computation des délais." },
      { id:"pieces_justif", label:"Pièces justificatives", required:true, tip:"Contrats, virements, attestations…", details:"Organiser par thème et date." },
      { id:"memo", label:"Note d’observations (brouillon)", required:false, tip:"Plan structuré.", details:"Faits → droit → réponses point par point → demandes." }
    ]
  },

  caf_decision: {
    title: "CAF — Décision / notification",
    items: [
      { id:"notification", label:"Notification (dette / décision / suspension)", required:true, tip:"PDF/scan.", details:"Inclure la page 'voies de recours'." },
      { id:"situation", label:"Situation (foyer, logement, ressources)", required:true, tip:"Résumé + dates.", details:"Changements de situation = source fréquente d’écarts." },
      { id:"declarations", label:"Déclarations CAF (captures)", required:false, tip:"Historique des déclarations.", details:"Utile en cas de contestation." },
      { id:"justifs", label:"Justificatifs transmis", required:false, tip:"preuves de dépôt.", details:"Conserver captures/accusés." }
    ]
  },

  amende_base: {
    title: "Amendes — Pièces & infos",
    items: [
      { id:"avis", label:"Avis de contravention / FPS / majoration", required:true, tip:"Photo/scan.", details:"Inclure références (numéro, date, OMP/ANTAI)." },
      { id:"preuve", label:"Preuves (tickets, photos, justificatifs)", required:false, tip:"Selon contestation.", details:"Toujours dater les preuves." },
      { id:"identite", label:"Identité + carte grise si nécessaire", required:false, tip:"Copies.", details:"Selon type d’amende." },
      { id:"delai", label:"Date de réception / délai", required:true, tip:"Noter l’échéance.", details:"Conditionne la procédure (contestation / indulgence)." }
    ]
  },

  sante_cpam_base: {
    title: "Santé — CPAM / Ameli (base)",
    items: [
      { id:"decision", label:"Décision / décompte / courrier CPAM", required:true, tip:"PDF/scan.", details:"Inclure la mention des voies de recours." },
      { id:"pieces_medicales", label:"Pièces médicales (si pertinent)", required:false, tip:"ordonnances, factures, etc.", details:"Ne joindre que ce qui est nécessaire." },
      { id:"chronologie", label:"Chronologie", required:true, tip:"dates + événements.", details:"Soins, envoi feuilles, réponses CPAM." }
    ]
  }

};
