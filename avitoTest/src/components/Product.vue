<template>
  <b-card
    class="mb-4"
    :img-src="product.pictures[0]"
    img-top
    tag="article"
    style="max-width: 22rem;"
  >
    <b-card-text class="product__body">
      <div class="product__col-photo">{{product.pictures.length}}</div>
      <div class="product__title-wrap">
        <h4>{{product.title}}</h4>
        <div
          @click="togleFavourite"
          class="product__heart"
          :class="{ 'product__heart-favourite': isFavourite }"
        >
          <svg viewBox="0 -28 512 512" xmlns="http://www.w3.org/2000/svg">
            <path :d="svg" />
          </svg>
        </div>
      </div>

      <div class="product__price">{{ product.price | capitalize }}</div>

      <div class="product__salers salers mt-1">
        <div class="salers__name">{{ salers.name }}</div>
        <div class="salers__rating">{{ salers.rating }}</div>
      </div>
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  name: "Product",
  props: ["product", "salers"],
  data() {
    return {
      isFavourite: false,
      svg:
        "M256 456c-7 0-14-3-20-8l-58-50c-52-44-96-82-127-119-35-42-51-82-51-125 0-42 14-81 41-109C67 16 103 0 143 0c30 0 57 9 80 28 13 9 23 20 33 34 10-14 21-25 33-34 23-19 50-28 80-28 40 0 76 16 102 45 27 28 41 67 41 109 0 43-16 83-51 125-31 37-75 75-127 119l-58 50c-6 5-13 8-20 8zM143 30c-31 0-60 12-80 35-21 23-33 54-33 89 0 36 14 69 44 105 29 36 73 73 123 116l59 51 59-51c50-43 94-80 123-116 30-36 44-69 44-105 0-35-12-66-33-89-20-23-49-35-80-35-23 0-44 7-62 21-17 13-28 29-35 41-3 5-9 9-16 9s-13-4-16-9c-7-12-18-28-35-41a99 99 0 0 0-62-21zm0 0"
    };
  },

  filters: {
    capitalize: function(value) {
      if (value) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  },
  methods: {
    togleFavourite() {
      if (this.isFavourite) {
        this.svg =
          "M256 456c-7 0-14-3-20-8l-58-50c-52-44-96-82-127-119-35-42-51-82-51-125 0-42 14-81 41-109C67 16 103 0 143 0c30 0 57 9 80 28 13 9 23 20 33 34 10-14 21-25 33-34 23-19 50-28 80-28 40 0 76 16 102 45 27 28 41 67 41 109 0 43-16 83-51 125-31 37-75 75-127 119l-58 50c-6 5-13 8-20 8zM143 30c-31 0-60 12-80 35-21 23-33 54-33 89 0 36 14 69 44 105 29 36 73 73 123 116l59 51 59-51c50-43 94-80 123-116 30-36 44-69 44-105 0-35-12-66-33-89-20-23-49-35-80-35-23 0-44 7-62 21-17 13-28 29-35 41-3 5-9 9-16 9s-13-4-16-9c-7-12-18-28-35-41a99 99 0 0 0-62-21zm0 0";
        this.isFavourite = false;
        this.$store.commit("removeFavourites", this.product.id);
      } else {
        this.svg =
          "M255 490l-36-36C87 337 0 258 0 161 0 82 61 20 140 20c44 0 87 21 115 54 28-33 71-54 115-54 79 0 140 62 140 141 0 97-87 176-219 293l-36 36z";
        this.isFavourite = true;
        this.$store.commit("addFavourites", this.product.id);
      }
    }
  },
  mounted() {
    if (this.$store.state.favorites.includes(this.product)) {
      this.isFavourite = true;
      this.svg =
        "M255 490l-36-36C87 337 0 258 0 161 0 82 61 20 140 20c44 0 87 21 115 54 28-33 71-54 115-54 79 0 140 62 140 141 0 97-87 176-219 293l-36 36z";
    } else {
      this.isFavourite = false;
      this.svg =
        "M256 456c-7 0-14-3-20-8l-58-50c-52-44-96-82-127-119-35-42-51-82-51-125 0-42 14-81 41-109C67 16 103 0 143 0c30 0 57 9 80 28 13 9 23 20 33 34 10-14 21-25 33-34 23-19 50-28 80-28 40 0 76 16 102 45 27 28 41 67 41 109 0 43-16 83-51 125-31 37-75 75-127 119l-58 50c-6 5-13 8-20 8zM143 30c-31 0-60 12-80 35-21 23-33 54-33 89 0 36 14 69 44 105 29 36 73 73 123 116l59 51 59-51c50-43 94-80 123-116 30-36 44-69 44-105 0-35-12-66-33-89-20-23-49-35-80-35-23 0-44 7-62 21-17 13-28 29-35 41-3 5-9 9-16 9s-13-4-16-9c-7-12-18-28-35-41a99 99 0 0 0-62-21zm0 0";
    }
  }

};
</script>
<style lang="scss">

.product__title-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product__heart {
  cursor: pointer;
  flex: none;
  width: 30px;
  &:hover {
    fill: red;
  }
  &-favourite {
    fill: red;
  }
  @media (max-width: 900px) {
    &:hover {
      fill: black;
    }
  }
}

.product__svg {
  width: 100%;
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
  font-size: 30px;
  font-weight: 700;
}
</style>


