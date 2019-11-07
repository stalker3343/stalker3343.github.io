import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBkeYggIjbtPAbsPhJTBjsS1j4wk2PwZ5A",
  authDomain: "vuecrm-551d1.firebaseapp.com",
  databaseURL: "https://vuecrm-551d1.firebaseio.com",
  projectId: "vuecrm-551d1",
  storageBucket: "vuecrm-551d1.appspot.com",
  messagingSenderId: "496915348373",
  appId: "1:496915348373:web:7d878d3c3f1572634c949c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});

// import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
// Vue.component("ValidationProvider", ValidationProvider);
// Vue.component("ValidationObserver", ValidationObserver);
// import ru from "vee-validate/dist/locale/ru";
// import { required, email, max, min, min_value, numeric, regex } from "vee-validate/dist/rules";

// extend("required", {
//   ...required,
//   message: ru.messages["required"] // add its message
// });

// extend("email", {
//   ...email,
//   message: ru.messages["email"] // add its message
// });

// extend("max", {
//   ...max,
//   message: ru.messages["max"] // add its message
// });

// extend("min_value", {
//   ...min_value,
//   message: ru.messages["min_value"] // add its message
// });
// extend("numeric", {
//   ...numeric,
//   message: ru.messages["numeric"] // add its message
// });
// extend("min", {
//   ...min,
//   message: ru.messages["min"] // add its message
// });
// extend("regex", {
//   ...regex,
//   message: ru.messages["regex"] // add its message
// });

// import Loader from "./components/app/Loader.vue";
// Vue.component("Loader", Loader);
// import "./registerServiceWorker";

Vue.config.productionTip = false;

// import dateTimeFilter from "./filters/dateTime.filter";
// import currency from "./filters/currency.filter";
// Vue.filter("date", dateTimeFilter);
// Vue.filter("currency", currency);

// import messagePlugin from "./plugins/message.plugin";
// Vue.use(messagePlugin);
