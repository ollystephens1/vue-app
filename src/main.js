// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-Auth-Token', '7ae4939dd097407b9cf2583ca009e639');
  request.headers.set('Accept', 'application/json');
  next();
});

Vue.config.productionTip = false;

Vue.component('spinner', {
  template: '<div class="loader"></div>'
});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
