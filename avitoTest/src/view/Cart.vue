<template>
  <div class="container">
    <div
      v-if="loading"
      style="width: 90vw; height: 80vh;"
      class="d-flex justify-content-center align-items-center"
    >
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" />
    </div>
    <div class="products__wrapper" v-else>
      <ProductPreview
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :product="cartItem"
        :salers="findSalers(cartItem.relationships.seller)"
      ></ProductPreview>
    </div>
  </div>
</template>

<script>
import ProductPreview from "../components/ProductPreview";
export default {
  components: {
    ProductPreview
  },
  data() {
    return {};
  },
  methods: {
    findSalers(id) {
      return this.sellers.find(el => el.id == id);
    }
  },
  computed: {
    loading() {
      return this.$store.state.Common.loading;
    },
    cartItems() {
      return this.$store.state.cartItems;
    },
    sellers() {
      return this.$store.state.sellers;
    }
  }
};
</script>