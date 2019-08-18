<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Форма входа</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                :rules="emailRules"
                required
                prepend-icon="email"
                name="login"
                label="Почта"
                type="email"
                v-model="email"
              ></v-text-field>
              <v-text-field
                :rules="[v => !!v || 'Введите пароль']"
                v-model="password"
                required
                id="password"
                prepend-icon="lock"
                name="password"
                label="Пароль"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || loading"
              @click="onSubmit"
              color="primary"
            >Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "Введите Email",
        v => /.+@.+/.test(v) || "Введите коректный Email"
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const User = {
          email: this.email,
          password: this.password
        };

        this.$store
          .dispatch("loginUser", User)
          .then(() => {
            this.$router.push("/");
          })
          .catch(err => alert(err));
        // console.log(User);
      }
    }
  },
  created() {
    if (this.$route.query["loginError"]) {
      alert("Войдите в систему");
    }
  }
};
</script>

