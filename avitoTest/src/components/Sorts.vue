<template>
  <section class="options-block">
    <b-container class="container options-block__wrap">
      <div class="options-block__header pb-1">Отсортировать по:</div>
      <div class="options-block__options-wrap">
        <div class="filter mb-3 mb-md-0">
          <div class="filter__controls">
            <b-form-select @change="changeTypeSort" class="filter__select mr-3" v-model="typeSort">
              <option value="rating">По популярности (рейтинг продавца)</option>
              <option value="price">По цене</option>
            </b-form-select>
            <b-form-select
              @change="changeDirectionSort"
              v-model="directionSort"
              class="filter__select"
            >
              <option value="down">По убывания</option>
              <option value="up">По возрастанию</option>
            </b-form-select>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>


<script>
export default {
  data() {
    return {
      typeSort: "price",
      directionSort: "down"
    };
  },
  methods: {
    changeDirectionSort() {
      this.$emit("changeDirectionSort", this.directionSort);
    },
    changeTypeSort() {
      this.$emit("changeTypeSort", this.typeSort);
    }
  }
};
</script>

