<template>
  <div class="card orange darken-3 bill-card">
    <div class="card-content white-text">
      <div class="card-header">
        <span class="card-title">Курс валют</span>
      </div>
      <table>
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
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["currencies"],

  data: () => ({
    currenciesType: ["USD", "RUB", "EUR"]
  })
};
</script>

