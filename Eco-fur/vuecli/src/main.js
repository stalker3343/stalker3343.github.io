import Vue from "vue";
import App from "./App.vue";

import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default global options } */);

// This import loads the firebase namespace along with all its type information.
import fb from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDs8Wqxf5K5eVnkP5XB_FtzeekD0D2MmMo",
  authDomain: "my-project-1501683622618.firebaseapp.com",
  databaseURL: "https://my-project-1501683622618.firebaseio.com",
  projectId: "my-project-1501683622618",
  storageBucket: "my-project-1501683622618.appspot.com",
  messagingSenderId: "1032386855643",
  appId: "1:1032386855643:web:2830c5d4de06b9ff"
};
// Initialize Firebase
fb.initializeApp(firebaseConfig);

// import {
//   rtdbPlugin
// } from 'vuefire'
// Vue.use(rtdbPlugin)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App)
});
