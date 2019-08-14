import fb from 'firebase/app';

export default {
  actions: {
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
  }
};
