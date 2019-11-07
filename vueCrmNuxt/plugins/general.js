import Vue from "vue";

import Loader from "@/components/app/Loader.vue";
Vue.component("Loader", Loader);

import dateTimeFilter from "./filters/dateTime.filter";
import currency from "./filters/currency.filter";
Vue.filter("date", dateTimeFilter);
Vue.filter("currency", currency);

import messagePlugin from "@/plugins/message.plugin";
Vue.use(messagePlugin);

import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
import ru from "vee-validate/dist/locale/ru";
import {
  required,
  email,
  max,
  min,
  min_value,
  numeric,
  regex,
  max_value
} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: ru.messages["required"] // add its message
});

extend("email", {
  ...email,
  message: ru.messages["email"] // add its message
});

extend("max", {
  ...max,
  message: ru.messages["max"] // add its message
});

extend("min_value", {
  ...min_value,
  message: ru.messages["min_value"] // add its message
});
extend("max_value", {
  ...max_value,
  message: ru.messages["max_value"] // add its message
});
extend("numeric", {
  ...numeric,
  message: ru.messages["numeric"] // add its message
});
extend("min", {
  ...min,
  message: ru.messages["min"] // add its message
});
extend("regex", {
  ...regex,
  message: ru.messages["regex"] // add its message
});
