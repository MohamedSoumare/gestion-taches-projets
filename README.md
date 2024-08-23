# Gestion des tâches et des projets

Ce projet est une application web de gestion des tâches et des projets développée avec Vue.js 3, Pinia et Vue Router.

## Fonctionnalités

- Gestion des tâches (ajout, modification, suppression, visualisation)
- Gestion des projets (ajout, modification, suppression, visualisation)
- Association des tâches aux projets
- Interface utilisateur réactive et conviviale

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (généralement installé avec Node.js)

## Installation

1. Clonez ce dépôt :
   ```
   git clone [URL_DU_REPO]
   ```

2. Naviguez dans le répertoire du projet :
   ```
   cd gestion-taches-projets
   ```

3. Installez les dépendances :
   ```
   npm install
   ```

## Utilisation

Pour lancer l'application en mode développement :

```
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:5173` (ou un autre port si le 5173 est déjà utilisé).

## Structure du projet

- `src/components/` : Contient les composants Vue réutilisables
- `src/views/` : Contient les composants de vue pour chaque route
- `src/stores/` : Contient les stores Pinia pour la gestion de l'état
- `src/router/` : Contient la configuration de Vue Router

## Technologies utilisées

- Vue.js 3
- Pinia (pour la gestion de l'état)
- Vue Router (pour la navigation)
- Bootstrap (pour le style)

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.