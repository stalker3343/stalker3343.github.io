import firebase from "firebase/app";

export default {
  state: {},
  mutations: {},
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        const error = e.code || e;
        commit("setError", error);
        throw e;
      }
    },
    async regiterUser({ commit, dispatch }, { email, password, name, money }) {
      try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
        // const uid = await dispatch("getUid");
        console.log(user);

        await firebase
          .database()
          .ref(`/users/${user.uid}/info`)
          .set({
            bill: money,
            name
          });
        dispatch("loadUser");
      } catch (e) {
        const error = e.code || e;
        commit("setError", error);
        throw e;
      }
    },

    async logout({ commit, dispatch }) {
      await firebase.auth().signOut();
      commit("dellUser");
    }
  },
  getters: {}
};
