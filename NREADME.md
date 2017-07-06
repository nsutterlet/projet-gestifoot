# Gestifoot
Ce projet a été réalisé dans le cadre de la HEG Arc pour le cours Projet Web. Le but de l'application est d'afficher le classement et les dernières résultats des championnats principaux. Elle permet également de sélectionner une équipe et de la mettre dans une liste de club favorit.


## Outils utilisés
___
### Environnement de développement et librairies
* [Microsoft Visual Studio](https://code.visualstudio.com/) IDE
* [NPM](https://www.npmjs.com/) Pakage manager pour JavaScript
* [WebPack](https://webpack.github.io/docs/) Webpack génère des éléments statiques représentant les dependances des modules
* [jQuery](https://jquery.com/) Librairie JavaScript
* [Node.js](https://nodejs.org/en/) JavaScript runtime



### Librairies CSS et outils utilisés pour le CSS
* [Boostrap](http://getbootstrap.com/) est le framework HTML, CSS et JavaScript le plus populaire pour le développement de projets responsive
* [Vue Material](https://http://vuematerial.io) est le framewotk pour les applications Web puissantes et conçues qui peuvent être adaptées à chaque écran
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
Ce fichier contient la nomenclature
### router/index.js
Ce fichier contiendra les routes pour accéder à nos vus
```javascript
import Chart from 'chart.js';

/* Transformation de la page à placer dans $(document).ready(function () */
    transformPage();

/* Récupération des progress-bar */
var listProgress = $('.progress');

/* Extraction des données d'une progress-bar */
function extractDataFromProgress(progress) {
    const bar = progress.children[0];
    const val = $(bar).attr('aria-valuenow');
    return val;
}

/* Fonction de création du chart */
function makeChart(c, val) {
    let option = {
        type: 'doughnut',
        data: {

            datasets: [
                {
                    backgroundColor: ['#808080', 'transparent'],
                    borderColor: ['transparent', 'transparent'],
                    data: [val, 100 - val]
                }
            ]
        },
        options: {
            tooltips: { enabled: false },
            hover: { mode: null }
        }
    };
    new Chart(c, option);
}

/* Tranformation de la page */
function transformPage() {
    for (let progress of listProgress) {
        const val = extractDataFromProgress(progress);
        const c = $('<canvas></canvas>');
        $(progress).replaceWith(c);
        makeChart(c, val);
    }
}


#### Jquery Smooth Scrooll
Ce plugin permet une navigation fluide entre les sections de la page HTML
##### Installation
```batch
$ npm install jquery-smooth-scoll --save
```
##### Importation et utilisation dans le main.js
```javascript
import 'jquery-smooth-scroll';

 /* Activation du smoothscroll à placer dans $(document).ready(function () */
    $('a').smoothScroll({
        offset: -50,
        speed: 1000
    });
```
> L'effet est appliqué au menu ansi qu'au bouton de retour vers le haut de la page. Il est possible de le parametrer finement en suivant la [documentation](https://github.com/kswedberg/jquery-smooth-scroll).

#### Jquery jquery-tooltips
___
Ce plugin m'a permis d'ajouter une info bulle lorsque l'on passe avec la souris sur le bouton de retour vers le haut.
##### Installation
```batch
$ npm install jquery-tooltipster --save
```
##### Importation et utilisation dans le main.js
```javascript
import 'tooltipster/dist/css/tooltipster.bundle.min.css';// Import du CSS
import 'tooltipster';// Import du plugin

/* tooltipster sur le bouton de retour vers le haut à placer dans $(document).ready(function () */
    $('.tooltip-custom').tooltipster({
        theme: 'tooltipster-cv',// Appel de mon CSS personnalisé
        animation: 'grow'// Définition du type d'animation
    });
```
##### Utilisation dans le HTML
```html
<!-- Il suffit d'ajouter le titre à afficher dans l'infobulle -->
<a class="btn-back-top" href="#top">
    <i class="fa fa-arrow-up tooltip-custom" title="Retourner en haut de la page!" aria-hidden="true">
    </i>
</a>
```
##### CSS perso
```css
/* Personnalisation tooltipster pour concordance avec les couleurs du cv */
.tooltipster-sidetip.tooltipster-cv .tooltipster-box{
    border-radius:5px;
    border:none;
    border-bottom:3px solid gray;
    border-right: 2px solid gray;
    background:#2a2a2a;
}

.tooltipster-sidetip.tooltipster-cv.tooltipster-top .tooltipster-arrow-border{
    border-top-color: gray;
}

.tooltipster-sidetip.tooltipster-cv.tooltipster-top .tooltipster-box{
    margin-bottom:7px;
}
.tooltipster-sidetip.tooltipster-cv .tooltipster-content{
    color:#fff;
    padding:8px 16px;
}
.tooltipster-sidetip.tooltipster-cv .tooltipster-arrow-background{
    display:none;
}
.tooltipster-sidetip.tooltipster-cv.tooltipster-bottom .tooltipster-arrow-border{
    border-bottom-color:#2a2a2a;
}
.tooltipster-sidetip.tooltipster-cv.tooltipster-right .tooltipster-arrow-border{
    border-right-color:#2a2a2a;
}
```
#### Jquery jquery-image-changer
___
Comme mon cv est en style noir et blanc je voulais avec ce plugin permettre d'afficher certaines images en couleur au passage de la souris.

Il faut donc charger deux image par exemple profil.jpg et profil_on.jpg qui sera affiché au survol. 

_on est le suffixe par défaut mais peut être modifié.
##### Installation
```batch
$ npm install jquery-image-changer --save
```
##### Import et utilisation dans le main.js

```javascript
import 'jquery-image-changer';

 /* Charge un image en couleur au passage de la souris à placer dans $(document).ready(function ()*/
    $('.rollover').imageChanger({
        imageTypes: 'jpg|jpeg|gif|png|svg' // =>J'ai ajouté le svg car non pris en charge par défaut
    });

```
##### Utilisation dans le html
```html
<!-- utilisation de la classe rollover qui est appellée dans le script-->
<a class="rollover"><img class="img-coop" src="static/coop.svg" title="Coop"></a>
```
