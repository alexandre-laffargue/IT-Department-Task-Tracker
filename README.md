# Backlog Projet : IT Department Task Tracker

## Technologies utilisées
- **Frontend** : Vue.js pour construire une interface utilisateur réactive et modulable.
- **Backend** : Node.js avec Express pour créer une API REST légère et performante.
- **Base de données** : MongoDB pour gérer les données documents flexibles comme les tâches, issues, utilisateurs.
- **Authentification** : JSON Web Tokens (JWT) pour sécuriser l’accès et la gestion des utilisateurs.
- **Autres outils** : Utilisation de Docker pour la conteneurisation, GitHub Actions pour CI/CD.
- **Test** : Utilisation de Jest et de Selenium pour les tests.

---

## Modules principaux
- Gestion des utilisateurs (comptes, rôles, authentification)
- Gestion des issues (bugs, problèmes)
- Gestion des tâches (opérations, maintenance)
- Gestion des releases (versions logicielles)
- Gestion des tests (qualité, vérification)
- Gestion de la documentation (connaissances, référentiels)

---

## User Stories

### Gestion des utilisateurs
- US-01 : En tant qu’administrateur, je veux pouvoir créer, modifier et supprimer des comptes utilisateurs pour gérer l’accès au système.
- US-02 : En tant qu’administrateur, je veux attribuer des rôles (utilisateur, IT, responsable) pour définir les permissions d’accès.
- US-03 : En tant qu’utilisateur, je veux me connecter et modifier mes informations personnelles.
- US-04 : En tant que responsable IT, je veux visualiser la liste des utilisateurs actifs et leurs droits.

### Gestion des issues
- US-05 : En tant qu’utilisateur, je veux signaler un problème technique (issue) pour obtenir une assistance.
- US-06 : En tant que membre IT, je veux attribuer un issue à un collègue pour faciliter la résolution.
- US-07 : En tant que responsable, je veux suivre le statut et la priorité des issues.

### Gestion des tâches
- US-08 : En tant que membre IT, je veux créer et planifier des tâches internes.
- US-09 : En tant que responsable, je veux assigner des tâches à l’équipe IT.
- US-10 : En tant qu’utilisateur, je veux consulter l’avancement des tâches liées à mes demandes.

### Gestion des releases
- US-11 : En tant que responsable IT, je veux planifier les releases pour organiser le déploiement de nouvelles versions.
- US-12 : En tant que membre IT, je veux documenter et publier les notes de version.
- US-13 : En tant que responsable, je veux consulter l’historique des releases pour assurer la traçabilité.

### Gestion des tests
- US-14 : En tant que testeur, je veux créer et exécuter des cas de tests.
- US-15 : En tant que membre IT, je veux enregistrer les résultats des tests exécutés.
- US-16 : En tant que responsable, je veux accéder à des rapports de tests pour valider les releases.

### Gestion de la documentation
- US-17 : En tant que membre IT, je veux accéder à la documentation technique et aux procédures internes.
- US-18 : En tant que nouvel utilisateur, je veux consulter des guides de démarrage.
- US-19 : En tant qu’administrateur, je veux pouvoir gérer et publier des documents techniques mis à jour.

---

## Tableau de suivi des User Stories

| ID    | Module            | Description courte                                  | Priorité | Coût de développement | Statut | Sprint    |
|-------|-------------------|----------------------------------------------------|----------|-----------------------|--------|-----------|
| US-01 | Utilisateurs      | Créer, modifier et supprimer des comptes           | Haute    | 15                    | À faire| Sprint 1  |
| US-02 | Utilisateurs      | Gestion des rôles et permissions                    | Haute    | 10                    | À faire| Sprint 1  |
| US-03 | Utilisateurs      | Authentification et profil utilisateur              | Moyenne  | 8                     | À faire| Sprint 1  |
| US-04 | Utilisateurs      | Voir la liste et droits des utilisateurs            | Moyenne  | 5                     | À faire| Sprint 2  |
| US-05 | Issues            | Création et soumission d’issues                     | Haute    | 15                    | À faire| Sprint 1  |
| US-06 | Issues            | Attribution des issues                               | Moyenne  | 4                     | À faire| Sprint 2  |
| US-07 | Issues            | Suivi du statut et priorité                          | Moyenne  | 7                     | À faire| Sprint 2  |
| US-08 | Tâches            | Création et planification des tâches                | Haute    | 15                    | À faire| Sprint 1  |
| US-09 | Tâches            | Assignation des tâches                               | Moyenne  | 10                    | À faire| Sprint 2  |
| US-10 | Tâches            | Suivi d’avancement par utilisateur                   | Basse    | 4                     | À faire| Sprint 3  |
| US-11 | Releases          | Planification des releases                           | Moyenne  | 10                    | À faire| Sprint 2  |
| US-12 | Releases          | Documentation et notes de version                    | Basse    | 4                     | À faire| Sprint 3  |
| US-13 | Releases          | Historique des releases                              | Basse    | 4                     | À faire| Sprint 3  |
| US-14 | Tests             | Création et exécution de cas de test                 | Moyenne  | 15                    | À faire| Sprint 2  |
| US-15 | Tests             | Enregistrement des résultats de test                 | Moyenne  | 10                    | À faire| Sprint 3  |
| US-16 | Tests             | Génération de rapports de test                       | Moyenne  | 10                    | À faire| Sprint 3  |
| US-17 | Documentation     | Accès à la documentation technique                   | Moyenne  | 10                    | À faire| Sprint 1  |
| US-18 | Documentation     | Guides de démarrage pour nouveaux utilisateurs       | Basse    | 4                     | À faire| Sprint 2  |
| US-19 | Documentation     | Publication et gestion des documents techniques      | Moyenne  | 10                    | À faire| Sprint 3  |

- Le "Coût de développement" est une estimation relative sur une échelle de 1 à 20.

  
