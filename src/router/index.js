import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import League from '@/components/League';
import Pays from '@/components/Pays';
import Equipe from '@/components/Equipe';
import Journey from '@/components/Journey';

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
            path: '/equipe',
            name: 'Equipe',
            component: Equipe
        },
        {
            path: '/league/:idLeague/journey/:matchday',
            name: 'Journey',
            component: Journey
        }
    ]
});
