import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as fb from "firebase";

import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

import VueQuillEditor from "vue-quill-editor";

// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Vue.use(VueQuillEditor, {

  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      // ["blockquote", "code-block"],
      [{
        header: 1
      }, {
        header: 2
      }],
      [{
        list: "ordered"
      }, {
        list: "bullet"
      }],
      // [{ script: "sub" }, { script: "super" }],
      // [{ indent: "-1" }, { indent: "+1" }],
      // [{ direction: "rtl" }],
      [{
        size: ["small", false, "large", "huge"]
      }],
      [{
        header: [1, 2, 3, 4, 5, 6, false]
      }],
      // [{ font: [] }],
      [{
        color: []
      }, {
        background: []
      }]
      // [{ align: [] }],
      // ["clean"],
      // ["link", "image", "video"]
    ]
    // syntax: {
    //   highlight: text => hljs.highlightAuto(text).value
    // }
  }
});
// let optionsQuill =

// }
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyDs8Wqxf5K5eVnkP5XB_FtzeekD0D2MmMo",
      authDomain: "my-project-1501683622618.firebaseapp.com",
      databaseURL: "https://my-project-1501683622618.firebaseio.com",
      projectId: "my-project-1501683622618",
      storageBucket: "my-project-1501683622618.appspot.com",
      messagingSenderId: "1032386855643",
      appId: "1:1032386855643:web:2830c5d4de06b9ff"
    };

    fb.initializeApp(firebaseConfig);
  },
  render: h => h(App)
}).$mount("#app");