<template>
  <section class="options-block pt-4 pb-4">
    <b-container>
      <div class="options-block__header pb-1">Отфильтровать по:</div>
      <b-row class="options-block__options-wrap">
        <!-- Категории -->

        <b-col lg="3" class="filter mb-3 mb-md-0">
          <div class="filter__header">Категории:</div>
          <div class="filter__controls">
            <b-form-select
              v-model="categ"
              class="filter__select"
              name="categoris"
              @change="changeKateg"
            >
              <option value>Все категории</option>
              <option value="immovable">Недвижимость</option>
              <option value="cameras">Камеры</option>
              <option value="auto">Автомобили</option>
              <option value="laptops">Ноутбуки</option>
            </b-form-select>
          </div>
        </b-col>

        <!-- ЦЕНА -->

        <b-col lg="4" class="filter mb-3 mb-md-0">
          <div class="filter__header">Цена:</div>
          <div class="filter__controls filter-price">
            <div class="filter-price__block">
              <span>c</span>
              <b-form-input
                v-model.trim.number="beginPrice"
                type="number"
                class="filter-price__input ml-2"
                @input="changePrice"
              />
            </div>
            <div class="filter-price__block">
              <span>по</span>
              <b-form-input
                v-model.trim.number="endPrice"
                type="number"
                class="filter-price__input ml-2"
                @input="changePrice"
              />
            </div>
          </div>
        </b-col>

        <!-- ИЗБРАННЫЕ -->

        <b-col lg="5" class="filter mb-3 mb-md-0">
          <div class="filter__header">Корзина:</div>
          <div class="filter__controls">
            <div>Показать только корзину:</div>
            <b-form-checkbox
              v-model="showCartItems"
              class="filter__chekbox ml-2"
              @change="changeCartItems"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { getMaxPrice, getMinPrice } from "../modules/functions";

export default {
  data() {
    return {
      categ: "",
      beginPrice: 0,
      endPrice: 0,
      showCartItems: false,
      products: this.$store.state.products
    };
  },
  mounted() {
    this.beginPrice = getMinPrice(this.products);
    this.endPrice = getMaxPrice(this.products);
    const begprice = this.beginPrice;
    const { endPrice } = this;
    this.$emit("changePrice", { begprice, endPrice });
  },
  methods: {
    changeKateg() {
      this.$emit("changeKateg", this.categ);
      // хард ресет цен в инпутах
      // передаём массив отфильтрованный ТОЛЬКО по категориии
      const categFileredMass = this.products.filter(
        el => !this.categ || el.category == this.categ
      );

      this.beginPrice = getMinPrice(categFileredMass);
      this.endPrice = getMaxPrice(categFileredMass);
      this.changePrice();
    },
    changePrice() {
      this.$emit("changePrice", {
        begprice: this.beginPrice,
        endPrice: this.endPrice
      });
    },

    changeCartItems() {
      this.$emit("changeCartItems", !this.showCartItems);
      if (!this.showCartItems) {
        this.beginPrice = getMinPrice(this.$store.state.cartItems);
        this.endPrice = getMaxPrice(this.$store.state.cartItems);
        this.changePrice();
      } else {
        const categFileredMass = this.products.filter(
          el => !this.categ || el.category == this.categ
        );

        this.beginPrice = getMinPrice(categFileredMass);
        this.endPrice = getMaxPrice(categFileredMass);
        this.changePrice();
      }
    }
  }
};
</script>
