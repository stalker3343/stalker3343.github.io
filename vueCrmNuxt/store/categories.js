import { db } from "@/plugins/firebase";

export const state = () => ({
  categories: []
});

export const actions = {
  async addCateg({ commit, dispatch }, categ) {
    try {
      const UId = await dispatch("user/getUId", null, { root: true });
      const categDB = await db
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
      const UId = await dispatch("user/getUId", null, { root: true });
      const categsObj =
        (await db
          .database()
          .ref(`users/${UId}/categories/`)
          .once("value")).val() || {};
      const categs = Object.keys(categsObj).map(item => ({ ...categsObj[item], id: item }));
      if (categs) commit("setCategs", categs);
    } catch (e) {
      commit("setError", e);
      throw e;
    }
  },

  async editCateg({ commit, dispatch }, { name, id, limit }) {
    try {
      const uid = await dispatch("user/getUId", null, { root: true });
      await db
        .database()
        .ref(`/users/${uid}/categories`)
        .child(id)
        .update({ name, limit });

      commit("editCateg", { name, id, limit });
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  }
};
export const mutations = {
  addCateg(state, categ) {
    state.categories.push(categ);
  },
  setCategs(state, categs) {
    state.categories = categs;
  },
  editCateg(state, { name, id, limit }) {
    const index = state.categories.findIndex(el => el.id === id);
    state.categories.splice(index, 1, { name, id, limit });
  }
};

export const getters = {
  categories: state => {
    return state.categories;
  }
};
