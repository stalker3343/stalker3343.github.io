<template>
  <ValidationObserver ref="observer">
    <form @submit.prevent="sendForm" class="card auth-card">
      <div class="card-content">
        <span class="card-title">Домашняя бухгалтерия</span>
        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <div class="input-field">
            <input v-model="email" id="email" type="text" :class="{invalid: errors[0] }" />
            <label for="email">Email</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
          </div>
        </ValidationProvider>
        <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
          <div class="input-field">
            <input v-model="password" id="password" type="password" :class="{invalid: errors[0] }" />
            <label for="password">Пароль</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
          </div>
        </ValidationProvider>
        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
          <div class="input-field">
            <input v-model="name" id="name" type="text" :class="{invalid: errors[0] }" />
            <label for="name">Имя</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
          </div>
        </ValidationProvider>
        <ValidationProvider name="Начальная сумма" rules="required" v-slot="{ errors }">
          <div class="input-field">
            <input v-model.number="money" id="money" type="text" :class="{invalid: errors[0] }" />
            <label for="money">Начальная сумма</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
          </div>
        </ValidationProvider>
        <p>
          <label>
            <input v-model="rulesAgree" type="checkbox" />
            <span>С правилами согласен</span>
          </label>
        </p>
      </div>
      <div class="card-action">
        <div>
          <button
            :disabled="loading"
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            Зарегистрироваться
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Уже есть аккаунт?
          <router-link to="/login">Войти!</router-link>
        </p>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  data: () => ({
    name: "",
    password: "",
    email: "",
    money: 0,
    rulesAgree: false,
    loading: false
  }),

  methods: {
    async sendForm() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) return;
      if (!this.rulesAgree)
        return this.$store.commit("setMessage", "согласитесь с правилаами");
      this.loading = true;

      try {
        await this.$store.dispatch("regiterUser", {
          email: this.email,
          password: this.password,
          name: this.name,
          money: this.money
        });
        this.$router.push("/");
      } catch (e) {
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    M.updateTextFields();
  }
};
</script>