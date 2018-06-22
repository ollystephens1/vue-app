import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Squad from '@/components/Squad';
import Fixtures from '@/components/Fixtures';
import Information from '@/components/Information';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/squad',
      name: 'Squad',
      component: Squad
    },
    {
      path: '/fixtures',
      name: 'Fixtures',
      component: Fixtures
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    }
  ]
});
