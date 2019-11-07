<template>
  <div>
    <div class="page-subtitle">
      <h4>Редактировать</h4>
    </div>
    <p v-if="!categories.length">У вас нет категорий</p>
    <Loader v-else-if="loading"></Loader>
    <ValidationObserver v-else ref="observer">
      <b-form @submit.prevent="submitHendler">
        <b-form-group label="Выберете категорию:">
          <b-form-select v-model="categ" :options="categories"></b-form-select>
        </b-form-group>

        <ValidationProvider name="Название" rules="required" v-slot="{ errors, valid }">
          <b-form-group label="Название:">
            <b-form-input
              type="text"
              v-model="name"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Введите название категории"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          name="Лимит"
          rules="required||numeric|min_value:1"
          v-slot="{ errors, valid }"
        >
          <b-form-group label="Лимит:">
            <b-form-input
              type="number"
              v-model.number="limit"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Введите лимит для категории"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <b-button
          block
          type="submit"
          :disabled="loading"
          class="mb-2 mt-3"
          variant="primary"
        >Обновить</b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    categ: null,
    name: "",
    limit: 0,
    loading: true
  }),
  computed: {
    categories() {
      const rawCategoris = this.$store.getters["categories/categories"];
      const categoris = rawCategoris.map(el => ({
        value: el.id,
        text: el.name,
        limit: el.limit
      }));

      return categoris;
    }
  },
  methods: {
    async submitHendler() {
      this.loading = true;
      await this.$store.dispatch("categories/editCateg", {
        name: this.name,
        limit: this.limit,
        id: this.categ
      });
      this.loading = false;
    },

    ...mapActions({
      loadCateg: "categories/loadCateg"
    })
  },
  watch: {
    categories: function() {
      //features of materialize CSS
      this.categ = this.categories[0] ? this.categories[0].value : null;
    },
    categ: function() {
      const { text, limit } = this.categories.find(
        el => el.value === this.categ
      );
      this.name = text;
      this.limit = limit;
    }
  },
  async mounted() {
    this.loading = true;
    if (!this.$store.getters["categories/categories"].length) {
      await this.loadCateg();
    }
    this.categ = this.categories[0] ? this.categories[0].value : null;
    this.loading = false;
  }
};
</script>