import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import vuetify from './plugins/vuetify'
import axios from "axios"
import Vuex from 'vuex'
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

const audio =new Audio()
Vue.prototype.$audio = audio

const store = new Vuex.Store({
  state: {
    isPlaying: false,
    content: ''
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
