import fb from 'firebase/app';

export default {
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

  async addProduct({ commit }, model) {
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
    commit('addProductItem', Object.assign({ id: fbValue.key }, product));

    commit('setLoading', false);
  },

  async editProduct({ commit }, model) {
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
    commit('editProductItem', product);

    const updates = {};
    updates[`/products/${model.id}`] = Object.assign({}, product);
    await fb
      .database()
      .ref()
      .update(updates);

    commit('setLoading', false);
  },

  async removeProduct({ commit }, { productId, productIndex }) {
    commit('setLoading', true);
    commit('removeProductItem', productIndex);
    commit('removeCartItem', productId);

    const updates = {};
    updates[`/products/${productId}`] = null;
    await fb
      .database()
      .ref()
      .update(updates);

    commit('setLoading', false);
  }
};
