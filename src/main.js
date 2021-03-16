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

const audio = new Audio()
//监听播放完成事件
audio.addEventListener('ended',() => {
  store.commit('toggleIsPlaying',{ isPlaying: false })
})

Vue.prototype.$audio = audio
//vuex管理播放器展示的信息等状态
const store = new Vuex.Store({
  state: {
    isPlaying: false,
    content: '',
  },
  mutations: {
    toggleIsPlaying(state,payload) {
      console.log('toggleIsPlaying')
      state.isPlaying = payload.isPlaying
    },
    changeContent (state,payload) {
      console.log('changeContent')
      state.content = payload.content
    }
  }
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')