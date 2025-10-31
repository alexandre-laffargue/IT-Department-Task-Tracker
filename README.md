# Conduite de Projet : Project manager app

## Technologies utilisées
- **Frontend** : Vue.js pour construire une interface utilisateur réactive et modulable.
- **Backend** : Node.js avec Express pour créer une API REST légère et performante.
- **Base de données** : MongoDB pour gérer les données documents flexibles comme les tâches, issues, utilisateurs.
- **Authentification** : JSON Web Tokens (JWT) pour sécuriser l’accès et la gestion des utilisateurs.
- **Autres outils** : Utilisation de Docker pour la conteneurisation, GitHub Actions pour CI/CD.
- **Test** : Utilisation de Vitest et de Selenium pour les tests.

---

## Modules principaux
- Gestion des utilisateurs (comptes, rôles, authentification)
- Gestion des issues (bugs, problèmes)
- Gestion des tâches (opérations, maintenance)
- Gestion des releases (versions logicielles)
- Gestion des tests (qualité, vérification)
- Gestion de la documentation (connaissances, référentiels)

---

## Contexte

Application web de gestion de projet inspirée de Trello et Jira.  
Objectif : permettre la gestion de tâches avec trois vues principales :
- **Backlog** : liste des issues à planifier
- **Tableau (Kanban)** : suivi des tâches par statut
- **Chronologie** : visualisation temporelle des issues (type Gantt)

---

## Calendrier des sprints

| Sprint | Dates | Objectif principal |
|---------|--------|-------------------|
| Sprint 0 | 15 oct – 22 oct | Mise en place et cadrage |
| Sprint 1 | 23 oct – 5 nov | MVP du tableau Kanban |
| Sprint 2 | 6 nov – 19 nov | Gestion du backlog et des sprints |
| Sprint 3 | 20 nov – 3 déc | Chronologie et finitions |

---

## EPIC 1 – Infrastructure et mise en place

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| US0.1 | En tant qu’équipe, je veux initialiser le dépôt GitHub (front + back) pour démarrer sur une base propre. | Must | Sprint 0 | 2 |
| US0.2 | En tant qu’équipe, je veux mettre en place le Project Board, les labels et les templates d’issue pour organiser le travail. | Must | Sprint 0 | 2 |
| US0.3 | En tant que développeur, je veux configurer un lint + prettier pour garantir une qualité de code minimale. | Must | Sprint 1 | 3 |
| US0.4 | En tant qu’équipe, je veux un README clair avec les instructions de lancement du projet. | Must | Sprint 1 | 2 |

---

## EPIC 2 – Authentification et utilisateurs

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| US1.1 | En tant que visiteur, je veux m’inscrire avec un email et un mot de passe pour créer un compte. | Must | Sprint 1 | 5 |
| US1.2 | En tant qu’utilisateur, je veux me connecter à mon compte pour accéder à mes données. | Must | Sprint 1 | 5 |

---

## EPIC 3 – Tableau (vue Kanban)

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| US2.1 | En tant qu’utilisateur, je veux voir mon tableau principal avec mes colonnes et mes cartes. | Must | Sprint 1 | 5 |
| US2.2 | En tant qu’utilisateur, je veux pouvoir ajouter, renommer ou supprimer une colonne. | Must | Sprint 1 | 5 |
| US2.3 | En tant qu’utilisateur, je veux pouvoir ajouter, modifier ou supprimer une carte. | Must | Sprint 1 | 5 |
| US2.4 | En tant qu’utilisateur, je veux pouvoir déplacer une carte entre colonnes (drag & drop). | Must | Sprint 1 | 8 |
| US2.5 | En tant qu’utilisateur, je veux que mes colonnes et cartes soient sauvegardées dans la base de données. | Must | Sprint 1 | 6 |

---

## EPIC 4 – Backlog

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| US3.1 | En tant qu’utilisateur, je veux voir toutes mes issues dans un backlog unique. | Must | Sprint 2 | 5 |
| US3.2 | En tant qu’utilisateur, je veux créer une issue avec un titre, une description, une priorité et un type. | Must | Sprint 2 | 6 |
| US3.3 | En tant qu’utilisateur, je veux réordonner mes issues dans le backlog (drag & drop). | Should | Sprint 2 | 5 |
| US3.4 | En tant qu’utilisateur, je veux planifier une issue dans un sprint (drag & drop vers sprint). | Should | Sprint 2 | 7 |

---

## EPIC 5 – Sprints

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| US4.1 | En tant qu’utilisateur, je veux créer un sprint avec un nom et des dates de début/fin. | Must | Sprint 2 | 5 |
| US4.2 | En tant qu’utilisateur, je veux démarrer un sprint planifié pour le rendre actif. | Must | Sprint 2 | 5 |
| US4.3 | En tant qu’utilisateur, je veux clôturer un sprint et voir les issues terminées. | Should | Sprint 3 | 6 |

---

## EPIC 6 – Chronologie (vue Gantt)

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| US5.1 | En tant qu’utilisateur, je veux voir mes issues sous forme de barres sur une chronologie. | Must | Sprint 3 | 7 |
| US5.2 | En tant qu’utilisateur, je veux pouvoir déplacer ou redimensionner une barre pour modifier les dates. | Should | Sprint 3 | 8 |

---

## EPIC 7 – Tests et intégration

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| US6.1 | En tant qu’équipe, je veux écrire des tests unitaires sur les fonctions critiques du front et du back (ex : reorder, validation, store). | Must | Sprint 2 | 5 |
| US6.2 | En tant qu’équipe, je veux exécuter automatiquement les tests via une **pipeline GitHub Actions** à chaque push. | Should | Sprint 2 | 4 |

---

## EPIC 8 – Améliorations UX/UI

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| US7.1 | En tant qu’utilisateur, je veux une interface claire avec des couleurs cohérentes et lisibles. | Could | Sprint 3 | 4 |
| US7.2 | En tant qu’utilisateur, je veux une navigation simple entre Backlog, Tableau et Chronologie. | Must | Sprint 2 | 4 |

---

## Synthèse par sprint

| Sprint | Objectif principal | US clés | Estimation totale |
|---------|--------------------|---------|-------------------|
| **Sprint 0** | Préparation du cadre projet | US0.1, US0.2 | 4 |
| **Sprint 1** | MVP du tableau Kanban | US1.1, US1.2, US2.1 → US2.5 | 34 |
| **Sprint 2** | Backlog + sprints + tests unitaires | US3.1 → US4.2, US6.1, US6.2, US7.2 | 46 |
| **Sprint 3** | Chronologie et finitions | US4.3, US5.1, US5.2, US7.1 | 25 |

---

## Synthèse des priorités

**Must have**
- Authentification
- Tableau Kanban (CRUD + drag & drop)
- Backlog produit (vue liste)
- Gestion des sprints
- Tests unitaires simples (Vitest)
- Pipeline GitHub Actions
- Navigation entre vues

**Should have**
- Filtrage, réorganisation du backlog
- Chronologie simplifiée
- Interface plus fluide

**Could have**
- Amélioration visuelle, design plus poussé
- Filtres ou recherche avancée
- Thème clair/sombre (bonus)
