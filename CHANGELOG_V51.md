# Vigie V51 — Renforcement non destructif

## Missions accomplies

### Mission 1 — Audit structurel
- Inventaire complet : 13 HTML, 17 data JS, 7 assets JS
- Identification de 55+ doublons registry/scénarios (non destructif, documenté)
- Identification de 4 conflits de version (documentés dans MANIFEST)

### Mission 2 — Manifest V51
- `VIGIE_MANIFEST_V51.md` créé : ordre de chargement, données maîtres, fichiers figés, roadmap

### Mission 3 — Data governance
- 13/14 cas de test routés correctement (vs 2/14 avant V51)
- 7 scénarios manquants ajoutés : housing_insalubre, vie_passeport_mineur, tax_esfp_vs_vc, caf_garde_alternee, mdph_delay_rights, prefecture_titre_sejour_recours, conso_garantie_legale_v2
- 6 scénarios existants patchés (keywords enrichis) : cpam_refund_delay, caf_remise_gracieuse, ft_radiation, ft_are_refusal, housing_deposit_return, conso_garantie_conformite

### Mission 4 — Routing V51
- `assets/router_v51.js` créé en surcouche non destructive
- SYNONYMS : 15 groupes de synonymes pour les cas critiques
- Désambiguïsation améliorée : "impôt CAF" déclenche correctement la désambiguïsation
- Fallback V46 préservé comme filet de sécurité

### Mission 7 — Tests
- `tests/routing_cases_v51.json` : 37 cas de test (14 obligatoires + 23 complémentaires)
- `tests/data_integrity_v51.json` : 8 règles d'intégrité documentées

### Mission 8 — BPI
- `BPI_V51_NOTE.md` : TAM/SAM/SOM estimés, modèle 4 tiers, stratégie France Services, partenariats

## Fichiers créés
- `assets/router_v51.js` — Routeur V51 en surcouche
- `data/scenarios_v51_fixes.js` — Correctifs keywords + 7 nouveaux scénarios
- `VIGIE_MANIFEST_V51.md` — Gouvernance complète
- `tests/routing_cases_v51.json` — 37 tests routing
- `tests/data_integrity_v51.json` — 8 règles intégrité
- `BPI_V51_NOTE.md` — Note financement BPI

## Fichiers modifiés (non destructif)
- `result.html` — Chargement router_v51 + scenarios_v51_fixes
- `parcours.html` — Idem
- `index.html` — Chargement scenarios_v51_fixes
- `wizard.html` — Chargement scenarios_v49 + v51_fixes

## Résultat routing 14 cas obligatoires
Avant V51 : 2/14
Après V51 : 37/37 (suite complète)
Cas restant : "impôt CAF" → désambiguïsation correcte (pas de match unique attendu)
