<template>
  <div class="card light-blue bill-card">
    <b-card bg-variant="primary" text-variant="white" title="Счет в валюте">
      <div class="currency-line" v-for="currency in currenciesType" :key="currency">
        <span>{{( user.bill / currencies.Valute[currency].Value).toFixed(2) | currency(currency)}}</span>
      </div>
    </b-card>
    <!-- <div class="card-content white-text">
    

    
    </div>-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["currencies"],
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
    // ...mapGetters(["user/user"])
  },
  data: () => ({
    currenciesType: ["USD", "RUB", "EUR"]
  })
};
</script>