<template>
  <div id="app">
    <Header></Header>

    <div
      style="width: 95vw; height: 80vh;"
      v-if="loading"
      class="d-flex justify-content-center align-items-center"
    >
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>

    <main v-else>
      <Filters @changeKateg="changeCateg" @changePrice="changePrice" @changeFav="changeFav"></Filters>

      <Sorts @changeDirectionSort="changeDirectionSort" @changeTypeSort="changeTypeSort"></Sorts>

      <section class="pt-4 pb-4">
        <b-container class="container">
          <h1>Товаров: {{productFiltered.length}}</h1>
        </b-container>
      </section>

      <section class="products">
        <div class="container products__wrapper">
          <Product
            v-for="product in collection"
            :key="product.id"
            :product="product"
            :salers="findSalers(product.relationships.seller)"
          ></Product>
        </div>
        <div class="container">
          <div class="btn-toolbar d-flex justify-content-center mb-5">
            <div class="btn-group">
              <button
                class="btn btn-primary"
                v-for="p in pagination.pages"
                :key="p"
                @click.prevent="setPage(p)"
              >{{p}}</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Product from "./components/Product";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Sorts from "./components/Sorts";

import slice from "lodash.slice";
import range from "lodash.range";

export default {
  components: {
    Product,
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
  created() {
    this.$store.dispatch("loadProducts").then(() => {
      this.productsShowed = this.$store.state.products;
    });
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
    changeFav(value) {
      if (value) {
        this.productsShowed = this.favorites;
      } else {
        this.productsShowed = this.$store.state.products;
      }
    },
    findSalers(id) {
      return this.sellers.find(el => {
        return el.id == id;
      });
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
      const startIndex = (currentPage - 1) * this.perPage,
        endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
      return {
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: range(1, Math.ceil(totalItems / this.perPage) + 1)
      };
    }
  },
  watch: {
    productFiltered: function() {
      this.setPage(1);
    }
  },

  computed: {
    loading() {
      return this.$store.state.Common.loading;
    },
    sellers() {
      return this.$store.state.sellers;
    },
    favorites() {
      return this.$store.state.favorites;
    },
    productFiltered() {
      return (
        this.productsShowed
          // фильтр по категории
          .filter(el => {
            return !this.categ || el.category == this.categ;
          })
          // фильтр по ценам
          .filter(product => {
            if (!product.price) return true;
            return (
              Number(product.price) >= this.beginPrice &&
              Number(product.price) <= this.endPrice
            );
          })
          //сотрировка
          .sort((lastOne, nextOne) => {
            //по рейтингу
            if (this.typeSort == "rating") {
              console.log(lastOne.relationships.seller);

              const ratePrev = this.findSalers(lastOne.relationships.seller)
                .rating;
              const reteNext = this.findSalers(nextOne.relationships.seller)
                .rating;
              if (this.directionSort == "up") {
                return ratePrev > reteNext ? 1 : -1;
              } else {
                return ratePrev < reteNext ? 1 : -1;
              }
              //по цене
            } else if (this.typeSort == "price") {
              const pricePrev = lastOne.price;
              const priceNext = nextOne.price;
              if (this.directionSort == "up") {
                return pricePrev > priceNext ? 1 : -1;
              } else {
                return pricePrev < priceNext ? 1 : -1;
              }
            }
          })
      );
    },
    collection() {
      return this.paginate(this.productFiltered);
    }
  }
};
</script>


<style lang="scss">
img {
  width: 100%;
}
.header {
  background: rgb(228, 228, 228);
  &__logo {
    font-weight: 700;
    font-size: 50px;
  }
  &__favourite {
    width: 30px;
  }
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
