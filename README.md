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


