const state = () => {
  return {
    firstState: 'firstStateの初期値',
  }
}

const getters = {
  firstGetter: () => {
    return 'firstGetterの値'
  },
  firstGetterCombination: (state, getters, rootState, rootGetters) => {
    // module内のgetterは4つの引数を受け取ることができます。
    // rootStateとrootGettersを介して、他のモジュールのStateやGetterを参照することができます。

    return `${state.firstState} / ${getters.firstGetter} / ${rootState.rootExampleState} / ${rootState.second.secondState} / ${rootGetters['rootExampleGetter']} / ${rootGetters['second/secondGetter']}`
  },
}

const actions = {
  asyncFirst: () => {
    // promiseを返す
    return new Promise((resolve, reject) => {
      // APIにリクエストするなど、非同期な処理をします。
      // APIからのレスポンスが正常ならresolve()を実行するイメージです。
      setTimeout(() => {
        resolve()
      }, 3000)
    })
  },
}

const mutations = {
  setFirstState: (state, val) => {
    state.firstState = val
  },
}

export default {
  strict: true,
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
