<template>
  <div>
    <Loader v-if="loading"></Loader>
    <p v-else-if="!record">Такой записи нет</p>
    <template v-else>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <b-row>
        <b-col cols="12" sm="6">
          <b-card
            text-variant="white"
            :bg-variant="record.type === 'income' ? 'success' : 'danger'"
          >
            <p>
              <b>Описание:</b>
              {{record.description}}
            </p>
            <p>
              <b>Сумма:</b>
              {{record.summ}}
            </p>
            <p>
              <b>Категория:</b>
              {{record.categName}}
            </p>

            <p>{{record.dateCreated | date("datetime")}}</p>
          </b-card>
        </b-col>
      </b-row>

      <!-- <div class="row">
        <div class="col s12 m6">
          <div class="card red">
            <div class="card-content white-text">
         
            </div>
          </div>
        </div>
      </div>-->
    </template>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  data: () => ({
    items: [
      {
        text: "История",
        to: "/history"
      },
      {
        text: "",
        active: true
      }
    ],
    id: null,
    record: null,
    loading: true
  }),
  async mounted() {
    this.id = this.$route.params.id;

    const record = await this.$store.dispatch("records/getRecordById", this.id);
    const category = await this.$store.dispatch(
      "categories/getCategoryById",
      record.categId
    );
    this.record = { ...record, categName: category.name };
    this.items[1].text = this.record.type === "income" ? "Доход" : "Расход";
    this.loading = false;
  }
};
</script>