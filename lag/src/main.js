import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import en from "vee-validate/dist/locale/en";
import { required, email, max, min, min_value, numeric, regex } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: en.messages["required"] // add its message
});

extend("email", {
  ...email,
  message: en.messages["email"] // add its message
});

extend("max", {
  ...max,
  message: en.messages["max"] // add its message
});

extend("min_value", {
  ...min_value,
  message: en.messages["min_value"] // add its message
});
extend("numeric", {
  ...numeric,
  message: en.messages["numeric"] // add its message
});
extend("min", {
  ...min,
  message: en.messages["min"] // add its message
});
extend("regex", {
  ...regex,
  message: en.messages["regex"] // add its message
});

// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
