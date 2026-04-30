// VIGIE V53 — Stratégies manquantes : retraite, consommation, MDPH, préfecture
// Surcouche non destructive sur strategies_v44.js
// Appelée après strategies_v44.js avec le même format

window.VIGIE_GET_STRATEGIES_V53 = function(scenario, query, pillar){
  'use strict';

  // Si strategies_v44 a déjà retourné un résultat pertinent, on peut enrichir
  const v44result = window.VIGIE_GET_STRATEGIES_V44 ? window.VIGIE_GET_STRATEGIES_V44(scenario, query, pillar) : null;

  const sid  = (scenario && scenario.id)  || '';
  const tags = (scenario && scenario.tags) || [];
  const qn   = (query || '').toLowerCase();
  const p    = (pillar || '').toLowerCase();

  function has(kw){ return sid.includes(kw) || qn.includes(kw) || tags.some(t => t.includes(kw)) || p.includes(kw); }

  // ── RETRAITE ────────────────────────────────────────────────────
  if(has('retraite') || has('releve_carriere') || has('pension_reversion') || has('trimestres')){
    return {
      pillar_label: 'Retraite',
      pillar_icon: '👴',
      strategies: [
        {
          id: 'retraite_verifier_droits',
          label: 'Vérifier et corriger mes droits',
          why: 'Des trimestres peuvent être manquants ou mal comptabilisés.',
          action_now: 'Télécharger votre relevé de carrière sur info-retraite.fr et identifier les périodes manquantes.',
          legal_basis: 'Rectification de carrière — caisses compétentes selon le régime (CNAV, MSA, AGIRC-ARRCO…)',
          canal: 'En ligne sur info-retraite.fr ou courrier recommandé à la caisse',
          delay: 'Dès que possible — plus tôt = plus facile à justifier (indicatif)',
          avoid: ['Attendre la veille du départ', 'Ne pas conserver ses bulletins de salaire'],
          sources: [
            { label: 'Info-retraite.fr', url: 'https://www.info-retraite.fr' },
            { label: 'Service-Public — Corriger son relevé', url: 'https://www.service-public.fr/particuliers/vosdroits/F31249' },
          ],
        },
        {
          id: 'retraite_demander_reversion',
          label: 'Demander la pension de réversion',
          why: 'La réversion n\'est pas automatique après le décès du conjoint.',
          action_now: 'Identifier toutes les caisses du défunt et déposer une demande à chacune.',
          legal_basis: 'Art. L. 353-1 CSS — sous conditions de ressources pour le régime général',
          canal: 'Courrier recommandé à chaque caisse + formulaire cerfa',
          delay: 'Dès que possible — pas de délai légal mais des conditions de ressources à respecter (indicatif)',
          avoid: ['Attendre plusieurs années', 'Ne déposer que chez une seule caisse'],
          sources: [
            { label: 'Info-retraite.fr — Réversion', url: 'https://www.info-retraite.fr/portail-services/home/ma-retraite-de-base/ma-situation-personnelle/pension-de-reversion.html' },
            { label: 'Service-Public — Réversion', url: 'https://www.service-public.fr/particuliers/vosdroits/F13552' },
          ],
        },
        {
          id: 'retraite_contester_decision',
          label: 'Contester une décision de la caisse',
          why: 'Refus de départ anticipé, taux contesté, trimestres rejetés.',
          action_now: 'Recours amiable à la caisse dans les 2 mois suivant la décision, puis tribunal judiciaire pôle social.',
          legal_basis: 'Recours amiable puis tribunal judiciaire (pôle social) — L.143-1 CSS',
          canal: 'Courrier recommandé à la caisse + éventuellement tribunal judiciaire',
          delay: '2 mois pour le recours amiable après notification (indicatif — vérifiez votre courrier)',
          avoid: ['Attendre plus de 2 mois', 'Saisir le tribunal administratif (incompétent)'],
          sources: [
            { label: 'Service-Public — Contester retraite', url: 'https://www.service-public.fr/particuliers/vosdroits/F31249' },
          ],
        },
      ],
    };
  }

  // ── CONSOMMATION ────────────────────────────────────────────────
  if(has('conso') || has('garantie') || has('ecommerce') || has('demarchage') || has('consommation')){
    return {
      pillar_label: 'Consommation',
      pillar_icon: '🛒',
      strategies: [
        {
          id: 'conso_garantie_legale',
          label: 'Faire valoir la garantie légale (2 ans)',
          why: 'Tout vendeur professionnel est obligé d\'appliquer la garantie légale de conformité — il ne peut pas la refuser.',
          action_now: 'Signaler le défaut par écrit au vendeur en demandant réparation, remplacement ou remboursement.',
          legal_basis: 'Art. L. 217-1 à L. 217-32 Code de la consommation — 2 ans à compter de la livraison',
          canal: 'E-mail ou courrier au service client du vendeur',
          delay: 'Agir dans les 2 ans suivant la livraison — plus tôt = plus facile (indicatif)',
          avoid: ['Accepter un simple geste commercial inférieur à vos droits', 'Envoyer le produit sans accord écrit préalable'],
          sources: [
            { label: 'Service-Public — Garantie légale', url: 'https://www.service-public.fr/particuliers/vosdroits/F11094' },
            { label: 'DGCCRF — SignalConso', url: 'https://signal.conso.gouv.fr/' },
          ],
        },
        {
          id: 'conso_mediateur',
          label: 'Saisir le médiateur de la consommation',
          why: 'Obligatoire pour les pros depuis 2016 — gratuit et rapide (~90 jours).',
          action_now: 'Identifier le médiateur du secteur sur economie.gouv.fr/mediation-conso et soumettre le dossier.',
          legal_basis: 'Art. L. 612-1 Code de la consommation — obligation du professionnel de proposer un médiateur',
          canal: 'En ligne via le site du médiateur compétent',
          delay: 'Après échec du recours direct — pas de délai légal strict (indicatif)',
          avoid: ['Saisir directement le tribunal sans avoir tenté la médiation'],
          sources: [
            { label: 'Liste médiateurs référencés', url: 'https://www.economie.gouv.fr/mediation-conso/liste-des-mediateurs-references' },
          ],
        },
        {
          id: 'conso_retractation',
          label: 'Exercer le droit de rétractation',
          why: 'Pour tout achat à distance ou démarchage : 14 jours pour vous rétracter sans motif.',
          action_now: 'Envoyer la lettre de rétractation en recommandé dans les 14 jours suivant la réception.',
          legal_basis: 'Art. L. 221-18 Code de la consommation — 14 jours calendaires',
          canal: 'Lettre recommandée avec accusé de réception',
          delay: '14 jours depuis la livraison — délai strict (indicatif — vérifiez votre bon de commande)',
          avoid: ['Appeler un numéro surtaxé pour se rétracter (illégal)', 'Dépasser le délai'],
          sources: [
            { label: 'Service-Public — Rétractation', url: 'https://www.service-public.fr/particuliers/vosdroits/F10485' },
          ],
        },
      ],
    };
  }

  // ── MDPH ────────────────────────────────────────────────────────
  if(has('mdph') || has('handicap') || has('aah') || has('rqth') || has('pch')){
    return {
      pillar_label: 'MDPH / Handicap',
      pillar_icon: '🩺',
      strategies: [
        {
          id: 'mdph_contester',
          label: 'Contester une décision MDPH',
          why: 'Refus d\'AAH, de RQTH, de PCH, ou délai de traitement excessif (légal : 4 mois).',
          action_now: 'Recours amiable à la MDPH dans les 2 mois suivant la notification de la décision.',
          legal_basis: 'Art. L. 146-9 CASF — délai de traitement 4 mois. Recours contentieux : tribunal selon la prestation.',
          canal: 'Courrier recommandé à la MDPH + éventuellement Défenseur des droits si blocage',
          delay: '2 mois pour le recours amiable après notification (indicatif — vérifiez votre courrier)',
          avoid: ['Attendre plus de 2 mois', 'Saisir le mauvais tribunal (dépend de la prestation)'],
          sources: [
            { label: 'Service-Public — MDPH', url: 'https://www.service-public.fr/particuliers/vosdroits/N57' },
            { label: 'Défenseur des droits', url: 'https://formulaire.defenseurdesdroits.fr/' },
          ],
        },
        {
          id: 'mdph_premier_depot',
          label: 'Déposer un premier dossier MDPH',
          why: 'Accéder aux droits AAH, RQTH, PCH, carte mobilité — souvent méconnus.',
          action_now: 'Télécharger le formulaire cerfa 15692 sur le site de votre MDPH départementale.',
          legal_basis: 'Loi 2005-102 du 11 février 2005 — égalité des droits des personnes handicapées',
          canal: 'Dossier en ligne ou par courrier recommandé à la MDPH de votre département',
          delay: 'Délai de traitement : 4 mois environ (indicatif)',
          avoid: ['Ne déposer que des bilans anciens (de plus de 6 mois)', 'Sous-estimer les impacts sur la vie quotidienne'],
          sources: [
            { label: 'MDPH — trouver la vôtre', url: 'https://www.service-public.fr/particuliers/vosdroits/F3626' },
            { label: 'AGEFIPH (emploi handicap)', url: 'https://www.agefiph.fr' },
          ],
        },
      ],
    };
  }

  // ── PRÉFECTURE / TITRE DE SÉJOUR ─────────────────────────────────
  if(has('prefecture') || has('titre_sejour') || has('oqtf') || has('naturalisation') || has('anef')){
    return {
      pillar_label: 'Préfecture / Séjour',
      pillar_icon: '📋',
      strategies: [
        {
          id: 'prefecture_recours_refus',
          label: 'Contester un refus de titre de séjour',
          why: 'Un refus préfectoral est une décision administrative susceptible de recours.',
          action_now: 'Recours gracieux (lettre à la préfecture) dans les 2 mois suivant la notification du refus.',
          legal_basis: 'Art. L. 411-7 CESEDA — délai de recours contentieux : 2 mois. OQTF : délais très courts.',
          canal: 'Recours gracieux → recours hiérarchique → tribunal administratif',
          delay: '2 mois pour le recours contentieux après la décision (indicatif — OQTF : délais réduits, agir immédiatement)',
          avoid: ['Laisser passer le délai de 2 mois', 'Saisir un tribunal civil (incompétent — TA compétent)'],
          sources: [
            { label: 'Service-Public — Recours titre séjour', url: 'https://www.service-public.fr/particuliers/vosdroits/N110' },
            { label: 'France terre d\'asile', url: 'https://www.france-terre-asile.org' },
          ],
        },
        {
          id: 'prefecture_anef_bloque',
          label: 'ANEF bloquée / récépissé expiré',
          why: 'La plateforme ANEF peut bloquer le renouvellement sans explication.',
          action_now: 'Contacter la préfecture par écrit, conserver toutes les preuves de dépôt, saisir le Défenseur des droits si blocage > 2 mois.',
          legal_basis: 'Obligation de délivrance d\'un récépissé — Loi CRPA, droit à la régularisation du séjour',
          canal: 'Préfecture (email ou courrier), Défenseur des droits, associations spécialisées',
          delay: 'Agir dès le blocage — chaque semaine compte (indicatif)',
          avoid: ['Attendre sans conserver de preuve de dépôt', 'Se déplacer sans rendez-vous'],
          sources: [
            { label: 'ANEF — Administration numérique', url: 'https://administration-etrangers-en-france.interieur.gouv.fr' },
            { label: 'Défenseur des droits', url: 'https://formulaire.defenseurdesdroits.fr/' },
          ],
        },
      ],
    };
  }

  // ── FALLBACK : retourner le résultat V44 si disponible ────────────
  return v44result;
};
