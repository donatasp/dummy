import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import VuexPlayground from '@/components/VuexPlayground';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/playground',
      name: 'Vuex playground',
      component: VuexPlayground,
    },
  ],
});
