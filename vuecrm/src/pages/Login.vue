<template>
  <ValidationObserver ref="observer">
    <form @submit.prevent="sendForm" class="card auth-card">
      <div class="card-content">
        <span class="card-title">Домашняя бухгалтерия</span>

        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <div class="input-field">
            <input v-model="login" id="email" type="text" :class="{invalid: errors[0] }" />
            <label for="email">Email</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
          </div>
        </ValidationProvider>

        <ValidationProvider name="password" rules="required|min:4" v-slot="{ errors }">
          <div class="input-field">
            <input v-model="email" id="password" type="password" :class="{invalid: errors[0] }" />
            <label for="password">Пароль</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
          </div>
        </ValidationProvider>
      </div>
      <div class="card-action">
        <div>
          <button class="btn waves-effect waves-light auth-submit" type="submit">
            Войти
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Нет аккаунта?
          <router-link to="/register">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  data: () => ({
    login: "",
    email: ""
  }),
  methods: {
    async sendForm() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) return;

      console.log("Всё норм");
    }
  }
};
</script>