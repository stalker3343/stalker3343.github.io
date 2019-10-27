<template>
  <div>
    <div class="page-subtitle">
      <h4>Создать</h4>
    </div>
    <ValidationObserver ref="observer">
      <form @submit.prevent="submitHendler">
        <ValidationProvider name="Название" rules="required" v-slot="{ errors }">
          <div class="input-field">
            <input v-model="name" id="name" type="text" />
            <label for="name">Название</label>
            <span class="helper-text invalid">{{errors[0]}}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="Лимит" rules="required|numeric|min_value:1" v-slot="{ errors }">
          <div class="input-field">
            <input v-model.number="limit" id="limit" type="number" />
            <label for="limit">Лимит</label>
            <span class="helper-text invalid">{{errors[0]}}</span>
          </div>
        </ValidationProvider>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "",
    limit: 1
  }),
  methods: {
    async submitHendler() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) return;

      this.$store.dispatch("addCateg", { name: this.name, limit: this.limit });
    }
  },
  mounted() {
    M.updateTextFields();
  }
};
</script>