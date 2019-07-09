<template>
  <div @click="showpopUP" class="product">
    <div v-if="tovar.priceOld " class="sale">sale</div>
    <div @mouseout="showFirsImg" @mouseover="showSecondImg" class="product__img">
      <div
        :class="{showed: !showBeck}"
        :style="{backgroundImage: 'url('+objectTov.roads[0] +')',backgroundSize: 'cover', backgroundPosition: 'center'  }"
      ></div>
      <div
        :class="{showed: showBeck}"
        :style="{backgroundImage: 'url('+objectTov.roads[1] +')', backgroundSize: 'cover', backgroundPosition: 'center' }"
      ></div>
    </div>
    <div class="product__descr">
      <div class="product__title">{{objectTov.title}}</div>
      <div class="product__price">
        <div class="product__price-new">{{objectTov.priceNew}}р.</div>
        <div v-if="tovar.priceOld " class="product__price-old">{{objectTov.priceOld}}</div>
      </div>
      <div @click="showpopUP" class="button product__button">Подробнее</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["objectTov"],
  data() {
    return {
      tovar: this.objectTov,
      showBeck: false
    };
  },
  methods: {
    showSecondImg: function(e) {
      e.target
        .closest(".product__img")
        .firstElementChild.classList.remove("showed");
      e.target
        .closest(".product__img")
        .lastElementChild.classList.add("showed");
    },
    showFirsImg: function(e) {
      e.target
        .closest(".product__img")
        .firstElementChild.classList.add("showed");
      e.target
        .closest(".product__img")
        .lastElementChild.classList.remove("showed");
    },
    showpopUP() {
      this.$emit("showpopUP", this.tovar);
    }
  }
};
</script>
<style>
.product {
  cursor: pointer;
  position: relative;
}
.product__price {
  display: flex;
}

.sale {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ffffff;
  background-color: #ff4a4a;

  font-weight: normal;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "FuturaPT", Arial, sans-serif;
  text-transform: uppercase;
  width: 50px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50px;

  box-sizing: border-box;
  padding: 0px 10px;
  z-index: 2;
}
.product__price-old {
  color: #adadad;
  font-size: 22px;
  font-weight: 600;
  margin-left: 20px;
  display: flex;
  text-decoration: line-through;
}
.product__price-old:after {
  content: "р.";
  display: block;
}
</style>




