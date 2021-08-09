import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogon: false,
  },
  mutations: {
    login (state, payload) {
      console.log(payload)
      state.isLogon = true
      // console.log(state.isLogon)
    }
  },
  actions: {
    login (store, payload) {
      console.log(payload)
      store.commit('login', payload)
    }
  },
  modules: {}
})
