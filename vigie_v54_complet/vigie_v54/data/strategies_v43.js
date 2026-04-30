
// V43 strategies layer (general guidance, not legal advice)
window.VIGIE_GET_STRATEGIES = function(scenario){
  scenario = scenario || {};
  const id = scenario.id || "";
  const tags = scenario.tags || [];
  const has = (t)=>tags.includes(t);

  // Helpers
  const mk = (id,label,action_now,why)=>({id,label,action_now,why});

  // CAF
  if(has("caf") || id.startsWith("caf_")){
    return [
      mk("contest","Je conteste (erreur / calcul / période)","Envoyer une contestation écrite + demander le détail du calcul.","Si vous pensez qu’il y a une erreur ou un élément non pris en compte."),
      mk("cant_pay","Je dois payer mais je ne peux pas","Demander un échéancier et/ou une remise gracieuse (si possible).","Si la dette est due mais vous ne pouvez pas payer d’un coup."),
      mk("fraud","On me soupçonne de fraude / contrôle","Répondre factuellement + rassembler toutes les preuves (chronologie).","Si le courrier parle de contrôle, incohérences ou fraude présumée.")
    ];
  }

  // Banque / fraude
  if(has("banque") || has("fraude") || id.includes("fraude")){
    return [
      mk("card","Paiement carte / CB","Faire opposition immédiatement + contester les opérations.","Souvent plus simple si action rapide."),
      mk("transfer","Virement frauduleux","Contacter la banque en urgence + déposer plainte/déclaration selon le cas.","Plus difficile : agir le plus tôt possible.")
    ];
  }

  // Impôts
  if(has("impots") || id.startsWith("tax_")){
    return [
      mk("respond","Je réponds point par point","Préparer une réponse structurée + pièces justificatives.","Si vous pouvez expliquer et justifier."),
      mk("contest","Je conteste le bien-fondé","Identifier les points litigieux + arguments + preuves.","Si vous êtes en désaccord sur le fond."),
      mk("deadline","Je manque de temps","Demander une prorogation / délai + sécuriser la date d’envoi.","Si l’échéance est proche.")
    ];
  }

  // Amendes
  if(has("amende") || has("antai") || id.includes("amende")){
    return [
      mk("contest","Je conteste","Contester via le canal officiel indiqué (avec pièces).","Si erreur d’immatriculation, vol, prêt, etc."),
      mk("pay","Je paye","Payer dans le délai pour éviter majoration.","Si vous acceptez l’amende."),
      mk("late","C’est majoré / délai dépassé","Vérifier voies de recours et justificatifs (selon motif).","Si vous découvrez l’amende tard.")
    ];
  }

  // CPAM / santé
  if(has("cpam") || has("ameli") || has("sante")){
    return [
      mk("info","Je veux comprendre le refus","Demander les motifs + références + pièces manquantes.","Refus = souvent dossier incomplet ou règle spécifique."),
      mk("send","Je complète mon dossier","Envoyer les pièces demandées + conserver preuve.","Si on vous demande un document précis."),
      mk("recours","Je conteste","Écrire et demander réexamen / recours interne si applicable.","Si vous êtes en désaccord sur la décision.")
    ];
  }

  // France Travail
  if(has("france_travail") || has("pole_emploi") || has("emploi")){
    return [
      mk("reexamen","Je demande un réexamen","Contacter via espace + écrit en expliquant la situation.","Souvent utile si erreur d’actualisation / document manquant."),
      mk("indus","On me demande un trop-perçu","Demander détail du calcul + contester ou négocier échéancier.","Très fréquent."),
      mk("mediateur","Je suis bloqué","Saisir médiateur / recours indiqué.","Si aucune réponse malgré relances.")
    ];
  }

  // Default
  return [ mk("default","Situation générale","Suivre la première action proposée et rassembler vos pièces.","Point de départ.") ];
};
