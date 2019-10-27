import firebase from "firebase/app";

export default {
  state: {
    categories: []
  },

  actions: {
    async addCateg({ commit, dispatch }, categ) {
      try {
        const UId = await dispatch("getUId");
        const categDB = await firebase
          .database()
          .ref(`users/${UId}/categories/`)
          .push(categ);
        commit("addCateg", { ...categ, id: categDB.key });
      } catch (e) {
        commit("setError", e);
      }
    },
    async loadCateg({ commit, dispatch }) {
      try {
        const UId = await dispatch("getUId");

        const categsObj =
          (await firebase
            .database()
            .ref(`users/${UId}/categories/`)
            .once("value")).val() || {};
        const categs = Object.keys(categsObj).map(item => ({ ...categsObj[item], id: item }));
        if (categs) commit("setCategs", categs);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },
  mutations: {
    addCateg(state, categ) {
      state.categories.push(categ);
    },
    setCategs(state, categs) {
      state.categories = categs;
    }
  },

  getters: {
    categories: state => state.categories
  }
};
