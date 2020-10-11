# IIM devops | Antoine Maurel

## preprod : http://iim.preprod.antoine-maurel.com/
## prod : http://iim.antoine-maurel.com/

## Setup
```
npm install
npm run serve
```

## Explication du site
CRUD de films avec barre de recherche, réalisé avec Vuejs et Buefy (Bulma).

## Explication CI/CD Github Actions
Preprod et prod hébergés sur un serveur mutualisé 1&1. Nodejs non installé sur le serveur et impossible de l'installer étant donné que le serveur est mutualisé. Pour palier à ça, à chaque push sur preprod ou prod, une branche temporaire est créée comprenant le résultat de l'installation des dépendances (node_modules/) et le résultat du build (dist/). Branche qui est ensuite push sur le serveur 1&1 et supprimée juste après, voir explication ci-dessous du fichier de config Github Actions.

Au niveau du workflow Github Actions, il y a 2 fichiers, un pour le deploiement sur le serveur de preprod et l'autre pour le deploiement sur le seveur de prod. Les 2 fichiers comportent tout les deux 3 jobs. Le premier job __'pre-deploy'__ à l'intérieur duquel on retrouve :

* L'initialisation du repo Github.  
    `uses: actions/checkout@v2`

* L'initialisation de Nodejs suivant les différentes versions définies dans la matrix.  
    `uses: actions/setup-node@master`

* L'instalation des dépendances et le build du project.  
    `run: | npm install npm run build`

* Le lancement des tests et du linter.  
    `run: | npm run lint npm run test`

* La création d'une nouvelle branch push sur le repo distant avec dedans le résultat du build ainsi que les dépendances du projet.


Le second job __'deploy'__ qui s'éxécute une fois le job pre-deploy effectué et réussi :

* La connexion au serveur via ssh pour ensuite pull le repo distant, merge la branche contenant les dépendances et build sur la branche principale (master pour le serveur de prod et preprod pour le serveur de preprod) et ensuite supprimer en locale et distant la branche temporaire qui contient les dépendances et build.


Le dernier job __'feedback'__ qui s'éxécute une fois le job deploy effectué et réussi :

* (prod only) Le screen de la home page du site une fois déployé, en fonction des sizes indiquées dans la matrix.  
    `uses: swinton/screenshot-website@v1.x`

* L'envoi d'une notification sur le serveur discord dédié au projet lorsque le déploiement c'est effectué sans échec.  
    `uses: Ilshidur/action-discord@master`

* (prod only) L'envoi d'un sms lorsque le déploiement c'est effectué sans échec.  
    `uses: nexmo-community/nexmo-sms-action@master`