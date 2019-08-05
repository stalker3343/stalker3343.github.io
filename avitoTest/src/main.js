import Vue from 'vue';
import App from './App.vue';

// import BootstrapVue from 'bootstrap-vue';
// import { BModal, VBModal } from 'bootstrap-vue';
import { LayoutPlugin } from 'bootstrap-vue';
Vue.use(LayoutPlugin);

import { FormInputPlugin } from 'bootstrap-vue';
Vue.use(FormInputPlugin);
import { FormSelectPlugin } from 'bootstrap-vue';
Vue.use(FormSelectPlugin);
import { FormCheckboxPlugin } from 'bootstrap-vue';
Vue.use(FormCheckboxPlugin);
import { CardPlugin } from 'bootstrap-vue';
Vue.use(CardPlugin);
import { SpinnerPlugin } from 'bootstrap-vue';
Vue.use(SpinnerPlugin);
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
