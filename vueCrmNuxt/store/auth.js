import { db } from "@/plugins/firebase";
import Cookie from "js-cookie";

export const state = () => ({});
export const mutations = {};
export const actions = {
  async login({ dispatch, commit }, account) {
    try {
      await db
        .auth()
        .signInWithEmailAndPassword(account.email, account.password);
      const token = await db.auth().currentUser.getIdToken();
      const { email, uid } = db.auth().currentUser;
      Cookie.set("access_token", token);

      commit("user/setUser", { email, uid }, { root: true });
      await dispatch("user/loadUser", null, { root: true });
    } catch (e) {
      const error = e.code || e;
      commit("setError", error, { root: true });
      throw e;
    }
  },
  async regiterUser({ commit, dispatch }, { email, password, name, money }) {
    try {
      const { user } = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await db
        .database()
        .ref(`/users/${user.uid}/info`)
        .set({
          bill: money,
          name
        });
      const token = await db.auth().currentUser.getIdToken();
      Cookie.set("access_token", token);

      commit(
        "user/setUser",
        {
          uid: user.uid
        },
        { root: true }
      );
      await dispatch("user/loadUser", null, { root: true });

      //dispatch("user/loadUser", null, { root: true });
    } catch (e) {
      const error = e.code || e;
      commit("setError", error, { root: true });
      throw e;
    }
  },

  async logout({ commit, dispatch }) {
    await db.auth().signOut();
    Cookie.remove("access_token");
    commit("user/dellUser", null, { root: true });
    location.href = "/";
  }
};
export const getters = {};
