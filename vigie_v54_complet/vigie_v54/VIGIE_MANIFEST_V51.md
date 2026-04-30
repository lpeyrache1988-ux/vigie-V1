# VIGIE — MANIFEST V51
*Gouvernance des fichiers, ordre de chargement, données maîtres, stratégie de migration*
*Généré le 28 avril 2026 — À mettre à jour à chaque sprint*

---

## 1. FICHIERS ACTIFS (à maintenir et faire évoluer)

### Pages HTML principales
| Fichier | Rôle | Statut |
|---|---|---|
| `index.html` | Entrée principale — hero search + piliers | ✅ Actif V50 |
| `result.html` | Page résultat légère — stratégie + action | ✅ Actif V50 |
| `parcours.html` | Parcours guidé (mode ?guide=1) + arbre | ✅ Actif V50 |
| `wizard.html` | Mode expert — questions adaptatives + dossier | ✅ Actif (garder) |
| `dashboard.html` | Suivi des dossiers en cours | ✅ Actif |
| `pack.html` | Détail d'un pack d'action + courriers | ✅ Actif V50 (corrigé) |
| `map.html` | Carte des guichets (mairies, MSAP) | ✅ Actif |
| `recours_nationaux.html` | Répertoire des recours nationaux | ✅ Actif V50 |
| `mentions.html` | Mentions légales + RGPD | ✅ Actif |

### Pages HTML secondaires
| Fichier | Rôle | Statut |
|---|---|---|
| `pillars.html` | Vue piliers (navigation alternative) | ⚠️ Secondaire — garder |
| `storage.html` | Gestion stockage local | ⚠️ Utilitaire — garder |

### Pages HTML legacy (ne pas supprimer, ne plus modifier)
| Fichier | Rôle | Statut |
|---|---|---|
| `index_legacy.html` | Ancienne page d'accueil V42 | 🗄️ Legacy — garder pour référence |
| `home_v44.html` | Page d'accueil V44 | 🗄️ Legacy — garder pour référence |

---

## 2. FICHIERS DATA — ORDRE DE CHARGEMENT RECOMMANDÉ

### Couche 1 — Moteur (charger en premier)
```html
<script src="data/engine_v30.js"></script>       <!-- Moteur V30 : state, matching, evalFlow -->
<script src="data/expert_mode.js"></script>       <!-- Toggle mode expert -->
```

### Couche 2 — Données de base
```html
<script src="data/flows_v30.js"></script>         <!-- Flows de base : tax, caf, banque... -->
<script src="data/checklists_v30.js"></script>    <!-- Checklists par flow -->
<script src="data/packs_v30.js"></script>         <!-- Packs d'action par flow -->
<script src="data/letters_v1.js"></script>        <!-- 16 courriers types -->
```

### Couche 3 — Scénarios (ordre de priorité croissant)
```html
<script src="data/scenarios_v1.js"></script>          <!-- Scénarios historiques V1 -->
<script src="data/scenarios_v2.js"></script>          <!-- Scénarios V2 (20 enrichis) -->
<script src="data/scenarios_v47_addons.js"></script>  <!-- 65 cas V47/V48 -->
<script src="data/scenarios_v49_coverage.js"></script><!-- 36 cas V49 (retraite, conso...) -->
<script src="data/scenarios_v51_fixes.js"></script>   <!-- Correctifs V51 + 7 nouveaux cas -->
```

### Couche 4 — Registry et sources
```html
<script src="data/registry_cases_v46.js"></script>    <!-- 96 cas registre officiel -->
<script src="data/pillars_catalog.js"></script>        <!-- 11 piliers avec icônes -->
<script src="data/sources_registry.js"></script>       <!-- Liens sources officielles -->
<script src="data/external_sources_v46.js"></script>   <!-- Sources externes (optionnel) -->
```

### Couche 5 — Stratégies
```html
<script src="data/strategies_v43.js"></script>    <!-- Stratégies V43 (legacy fallback) -->
<script src="data/strategies_v44.js"></script>    <!-- Stratégies V44 (actif) -->
```

### Couche 6 — Routeur et UI
```html
<script src="assets/router_v46.js"></script>      <!-- Routeur V46 (base) -->
<script src="assets/router_v51.js"></script>      <!-- Routeur V51 (surcouche) -->
<script src="assets/storage_v46.js"></script>     <!-- Gestion localStorage -->
<script src="assets/ui.js"></script>              <!-- Helpers UI -->
<script src="assets/ux_v42_1.js"></script>        <!-- UX V42 (legacy, wizard) -->
<script src="assets/assistant_v42_1.js"></script> <!-- Assistant V42 (wizard) -->
```

---

## 3. DONNÉES MAÎTRES

### Source de vérité des scénarios
- **Fichier de référence** : `data/scenarios_v47_addons.js` (65 cas) + `data/scenarios_v49_coverage.js` (36 cas) + `data/scenarios_v51_fixes.js` (7 cas)
- **Total scénarios** : ~128 scénarios nommés + 20 scénarios V2
- **Clé unique** : `id` — jamais dupliquer entre fichiers

