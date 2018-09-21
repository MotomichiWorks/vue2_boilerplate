import Vue from 'vue';
import Vuex from 'vuex'
import store from './vue_applications/rootStore'
Vue.use(Vuex)

import App from './vue_applications/App';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
