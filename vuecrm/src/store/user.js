import firebase from "firebase/app";

export default {
  state: {
    user: null
  },

  actions: {
    async loadUser({ commit }) {
      const uId = firebase.auth().currentUser.uid;
      console.log(
        (await firebase
          .database()
          .ref(`/users/${uId}/info`)
          .once("value")).val()
      );
      const { bill, name } = (await firebase
        .database()
        .ref(`/users/${uId}/info`)
        .once("value")).val();

      const user = {
        name,
        bill,
        uId
      };
      commit("setUser", user);
    }
  },
  mutations: {
    dellUser(state) {
      state.user = null;
    },
    setUser(state, user) {
      state.user = user;
    }
  },

  getters: {
    user: state => state.user
  }
};