### Source de vérité du registry
- **Fichier de référence** : `data/registry_cases_v46.js` (96 entrées)
- **Usage** : navigation par pilier, liste des cas disponibles
- **⚠️ Incohérence actuelle** : les IDs du registry et des scénarios se chevauchent partiellement — les scénarios ont priorité pour le routing

### Source de vérité des flows
- **Fichier de référence** : `data/flows_v30.js`
- **Ne pas modifier directement** — ajouter des flows en surcouche si nécessaire
- **Flows actifs** : passport, cni, mariage, tax_declaration, tax_rectif, ameli, caf, france_travail, logement, banque, arnaques, justice, vie_civile, generic

### Source de vérité des stratégies
- **Fichier actif** : `data/strategies_v44.js`
- **Coverage actuelle** : caf, impots/tax, banque/fraude, logement, mariage/vie, amende, arnaques, justice
- **Manquant** : strategies pour retraite, consommation, cpam (utilise fallback V43)

---

## 4. FICHIERS À NE PLUS MODIFIER DIRECTEMENT

| Fichier | Raison | Alternative |
|---|---|---|
| `data/engine_v30.js` | Moteur core — toute modification peut casser wizard + dashboard | Surcharger via window.V30 après chargement |
| `data/flows_v30.js` | Référencé par engine + wizard + assistant | Ajouter un `flows_v51_addons.js` si besoin |
| `data/scenarios_v1.js` | Données historiques | Ne modifier que via push() dans les addons |
| `data/scenarios_v2.js` | Données V2 — 20 scénarios validés | Idem |
| `assets/router_v46.js` | Utilisé comme fallback interne de V51 | Modifier via `router_v51.js` |
| `assets/assistant_v42_1.js` | Logique wizard complexe | Ne toucher que pour bug critique |

---

## 5. RISQUES DE CONFLIT IDENTIFIÉS

### Conflit 1 — Doublons registry/scénarios
- **Problème** : 55+ IDs présents à la fois dans `registry_cases_v46.js` et `scenarios_v47_addons.js`
- **Impact** : `VIGIE_SCENARIOS.find(id)` trouvera la version scénario (prioritaire) — OK
- **Action** : documenter, ne pas dédupliquer brutalement (zéro perte de données)

### Conflit 2 — Scénarios V2 avec IDs courts (S0, S1, T0...)
- **Problème** : IDs non sémantiques dans scenarios_v2.js
- **Impact** : risque de collision faible (pas référencés par URL normalement)
- **Action** : surveiller, ne pas renommer

### Conflit 3 — Router V46 vs V51
- **Problème** : les deux routers exposent des fonctions similaires
- **Solution** : V51 utilise V46 comme fallback interne (`window.VIGIE_ROUTE_V46`)
- **Priorité** : V51 est prioritaire via `window.VIGIE_ROUTE_V51`

### Conflit 4 — strategies_v43 vs strategies_v44
- **Problème** : les deux sont chargés dans wizard.html
- **Solution** : V44 est appelé en premier, V43 sert de fallback
- **Action** : s'assurer que `window.VIGIE_GET_STRATEGIES_V44` est défini avant V43

---

## 6. STRATÉGIE DE MIGRATION PROGRESSIVE

### Sprint V51 (actuel)
- [x] Router V51 en surcouche
- [x] Correctifs keywords (13 cas)
- [x] 7 nouveaux scénarios manquants
- [x] Manifest V51
- [ ] Tests routing_cases_v51.json
- [ ] result.html amélioré (confiance, risque, pièces)
- [ ] Stratégies retraite + consommation dans strategies_v44.js

### Sprint V52 (recommandé)
- [ ] Unifier registry_cases + scenarios en une source unique
- [ ] Compléter strategies_v44.js (retraite, consommation, cpam, sante)
- [ ] Ajouter `flows_v51_addons.js` pour les nouveaux piliers
- [ ] Test runner automatisé (routing_cases_v51.json → CI)
- [ ] RGPD : politique de rétention localStorage documentée

### Sprint V53 (long terme)
- [ ] PWA : notifications deadline
- [ ] Mur freemium : courriers pré-remplis avec données dossier
- [ ] B2B : export dossier PDF pour France Services
- [ ] Accessibilité RGAA niveau AA

---

## 7. RÈGLES DE GOUVERNANCE

1. **Zero data loss** : jamais supprimer un fichier JS de données sans migration documentée
2. **Surcouche only** : toute correction passe par un fichier `_addons` ou `_fixes`
3. **IDs uniques** : un `id` de scénario = une seule définition maîtresse
4. **Délais indicatifs** : tout délai affiché doit être accompagné de "indicatif — vérifier votre courrier"
5. **Disclaimer** : tout courrier type doit afficher l'avertissement contextuel
6. **Tests** : tout nouveau scénario ajouté doit avoir au moins 2 requêtes de test dans routing_cases
7. **Pas de score brut** : `flow_id`, `pack_id`, `score` numérique ne jamais afficher à l'utilisateur final
