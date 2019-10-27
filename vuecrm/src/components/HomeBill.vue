<template>
  <div class="card light-blue bill-card">
    <div class="card-content white-text">
      <span class="card-title">Счет в валюте</span>

      <p class="currency-line" v-for="currency in currenciesType" :key="currency">
        <span>{{( user.bill / currencies.Valute[currency].Value).toFixed(2) | currency(currency)}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["currencies"],
  computed: {
    ...mapGetters(["user"])
  },
  data: () => ({
    currenciesType: ["USD", "RUB", "EUR"]
  })
};
</script>