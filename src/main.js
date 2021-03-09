import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import vuetify from './plugins/vuetify'
import axios from "axios"

Vue.prototype.$axios = axios
Vue.use(VueRouter)

Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
