// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'flag-icon-css/css/flag-icon.min.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'fontawesome';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    VueMaterial,
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

Vue.use(VueMaterial);
