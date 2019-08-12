
<template>
  <router-link :to="`product/${product.id}`" class="product">
    <b-card
      class="mb-4 product__card"
      :img-src="product.pictures[0]"
      img-top
      tag="article"
      style="max-width: 22rem;"
    >
      <b-card-text class="product__body">
        <div class="product__col-photo">{{ product.pictures.length }}</div>
        <div class="product__title-wrap">
          <h4>{{ product.title }}</h4>
        </div>

        <div class="product__price mt-3 mb-3">
          <div v-show="product.price">{{ product.price | capitalize }}</div>
          <b-button
            @click="togleCard"
            href="#"
            :variant="isInCard ? 'danger' : 'primary' "
          >{{btnText}}</b-button>
        </div>

        <div class="product__salers salers mt-1">
          <div class="salers__name">{{ salers.name }}</div>
          <div class="salers__rating">{{ salers.rating }}</div>
        </div>
      </b-card-text>
    </b-card>
  </router-link>
</template>
<script>
export default {
  filters: {
    capitalize(value) {
      if (value) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  },
  props: ["product", "salers"],
  data() {
    return {
      isInCard: false,
      btnText: "В корзину"
    };
  },
  mounted() {
    if (this.$store.state.cartItems.includes(this.product)) {
      this.isInCard = true;
      this.btnText = "Убрать из корзины";
    } else {
      this.isInCard = false;
      this.btnText = "В корзину";
    }
  },
  methods: {
    togleCard() {
      if (this.isInCard) {
        this.btnText = "В корзину";
        this.isInCard = false;
        this.$store.commit("removeCartItem", this.product.id);
      } else {
        this.btnText = "Убрать из корзины";
        this.isInCard = true;
        this.$store.commit("addCartItem", this.product.id);
      }
    }
  }
};
</script>
<style lang="scss">
.product {
  color: black;
  text-decoration: none;

  &:hover {
    color: black;
    text-decoration: none;
  }
}
.product__card {
  transition: all 0.1s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
  }
}
.product__title-wrap {
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product__img-wrapper {
  position: relative;
}

.product__col-photo {
  position: absolute;
  padding: 10px;
  border-radius: 5px;
  top: 294px;
  left: 5px;
  background: rgba(255, 255, 255, 0.932);
}
.product__salers {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product__price {
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;
}
</style>
