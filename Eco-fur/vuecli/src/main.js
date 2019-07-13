import Vue from 'vue'
import App from './App.vue'


import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

import {
  rtdbPlugin
} from 'vuefire'
Vue.use(rtdbPlugin)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})