const state = () => {
  return {
    secondState: 'secondStateの初期値',
  }
}

const getters = {
  secondGetter: () => {
    return 'secondGetterの値'
  },
}

const actions = {
  asyncSecond: () => {
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
  setSecondState: (state, val) => {
    state.secondState = val
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
