import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store  from './store'
import VurRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(VurRouter);
Vue.use(VueResource);
Vue.use(VueMaterial)
Vue.use(Vuex)
const router = new VurRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
	store,
  render: h => h(App),
  router: router
}).$mount('#app')
