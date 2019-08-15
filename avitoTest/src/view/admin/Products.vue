<template>
  <table class="table AdminProductList">
    <thead>
      <tr>
        <th scope="col">Название</th>
        <th scope="col">Цена</th>
        <th scope="col">Производитель</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="product.id">
        <td>{{product.title}}</td>
        <td>{{product.price}}</td>
        <td>{{findSalers(product.relationships.seller).name}}</td>
        <td>
          <router-link :to="`/admin/edit/${product.id}`">
            <img class="AdminProductList__icon" src="./../../assets/img/edit.svg" alt />
          </router-link>
        </td>
        <td>
          <img
            @click="removeProduct(product.id, index)"
            class="AdminProductList__icon"
            src="./../../assets/img/rubbish-bin.svg"
            alt
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      products: this.$store.state.products,
      sellers: this.$store.state.sellers
    };
  },
  methods: {
    findSalers(id) {
      return this.sellers.find(el => el.id == id);
    },
    removeProduct(productId, productIndex) {
      this.$store.dispatch("removeProduct", { productId, productIndex });
    }
  }
};
</script>
<style lang="scss">
.AdminProductList {
  &__icon {
    width: 20px;
    cursor: pointer;
  }
}
</style>