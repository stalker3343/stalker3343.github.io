import JWTDecode from "jwt-decode";
import cookieParser from "cookieparser";

export const state = () => ({
  error: null,
  massage: null
});
export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;
    const parsed = cookieParser.parse(req.headers.cookie);
    const accessTokenCookie = parsed.access_token;

    if (!accessTokenCookie) return;
    const decodedToken = JWTDecode(accessTokenCookie);

    if (decodedToken) {
      commit("user/setUser", {
        uid: decodedToken.user_id,
        email: decodedToken.email
      });
      await dispatch("user/loadUser");
    }
    // await dispatch("user/loadUser");
  }
};
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
