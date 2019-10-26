<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import emptyLayout from "./layouts/emptyLayout";
import mainLayout from "./layouts/mainLayout";
export default {
  name: "app",
  components: {
    emptyLayout,
    mainLayout
  },

  computed: {
    layout() {
      return this.$route.meta.layout;
    },
    error() {
      return this.$store.getters.error;
    },
    massage() {
      return this.$store.getters.massage;
    }
  },

  watch: {
    error(data) {
      this.$message(data, "error");
      this.$store.commit("clearError");
    },
    massage(data) {
      this.$message(data);
      this.$store.commit("clearMessage");
    }
  }
};
</script>

<style lang="scss">
@import "assets/index.css";
</style>
