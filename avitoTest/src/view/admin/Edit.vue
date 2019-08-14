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
    this.model = this.$store.state.products.find(el => el.id === this.id);
  },
  methods: {
    editProduct(model) {
      this.$store.dispatch("editProduct", model);
    }
  }
};
</script>
