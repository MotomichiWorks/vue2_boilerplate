import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import first from './modules/first'
import second from './modules/second'

const state = () => {
  return {
    rootExampleState: 'rootExampleStateの初期値'
  }
}

const getters = {
  rootExampleGetter() {
    return 'rootExampleGetterの値'
  },
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
    // moduleのstateを関数でreturnすることによって、moduleを複製して別名で使用することができます。
    secondClone: second,
  },
})
