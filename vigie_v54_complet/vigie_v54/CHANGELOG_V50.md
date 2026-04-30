# Vigie V50 — Refonte complète

## Design
- Nouveau design system inspiré Doctolib : Sora + DM Sans, palette bleue professionnelle
- Header sticky unifié sur toutes les pages
- Boutons, cards, badges, alertes redessinés
- Hero section sur la page d'accueil
- Pillar grid et situations fréquentes en page d'accueil

## Nouvelles pages / fichiers
- `index.html` : hero search + pillar grid + situations fréquentes
- `parcours.html` : mode ?guide=1 (3 questions step-by-step) + mode normal inchangé
- `pack.html` : rewrite complet (suppression fragments orphelins)
- `recours_nationaux.html` : répertoire complet des recours nationaux
- `data/scenarios_v49_coverage.js` : 47 nouveaux cas citoyens
- `data/pillars_catalog.js` : piliers Retraite et Consommation ajoutés

## Nouveaux cas couverts (47)
- Banque : fraude CB (L.133-18 CMF), virement frauduleux (L.133-19 CMF), surendettement BdF, droit au compte
- Travail : rupture conventionnelle, accident du travail, CRA FT + médiateur + tribunal judiciaire
- Retraite : relevé de carrière, départ anticipé, pension de réversion, cumul emploi-retraite
- Santé : mutuelle, invalidité, maternité CPAM, médecin traitant
- Vie civile : divorce, naturalisation, succession, tutelle/curatelle
- Justice : injonction de payer, aide juridictionnelle, saisie sur salaire, conciliateur
- Consommation (nouveau pilier) : garantie conformité, e-commerce, démarchage, crédit conso, assurance
- Impôts : plus-value immobilière, taxe foncière, expatriés
- CAF : changement de situation, garde alternée
- Logement : charges locatives, copropriété

## Corrections
- pack.html : suppression des fragments HTML orphelins
- Score numérique supprimé de l'interface utilisateur (wizard.html)
- Disclaimer juridique contextuel ajouté dans pack.html
- Délais marqués "indicatifs" dans les stratégies
