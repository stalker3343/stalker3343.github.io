export const state = () => ({
  error: null,
  massage: null
});
export const mutations = {
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
};
export const getters = {
  error: state => state.error,
  massage: state => state.massage
};

export const actions = {};
