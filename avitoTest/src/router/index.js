import Vue from 'vue';
import Router from 'vue-router';

import Home from '../view/Home.vue';
import Cart from '../view/Cart.vue';
import Product from '../view/Product.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/product/:id',
      component: Product
    }
  ]
});
