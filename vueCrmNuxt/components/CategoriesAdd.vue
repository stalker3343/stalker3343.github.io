<template>
  <div>
    <div class="page-subtitle">
      <h4>Создать</h4>
    </div>

    <ValidationObserver ref="observer">
      <b-form @submit.prevent="submitHendler">
        <!-- <ValidationProvider name="Название" rules="required" v-slot="{ errors }">
          <div class="input-field">
            <input v-model="name" id="name" type="text" />
            <label for="name">Название</label>
            <span class="helper-text invalid">{{errors[0]}}</span>
          </div>
        </ValidationProvider>-->

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

          <!-- <div class="input-field">
              <input v-model="login" id="email" type="text" :class="{invalid: errors[0] }" />
              <label for="email">Email</label>
              <small class="helper-text invalid">{{errors[0]}}</small>
          </div>-->
        </ValidationProvider>
        <!-- <ValidationProvider name="Лимит" rules="required|numeric|min_value:1" v-slot="{ errors }">
          <div class="input-field">
            <input v-model.number="limit" id="limit" type="number" />
            <label for="limit">Лимит</label>
            <span class="helper-text invalid">{{errors[0]}}</span>
          </div>
        </ValidationProvider>-->
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

          <!-- <b-form-input label="Пароль" :state="!!errors[0]" v-model="password" type="password"></b-form-input> -->
          <!-- <div class="input-field">
              <input id="password" :class="{invalid: errors[0] }" />
          <label for="password">Пароль</label>-->
          <!-- <small class="helper-text invalid">{{errors[0]}}</small> -->
          <!-- </div> -->
        </ValidationProvider>

        <!-- <div class="card-content"></div> -->

        <b-button block type="submit" :disabled="loading" class="mb-2 mt-3" variant="primary">
          Создать
          <!-- <i class="material-icons right">send</i> -->
        </b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "",
    limit: 1,
    loading: false
  }),
  methods: {
    async submitHendler() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) return;
      this.loading = true;

      await this.$store.dispatch("categories/addCateg", {
        name: this.name,
        limit: this.limit
      });
      this.loading = false;
    }
  }
};
</script>