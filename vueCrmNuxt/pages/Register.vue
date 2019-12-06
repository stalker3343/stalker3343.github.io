<template>
  <ValidationObserver ref="observer">
    <b-form @submit.prevent="sendForm" class="card auth-card">
      <b-card title="Домашняя бухгалтерия">
        <b-card-body class="p-0 mt-4">
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors , valid}">
            <b-form-group label="Email:">
              <b-form-input
                type="email"
                v-model="email"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Введите Email"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>

            <!-- <div class="input-field">
            <input v-model="email" id="email" type="text" :class="{invalid: errors[0] }" />
            <label for="email">Email</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
            </div>-->
          </ValidationProvider>
          <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors, valid }">
            <b-form-group label="Пароль:">
              <b-form-input
                type="password"
                v-model="password"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Введите Пароль"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>

            <!-- <div class="input-field">
            <input v-model="password" id="password" type="password" :class="{invalid: errors[0] }" />
            <label for="password">Пароль</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
            </div>-->
          </ValidationProvider>
          <ValidationProvider name="name" rules="required" v-slot="{ errors, valid }">
            <b-form-group label="Имя:">
              <b-form-input
                type="text"
                v-model="name"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Введите Имя"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>

            <!-- <div class="input-field">
            <input v-model="name" id="name" type="text" :class="{invalid: errors[0] }" />
            <label for="name">Имя</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
            </div>-->
          </ValidationProvider>
          <ValidationProvider name="Начальная сумма" rules="required" v-slot="{ errors, valid }">
            <b-form-group label="Начальная сумма:">
              <b-form-input
                type="number"
                v-model.number="money"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Начальная сумма"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>

            <!-- <div class="input-field">
            <input v-model.number="money" id="money" type="text" :class="{invalid: errors[0] }" />
            <label for="money">Начальная сумма</label>
            <small class="helper-text invalid">{{errors[0]}}</small>
            </div>-->
          </ValidationProvider>
          <p>
            <label>
              <input v-model="rulesAgree" type="checkbox" />
              <span>С правилами согласен</span>
            </label>
          </p>
        </b-card-body>
        <b-card-footer footer-bg-variant="transparent" class="p-0 pt-3">
          <b-btn
            :disabled="loading"
            class="btn waves-effect waves-light auth-submit"
            type="submit"
            variant="success"
          >
            Зарегистрироваться
            <!-- <i class="material-icons right">send</i> -->
          </b-btn>

          <p class="text-center mt-3">
            Уже есть аккаунт?
            <nuxt-link to="/login">Войти!</nuxt-link>
          </p>
        </b-card-footer>
      </b-card>
    </b-form>
  </ValidationObserver>
</template>

<script>
export default {
  layout: "emptyLayout",
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
        await this.$store.dispatch("auth/regiterUser", {
          email: this.email,
          password: this.password,
          name: this.name,
          money: this.money
        });
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>