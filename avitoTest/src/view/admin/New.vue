<template>
  <ProductForm :model="model" @saveProduct="addProduct"></ProductForm>
</template>

<script>
import ProductForm from "../../components/ProductForm";
export default {
  data() {
    return {
      model: {
        title: "",
        price: "",
        relationships: {
          seller: "0"
        },
        pictures: [""],
        category: "immovable"
      }
    };
  },
  components: {
    ProductForm
  },
  methods: {
    addProduct(model) {
      this.$store.dispatch("addProduct", model);
    }
  }
};
</script>


