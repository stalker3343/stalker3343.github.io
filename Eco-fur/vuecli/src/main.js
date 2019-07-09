import Vue from 'vue'
import App from './App.vue'
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
Vue.use(Viewer);
// import "vue-trix";

// import imageViewer from "vue-image-viewer";

// Vue.use(imageViewer);

import {
  rtdbPlugin
} from 'vuefire'

Vue.use(rtdbPlugin)



Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  created() {

  }
})