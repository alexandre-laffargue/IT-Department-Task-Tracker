# Conduite de Projet – Project Manager App

## Description
Application web de **gestion de projet agile** inspirée de **Trello** et **Jira**.  
Elle permet de gérer des **issues**, **tâches**, **sprints** et **releases** avec trois vues principales :

- **Backlog** → planification et priorisation des issues  
- **Tableau (Kanban)** → suivi des tâches par statut  
- **Chronologie (Gantt)** → visualisation temporelle des issues et des sprints  

L’objectif est de fournir un outil simple, complet et collaboratif pour suivre un projet de développement de bout en bout.

---

## Technologies utilisées

| Domaine | Technologie | Rôle |
|----------|--------------|------|
| **Frontend** | Vue.js 3 + Vite | Interface utilisateur réactive et modulaire |
| **Backend** | Node.js + Express | API REST légère et performante |
| **Base de données** | MongoDB (Mongoose) | Stockage flexible (tâches, users, sprints, issues) |
| **Authentification** | JWT (JSON Web Token) | Sécurisation des accès utilisateurs |
| **Tests** | Vitest + Selenium | Tests unitaires et end-to-end |
| **CI/CD** | GitHub Actions | Automatisation build, lint, test |
| **Outils** | Docker, ESLint, Prettier, Husky | Qualité et standardisation du code |

---

## Modules principaux

- Gestion des **utilisateurs** (auth, rôles, sécurité)
- Gestion du **backlog** (issues, priorisation)
- Gestion du **tableau Kanban** (colonnes, cartes, drag & drop)
- Gestion des **sprints** (planification, exécution, clôture)
- Gestion de la **chronologie** (vue Gantt)
- Gestion des **tests** (unitaires, CI/CD)
- Gestion de la **documentation** et des releases

---
## Calendrier des sprints

| Sprint | Dates | Objectif principal |
|---------|--------|-------------------|
| **Sprint 0** | 15 oct – 22 oct | Mise en place et cadrage du projet |
| **Sprint 1** | 23 oct – 5 nov | Authentification + Kanban statique + CI minimale |
| **Sprint 2** | 6 nov – 19 nov | Kanban complet + Backlog + Création de sprints + Tests |
| **Sprint 3** | 20 nov – 3 déc | Chronologie (Gantt) + CI/CD complète + UI finale |

---

## Répartition des rôles

| Membre | Rôle principal | Domaines |
|---------|----------------|-----------|
| **A** | Backend & Tests | API REST, MongoDB, Authentification, CI/CD |
| **B-C** | Frontend & Intégration | Vue.js, UI/UX, Kanban, Backlog, Chronologie |

---

## EPIC 0 – Infrastructure et mise en place

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| **US0.1** | Initialiser le dépôt GitHub (front + back) | Must | Sprint 0 | 2 |
| **US0.2** | Mettre en place le Project Board, labels et templates d’issue | Must | Sprint 0 | 2 |
| **US0.3** | Configurer Lint + Prettier | Must | Sprint 0 | 3 |
| **US0.4** | Rédiger un README clair avec instructions de lancement | Must | Sprint 0 | 2 |

---

## EPIC 1 – Authentification et utilisateurs

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| **US1.1** | Inscription utilisateur (email + mot de passe) | Must | Sprint 1 | 5 |
| **US1.2** | Connexion utilisateur (JWT) | Must | Sprint 1 | 5 |

---

## EPIC 2 – Tableau (Kanban)

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| **US2.1** | Afficher un tableau Kanban statique (colonnes fixes) | Must | Sprint 1 | 5 |
| **US2.2** | Ajouter, renommer ou supprimer une colonne | Must | Sprint 1 | 5 |
| **US2.3** | Ajouter, modifier ou supprimer une carte | Must | Sprint 2 | 5 |
| **US2.4** | Déplacer une carte entre colonnes (drag & drop) | Must | Sprint 2 | 8 |
| **US2.5** | Sauvegarder colonnes et cartes dans la base de données | Must | Sprint 2 | 6 |

---

## EPIC 3 – Backlog

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| **US3.1** | Voir toutes les issues dans un backlog unique | Must | Sprint 2 | 5 |
| **US3.2** | Créer une issue avec titre, description, priorité, type | Must | Sprint 2 | 6 |
| **US3.3** | Réordonner les issues dans le backlog | Should | Sprint 2 | 5 |
| **US3.4** | Planifier une issue dans un sprint (drag & drop) | Should | Sprint 3 | 6 |

---

## EPIC 4 – Sprints

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| **US4.1** | Créer un sprint (nom, dates, objectif) | Must | Sprint 2 | 5 |
| **US4.2** | Démarrer un sprint planifié | Must | Sprint 3 | 5 |
| **US4.3** | Clôturer un sprint et voir les issues terminées | Should | Sprint 3 | 6 |

---

## EPIC 5 – Chronologie (Gantt)

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| **US5.1** | Afficher les issues sous forme de barres temporelles | Must | Sprint 3 | 7 |
| **US5.2** | Déplacer/redimensionner une barre pour modifier les dates | Should | Sprint 3 | 8 |

---

## EPIC 6 – Tests & Intégration continue

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| **US6.1** | Écrire des tests unitaires front & back (Vitest) | Must | Sprint 2 | 5 |
| **US6.2** | Créer une pipeline CI/CD complète (GitHub Actions) | Must | Sprint 3 | 4 |

---

## EPIC 7 – UX/UI et ergonomie

| ID | User Story | Priorité | Sprint | Estimation |
|----|-------------|-----------|----------|-------------|
| **US7.1** | Améliorer la cohérence visuelle (palette, spacing, responsive) | Could | Sprint 3 | 4 |
| **US7.2** | Créer une navigation claire entre Backlog, Board et Chronologie | Must | Sprint 1 | 4 |

---

## Synthèse par sprint

| Sprint | Objectif principal | User Stories clés | Estimation totale |
|---------|--------------------|-------------------|-------------------|
| **Sprint 0** | Cadrage & setup technique | US0.1 → US0.4 | 9 |
| **Sprint 1** | Auth + Kanban statique + CI minimale | US1.1 → US2.2, US7.2, US6.2 (partiel) | 27 |
| **Sprint 2** | Kanban complet + Backlog + Sprints + Tests | US2.3 → US4.1, US3.1 → US3.3, US6.1 | 45 |
| **Sprint 3** | Chronologie + UI + CI/CD complète | US3.4, US4.2 → US4.3, US5.1 → US5.2, US6.2, US7.1 | 40 |

**Total : 119 points**

---

## Synthèse des priorités

### **Must have**
- Authentification JWT
- Tableau Kanban complet (CRUD + drag & drop)
- Backlog produit (vue liste + tri)
- Gestion des sprints (création → clôture)
- Tests unitaires (Vitest)
- Pipeline CI/CD GitHub Actions
- Navigation claire entre les vues

### **Should have**
- Réorganisation du backlog (drag & drop)
- Chronologie interactive (vue Gantt)
- Récapitulatif de sprint à la clôture

### **Could have**
- Amélioration visuelle et responsive
- Thème clair/sombre
- Statistiques de sprint (future version)

