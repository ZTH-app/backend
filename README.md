# backend

Répo qui conteint la stack complète du backend

## Prérequis

- Docker
- NodeJS

## Installation dev

Le projet utilise des submodules pour fonctionner. Pour les installer, il faut cloner le projet avec la commande suivante.

```bash
git clone --recurse-submodules <url>
```

Tapez ensuite la commande suivante pour lancer le docker-compose :

```bash
docker-compose up -d
```

Rendez vous ensuite dans chaque dossier de chaque microservice pour installer les dépendances et lancer le serveur : 

```bash
cd ./MS-User
npm i
npm run start:dev

cd ./MS-Chapter
npm i
npm run start:dev

cd ./MS-Course
npm i
npm run start:dev

cd ./gateway
npm i
npm start
```

## Routes

### User

- GET `/user` : Retourne la liste des utilisateurs
- GET `/user/:id` : Retourne un utilisateur
- GET `/user/:id?expand=true` : Retourne un utilisateur avec ses relations, incluant :
  - Ses chapitres lus = tracklist
    - PATCH `/user/:id/tracklist` : Ajoute un ID de chapitre à liste
- POST `/user` : Crée un utilisateur
- PATCH `/user/:id` : Modifie un utilisateur
- DELETE `/user/:id` : Supprime un utilisateur

- (?) GET `/user/:id/course` : Retourne les cours d'un utilisateur
  - Via GET `/course/:id`

### Course

- GET `/course` : Retourne la liste des cours
- GET `/course/:id` : Retourne un cours
- GET `/course/:id?expand=true` : Retourne un cours avec ses relations, incluant :
  - Ses chapitres
    - Obtrenus via GET `/chapter/:id`
  - (?) L'auteur expanded
    - Obtenu via GET `/user/:id`
- POST `/course` : Crée un cours
  - Si chapitres, les chapitres sont envoyés au ms chapitre via POST `/chapter`
- PATCH `/course/:id` : Modifie un cours (mais pas ses chapitres)

### Chapter

- GET `/chapter` : Retourne la liste des chapitres
- GET `/chapter/:id` : Retourne un chapitre
- POST `/chapter` : Crée un chapitre
- PATCH `/chapter/:id` : Modifie un chapitre
- DELETE `/chapter/:id` : Supprime un chapitre
