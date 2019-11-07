<template>
  <b-card class="bill-card" text-variant="white" bg-variant="success" title="Курс валют">
    <b-table class="bill__table" :items="currenciesType" :fields="fields">
      <!-- A virtual column -->
      <!-- <template v-slot:cell(index)="data">{{ data.index + 1 }}</template> -->

      <!-- A custom formatted column -->
      <template v-slot:cell(cur)="data">
        {{data.item}}
        <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>,
        <b>{{ data.value.first }}</b>-->
      </template>
      <template v-slot:cell(curs)="data">
        <!-- {{data.item}} -->
        {{currencies.Valute[data.item].Value }}
        <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>,
        <b>{{ data.value.first }}</b>-->
      </template>
      <template v-slot:cell(date)="data">
        {{currencies.Date | date('date')}}
        <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>,
        <b>{{ data.value.first }}</b>-->
      </template>

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
          <th>Валюта</th>
          <th>Курс</th>
          <th>Дата</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="curence in currenciesType" :key="curence">
          <td>{{curence}}</td>
          <td>{{currencies.Valute[curence].Value }}</td>
          <td>{{currencies.Date | date('date')}}</td>
        </tr>
      </tbody>
    </table>-->
  </b-card>

  <!-- <div class="card-content white-text">
      <div class="card-header">
        <span class="card-title">Курс валют</span>
      </div>

    
  </div>-->
</template>
<script>
export default {
  props: ["currencies"],

  data: () => ({
    fields: [
      { key: "cur", label: "Валюта" },
      { key: "curs", label: "Курс" },
      { key: "date", label: "Дата" }
    ],
    currenciesType: ["USD", "RUB", "EUR"]
  })
};
</script>
<style >
.bill__table {
  color: white;
}
</style>>



