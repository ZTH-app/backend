# backend

Répo qui conteint la stack complète du backend

## Prérequis

- Docker
- Token github

### Token github

> :warning: Cette étape est obligatoire ! :warning:

Le token doit être généré en suivant cette [documentation](https://docs.github.com/fr/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

1. Dans github, dans les paramètres du compte, dans la section "Developer settings", cliquer sur "Personal access tokens", puis sur "Tokens (classic)".
2. Cliquez sur "generate new token" puis choisissez les droits de lecture sur les packages github.
3. Enregistrez le token dans vos variables d'environnement avec la commande `$env:<nom token>="YOUR_TOKEN"`
4. Tapez la commande suivante : `$env:<nom token> | docker login ghcr.io -u <USERNAME> --password-stdin` en remplaçant USERNAME par votre nom d'utilisateur github.

> Pensez à redémarrer VSCode ou le terminal une fois fait, sinon la modif ne sera pas prise en compte !

## Installation dev

Le projet utilise des submodules pour fonctionner. Pour les installer, il faut cloner le projet avec la commande suivante.

```bash
git clone --recurse-submodules
```

Tapez ensuite la commande suivante pour lancer le docker-compose :

```bash
docker-compose up -d
```

Vous pourrez ensuite arrêter les conteneurs "ms-*" que vous ne pensez pas utilsier

## Installation stack en mode prod

Pour installer la stack en mode prod, il faut utiliser le docker-compose présent dans le dossier "prod"

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
