import Vue from 'vue';
import Vuex from 'vuex';
import Common from './common';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Common
  },
  state: {
    products: [],
    sellers: [],
    favorites: []
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setSellers(state, data) {
      state.sellers = data;
    },
    setFavourites(state) {
      if (localStorage.fav) {
        JSON.parse(localStorage.fav).forEach(indexFav => {
          const favItem = state.products.find(el => el.id == indexFav);
          state.favorites.push(favItem);
        });
      } else {
        localStorage.fav = JSON.stringify([]);
      }
    },
    addFavourites(state, favItemId) {
      const massFav = JSON.parse(localStorage.fav);
      const favItem = state.products.find(el => el.id == favItemId);
      massFav.push(favItemId);
      localStorage.fav = JSON.stringify(massFav);
      state.favorites.push(favItem);
    },
    removeFavourites(state, favItem) {
      const massFav = JSON.parse(localStorage.fav);
      const index = massFav.findIndex(el => el == favItem);
      massFav.splice(index, 1);
      localStorage.fav = JSON.stringify(massFav);
      state.favorites.splice(index, 1);
    }
  },
  actions: {
    async loadProducts({ commit }) {
      commit('setLoading', true);
      const productsRaw = await fetch('https://avito.dump.academy/products');
      const products = await productsRaw.json();
      commit('setProducts', products.data);
      const sellersRaw = await fetch('https://avito.dump.academy/sellers');
      const sellers = await sellersRaw.json();
      commit('setSellers', sellers.data);
      commit('setFavourites');
      commit('setLoading', false);
    }
  },

  getters: {}
});
