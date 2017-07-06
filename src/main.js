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
Vue.use(VueMaterial);
Vue.material.setCurrentTheme('default');

/* eslint-disable no-new */
new Vue(
    {
        el: '#app',
        router,
        template: '<App/>',
        components: { App }
    });

Vue.material.registerTheme('default', {
    primary: 'light-green',
    accent: 'red',
    warn: 'red',
    background: {
        color: 'green',
        hue: '50',
        textColor: 'black'}
});
