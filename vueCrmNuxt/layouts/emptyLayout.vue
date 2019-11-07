<template>
  <div class="bg-dark">
    <b-container>
      <b-row class="mb-0" style="height: 100vh;" align-v="center" align-h="center">
        <div class="formClass">
          <nuxt />
        </div>
      </b-row>
    </b-container>
  </div>

  <!-- <div class="grey darken-1 empty-layout"> -->

  <!-- </div> -->
</template>

<script>
export default {
  computed: {
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
      this.$store.commit("clearError", null, { root: true });
    },
    massage(data) {
      this.$message(data);
      this.$store.commit("clearMessage", null, { root: true });
    }
  }
};
</script>
<style >
.formClass {
  width: 100%;
  max-width: 450px;
}
</style>