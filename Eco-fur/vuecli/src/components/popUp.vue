<template>
  <div @click.self="$emit('closepopUP')" class="modalBg">
    <div class="modal">
      <div class="modal__images">
        <!-- <carousel :starting-image="0" :images="images"></carousel> -->

        <!-- swiper1 -->

        <swiper v-viewer :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide v-for="img in tovar.roads" :key="img">
            <img :src="img" alt />
          </swiper-slide>
          <!-- <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>-->
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="img in tovar.roads" :key="img">
            <img :src="img" alt />
          </swiper-slide>
          <!-- <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>-->
        </swiper>
        <!-- <viewer :images="images"> -->
        <!-- <img v-for="src in images" :src="src.thumb" :key="src.thumb"> -->
        <!-- </viewer> -->
        <!-- <img v-for="(item,index) in images" :key="index" :src="item.url" @click="imageView(index)"> -->
      </div>
      <div class="modal__descr">
        <h3 class="modal__title">{{tovar.title}}</h3>
        <div class="product__price">
          <div class="product__price-new">{{tovar.priceNew}}р.</div>
          <div v-if="tovar.priceOld " class="product__price-old">{{tovar.priceOld}}</div>
        </div>
        <div v-html="tovar.deskr" class="modal__text"></div>
      </div>

      <span @click.self="$emit('closepopUP')" class="close">&times;</span>
    </div>
  </div>
</template>
<script>
// import "swiper/dist/css/swiper.css";

// import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: ["popuptovar"],
  // created() {
  //   this.$imageViewer.images(this.images);
  // },
  methods: {
    // imageView(index) {
    //   this.$imageViewer.index(index);
    //   this.$imageViewer.show();
    // }
  },
  data() {
    return {
      tovar: this.popuptovar,
      images: [],
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  // created: function() {
  //   for (let i = 0; i < this.popuptovar.road.length; i++) {
  //     let obg = function(thumb) {
  //       return {
  //         thumb
  //       };
  //     };
  //     this.images.push(obg(this.popuptovar.road[i]));
  //   }
  // },
  computed: {
    // images: function() {
    //
    // }
  }

  // components: {
  //   swiper,
  //   swiperSlide
  // }
};
</script>

<style >
.modal__text {
  display: block;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.55;
}
.modal__text p {
  margin-bottom: 0px;
}
.modal__text ul {
  padding-left: 19px;
  margin-bottom: 0px;
}
.modal__descr {
  padding: 0px 25px;
}
.modal__title {
  font-family: "FuturaPT", Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 20px;
  margin-bottom: 20px;
}

.close {
  color: rgb(0, 0, 0);
  float: right;
  font-size: 55px;
  position: absolute;
  right: 11px;
  top: -4px;
  cursor: pointer;
  z-index: 20;
}
.modalBg {
  transition: all 2s;
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); */
  z-index: 10;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;

  -webkit-transition: opacity ease-in-out 0.3s;
  -moz-transition: opacity ease-in-out 0.3s;
  -o-transition: opacity ease-in-out 0.3s;
  transition: opacity ease-in-out 0.3s;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0 20px;

  background-color: rgba(0, 0, 0, 0.9);
  /* z-index: 9999999;
display: none; */
}

.modal {
  cursor: default;
  overflow: hidden;
  display: flex;
  background: white;

  margin: 65px auto;
  padding: 35px;
  max-width: 1240px;
  top: 0;
  position: relative;
  left: auto;
  right: auto;
  width: 100%;
  /* -moz-transform: translateY(30%) scale(0.9);
  -ms-transform: translateY(30%) scale(0.9);
  -webkit-transform: translateY(30%) scale(0.9);
  -o-transform: translateY(30%) scale(0.9);
  transform: translateY(30%) scale(0.9); */
}
.modal__images {
  width: 560px;
  flex: none;
}

.gallery-thumbs {
  height: 22% !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
.gallery-top {
  cursor: zoom-in;
  height: 78% !important;
  width: 100%;
}
</style>



