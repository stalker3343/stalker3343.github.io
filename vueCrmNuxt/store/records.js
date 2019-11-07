import { db } from "@/plugins/firebase";

export const state = () => ({
  records: []
});

export const actions = {
  async addRecord({ commit, dispatch }, record) {
    try {
      const UId = await dispatch("user/getUId", null, { root: true });
      const recordDB = await db
        .database()
        .ref(`users/${UId}/records/`)
        .push(record);
      commit("addRecord", { ...record, id: recordDB.key });
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  async loadRecord({ commit, dispatch }) {
    try {
      const UId = await dispatch("user/getUId", null, { root: true });

      const recordsObj =
        (await db
          .database()
          .ref(`users/${UId}/records/`)
          .once("value")).val() || {};
      const records = Object.keys(recordsObj).map(item => ({ ...recordsObj[item], id: item }));

      if (records) commit("setRecords", records);
    } catch (e) {
      commit("setError", e);
      throw e;
    }
  },

  async editRecord({ commit, dispatch }, { name, id, limit }) {
    try {
      const uid = await dispatch("user/getUId", null, { root: true });
      await db
        .database()
        .ref(`/users/${uid}/records`)
        .child(id)
        .update({ name, limit });

      commit("editRecord", { name, id, limit });
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  }
};
export const mutations = {
  addRecord(state, record) {
    state.records.push(record);
  },
  setRecords(state, records) {
    state.records = records;
  },
  editRecord(state, { name, id, limit }) {
    const index = state.records.findIndex(el => el.id === id);
    state.records.splice(index, 1, { name, id, limit });
  }
};

export const getters = {
  records: state => {
    return state.records;
  }
};
