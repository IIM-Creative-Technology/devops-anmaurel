import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import buefy from 'buefy'
// import Vuetify from 'vuetify'

import 'buefy/dist/buefy.css'
// import 'vuetify/dist/vuetify.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
