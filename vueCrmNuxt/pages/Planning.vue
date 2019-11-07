<template>
  <div>
    <p v-if="!categories.length">У вас нет категорий</p>
    <Loader v-else-if="loading"></Loader>
    <template v-else>
      <div class="page-title">
        <h3>Планирование</h3>
        <h4>{{user.bill | currency("RUB")}}</h4>
      </div>
      <PlaninngProgress
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :spent="category.spent"
      ></PlaninngProgress>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PlaninngProgress from "@/components/PlaninngProgress";
export default {
  data: () => ({
    loading: true,
    categories: []
  }),
  components: { PlaninngProgress },
  computed: {
    ...mapGetters({
      user: "user/user",
      records: "records/records"
    })
  },
  methods: {
    ...mapActions({
      loadCateg: "categories/loadCateg",
      loadRecords: "records/loadRecord"
    })
  },
  async mounted() {
    this.loading = true;
    if (!this.categories.length) {
      await this.loadCateg();
    }
    if (!this.$store.getters["records/records"].length) {
      await this.loadRecords();
    }

    const categories = this.$store.getters["categories/categories"];

    this.categories = categories.map(categ => {
      let summForCateg = this.records
        .filter(
          record => record.categId === categ.id && record.type === "outcome"
        )
        .reduce((total, record) => {
          return total + +record.summ;
        }, 0);

      return { ...categ, spent: summForCateg };
    });

    this.loading = false;
  }
};
</script>