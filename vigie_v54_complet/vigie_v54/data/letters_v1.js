// Vigie Letters Registry (V36)
window.VIGIE_LETTERS = {
  generic_info: {
    title: "Demande d'information",
    pillar: "Générique",
    context: "Demander une information / procédure",
    attachments: [],
    tips: ["Privilégier l'envoi en recommandé si c'est une demande importante."],
    text:
`Objet : Demande d'information – [Objet]

Madame, Monsieur,

Je me permets de vous contacter afin d’obtenir des informations concernant [situation].

Je vous remercie de bien vouloir m’indiquer les démarches à suivre et, le cas échéant, les pièces à fournir.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  generic_reclamation: {
    title: "Réclamation (générique)",
    pillar: "Générique",
    context: "Réclamer / demander correction",
    attachments: ["Pièces justificatives"],
    tips: ["Rester factuel : faits → demande → pièces."],
    text:
`Objet : Réclamation – [Objet]

Madame, Monsieur,

Je vous contacte concernant [référence / dossier] et la situation suivante : [faits].

Après vérification, je constate : [problème / incohérence].

Je vous remercie de bien vouloir examiner ma demande et de procéder aux corrections nécessaires.  
Vous trouverez en pièces jointes les éléments justificatifs.

Dans l’attente de votre retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Nom Prénom]
[Coordonnées]`
  },

  generic_delai: {
    title: "Demande de délai / échéancier",
    pillar: "Générique",
    context: "Demander un délai de paiement",
    attachments: ["Justificatifs (optionnel)"],
    tips: ["Proposer un échéancier réaliste."],
    text:
`Objet : Demande de délai de paiement / échéancier – [Référence]

Madame, Monsieur,

Suite à [situation], je rencontre actuellement des difficultés pour régler la somme due de [montant] à l’échéance du [date].

Je sollicite un délai de paiement ou un échéancier. Je propose, à titre indicatif : [proposition].

Je reste à votre disposition pour toute information complémentaire.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  generic_contestation: {
    title: "Contestation d'une décision",
    pillar: "Générique",
    context: "Contester / demander réexamen",
    attachments: ["Pièces justificatives"],
    tips: ["Indiquer la date de la décision et la référence."],
    text:
`Objet : Contestation / demande de réexamen – [Référence]

Madame, Monsieur,

Je conteste la décision suivante : [description], notifiée le [date], référence [référence].

Après analyse, je considère que cette décision ne correspond pas à ma situation pour les raisons suivantes : [arguments factuels].

Je vous remercie de bien vouloir réexaminer mon dossier.  
Vous trouverez en pièces jointes les éléments justificatifs.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  deces_informer_organisme: {
    title: "Informer un organisme d'un décès",
    pillar: "Vie civile",
    context: "Décès",
    attachments: ["Acte de décès"],
    tips: ["Demander un accusé de réception si le sujet est sensible (droits, paiement)."],
    text:
`Objet : Déclaration de décès – [Nom Prénom du défunt]

Madame, Monsieur,

Je vous informe du décès de [Nom Prénom], survenu le [date] à [lieu].

Je vous remercie de bien vouloir prendre en compte cette information et de procéder aux démarches nécessaires concernant son dossier.

Vous trouverez en pièce jointe un acte de décès.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  deces_banque: {
    title: "Banque – déclaration de décès",
    pillar: "Banque",
    context: "Décès",
    attachments: ["Acte de décès", "Pièce d'identité du demandeur"],
    tips: ["Demander la liste des comptes/produits et la marche à suivre (succession/notaire)."],
    text:
`Objet : Déclaration de décès – [Nom Prénom du défunt]

Madame, Monsieur,

Je vous informe du décès de [Nom Prénom], survenu le [date].

Merci de bien vouloir prendre les mesures nécessaires concernant la gestion de ses comptes et de m’indiquer les démarches à suivre (documents, interlocuteur, éventuelle intervention notariale).

Référence(s) si connue(s) : [IBAN / n° de compte / agence].

Vous trouverez en pièce jointe un acte de décès.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  deces_resiliation_contrat: {
    title: "Résilier un contrat suite à décès",
    pillar: "Vie civile",
    context: "Décès",
    attachments: ["Acte de décès"],
    tips: ["Joindre le n° de contrat et demander confirmation écrite de résiliation."],
    text:
`Objet : Résiliation de contrat suite à décès – [N° contrat]

Madame, Monsieur,

Je vous informe du décès de [Nom Prénom], titulaire du contrat n° [numéro], survenu le [date].

Je vous remercie de bien vouloir procéder à la résiliation du contrat à compter de cette date et de me confirmer la prise en compte de cette demande.

Vous trouverez en pièce jointe un acte de décès.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  impots_reclamation: {
    title: "Impôts – réclamation",
    pillar: "Impôts",
    context: "Réclamation",
    attachments: ["Justificatifs", "Copie de l'avis si pertinent"],
    tips: ["Utiliser la messagerie sécurisée si possible."],
    text:
`Objet : Réclamation – [Impôt / année / référence]

Madame, Monsieur,

Je vous contacte concernant [impôt] au titre de l’année [année], référence [référence], pour solliciter une correction.

Faits : [décrire brièvement].  
Motif : [erreur / omission / situation].  
Demande : [ce que vous demandez].

Vous trouverez en pièces jointes les justificatifs utiles.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  impots_delai: {
    title: "Impôts – demande de délai / échéancier",
    pillar: "Impôts",
    context: "Paiement",
    attachments: ["Justificatifs (optionnel)"],
    tips: ["Proposer un échéancier réaliste et daté."],
    text:
`Objet : Demande de délai / échéancier – [Référence]

Madame, Monsieur,

Je sollicite un délai de paiement concernant [impôt] pour un montant de [montant], échéance du [date].

Je propose l’échéancier suivant : [proposition].

Je vous remercie de bien vouloir m’indiquer votre décision et la procédure à suivre.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  banque_contestation: {
    title: "Banque – contestation d'une opération",
    pillar: "Banque",
    context: "Fraude / contestation",
    attachments: ["Relevé / capture", "Preuve opposition"],
    tips: ["Agir vite : noter date/heure et référence de contestation."],
    text:
`Objet : Contestation d’une opération – [Date / Montant]

Madame, Monsieur,

Je conteste l’opération suivante : [type] du [date], montant [montant], libellé [libellé] sur mon compte [IBAN].

Je confirme ne pas être à l’origine de cette opération. J’ai réalisé une opposition le [date] (référence : [référence]).

Je vous remercie de bien vouloir enregistrer ma contestation et de m’indiquer la suite de la procédure.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  banque_mediateur: {
    title: "Banque – saisine du médiateur",
    pillar: "Banque",
    context: "Médiation",
    attachments: ["Copie des échanges avec la banque", "Pièces"],
    tips: ["Joindre la réponse écrite de la banque ou la preuve d'absence de réponse."],
    text:
`Objet : Saisine du médiateur bancaire – [Référence]

Madame, Monsieur,

Je saisis le médiateur bancaire concernant le litige suivant : [résumé].

J’ai contacté mon établissement le [date] par [canal] et, à ce jour, [absence de réponse / réponse négative le …].

Je vous prie de trouver ci-joints les éléments du dossier.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  logement_depot_garantie: {
    title: "Logement – restitution dépôt de garantie",
    pillar: "Logement",
    context: "Dépôt de garantie",
    attachments: ["État des lieux", "Bail"],
    tips: ["Envoyer en LRAR si absence de réponse."],
    text:
`Objet : Demande de restitution du dépôt de garantie – [Adresse]

Madame, Monsieur,

Suite à mon départ du logement situé [adresse], et à l’état des lieux de sortie effectué le [date], je vous demande la restitution du dépôt de garantie versé lors de l’entrée dans les lieux.

Je vous remercie de procéder au remboursement dans les délais légaux et de m’indiquer, le cas échéant, le détail des retenues justifiées.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  logement_mise_en_demeure_travaux: {
    title: "Logement – mise en demeure (travaux / insalubrité)",
    pillar: "Logement",
    context: "Travaux",
    attachments: ["Photos", "Échanges"],
    tips: ["Rester factuel ; demander une date d’intervention."],
    text:
`Objet : Mise en demeure – travaux / désordres – [Adresse]

Madame, Monsieur,

Je vous informe que le logement situé [adresse] présente les désordres suivants : [liste].

Malgré mes signalements du [dates], la situation persiste. Je vous mets en demeure de faire le nécessaire afin de remédier à ces désordres dans un délai de [X jours].

À défaut, je me réserve la possibilité d’engager les démarches utiles.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  caf_reexamen: {
    title: "CAF – demande de réexamen",
    pillar: "CAF",
    context: "Dossier / décision",
    attachments: ["Justificatifs", "Référence dossier"],
    tips: ["Joindre la référence allocataire et la décision contestée."],
    text:
`Objet : Demande de réexamen – CAF – [Référence allocataire]

Madame, Monsieur,

Je sollicite le réexamen de mon dossier CAF (référence allocataire : [numéro]) suite à [décision / situation], notifiée le [date].

Ma situation actuelle est la suivante : [faits].  
Je joins les justificatifs nécessaires.

Je vous remercie de bien vouloir m’indiquer la suite donnée à cette demande.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  ameli_droits: {
    title: "Ameli/CPAM – ouverture ou mise à jour des droits",
    pillar: "Ameli",
    context: "Droits",
    attachments: ["Pièce identité", "Justificatifs situation"],
    tips: ["Indiquer le numéro de sécurité sociale si possible."],
    text:
`Objet : Ouverture / mise à jour des droits – [Nom] – [N° Sécurité sociale]

Madame, Monsieur,

Je vous contacte afin de demander l’ouverture ou la mise à jour de mes droits à l’assurance maladie.

Ma situation : [résumé].  
Numéro de sécurité sociale : [numéro] (si disponible).

Je vous remercie de bien vouloir m’indiquer les pièces nécessaires et la procédure à suivre.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  },

  ft_reexamen: {
    title: "France Travail – demande de réexamen",
    pillar: "France Travail",
    context: "Décision / dossier",
    attachments: ["Décision", "Justificatifs"],
    tips: ["Indiquer identifiant + date de notification."],
    text:
`Objet : Demande de réexamen – [Référence / identifiant]

Madame, Monsieur,

Je sollicite le réexamen de mon dossier suite à la décision suivante : [description], notifiée le [date].

Éléments : [faits].  
Je joins les justificatifs utiles.

Cordialement,

[Nom Prénom]
[Coordonnées]`
  }
};
