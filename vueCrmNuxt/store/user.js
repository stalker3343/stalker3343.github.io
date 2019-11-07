import { db } from "@/plugins/firebase";

export const state = () => ({
  user: null
});

export const actions = {
  loadUser({ commit }) {
    return new Promise(function(resolve, reject) {
      db.auth().onAuthStateChanged(async function() {
        const uId = db.auth().currentUser.uid;

        const rawData = await db
          .database()
          .ref(`/users/${uId}/info`)
          .once("value");
        const { bill, name } = rawData.val();
        // const { bill, name } = await db
        //   .database()
        //   .ref(`/users/${uId}/info`)
        //   .once("value")
        //   .val();

        const user = {
          name,
          bill,
          uId
        };
        commit("setUser", user);
        resolve();
      });
    });

    // let uId;
    // db.auth().onAuthStateChanged(async () => {
    //   return new Promise(() => {
    //     console.log("всё подтвердилось");
    //   });
    // });
  },
  getUId({ state }) {
    return state.user.uId;
  },
  async updateUser({ commit, dispatch, getters }, user) {
    try {
      const uid = await dispatch("getUId");

      const updateData = { ...getters.user, ...user };
      await db
        .database()
        .ref(`/users/${uid}/info`)
        .update(updateData);
      commit("setUser", updateData);
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  }
};
export const mutations = {
  dellUser(state) {
    state.user = null;
  },
  setUser(state, user) {
    state.user = user;
  }
};

export const getters = {
  user: state => state.user
};
