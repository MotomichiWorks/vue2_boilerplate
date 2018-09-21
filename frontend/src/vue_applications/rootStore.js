import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import first from './modules/first'
import second from './modules/second'

const state = {

}

const getters = {

}

const actions = {

}

const mutations = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    first,
    second,
  },
})
