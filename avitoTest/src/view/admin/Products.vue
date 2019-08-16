<template>
  <table class="table AdminProductList table-responsive-sm">
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
        <td>{{$store.getters.getSellerById(product.relationships.seller).name}}</td>
        <div class="AdminProductList__icons-wrapper">
          <td>
            <router-link :to="`/admin/edit/${product.id}`">
              <svg
                class="AdminProductList__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 469.33 469.33"
              >
                <path
                  d="M438.93 30.4c-40.4-40.5-106.1-40.5-146.5 0L23.83 298.9c-2.1 2.1-3.4 4.8-3.8 7.7L.13 454c-.6 4.2.9 8.4 3.8 11.3 2.5 2.5 6 4 9.5 4 .6 0 1.2 0 1.8-.1l88.8-12a13.52 13.52 0 1 0-3.6-26.8l-71.2 9.6 13.9-102.8 108.2 108.2a13.24 13.24 0 0 0 19 0l268.6-268.5c19.6-19.6 30.4-45.6 30.4-73.3s-10.8-53.7-30.4-73.2zm-141.3 33l45.1 45.1-245.1 245.1-45.1-45.1 245.1-245.1zm-136.7 353.4l-44.1-44.1 245.1-245.1 44.1 44.1-245.1 245.1zm263.9-264.4L316.93 44.5a76.38 76.38 0 0 1 48.8-17.5c20.5 0 39.7 8 54.2 22.4s22.4 33.7 22.4 54.2c0 18.1-6.2 35.1-17.5 48.8z"
                />
              </svg>
            </router-link>
          </td>
          <td>
            <svg
              class="AdminProductList__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 774.27 774.27"
              @click="removeProduct(product.id, index)"
            >
              <path
                d="M640.35 91.17H536.97V23.99c0-13.52-10.9-23.99-24.43-23.99-1.3 0-2.18.44-2.61.88a3.32 3.32 0 0 0-1.75-.88H261.72a23.65 23.65 0 0 0-23.99 24v67.17H133.92c-29.67 0-52.79 23.12-52.79 52.78v86.37h45.8v491.6c0 29.67 22.68 52.35 52.35 52.35h415.7c29.67 0 52.79-22.68 52.79-52.35v-491.6h45.36v-86.37c0-29.66-23.12-52.78-52.78-52.78zM285.71 47.98h202.84v43.19H285.71V47.98zm313.64 673.94c0 3.06-1.31 4.37-4.36 4.37h-415.7c-3.06 0-4.37-1.3-4.37-4.37v-491.6h424.43v491.6zm45.37-539.58H129.55v-38.39c0-3.05 1.31-4.8 4.37-4.8h506.43c3.05 0 4.37 1.75 4.37 4.8v38.39z"
              />
              <path
                d="M475.03 286.59h48.42v396.94h-48.42zM363.36 286.59h48.42v396.94h-48.42zM251.69 286.59h48.42v396.94h-48.42z"
              />
            </svg>
            <!-- <img
           
            class="AdminProductList__icon"
            src="../../assets/img/rubbish-bin.svg"
            alt
            />-->
          </td>
        </div>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      products: this.$store.state.products
    };
  },

  methods: {
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
  &__icons-wrapper {
    @media (max-width: 576px) {
    }
  }
}
</style>