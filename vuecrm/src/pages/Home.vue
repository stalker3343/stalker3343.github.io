<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button @click="loadCurrencies" class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading"></Loader>
    <div v-else class="row">
      <div class="col s12 m6 l4">
        <BIll :currencies="currencies"></BIll>
      </div>

      <div class="col s12 m6 l8">
        <Currencies :currencies="currencies"></Currencies>
      </div>
    </div>
  </div>
</template>

<script>
import BIll from "@/components/HomeBill";
import Currencies from "@/components/HomeСurrencies";

import axios from "axios";
export default {
  components: {
    BIll,
    Currencies
  },
  data: () => ({
    currencies: null,
    loading: true
  }),
  mounted() {
    this.loadCurrencies();
  },
  methods: {
    async loadCurrencies() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        data.Valute["RUB"] = {
          Value: 1
        };
        this.currencies = data;
      } catch (e) {
        this.$message(e, "error");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

