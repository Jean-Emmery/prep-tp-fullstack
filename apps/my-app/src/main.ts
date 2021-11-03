import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'axentix/dist/css/axentix.css'
import 'axentix/dist/js/axentix.js'

Vue.use(VueAxios, axios)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
