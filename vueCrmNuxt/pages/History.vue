<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <section>
      <b-table class="bill__table" :items="records" :fields="fields">
        <!-- A virtual column -->
        <!-- <template v-slot:cell(index)="data">{{ data.index + 1 }}</template> -->

        <!-- A custom formatted column -->

        <!-- <template
        v-slot:cell(nameage)="data"
      >{{ data.item.name.first }} is {{ data.item.age }} years old</template>

 
      <template v-slot:cell()="data">
        <i>{{ data.value }}</i>
        </template>-->
      </b-table>
      <!-- <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th>Категория</th>
            <th>Тип</th>
            <th>Открыть</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1212</td>
            <td>12.12.32</td>
            <td>name</td>
            <td>
              <span class="white-text badge red">Расход</span>
            </td>
            <td>
              <button class="btn-small btn">
                <i class="material-icons">open_in_new</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>-->
    </section>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    loading: true,

    fields: [
      { key: "summ", label: "Сумма" },
      { key: "dateCreated", label: "Дата" },
      { key: "categName", label: "Категория" },
      { key: "type", label: "Тип" }
    ]
  }),

  computed: {
    ...mapGetters({
      categories: "categories/categories",
      records: "records/loadRecord"
    })
  },
  methods: {
    ...mapActions({
      loadRecords: "records/loadRecord",
      loadReloadCategcords: "categories/loadCateg"
    })
  },
  async mounted() {
    this.loading = true;
    if (!this.categories.length) {
      await this.loadCateg();
    }
    if (!this.records.length) {
      await this.loadRecords();
    }

    const records = this.records;

    this.records = records.map(record => {
      const categ = this.categories.find(categ => categ.categId === record.id);

      return { ...record, categName: categ.name };
    });

    this.loading = false;
  },
  middleware: ["auth"]
};
</script>
