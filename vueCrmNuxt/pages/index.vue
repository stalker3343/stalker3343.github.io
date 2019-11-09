<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <b-btn variant="success" @click="loadCurrencies">
        <i class="material-icons">refresh</i>
      </b-btn>
    </div>
    <Loader v-if="loading"></Loader>

    <b-row v-else>
      <b-col lg="4">
        <BIll :currencies="currencies"></BIll>
      </b-col>
      <b-col lg="8">
        <Currencies :currencies="currencies"></Currencies>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BIll from "@/components/HomeBill";
import Currencies from "@/components/HomeСurrencies";

// import axios from "axios";
export default {
  middleware: ["auth"],
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

        const proxyOptions = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/vnd.example.v1+json"
          }
        };
        const data = {
          Date: "2019-11-02T11:30:00+03:00",
          PreviousDate: "2019-11-01T11:30:00+03:00",
          PreviousURL:
            "//www.cbr-xml-daily.ru/archive/2019/11/01/daily_json.js",
          Timestamp: "2019-11-03T23:00:00+03:00",
          Valute: {
            USD: {
              ID: "R01235",
              NumCode: "840",
              CharCode: "USD",
              Nominal: 1,
              Name: "Доллар США",
              Value: 64.0316,
              Previous: 63.7748
            },
            EUR: {
              ID: "R01239",
              NumCode: "978",
              CharCode: "EUR",
              Nominal: 1,
              Name: "Евро",
              Value: 71.4785,
              Previous: 71.1918
            }
          }
        };

        // await this.$axios.get(
        //   "https://www.cbr-xml-daily.ru/daily_json.js",
        //   proxyOptions
        // );

        // const { data } = await this.$axios({
        //   method: "get",
        //   url: "https://www.cbr-xml-daily.ru/daily_json.js"
        // });
        data.Valute["RUB"] = {
          Value: 1
        };
        this.currencies = data;
      } catch (e) {
        this.$message(e, "error");
        throw e;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

