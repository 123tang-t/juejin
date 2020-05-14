export default ({
  state: {
    count: 1
  },
  mutations: {
    add (state) {
      state.count++
    },
    reduce (state) {
      state.count--
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
