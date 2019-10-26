import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import user from "./user";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    error: null,
    massage: null
  },
  mutations: {
    setError(state, err) {
      state.error = err;
    },
    clearError(state, err) {
      state.error = null;
    },
    setMessage(state, massage) {
      state.massage = massage;
    },
    clearMessage(state, massage) {
      state.massage = null;
    }
  },
  getters: {
    error: state => state.error,
    massage: state => state.massage
  },

  actions: {},
  strict: debug,
  modules: { auth, user }
});
