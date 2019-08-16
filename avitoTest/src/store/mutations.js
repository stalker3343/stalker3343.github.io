/* eslint-disable no-undef */

export const cartMutations = {
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

    // 0 индекc так же вернёт false хотя он был найден
    if (index || index === 0) {
      massCartItems.splice(index, 1);
      localStorage.cartItems = JSON.stringify(massCartItems);
      state.cartItems.splice(index, 1);
    }
  }
};

export const productsMutations = {
  setProducts(state, data) {
    state.products = data;
  },
  addProductItem(state, model) {
    state.products.push(model);
  },
  removeProductItem(state, productIndex) {
    state.products.splice(productIndex, 1);
  },
  editProductItem(state, product) {
    const indexProd = state.products.findIndex(el => el.id === product.id);

    state.products[indexProd] = product;
  }
};

export const sellersMutations = {
  setSellers(state, data) {
    state.sellers = data;
  }
};
