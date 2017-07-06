import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import League from '@/components/League';
import Pays from '@/components/Pays';
import Journey from '@/components/Journey';
import Favoris from '@/components/Favoris';

Vue.use(Router, VueMaterial);

export default new Router({
    routes: [
        {
            path: '/league/:idLeague',
            name: 'League',
            component: League
        },
        {
            path: '/',
            name: 'Pays',
            component: Pays
        },
        {
            path: '/league/:idLeague/journey/:matchday',
            name: 'Journey',
            component: Journey
        },
        {
            path: '/favoris',
            name: 'Favoris',
            component: Favoris
        }
    ]
});
