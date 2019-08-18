<template>
  <div id="app">
    <div v-for="(group, key) of tovarGroup" :key="key">
      <div :id="key" class="container">
        <div class="titleTovar">
          <h2>{{group}}</h2>
        </div>
      </div>

      <div class="products">
        <div class="container">
          <div class="products__wrapper">
            <Product
              @showpopUP="showpopUP"
              v-for="tovar in tovari[key]"
              :key="tovar.id"
              :objectTov="tovar"
            ></Product>
          </div>
        </div>
      </div>
    </div>

    <transition name="modal">
      <popUp @closepopUP="closepopUP" v-if="popupShowed" :popuptovar="popuptovar"></popUp>
    </transition>
    <!-- <div  class="product"> -->

    <!-- <div v-if="modalShowed" class="modal">

        </div>

        <div v-if="modalShowed" class="modalBg">

    </div>-->
  </div>
</template>

<script>
import Product from "./components/product.vue";
import popUp from "./components/popUp.vue";

import fb from "firebase/app";

export default {
  name: "app",
  data() {
    return {
      tovari: {},
      tovarGroup: {},
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

  created() {
    fb.database()
      .ref()
      .child("tovari")
      .once("value")
      .then(snapshot => {
        this.tovari = snapshot.val();
      });

    fb.database()
      .ref()
      .child("tovarGroup")
      .once("value")
      .then(snapshot => {
        this.tovarGroup = snapshot.val();
      });
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
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active {
  transition: opacity ease-in-out 0.2s;
  animation: ride-in 0.5s;
}
.modal-leave-active {
  transition: opacity ease-in-out 0.2s;
  animation: ride-in 0.5s reverse;
}
@keyframes ride-in {
  0% {
    opacity: 0;

    transform: translateY(1000px) scale(0.5);
  }
  /* 50% {
    transform: translateY(-500px);
  } */
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

/* 
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */
</style>
