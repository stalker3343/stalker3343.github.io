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
      const productsObject = productsRaw.val();
      const products = Object.keys(productsObject).map(key => {
        return productsObject[key];
      });
      commit('setProducts', products);
      const sellersRaw = await fb
        .database()
        .ref('/sellers')
        .once('value');
      const sellers = await sellersRaw.val();
      commit('setSellers', sellers);
      commit('setCartItems');
      commit('setLoading', false);
    },

    async addProduct({ commit, state }, model) {
      commit('setLoading', true);

      const product = {
        title: model.title,
        price: model.price,
        relationships: {
          seller: model.relationships.seller
        },
        pictures: model.pictures,
        category: model.category
      };
      const fbValue = await fb
        .database()
        .ref('products')
        .push(product);
      const updates = {};
      updates[`/products/${fbValue.key}`] = Object.assign({ id: fbValue.key }, product);
      await fb
        .database()
        .ref()
        .update(updates);
      state.products.push(Object.assign({ id: fbValue.key }, product));
      commit('setLoading', false);
    },

    async editProduct({ commit, state }, model) {
      commit('setLoading', true);
      const product = {
        title: model.title,
        price: model.price,
        relationships: {
          seller: model.relationships.seller
        },
        pictures: model.pictures,
        category: model.category,
        id: model.id
      };

      const indexProd = state.products.findIndex(el => el.id === product.id);
      state.products[indexProd] = product;

      const updates = {};
      updates[`/products/${model.id}`] = Object.assign({}, product);
      await fb
        .database()
        .ref()
        .update(updates);

      commit('setLoading', false);
    },

    async removeProduct({ commit, state }, { productId, productIndex }) {
      commit('setLoading', true);
      state.products.splice(productIndex, 1);
      const updates = {};
      updates[`/products/${productId}`] = null;
      await fb
        .database()
        .ref()
        .update(updates);

      commit('setLoading', false);
    }
  },

  getters: {}
});
