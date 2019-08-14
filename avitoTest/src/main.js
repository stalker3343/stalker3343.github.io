import Vue from 'vue';
import {
  LayoutPlugin,
  FormInputPlugin,
  FormSelectPlugin,
  FormCheckboxPlugin,
  CardPlugin,
  SpinnerPlugin,
  ButtonPlugin
} from 'bootstrap-vue';
import fb from 'firebase/app';
import VeeValidate from 'vee-validate';
import router from './router';
import App from './App.vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBeNpQ39ItfYR-Xl3khSb_ntYeVTSWfN10',
  authDomain: 'vue-store-d97e4.firebaseapp.com',
  databaseURL: 'https://vue-store-d97e4.firebaseio.com',
  projectId: 'vue-store-d97e4',
  storageBucket: '',
  messagingSenderId: '37910663680',
  appId: '1:37910663680:web:dfbc7b3897d5fd14'
};
// Initialize Firebase
fb.initializeApp(firebaseConfig);

const config = {
  events: 'blur|input'
};

Vue.use(LayoutPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormSelectPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(CardPlugin);
Vue.use(SpinnerPlugin);
Vue.use(ButtonPlugin);
Vue.use(VeeValidate, config);

Vue.config.productionTip = false;

new Vue({
  created() {
    this.$store.dispatch('loadProducts');

    // .then(() => {
    //   this.productsShowed = this.$store.state.products;
    // });
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app');
