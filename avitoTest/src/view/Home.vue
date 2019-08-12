<template>
  <div
    v-if="loading"
    style="width: 95vw; height: 80vh;"
    class="d-flex justify-content-center align-items-center"
  >
    <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" />
  </div>
  <main v-else>
    <Filters
      @changeKateg="changeCateg"
      @changePrice="changePrice"
      @changeCartItems="changeCartItems"
    />

    <Sorts @changeDirectionSort="changeDirectionSort" @changeTypeSort="changeTypeSort" />

    <section class="pt-4 pb-4">
      <b-container class="container">
        <h1>Товаров: {{ productFiltered.length }}</h1>
      </b-container>
    </section>

    <section class="products">
      <div class="container products__wrapper">
        <ProductPreview
          v-for="product in collection"
          :key="product.id"
          :product="product"
          :salers="findSalers(product.relationships.seller)"
        />
      </div>

      <div class="container">
        <div class="btn-toolbar d-flex justify-content-center mb-5">
          <div class="btn-group">
            <button
              v-for="p in pagination.pages"
              :key="p"
              class="btn btn-primary"
              @click.prevent="setPage(p)"
            >{{ p }}</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import slice from "lodash.slice";
import range from "lodash.range";

import ProductPreview from "../components/ProductPreview";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Sorts from "../components/Sorts";

import { productFiltered } from "../modules/functions";

export default {
  components: {
    ProductPreview,
    Header,
    Filters,
    Sorts
  },
  data() {
    return {
      productsShowed: [],
      categ: "",
      beginPrice: 0,
      endPrice: 0,
      typeSort: "price",
      directionSort: "down",
      perPage: 10,
      pagination: {}
    };
  },

  computed: {
    loading() {
      return this.$store.state.Common.loading;
    },
    sellers() {
      return this.$store.state.sellers;
    },
    cartItems() {
      return this.$store.state.cartItems;
    },
    productFiltered() {
      return productFiltered(
        this.productsShowed,
        this.categ,
        this.beginPrice,
        this.endPrice,
        this.typeSort,
        this.findSalers,
        this.directionSort
      );
    },
    collection() {
      return this.paginate(this.productFiltered);
    }
  },

  watch: {
    productFiltered() {
      this.setPage(1);
    }
  },
  created() {
    this.productsShowed = this.$store.state.products;
  },
  methods: {
    changePrice({ begprice, endPrice }) {
      this.beginPrice = begprice;
      this.endPrice = endPrice;
    },
    changeCateg(categName) {
      this.categ = categName;
    },
    changeDirectionSort(value) {
      this.directionSort = value;
    },
    changeTypeSort(value) {
      this.typeSort = value;
    },
    changeCartItems(value) {
      if (value) {
        this.productsShowed = this.cartItems;
      } else {
        this.productsShowed = this.$store.state.products;
      }
    },
    findSalers(id) {
      return this.sellers.find(el => el.id == id);
    },

    setPage(p) {
      this.pagination = this.paginator(this.productFiltered.length, p);
    },
    paginate(data) {
      return slice(
        this.productFiltered,
        this.pagination.startIndex,
        this.pagination.endIndex + 1
      );
    },
    paginator(totalItems, currentPage) {
      const startIndex = (currentPage - 1) * this.perPage;
      const endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
      return {
        currentPage,
        startIndex,
        endIndex,
        pages: range(1, Math.ceil(totalItems / this.perPage) + 1)
      };
    }
  }
};
</script>
