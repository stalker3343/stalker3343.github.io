/* eslint-disable no-undef */
import Vue from 'vue';
import Vuex from 'vuex';
import fb from 'firebase/app';
import Common from './common';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Common
  },
  state: {
    products: [],
    sellers: [],
    cartItems: []
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setSellers(state, data) {
      state.sellers = data;
    },
    setCartItems(state) {
      state.cartItems = [];

      if (localStorage.cartItems) {
        JSON.parse(localStorage.cartItems).forEach(indexCartItem => {
          const cartItem = state.products.find(el => el.id === indexCartItem);
          state.cartItems.push(cartItem);
        });
      } else {
        localStorage.cartItems = JSON.stringify([]);
      }
    },
    addCartItem(state, cartItemId) {
      const massCartItems = JSON.parse(localStorage.cartItems);
      const cartItem = state.products.find(el => el.id === cartItemId);
      massCartItems.push(cartItemId);
      localStorage.cartItems = JSON.stringify(massCartItems);
      state.cartItems.push(cartItem);
    },
    removeCartItem(state, cartItemId) {
      const massCartItems = JSON.parse(localStorage.cartItems);
      const index = massCartItems.findIndex(el => el === cartItemId);
      massCartItems.splice(index, 1);
      localStorage.cartItems = JSON.stringify(massCartItems);
      state.cartItems.splice(index, 1);
    }
  },
  actions: {
    async loadProducts({ commit }) {
      commit('setLoading', true);
      const productsRaw = await fb
        .database()
        .ref('/products/')
        .once('value');
      const products = productsRaw.val();
      commit('setProducts', products);
      const sellersRaw = await fb
        .database()
        .ref('/sellers')
        .once('value');
      const sellers = await sellersRaw.val();
      commit('setSellers', sellers);
      commit('setCartItems');
      commit('setLoading', false);
    }
  },

  getters: {}
});
