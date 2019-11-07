<template>
  <ValidationObserver ref="observer">
    <b-form @submit.prevent="sendForm">
      <b-card title="Домашняя бухгалтерия">
        <b-card-body class="p-0 mt-4">
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors, valid }">
            <b-form-group label="Email:">
              <b-form-input
                type="email"
                v-model="login"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Введите Email"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>

            <!-- <div class="input-field">
              <input v-model="login" id="email" type="text" :class="{invalid: errors[0] }" />
              <label for="email">Email</label>
              <small class="helper-text invalid">{{errors[0]}}</small>
            </div>-->
          </ValidationProvider>

          <ValidationProvider name="password" rules="required|min:4" v-slot="{ errors, valid }">
            <b-form-group label="Пароль:">
              <b-form-input
                type="password"
                v-model="password"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Введите пароль"
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
        </b-card-body>
        <!-- <div class="card-content"></div> -->
        <b-card-footer footer-bg-variant="transparent" class="p-0 pt-3">
          <b-button block type="submit" :disabled="loading" class="mb-2" variant="primary">
            Войти
            <!-- <i class="material-icons right">send</i> -->
          </b-button>
          <!-- <button class="btn waves-effect waves-light auth-submit"></button> -->

          <p class="center">
            Нет аккаунта?
            <nuxt-link to="/register">Зарегистрироваться</nuxt-link>
          </p>
        </b-card-footer>
        <!-- <div class="card-action">
          <div>
          
          </div>

         
        </div>-->
      </b-card>
      <!-- <form  class="card auth-card"> -->

      <!-- </form> -->
    </b-form>
  </ValidationObserver>
</template>

<script>
import messages from "@/plugins/codeMessage";

export default {
  layout: "emptyLayout",
  data: () => ({
    login: "",
    password: "",
    loading: false
  }),
  methods: {
    async sendForm() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) return;

      try {
        this.loading = true;
        await this.$store.dispatch("auth/login", {
          email: this.login,
          password: this.password
        });
        this.$router.push("./");
      } catch (e) {
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    const code = this.$route.query.message;
    if (messages[code]) this.$message(messages[code]);
  }
};
</script>