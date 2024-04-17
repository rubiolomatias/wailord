import { createStore } from 'vuex';

export default createStore({
  state: {
    userId: null
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
    clearUserId(state) {
      state.userId = null; 
    }
  },
  actions: {
    login({ commit }, userId) {
      commit('setUserId', userId);
    },
    logout({ commit }) {
      commit('clearUserId');
    }
  }
});
