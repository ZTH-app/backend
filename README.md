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
3. Enregistrez le token dans vos variables d'environnement avec la commande `$ev:<nom token>="YOUR_TOKEN"`
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

