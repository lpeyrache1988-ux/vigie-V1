// VIGIE V52 — Moments de vie
// Chaque moment de vie déclenche une cascade de démarches administratives.
window.VIGIE_MOMENTS = [
  {
    id: "naissance",
    icon: "👶",
    label: "Naissance / adoption",
    desc: "Un enfant arrive dans votre foyer",
    urgency: "legal_deadline",
    urgency_hint: "Déclaration de naissance : 5 jours après la naissance (obligatoire)",
    steps: [
      { id:"n1", label:"Déclarer la naissance à la mairie", delay:"J+5 max", obligatoire:true, organisme:"Mairie", url:"https://www.service-public.fr/particuliers/vosdroits/F961", done:false },
      { id:"n2", label:"Envoyer la déclaration de grossesse à la CAF et à la CPAM", delay:"Avant 14 semaines", obligatoire:true, organisme:"CAF + CPAM", url:"https://www.caf.fr", done:false },
      { id:"n3", label:"Demander les allocations familiales (CAF)", delay:"Dès la naissance", obligatoire:false, organisme:"CAF", url:"https://www.caf.fr/allocataires/mes-droits-et-prestations/les-prestations/petite-enfance/la-prestation-d-accueil-du-jeune-enfant-paje", done:false },
      { id:"n4", label:"Inscrire l'enfant sur la carte Vitale (CPAM)", delay:"Sous 1 mois", obligatoire:true, organisme:"CPAM / Ameli", url:"https://www.ameli.fr/assure/droits-demarches/naissance-adoption/naissance", done:false },
      { id:"n5", label:"Mettre à jour la déclaration d'impôts (quotient familial)", delay:"Prochaine déclaration", obligatoire:false, organisme:"Impôts", url:"https://www.impots.gouv.fr", done:false },
      { id:"n6", label:"Inscrire sur liste électorale si adoption (selon situation)", delay:"Dès que possible", obligatoire:false, organisme:"Mairie", url:"https://www.service-public.fr/particuliers/vosdroits/F1337", done:false },
      { id:"n7", label:"Rechercher une place en crèche ou assistante maternelle", delay:"Dès que possible", obligatoire:false, organisme:"Mairie / CAF", url:"https://mon-enfant.fr", done:false },
      { id:"n8", label:"Vérifier l'éligibilité à la prime à la naissance (PAJE)", delay:"Dans les 2 mois avant / après terme", obligatoire:false, organisme:"CAF", url:"https://www.caf.fr", done:false }
    ]
  },
  {
    id: "demenagement",
    icon: "📦",
    label: "Déménagement",
    desc: "Vous changez de domicile",
    urgency: "admin_deadline",
    urgency_hint: "Certaines mises à jour ont un délai légal (ex : carte grise 30 jours)",
    steps: [
      { id:"d1", label:"Mettre à jour l'adresse aux impôts (espace particulier)", delay:"Avant le 30 juin de l'année", obligatoire:true, organisme:"Impôts", url:"https://www.impots.gouv.fr", done:false },
      { id:"d2", label:"Déclarer le changement d'adresse à la CAF", delay:"Dans le mois suivant", obligatoire:true, organisme:"CAF", url:"https://www.caf.fr", done:false },
      { id:"d3", label:"Mettre à jour l'adresse à la CPAM (Ameli)", delay:"Dès que possible", obligatoire:true, organisme:"CPAM", url:"https://www.ameli.fr", done:false },
      { id:"d4", label:"Changer l'adresse sur la carte grise (30 jours)", delay:"J+30 max", obligatoire:true, organisme:"ANTS", url:"https://immatriculation.ants.gouv.fr", done:false },
      { id:"d5", label:"Informer France Travail si allocataire ARE", delay:"Dans les 72h", obligatoire:true, organisme:"France Travail", url:"https://www.francetravail.fr", done:false },
      { id:"d6", label:"Résilier / transférer les contrats (électricité, gaz, internet)", delay:"Avant le déménagement", obligatoire:false, organisme:"Fournisseurs", url:"https://www.service-public.fr/particuliers/vosdroits/F31330", done:false },
      { id:"d7", label:"Faire suivre le courrier à La Poste", delay:"Avant le déménagement", obligatoire:false, organisme:"La Poste", url:"https://www.laposte.fr/reexpedition-courrier", done:false },
      { id:"d8", label:"Mettre à jour l'adresse sur la carte d'identité / passeport", delay:"Lors du prochain renouvellement", obligatoire:false, organisme:"Mairie / ANTS", url:"https://www.service-public.fr/particuliers/vosdroits/N360", done:false },
      { id:"d9", label:"S'inscrire sur les listes électorales de la nouvelle commune", delay:"Avant le 31 décembre pour voter l'année suivante", obligatoire:false, organisme:"Mairie", url:"https://www.service-public.fr/particuliers/vosdroits/F1237", done:false },
      { id:"d10", label:"Informer la banque du changement d'adresse", delay:"Dans les 2 semaines", obligatoire:false, organisme:"Banque", url:"", done:false },
      { id:"d11", label:"Mettre à jour les assurances (habitation, auto)", delay:"Dès l'entrée dans le nouveau logement", obligatoire:true, organisme:"Assureur", url:"", done:false },
      { id:"d12", label:"Mettre à jour l'adresse auprès de la Sécurité Sociale si étudiant", delay:"Dès que possible", obligatoire:false, organisme:"CPAM", url:"https://www.ameli.fr", done:false }
    ]
  },
  {
    id: "deces",
    icon: "🕊️",
    label: "Décès d'un proche",
    desc: "Gérer les démarches après un décès",
    urgency: "legal_deadline",
    urgency_hint: "Déclaration de décès : 24h (obligatoire). Déclaration de succession : 6 mois",
    steps: [
      { id:"dc1", label:"Déclarer le décès à la mairie (dans les 24h)", delay:"J+1 max", obligatoire:true, organisme:"Mairie", url:"https://www.service-public.fr/particuliers/vosdroits/F909", done:false },
      { id:"dc2", label:"Contacter un notaire pour la succession", delay:"Dans les semaines suivantes", obligatoire:true, organisme:"Notaire", url:"https://www.notaires.fr/fr/annuaires-notaires", done:false },
      { id:"dc3", label:"Prévenir les organismes sociaux (CAF, CPAM, France Travail)", delay:"Dans les 30 jours", obligatoire:true, organisme:"CAF / CPAM / FT", url:"https://www.service-public.fr/particuliers/vosdroits/F885", done:false },
      { id:"dc4", label:"Demander le capital décès à la CPAM (si salarié)", delay:"Dans les 2 ans", obligatoire:false, organisme:"CPAM", url:"https://www.ameli.fr/assure/remboursements/indemnites-journalieres/capital-deces", done:false },
      { id:"dc5", label:"Informer la banque — blocage du compte joint", delay:"Dès que possible", organisme:"Banque", obligatoire:true, url:"", done:false },
      { id:"dc6", label:"Résilier les contrats (téléphone, internet, assurances, abonnements)", delay:"Dans le mois suivant", obligatoire:false, organisme:"Divers", url:"https://www.service-public.fr/particuliers/vosdroits/F885", done:false },
      { id:"dc7", label:"Demander la pension de réversion (conjoint survivant)", delay:"Dès que possible — non automatique", obligatoire:false, organisme:"Caisse retraite", url:"https://www.info-retraite.fr", done:false },
      { id:"dc8", label:"Faire la déclaration de succession aux impôts (6 mois)", delay:"J+180 max", obligatoire:true, organisme:"Impôts", url:"https://www.impots.gouv.fr/particulier/la-declaration-de-succession", done:false },
      { id:"dc9", label:"Mettre à jour la déclaration d'impôts (l'année suivante)", delay:"Prochaine déclaration", obligatoire:true, organisme:"Impôts", url:"https://www.impots.gouv.fr", done:false },
      { id:"dc10", label:"Demander l'allocation veuvage si éligible", delay:"Dans les 2 ans", obligatoire:false, organisme:"Caisse retraite", url:"https://www.service-public.fr/particuliers/vosdroits/F1464", done:false }
    ]
  },
  {
    id: "mariage_pacs",
    icon: "💍",
    label: "Mariage / PACS",
    desc: "Vous vous mariez ou vous pacsez",
    urgency: "none",
    urgency_hint: "",
    steps: [
      { id:"m1", label:"Mettre à jour le nom / situation à la CAF", delay:"Dans le mois suivant", obligatoire:true, organisme:"CAF", url:"https://www.caf.fr", done:false },
      { id:"m2", label:"Mettre à jour à la CPAM (ayant droit)", delay:"Dans le mois suivant", obligatoire:true, organisme:"CPAM", url:"https://www.ameli.fr", done:false },
      { id:"m3", label:"Déclarer le changement de situation aux impôts", delay:"Année suivante (déclaration commune possible)", obligatoire:true, organisme:"Impôts", url:"https://www.impots.gouv.fr", done:false },
      { id:"m4", label:"Mettre à jour les documents d'identité si changement de nom", delay:"Dès que possible", obligatoire:false, organisme:"Mairie / ANTS", url:"https://www.service-public.fr/particuliers/vosdroits/N360", done:false },
      { id:"m5", label:"Mettre à jour le contrat d'assurance habitation", delay:"Sous 1 mois", obligatoire:false, organisme:"Assureur", url:"", done:false },
      { id:"m6", label:"Mettre à jour le bénéficiaire de l'assurance-vie", delay:"Dès que possible", obligatoire:false, organisme:"Assureur", url:"", done:false },
      { id:"m7", label:"Revoir le régime matrimonial / convention de PACS", delay:"Avant ou après la cérémonie", obligatoire:false, organisme:"Notaire / Greffe", url:"https://www.service-public.fr/particuliers/vosdroits/F1691", done:false },
      { id:"m8", label:"Mettre à jour France Travail si allocataire", delay:"Dans le mois suivant", obligatoire:true, organisme:"France Travail", url:"https://www.francetravail.fr", done:false }
    ]
  },
  {
    id: "retraite_depart",
    icon: "👴",
    label: "Départ à la retraite",
    desc: "Vous préparez ou prenez votre retraite",
    urgency: "admin_deadline",
    urgency_hint: "Déposer la demande de retraite 4 à 6 mois avant la date souhaitée",
    steps: [
      { id:"r1", label:"Vérifier votre relevé de carrière sur info-retraite.fr", delay:"Au moins 2 ans avant", obligatoire:true, organisme:"Info-retraite.fr", url:"https://www.info-retraite.fr", done:false },
      { id:"r2", label:"Estimer votre pension avec le simulateur", delay:"Au moins 1 an avant", obligatoire:false, organisme:"Info-retraite.fr", url:"https://www.info-retraite.fr/portail-services/home/simulateurs.html", done:false },
      { id:"r3", label:"Déposer la demande de retraite (4 à 6 mois avant)", delay:"J-180 à J-120", obligatoire:true, organisme:"Caisse retraite", url:"https://www.info-retraite.fr", done:false },
      { id:"r4", label:"Informer l'employeur (préavis selon convention collective)", delay:"Selon contrat", obligatoire:true, organisme:"Employeur", url:"", done:false },
      { id:"r5", label:"Mettre à jour le taux de prélèvement à la source aux impôts", delay:"Dès le premier versement de retraite", obligatoire:true, organisme:"Impôts", url:"https://www.impots.gouv.fr", done:false },
      { id:"r6", label:"Mettre à jour la mutuelle (tarif retraité souvent différent)", delay:"Dès la cessation d'activité", obligatoire:false, organisme:"Mutuelle", url:"", done:false },
      { id:"r7", label:"Demander la carte Senior / réductions (selon collectivité)", delay:"Dès la retraite", obligatoire:false, organisme:"Collectivité", url:"", done:false },
      { id:"r8", label:"Vérifier les droits à la complémentaire santé solidaire (CSS)", delay:"Dès que possible", obligatoire:false, organisme:"CPAM", url:"https://www.complementaire-sante-solidaire.gouv.fr", done:false }
    ]
  },
  {
    id: "divorce_separation",
    icon: "💔",
    label: "Divorce / Séparation",
    desc: "Vous vous séparez ou divorcez",
    urgency: "admin_deadline",
    urgency_hint: "Mettre à jour la CAF dans le mois suivant pour éviter un trop-perçu",
    steps: [
      { id:"s1", label:"Mettre à jour la situation à la CAF (risque trop-perçu)", delay:"Dans le mois suivant", obligatoire:true, organisme:"CAF", url:"https://www.caf.fr", done:false },
      { id:"s2", label:"Mettre à jour le taux de prélèvement à la source aux impôts", delay:"Dès la séparation effective", obligatoire:true, organisme:"Impôts", url:"https://www.impots.gouv.fr", done:false },
      { id:"s3", label:"Ouvrir un compte bancaire personnel si nécessaire", delay:"Immédiatement", obligatoire:false, organisme:"Banque", url:"", done:false },
      { id:"s4", label:"Demander une attestation de garde pour la CAF (APL, allocations)", delay:"Dès le jugement", obligatoire:false, organisme:"Tribunal / Mairie", url:"", done:false },
      { id:"s5", label:"Mettre à jour le bail ou chercher un nouveau logement", delay:"Selon situation", obligatoire:false, organisme:"Bailleur / Mairie", url:"https://www.service-public.fr/particuliers/vosdroits/F920", done:false },
      { id:"s6", label:"Vérifier les droits au RSA / Prime d'activité (situation monoparentale)", delay:"Dès la séparation", obligatoire:false, organisme:"CAF", url:"https://www.caf.fr", done:false },
      { id:"s7", label:"Mettre à jour la mutuelle (sortie du contrat du conjoint)", delay:"Dans le mois suivant", obligatoire:true, organisme:"Mutuelle / CPAM", url:"https://www.ameli.fr", done:false },
      { id:"s8", label:"Contacter un avocat pour la pension alimentaire / prestation compensatoire", delay:"Dès que possible", obligatoire:false, organisme:"Avocat / JAF", url:"https://cnb.avocat.fr/annuaire-des-avocats-de-france", done:false }
    ]
  },
  {
    id: "perte_emploi",
    icon: "💼",
    label: "Perte d'emploi",
    desc: "Vous perdez votre emploi ou vous démissionnez",
    urgency: "legal_deadline",
    urgency_hint: "S'inscrire à France Travail dans les 12 mois suivant la fin du contrat pour conserver ses droits ARE",
    steps: [
      { id:"p1", label:"S'inscrire à France Travail (dans les 12 mois)", delay:"Dès la fin du contrat", obligatoire:true, organisme:"France Travail", url:"https://www.francetravail.fr/candidat/inscription.html", done:false },
      { id:"p2", label:"Demander l'ouverture des droits ARE", delay:"Dès l'inscription", obligatoire:false, organisme:"France Travail", url:"https://www.francetravail.fr", done:false },
      { id:"p3", label:"Déclarer le changement de situation à la CAF", delay:"Dans le mois suivant", obligatoire:true, organisme:"CAF", url:"https://www.caf.fr", done:false },
      { id:"p4", label:"Mettre à jour le taux de prélèvement à la source", delay:"Dès que possible", obligatoire:true, organisme:"Impôts", url:"https://www.impots.gouv.fr", done:false },
      { id:"p5", label:"Vérifier la portabilité de la mutuelle (1 mois gratuit)", delay:"Dans le mois suivant la fin du contrat", obligatoire:false, organisme:"Mutuelle", url:"https://www.service-public.fr/particuliers/vosdroits/F20744", done:false },
      { id:"p6", label:"Demander la Complémentaire santé solidaire si revenus faibles", delay:"Dès que possible", obligatoire:false, organisme:"CPAM", url:"https://www.complementaire-sante-solidaire.gouv.fr", done:false },
      { id:"p7", label:"Vérifier les droits au RSA (si fin de droit ARE ou démission)", delay:"Dès que possible", obligatoire:false, organisme:"CAF", url:"https://www.caf.fr", done:false },
      { id:"p8", label:"Récupérer les documents de fin de contrat (solde tout compte, attestation employeur)", delay:"Dans les 15 jours", obligatoire:true, organisme:"Employeur", url:"https://www.service-public.fr/particuliers/vosdroits/F89", done:false }
    ]
  },
  {
    id: "handicap_maladie",
    icon: "🩺",
    label: "Handicap / Maladie longue durée",
    desc: "Vous faites face à une maladie grave ou un handicap",
    urgency: "admin_deadline",
    urgency_hint: "Certaines demandes (MDPH, ALD) ont des délais de traitement longs — anticiper",
    steps: [
      { id:"h1", label:"Demander la reconnaissance ALD à votre médecin traitant", delay:"Dès le diagnostic", obligatoire:false, organisme:"CPAM / Médecin", url:"https://www.ameli.fr/assure/droits-demarches/maladie-accident-hospitalisation/affection-longue-duree-ald/affection-longue-duree-ald-definition-et-prise-en-charge", done:false },
      { id:"h2", label:"Déposer un dossier MDPH (si handicap)", delay:"Dès que possible — délai de traitement 4 mois", obligatoire:false, organisme:"MDPH", url:"https://www.service-public.fr/particuliers/vosdroits/N57", done:false },
      { id:"h3", label:"Demander la RQTH pour l'emploi (si actif)", delay:"Dès le dépôt MDPH", obligatoire:false, organisme:"MDPH", url:"https://www.service-public.fr/particuliers/vosdroits/F1650", done:false },
      { id:"h4", label:"Vérifier l'éligibilité à l'AAH", delay:"Avec la décision MDPH", obligatoire:false, organisme:"CAF + MDPH", url:"https://www.caf.fr/allocataires/mes-droits-et-prestations/les-prestations/handicap-et-dependance/l-allocation-aux-adultes-handicapes-aah", done:false },
      { id:"h5", label:"Demander la PCH (Prestation Compensation Handicap) si besoin d'aide", delay:"Via MDPH", obligatoire:false, organisme:"MDPH / Département", url:"https://www.service-public.fr/particuliers/vosdroits/F14202", done:false },
      { id:"h6", label:"Adapter le logement (aides à l'aménagement — ANAH, Action Logement)", delay:"Dès la décision MDPH", obligatoire:false, organisme:"ANAH / Département", url:"https://www.anah.fr", done:false },
      { id:"h7", label:"Informer l'employeur et demander un aménagement de poste si RQTH", delay:"Après obtention RQTH", obligatoire:false, organisme:"Employeur / AGEFIPH", url:"https://www.agefiph.fr", done:false },
      { id:"h8", label:"Vérifier les droits à la Complémentaire santé solidaire", delay:"Dès que possible", obligatoire:false, organisme:"CPAM", url:"https://www.complementaire-sante-solidaire.gouv.fr", done:false }
    ]
  }
];
