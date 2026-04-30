
// V44 strategies layer (general information, not legal advice)
// Extends V43 with legal framing, risk flags, and "levels" (amiable/admin/juridiction/mediation).
window.VIGIE_GET_STRATEGIES_V44 = function(scenario){
  scenario = scenario || {};
  const id = scenario.id || "";
  const tags = scenario.tags || [];
  const has = (t)=>tags.includes(t) || id.startsWith(t+"_");

  const mk = (o)=>Object.assign({
    legal_basis: null,
    risks: [],
    levels: [
      {id:"amiable", label:"Amiable", what:"Demande / échange / réexamen", when:"en premier"},
      {id:"administratif", label:"Administratif", what:"Recours/commission/hiérarchie", when:"si refus ou silence"},
      {id:"mediation", label:"Médiation", what:"Médiateur / Défenseur des droits", when:"si blocage"},
      {id:"juridictionnel", label:"Juridictionnel", what:"Tribunal compétent", when:"si nécessaire"}
    ],
    avoid: []
  }, o);

  // CAF — trop-perçu
  if(has("caf")){
    return [
      mk({
        id:"contest",
        label:"Je conteste (erreur / calcul / période)",
        action_now:"Envoyer une contestation écrite + demander le détail du calcul (preuve d’envoi).",
        why:"Si vous pensez qu’une erreur existe (période, ressources, situation).",
        legal_basis:"Recours amiable (CAF) — se référer à votre notification pour délais/voies.",
        risks:["Refus si pièces insuffisantes","Délais à respecter (selon notification)"],
        avoid:["Ignorer le courrier","Répondre sans référence dossier/période"]
      }),
      mk({
        id:"cant_pay",
        label:"Je reconnais la dette mais je ne peux pas payer",
        action_now:"Demander un échéancier et/ou une remise gracieuse motivée.",
        why:"Si la dette est due mais votre situation financière ne permet pas un règlement immédiat.",
        legal_basis:"Demande gracieuse / échéancier (CAF) — modalités selon dossier.",
        risks:["Refus ou accord partiel","Retenues sur prestations possibles"],
        avoid:["Attendre que la dette augmente sans contact"]
      }),
      mk({
        id:"fraud",
        label:"On me soupçonne de fraude / contrôle",
        action_now:"Répondre factuellement + construire une chronologie + rassembler les preuves.",
        why:"En cas de contrôle, la qualité des preuves et la cohérence chronologique sont clés.",
        legal_basis:"Contrôle/recouvrement CAF — se référer aux voies et délais indiqués.",
        risks:["Pénalités/recouvrement renforcé selon situation","Dossiers sensibles → prudence"],
        avoid:["Mensonger/approximer","Détruire des éléments"]
      })
    ];
  }

  // Impôts — proposition / rectification / contrôle
  if(has("impots") || has("tax")){
    return [
      mk({
        id:"answer",
        label:"Répondre (point par point)",
        action_now:"Répondre par écrit, point par point, en joignant les pièces et en demandant la prorogation si besoin.",
        why:"Utile si vous contestez la motivation ou apportez des preuves.",
        legal_basis:"Réponse à une proposition de rectification : voir délais/voies sur le courrier.",
        risks:["Délai court","Argumentation insuffisante"],
        avoid:["Réponse hors délai","Réponse émotionnelle"]
      }),
      mk({
        id:"time",
        label:"Demander un délai",
        action_now:"Demander une prorogation du délai de réponse (écrit, avant l’échéance).",
        why:"Pour préparer une réponse complète et réunir les pièces.",
        legal_basis:"Prorogation : se référer aux mentions du courrier et à la procédure.",
        risks:["Refus possible","Perte de temps si trop tard"],
        avoid:["Attendre la dernière minute"]
      }),
      mk({
        id:"assist",
        label:"Se faire assister (conseil)",
        action_now:"Prendre conseil (avocat/fiscaliste) et préparer une réponse structurée.",
        why:"Cas complexes/sensibles (L64, pénalités, enjeux élevés).",
        legal_basis:"Droit à être assisté selon procédure — voir votre courrier.",
        risks:["Coût","Délais"],
        avoid:["Rester seul si enjeux importants"]
      })
    ];
  }

  // Banque — fraude
  if(has("banque") || has("fraude")){
    return [
      mk({
        id:"card",
        label:"Paiement carte / CB",
        action_now:"Faire opposition immédiatement + contester les opérations par écrit.",
        why:"Souvent plus récupérable si action rapide.",
        legal_basis:"Règles CB/banque — délais et modalités selon type d’opération.",
        risks:["Contestations tardives","Confusion CB vs virement"],
        avoid:["Attendre plusieurs jours","Ne pas demander un écrit"]
      }),
      mk({
        id:"transfer",
        label:"Virement frauduleux",
        action_now:"Contacter la banque en urgence + déposer une plainte/déclaration selon le cas.",
        why:"Plus difficile : agir très tôt augmente les chances.",
        legal_basis:"Procédure bancaire + plainte selon situation.",
        risks:["Récupération incertaine","Temps long"],
        avoid:["Se limiter à un appel sans suivi écrit"]
      })
    ];
  }

  // Santé — AMELI / CPAM
  if(has("ameli") || has("cpam") || has("sante")){
    return [
      mk({
        id:"droits",
        label:"Comprendre / rétablir mes droits",
        action_now:"Contacter la CPAM via votre compte + demander une réponse écrite si blocage.",
        why:"En cas de suspension, dossier incomplet, ou droits non à jour.",
        legal_basis:"Voies indiquées par la CPAM (courriers/notifications).",
        risks:["Délais variables","Pièces manquantes"],
        avoid:["Multiplier les canaux sans suivi","Envoyer des pièces sans référence"]
      }),
      mk({
        id:"contester",
        label:"Je conteste une décision (refus / remboursement)",
        action_now:"Demander le motif écrit + préparer une contestation argumentée avec pièces.",
        why:"Utile si vous pensez que la décision est erronée.",
        legal_basis:"Procédure de contestation CPAM (voir courrier : voies et délais).",
        risks:["Délai de recours","Refus si dossier incomplet"],
        avoid:["Rester oral uniquement","Contester sans pièces"]
      }),
      mk({
        id:"mediation",
        label:"Médiation / aide",
        action_now:"Saisir le médiateur / Défenseur des droits si blocage persistant.",
        why:"Quand les échanges n'aboutissent pas.",
        legal_basis:"Médiation (général) — vérifier la procédure CPAM.",
        risks:["Délais"],
        avoid:["Attendre trop longtemps sans relance"]
      })
    ];
  }

  // Emploi — France Travail
  if(has("france_travail") || has("ft") || has("emploi")){
    return [
      mk({
        id:"reexamen",
        label:"Demander un réexamen (droits / décision)",
        action_now:"Demander un réexamen par écrit + joindre justificatifs (preuve d'envoi).",
        why:"Pour une radiation, un trop-perçu, ou une décision contestée.",
        legal_basis:"Procédure interne France Travail (voir notification).",
        risks:["Délais courts","Suspension de droits"],
        avoid:["Ignorer la notification","Ne pas actualiser si nécessaire"]
      }),
      mk({
        id:"mediateur",
        label:"Saisir le médiateur",
        action_now:"Saisir le médiateur France Travail si le dossier stagne malgré relances.",
        why:"En cas de blocage/absence de réponse.",
        legal_basis:"Médiateur France Travail (modalités sur site officiel).",
        risks:["Délais"],
        avoid:["Sauter les étapes sans trace écrite"]
      }),
      mk({
        id:"contentieux",
        label:"Recours contentieux (si nécessaire)",
        action_now:"Identifier la voie de recours mentionnée + se faire aider si enjeu important.",
        why:"Pour des décisions lourdes (droits, sanctions).",
        legal_basis:"Voies/délais sur la notification.",
        risks:["Complexité","Coût"],
        avoid:["Dépasser les délais"]
      })
    ];
  }

  // Logement
  if(has("logement")){
    return [
      mk({
        id:"amiable",
        label:"Résoudre à l'amiable",
        action_now:"Écrire un courrier clair (faits + demandes) et conserver les preuves.",
        why:"Souvent plus rapide et moins conflictuel.",
        legal_basis:"Références selon bail/contrat — voir sources officielles.",
        risks:["Silence","Conflit qui s'enlise"],
        avoid:["Tout faire à l'oral","Menaces"]
      }),
      mk({
        id:"aide",
        label:"Se faire aider (ADIL / France Services / association)",
        action_now:"Contacter l'ADIL ou une permanence locale avec votre dossier.",
        why:"Pour clarifier vos droits et options.",
        legal_basis:"Conseil d'orientation (non juridique personnalisé).",
        risks:["Rendez-vous"],
        avoid:["Attendre une expulsion sans agir"]
      }),
      mk({
        id:"recours",
        label:"Conciliation / recours",
        action_now:"Identifier la bonne instance (conciliation/médiation/tribunal) selon le litige.",
        why:"Si l'amiable échoue.",
        legal_basis:"Voies selon type de litige.",
        risks:["Délais","Complexité"],
        avoid:["Aller au tribunal sans dossier"]
      })
    ];
  }

  // Vie civile (papiers)
  if(has("vie_civile") || has("passport") || has("cni") || has("mariage")){
    return [
      mk({
        id:"rdv",
        label:"Prendre / confirmer un RDV",
        action_now:"Vérifier la liste des pièces, prendre RDV, et garder une preuve (mail/SMS).",
        why:"Pour éviter un refus au guichet.",
        legal_basis:"Démarches mairie/ANTS — voir liens officiels.",
        risks:["Délais de RDV","Pièce manquante"],
        avoid:["Se déplacer sans dossier complet"]
      }),
      mk({
        id:"urgence",
        label:"Urgence (départ proche)",
        action_now:"Chercher RDV dans une autre mairie + documenter l'urgence si demandé.",
        why:"Quand le délai normal ne permet pas.",
        legal_basis:"Procédures locales — à vérifier.",
        risks:["Disponibilité limitée"],
        avoid:["Attendre la dernière semaine"]
      })
    ];
  }

  // Amendes / PV
  if(has("amende") || has("pv")){
    return [
      mk({
        id:"payer",
        label:"Je paie (et je veux éviter la majoration)",
        action_now:"Vérifier l'échéance et payer via le canal officiel.",
        why:"Pour éviter la majoration.",
        legal_basis:"Voir avis : modalités/paiement.",
        risks:["Mauvais canal / arnaque"],
        avoid:["Payer via un lien douteux"]
      }),
      mk({
        id:"contester",
        label:"Je conteste",
        action_now:"Respecter les délais indiqués, conserver preuves, et déposer la contestation via le canal prévu.",
        why:"Si vous avez un motif sérieux.",
        legal_basis:"Voies/délais sur l'avis.",
        risks:["Hors délai","Dossier incomplet"],
        avoid:["Contester sans motif ni preuve"]
      })
    ];
  }

  // Arnaques / phishing
  if(has("arnaques")){
    return [
      mk({
        id:"securiser",
        label:"Se protéger maintenant",
        action_now:"Changer mots de passe, activer 2FA, et signaler l'arnaque via un canal officiel.",
        why:"Limiter les dégâts.",
        legal_basis:"Signalement (cybermalveillance / plateformes officielles).",
        risks:["Récidive","Usurpation"],
        avoid:["Répondre au fraudeur","Payer pour 'débloquer'"]
      }),
      mk({
        id:"plainte",
        label:"Plainte / démarches",
        action_now:"Rassembler preuves (captures, mails) et déposer plainte si nécessaire.",
        why:"Si préjudice réel.",
        legal_basis:"Procédure selon situation.",
        risks:["Temps"],
        avoid:["Supprimer les preuves"]
      })
    ];
  }

  // Justice / litiges (général)
  if(has("justice")){
    return [
      mk({
        id:"amiable",
        label:"Solution amiable / conciliation",
        action_now:"Documenter les faits et tenter un accord écrit.",
        why:"Souvent plus rapide.",
        legal_basis:"Conciliation/médiation selon litige.",
        risks:["Silence"],
        avoid:["Accord oral sans trace"]
      }),
      mk({
        id:"orientation",
        label:"S'orienter vers la bonne instance",
        action_now:"Identifier l'instance compétente (médiateur, tribunal) et préparer un dossier.",
        why:"Pour éviter des démarches inutiles.",
        legal_basis:"Compétence selon litige.",
        risks:["Complexité"],
        avoid:["Sauter des étapes"]
      })
    ];
  }

  // Default fallback: keep V43 if available
  if(typeof window.VIGIE_GET_STRATEGIES === "function"){
    return window.VIGIE_GET_STRATEGIES(scenario).map(s=>mk(s));
  }
  return [];
};
