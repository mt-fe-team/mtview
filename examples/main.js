// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import mtView from '../src/index';

Vue.config.productionTip = false

Vue.use(mtView);

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
