# Vigie — V40 (propre)

Objectif : **V40 propre sans perte de données**, avec corrections audit + pilotage (timeline) + tests.

## Correctifs critiques (audit)
- **Flows réparés** : règles logement/banque remises au bon endroit, erreurs de copier-coller supprimées (mariage, déclaration impôts).
- **Matching plus fiable** : `matchFlow()` est maintenant **pondéré** (mots-clés + spécificité) au lieu du “premier mot-clé trouvé”.
- **Fraude bancaire = urgence** : affichage d’un bloc urgence même sans date limite.
- **Courriers types visibles** : `letters_v1.js` est chargé **avant** le rendu dans l’assistant.
- **Carte réparée** : prise en charge GeoJSON (`properties` + `geometry.coordinates`).
- **Recours nationaux** : header ré-aligné sur le design global.

## Pilotage (V40)
- **Timeline cochable** (par dossier) : suivi des étapes clés, persistant en local.
- **Dashboard** : affiche progression timeline + “prochaine étape”.

## Données / compatibilité
- **Aucune perte de données** : même clé de stockage `vigie_v30_state`.
- **Migration douce** : ajout de champs `todo` et `timeline` si absents, sans écraser l’existant.
- **Sauvegarde robuste** : gestion d’erreur quota (message explicite).

## Tests
- 25 cas types : voir `tests/cases.json`.
- Rapport : `tests/TEST_REPORT.md`.
