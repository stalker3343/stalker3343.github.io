export default {
  getSellerById: state => id => {
    return state.sellers.find(el => el.id === id);
  },
  getProductById: state => id => {
    return state.products.find(el => el.id === id);
  }
};
