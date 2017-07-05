import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import League from '@/components/League';
import Pays from '@/components/Pays';
import Equipe from '@/components/Equipe';

Vue.use(Router, VueMaterial);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/league',
            name: 'League',
            component: League
        },
        {
            path: '/pays',
            name: 'Pays',
            component: Pays
        },
        {
            path: '/equipe',
            name: 'Equipe',
            component: Equipe
        }
    ]
});
