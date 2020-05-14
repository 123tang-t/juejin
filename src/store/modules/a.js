export default ({
  state: {
    money: 10
  },
  mutations: {
    add (state) {
      state.money++
    },
    reduce (state) {
      state.money--
    }
  },
  actions: {
    add: ({ commit }) => {
      commit('add')
    },
    reduce: ({ commit }) => {
      commit('reduce')
    }
  },
  modules: {
  }
})
