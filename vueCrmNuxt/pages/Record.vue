<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>
    <p v-if="!categories.length">У вас нет категорий</p>
    <Loader v-else-if="loading"></Loader>
    <ValidationObserver v-else ref="observer">
      <b-form @submit.prevent="sendForm">
        <b-form-group label="Выберете категорию:">
          <b-form-select v-model="categ" :options="categories"></b-form-select>
        </b-form-group>
        <b-form-group label="Выберете тип:">
          <b-form-radio v-model="type" value="income">Доход</b-form-radio>
          <b-form-radio v-model="type" value="outcome">Расход</b-form-radio>
        </b-form-group>

        <ValidationProvider name="Сумма" :rules="summRules" v-slot="{ errors, valid }">
          <b-form-group label="Сумма:">
            <b-form-input
              type="number"
              v-model="summ"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Введите сумму"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>

          <!-- <div class="input-field">
              <input v-model="login" id="email" type="text" :class="{invalid: errors[0] }" />
              <label for="email">Email</label>
              <small class="helper-text invalid">{{errors[0]}}</small>
          </div>-->
        </ValidationProvider>

        <ValidationProvider name="Описание" rules="required" v-slot="{ errors, valid }">
          <b-form-group label="Описание:">
            <b-form-input
              type="text"
              v-model="description"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Введите Описание"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>

          <!-- <div class="input-field">
              <input v-model="login" id="email" type="text" :class="{invalid: errors[0] }" />
              <label for="email">Email</label>
              <small class="helper-text invalid">{{errors[0]}}</small>
          </div>-->
        </ValidationProvider>
        <b-button
          block
          type="submit"
          :disabled="loading"
          class="mb-2 mt-3"
          variant="primary"
        >Создать</b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    summ: 1,
    description: "",
    loading: true,
    categ: null,
    type: "income"
  }),
  methods: {
    async sendForm() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) return;

      try {
        this.loading = true;

        await this.$store.dispatch("records/addRecord", {
          categId: this.categ,
          summ: this.summ,
          description: this.description,
          type: this.type
        });

        const delta = this.type === "income" ? this.summ : -this.summ;
        console.log(Number(this.user.bill) + Number(delta));

        await this.$store.dispatch("user/updateUser", {
          bill: Number(this.user.bill) + Number(delta)
        });

        this.$store.commit("setMessage", "Запись добавлена");
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
    ...mapActions({
      loadCateg: "categories/loadCateg"
    })
  },
  computed: {
    summRules() {
      return {
        required: true,
        numeric: true,
        min_value: 1,
        max_value: this.type === "income" ? false : this.user.bill
      };
    },
    categories() {
      const rawCategoris = this.$store.getters["categories/categories"];
      const categoris = rawCategoris.map(el => ({
        value: el.id,
        text: el.name,
        limit: el.limit
      }));

      return categoris;
    },
    ...mapGetters({
      user: "user/user"
    })
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