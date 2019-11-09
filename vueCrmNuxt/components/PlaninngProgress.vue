<template>
  <section>
    <div class="mb-3">
      <p class="mb-2">
        <strong>{{category.name}}</strong>
        {{spent | currency('RUB')}} из {{category.limit | currency('RUB')}}
      </p>

      <!-- <b-tooltip target="tooltip-target-1" triggers="hover">{{tooltipText}}</b-tooltip> -->

      <b-progress v-b-tooltip.hover :title="tooltipText" :value="percentage" :variant="variant"></b-progress>
    </div>
  </section>
</template>
<script>
import currencyFilter from "@/plugins/filters/currency.filter";
export default {
  props: {
    category: {
      type: Object,
      required: true
    },
    spent: {
      type: Number,
      required: true
    }
  },
  computed: {
    percentage() {
      return (this.spent / this.category.limit) * 100;
    },
    variant() {
      return this.percentage < 50
        ? "success"
        : this.percentage < 70
        ? "warning"
        : "danger";
    },
    tooltipText() {
      const tooltipValue = this.category.limit - this.spent;
      return tooltipValue < 0
        ? `Превышение на ${currencyFilter(Math.abs(tooltipValue), "RUB")}`
        : `Осталось ${currencyFilter(Math.abs(tooltipValue), "RUB")}`;
    }
  }
};
</script>