import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import App from './App';
import createStore from './store';

Vue.config.productionTip = false;
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store: createStore()
});
