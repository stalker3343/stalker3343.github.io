import { db } from "@/plugins/firebase";

export const state = () => ({});
export const mutations = {};
export const actions = {
  async login({ dispatch, commit }, { email, password }) {
    try {
      await db.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      const error = e.code || e;
      commit("setError", error);
      throw e;
    }
  },
  async regiterUser({ commit, dispatch }, { email, password, name, money }) {
    try {
      const { user } = await db.auth().createUserWithEmailAndPassword(email, password);
      // const uid = await dispatch("getUid");
      console.log(user);

      await db
        .database()
        .ref(`/users/${user.uid}/info`)
        .set({
          bill: money,
          name
        });
      dispatch("user/loadUser", null, { root: true });
    } catch (e) {
      const error = e.code || e;
      commit("setError", error);
      throw e;
    }
  },

  async logout({ commit, dispatch }) {
    await db.auth().signOut();
    commit("dellUser");
  }
};
export const getters = {};
