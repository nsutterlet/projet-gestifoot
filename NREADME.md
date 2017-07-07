# Gestifoot
Auteur : Hugo Gonçalves et Nicolas Sutterlet

Date : 2017-07-06

Ce projet a été réalisé dans le cadre de la HEG Arc pour le cours Projet Web. Le but de l'application est d'afficher le classement et les dernières résultats des championnats principaux. Elle permet également de sélectionner une équipe et de la mettre dans une liste de club favorit.




## Outils utilisés
___
### Environnement de développement et librairies
* [Microsoft Visual Studio](https://code.visualstudio.com/) IDE
* [NPM](https://www.npmjs.com/) Pakage manager pour JavaScript
* [WebPack](https://webpack.github.io/docs/) Webpack génère des éléments statiques représentant les dependances des modules
* [Node.js](https://nodejs.org/en/) JavaScript runtime
* [Vue Material](https://http://vuematerial.io) est le framewotk pour les applications Web puissantes et conçues qui peuvent être adaptées à chaque écran
* [API football data](http://football-data.org/index) permet de récupérer les données de championnats de football (match, classement) et leur équipes (y. c. joueurs)



### Librairies CSS et outils utilisés pour le CSS
* [Boostrap](http://getbootstrap.com/) est le framework HTML, CSS et JavaScript le plus populaire pour le développement de projets responsive
* [Font-Awesome](http://fontawesome.io/) est une police d'icones et CSS
* [Color palette Material](https://material.io/guidelines/style/color.html#color-color-tool) permet de choisir des belles couleurs 

### Navigateur et extensions
* [Google Chrome](https://www.google.fr/chrome/browser/desktop/index.html)
* [Vetur](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) est une extention permettant de debugger les applications Vue.js  


### Outils de versioning
* [Git]() logiciel de versionning
* [GitHub](https://github.com/) service web d'hébergement et de gestion de projets
* [GitHub Desktop](https://desktop.github.com/) Client lourd GitHub



## Déroulement du projet
___
### Mise en place de l'environnement de développement
___
1. Installation des outils Visual Studio Code, Google Chrome, ...
2. A partir du terminal dans Visual Studio Code installer les librairies necessaires

### Commandes utiles
___
#### Installation
```batch
# Installation des dépendences
$ npm install

# Installation de Vue
$ npm install vue --save

# Installation de Vue Material
$ npm install vue-material --save

# Installation Font-Awesome
$ npm install fontawesome --save
```
#### Autres commandes
___
```batch
# Lancement du serveur de developpement
$ npm run dev

# Arreter le serveur 
Ctrl + C
```
#### Commit et deployement
___
```batch
# Créer une version minimisée du projet
$ npm run build

# Ajouter les fichiers modifiés à Git
$ git add . --all

# Commiter modifications Git
$ git commit -m "Votre message de commit"

# Deployement
$ npm run deploy

# Commiter vers branche master
$ git push
```
*Remarque* : Ne pas oublier de changer le path dans config/index.js
### Fichiers à modifier
___
#### .eslitrc.js 
Adapter ESLint à notre style de code
```javascript
{
    ...,
        "rules": {
            // enforce semi
            "semi": ["error", "always"],
            // use 4 spaces indent
            "indent": ["error", 4],
            ...
    },
    ...
}
```
#### Fichiers dans build/webpack.dev.conf et  build/webpack.prod.conf
Ajouter support de jQuery à WebPack
```javascript
{
    ...,
        plugins: [
            new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
    ...,
    ]
}
```
#### Fixer debugage
```javascript
devtool: 'source-map',
```
## Main.js

Importation des dépendances dans le main.js, ajouter le code :
```Javascript
....
import 'flag-icon-css/css/flag-icon.min.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'fontawesome';
....
```



## Vue.js 
___
### index.html
Pour que l'application soit agréable à consulter sur smartphone et tablettes et d'intégrer des outils de Vue Material, il faut inserer dans le html :

```html

    <link rel="stylesheet" href="//fonts.googleapis.com/css?        family=Pacifico|Vibur:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="manifest" href="static/manifest.json">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="application-name" content="Shop Memo">
    <meta name="apple-mobile-web-app-title" content="Shop Memo">
    <meta name="theme-color" content="#388E3C">
    <meta name="msapplication-navbutton-color" content="#388E3C">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="msapplication-starturl" content="/">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

```
### App.vue
Ce fichier contient la nomenclature de notre app
```javascript
<template>
    <div id="app">
    
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app'
};

</script>

<style>

</style>
```

### router/index.js
Ce fichier contiendra les routes pour accéder à nos vus
```javascript
import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Pays from '@/components/Pays';


Vue.use(Router, VueMaterial);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Pays',
            component: Pays
        },
        ...
    ]
});
```

## LocalStorage

Lorsqu'une personne décide de mettre une équipe dans les favoris, elle est stockée dans le cache.
```javascript
const LOCALSTORAGE_KEY = 'malist-fav';
let maList;

export default {
    name: 'favoris',
    data () {
        try {
            const jsonList = localStorage.getItem(LOCALSTORAGE_KEY);
            maList = JSON.parse(jsonList);
            if (!maList) {
                throw new Error();
            }
        } catch (e) {
            maList = [];
        }
        return {
            maList
        };
    },
    methods: {
        removeFromList (equipe) {
            this.maList.splice(this.maList.indexOf(equipe), 1);
        }
    },
    watch: {
        maList: {
            handler () {
                const jsonList = JSON.stringify(this.maList);
                localStorage.setItem(LOCALSTORAGE_KEY, jsonList);
            },
            deep: true
        }
    }
};
```

## Divers

### Image
Toutes les images utilisés  pour les logos des championnats des ligues sont en local (static). Les autres proviennent de l'API.

## Problème et solution

Par manque de temps et également ayant dû assimiler le fonctionnement et mécanisme de Vue.js en une petite semaine, beaucoup d'amélioration peuvent être faites.

Des méthodes dans League.vue et Journey.vue (getLeague et getJourney) auraient pu être dans une seule vue et aurait pu être appelée lorqu'on le souhaite. Ce problème se résoud notamment grâce à un v-bind dans la vue où l'on veut afficher et un props dans celle où la méthode est créee. La même remarque pour les méthodes d'ajout et de suppression de la liste. Cette amélioration pourrait être faite lors d'une version 2.0

Une autre amélioration serait d'utiliser les équipes favorites et de pouvoir les afficher (derniers matchs, joueurs, etc..). Egalemment pour améliorer l'affichage des journées, de permettre d'afficher toutes les journées.

### Expérience Vue.js

Une fois bien assimilée, la création d'application grâce a vue.js est rapide avec peu de ligne de code.
Au niveau des performances, c'est une framework fluide.
Le grand avantage de Vue.js  est de pouvoir réutiliser les éléments et de combiner les vues entres elles. Plus on aura de composants (il faut évidemment qu'il y ai un sens de découper un composants), plus on pourra subdiviser notre code ! Le code sera églamment plus simple à comprendre, ce qui est également un grand avantage.

Pour conclure, nous avons appréciée de travailler avec Vue.js même si nous n'avons pas exploité totalement ces fonctionnalités. Au début, ce framekork n'est pas facile à assimiler mais petit à petit les choses deviennent idoines et l'utilisation n'est que plus simple.