/* eslint-disable no-undef */
import Vue from 'vue';
import Vuex from 'vuex';

import Common from './common';

import { cartMutations, productsMutations, sellersMutations } from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    Common
  },
  state: {
    products: [],
    sellers: [],
    cartItems: []
  },
  mutations: Object.assign({}, cartMutations, productsMutations, sellersMutations),
  actions,
  getters
});
