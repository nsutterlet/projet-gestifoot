import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

Vue.use(Router, VueMaterial);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
});
