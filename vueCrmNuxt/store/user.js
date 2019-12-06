import { db } from "@/plugins/firebase";

export const state = () => ({
  user: null
});

export const actions = {
  async loadUser({ commit, getters }) {
    const uid = getters["user"].uid;

    // if (!uId) {
    //   commit("setUser", null);
    //   return resolve();
    // }
    // console.log(uId);

    const rowData = await db
      .database()
      .ref(`/users/${uid}/info`)
      .once("value");

    const { bill, name } = rowData.val();

    // const { bill, name } = await db
    //   .database()
    //   .ref(`/users/${uId}/info`)
    //   .once("value")
    //   .val();

    const user = {
      name,
      bill,
      uid
    };
    commit("setUser", user);

    // let uId;
    // db.auth().onAuthStateChanged(async () => {
    //   return new Promise(() => {
    //     console.log("всё подтвердилось");
    //   });
    // });
  },
  getUId({ state }) {
    return state.user.uid;
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
    console.log("set user", user);

    state.user = user;
  }
};

export const getters = {
  user: state => state.user
};
