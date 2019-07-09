<template>
  <div id="app">
    <div class="products">
      <div class="container">
        <div>
          <!-- <VueTrix v-model="editorContent" placeholder="Enter content" localStorage/>
          <div v-html="editorContent">
            
          </div>-->
        </div>
        <div class="titleTovar">
          <div class="container">
            <h2>Шубы в наличии</h2>
          </div>
        </div>
        <div class="products__wrapper">
          <Product
            @showpopUP="showpopUP"
            v-for="tovar in tovari.shibiVNalichii"
            :key="tovar.id"
            :objectTov="tovar"
          ></Product>
        </div>
        <div class="titleTovar">
          <div class="container">
            <h2>Шубы на заказ</h2>
          </div>
        </div>
        <div class="products__wrapper">
          <Product
            @showpopUP="showpopUP"
            v-for="tovar in tovari.shibiNaZaka"
            :key="tovar.id"
            :objectTov="tovar"
          ></Product>
        </div>
        <popUp @closepopUP="closepopUP" v-if="popupShowed" :popuptovar="popuptovar"></popUp>
        <!-- <div  class="product"> -->

        <!-- <div v-if="modalShowed" class="modal">

        </div>

        <div v-if="modalShowed" class="modalBg">

        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./components/product.vue";
import popUp from "./components/popUp.vue";
import { db } from "./db";
// import VueTrix from "vue-trix";
export default {
  name: "app",
  data() {
    return {
      tovari: {},
      popupShowed: false,
      popuptovar: null,
      editorContent: ""
    };
  },
  components: {
    Product,
    popUp
    // VueTrix
  },
  firebase: {
    tovari: db.ref().child("tovari")
  },
  methods: {
    showpopUP(tovar) {
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
      this.popupShowed = true;
      this.popuptovar = tovar;
    },
    closepopUP() {
      let body = document.querySelector("body");
      body.style.overflow = "auto";
      this.popupShowed = false;
    }
  }
};
</script>

<style>
</style>
