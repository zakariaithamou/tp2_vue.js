# Travaux Pratiques & Mini-Projet Vue.js

Ce dépôt regroupe les travaux pratiques réalisés dans le cadre du module **Développement Frontend avec JS (Vue.js)** 

---

## Organisation des Branches Git

Chaque travail est conservé de manière autonome sur sa propre branche sans fusion (*no merge*) afin de préserver l'historique et les consignes spécifiques de chaque étape :

| Branche | Sujet | Technologies & Notions Clés |
| :--- | :--- | :--- |
| **`tp2-composants`** | Catalogue de livres (Refonte en composants) | SFC, Props & `$emit`, validation de props, Slots nommés, `mounted()`, focus `ref` |
| **`tp4-router-composition`** | Catalogue de livres (Navigation multi-pages) | Vue Router 4, routes dynamiques (`/livre/:id`), navigation programmatique, `reactive()`, `<script setup>` |
| **`projet-job-app`** | Application de gestion des offres d'emploi | Vue 3, Vue Router, JSON-Server, CRUD REST (GET, POST, PATCH, DELETE), Filtres, Confirmation |

---

## 🚀 Guide d'Installation et d'Exécution par Branche

### 1. Basculer sur une branche

Pour cloner le dépôt et vous positionner sur la branche souhaitée :

```bash
# Cloner le dépôt
git clone <URL_DU_DEPOT_GITHUB>
cd <NOM_DU_DOSSIER>

# Vérifier et basculer sur une branche spécifique
git checkout <nom-de-la-branche>
