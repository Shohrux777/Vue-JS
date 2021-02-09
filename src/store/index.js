import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boollen: false,
    navigator: ['navigator 1', 'navigator 2', 'navigator 3', 'navigator 4', 'navigator 5']
  },
  mutations: {
    addbool (state, data) {
      state.boollen = data
    }
  },
  actions: {},
  modules: {}
})
