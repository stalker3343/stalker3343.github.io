<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>
    <div class="history-chart mb-3">
      <canvas ref="canvas"></canvas>
    </div>
    <Loader v-if="loading"></Loader>
    <p v-else-if="!records.length">У вас нет записей</p>
    <template v-else>
      <section>
        <b-table :per-page="perPage" :current-page="currentPage" :items="records" :fields="fields">
          <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
          <template v-slot:cell(dateCreated)="data">{{ data.value | date('datetime')}}</template>
          <template v-slot:cell(type)="data">
            <b-badge v-if="data.value=='income'" pill variant="success">Доход</b-badge>
            <b-badge v-else pill variant="warning">Расход</b-badge>
          </template>
          <template v-slot:cell(open)="data">
            <nuxt-link :to="`record/${data.item.id}`">
              <b-button size="sm" variant="primary">
                <i class="material-icons">open_in_new</i>
              </b-button>
            </nuxt-link>
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="records.length"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </section>
    </template>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data: () => ({
    perPage: 4,
    currentPage: 1,
    loading: true,
    records: [],

    fields: [
      { key: "index", label: "№" },
      { key: "summ", label: "Сумма" },
      { key: "dateCreated", label: "Дата" },
      { key: "categName", label: "Категория" },
      { key: "type", label: "Тип" },
      { key: "open", label: "Открыть" }
    ]
  }),

  computed: {
    ...mapGetters({
      categories: "categories/categories"
      // records: "records/records"
    })
  },
  methods: {
    ...mapActions({
      loadRecords: "records/loadRecord",
      loadCateg: "categories/loadCateg"
    }),

    setup() {
      const records = this.$store.getters["records/records"];

      this.records = records.map(record => {
        const categ = this.categories.find(categ => {
          return categ.id === record.categId;
        });

        return { ...record, categName: categ.name };
      });
    }
  },
  async mounted() {
    this.loading = true;
    if (!this.categories.length) {
      await this.loadCateg();
    }
    if (!this.$store.getters["records/records"].length) {
      await this.loadRecords();
    }
    this.setup();
    this.loading = false;
    const categories = this.categories;
    const records = this.records;
    this.renderChart({
      labels: categories.map(el => el.name),
      datasets: [
        {
          label: "# of Votes",
          data: categories.map(categ => {
            return records
              .filter(record => {
                return record.categId === categ.id && record.type === "outcome";
              })
              .reduce((summ, record) => {
                summ += +record.summ;
                console.log(summ);

                return summ;
              }, 0);
          }),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    });
  },
  middleware: ["auth"]
};
</script>
