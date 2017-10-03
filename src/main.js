// main.js

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

const routes = [
  {
        name: 'CreateItem',
        path: '/',
        component: CreateItem
    }
];
// main.js

const router = new VueRouter({ mode: 'history', routes: routes});

 new Vue(Vue.util.extend({ router }, App)).$mount('#app');
/* new Vue({
    router,
    template: `
        <div id="app" class="container">
            <div>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>`
  }).$mount('#app') */
  