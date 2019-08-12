<template>
  <div id="app">
    <Header />
    <div
      v-if="loading"
      style="width: 95vw; height: 80vh;"
      class="d-flex justify-content-center align-items-center"
    >
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" />
    </div>

    <router-view v-else></router-view>

    <footer>
      <div class="container d-flex justify-content-center">
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >CC 3.0 BY</a>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  },
  computed: {
    loading() {
      return this.$store.state.Common.loading;
    }
  }
};
</script>


<style lang="scss">
img {
  width: 100%;
}

.options-block {
  &__header {
    font-weight: 500;
    font-size: 20px;
  }
  &__options-wrap {
    flex-wrap: wrap;
    display: flex;
  }
}

.filter {
  &__header {
    font-weight: 600;
    font-size: 15px;
  }
  &__controls {
    display: flex;
    flex-direction: row;
  }
}

.filter-price {
  display: flex;
  justify-content: space-between;
  &__block {
    display: flex;
    align-items: center;
    width: 160px;
  }
}

.products__wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
