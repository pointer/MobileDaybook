import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    parameters: {}
  },

  actions: {
    userLogged ({commit}, user) {
      commit('USER_LOGGED', user)
    },
    parameterStore({
        commit
      }, parameters) {
      // debugger;
      commit('PARAMETERS', parameters)
    }
  },

  mutations: {
    USER_LOGGED (state, user) {
      state.user = user
    },
    PARAMETERS(state, parameters) {
      state.parameters = parameters
    }
  },
  getters: {
    userGet: state => {
      return state.user;
    },
   paramGet: state => {
     return state.parameters;
   },
  }
});