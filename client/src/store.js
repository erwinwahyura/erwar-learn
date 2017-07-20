import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    islogin: false,
    listArticles: []
  },
  getters: {
    islogin (state) {
      return state.islogin
    }
  },
  mutations: {
    cekLogin (state, value) {
      return state.islogin = value
    }
  }
})
