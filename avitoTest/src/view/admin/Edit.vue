<template>
  <ProductForm :model="model" :isEditable="true" @saveProduct="editProduct"></ProductForm>
</template>

<script>
import ProductForm from "../../components/ProductForm";
export default {
  props: ["id"],
  data() {
    return {
      model: {}
    };
  },
  components: {
    ProductForm
  },
  created() {
    this.model = JSON.parse(
      JSON.stringify(this.$store.getters.getProductById(this.id))
    );
  },
  methods: {
    editProduct(model) {
      this.$store.dispatch("editProduct", model);
    }
  }
};
</script>
