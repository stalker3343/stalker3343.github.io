<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <b-form @submit.prevent="sendForm">
      <ValidationProvider rules="required" v-slot="{ errors, valid }">
        <b-form-group label="Имя:">
          <b-form-input
            type="text"
            v-model="user.name"
            :state="errors[0] ? false : (valid ? true : null)"
            placeholder="Имя"
          ></b-form-input>
          <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <!-- <div class="input-field">
        <input v-model="user.name" id="description" type="text" />
        <label for="description">Имя</label>
        <span class="helper-text invalid">name</span>
      </div>-->

      <b-btn type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </b-btn>
    </b-form>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],
  data: () => ({
    user: ""
  }),
  mounted() {
    this.user = this.$store.getters["user/user"];
  },
  // computed: {
  //   user() {
  //     return this.$store.getters["user/user"];
  //   }
  // },
  methods: {
    async sendForm() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) return;

      // try {
      //   await this.$store.dispatch("auth/regiterUser", {
      //     email: this.email,
      //     password: this.password,
      //     name: this.name,
      //     money: this.money
      //   });
      //   this.$router.push("/");
      // } catch (e) {
      //   console.log(e);
      // } finally {
      //   this.loading = false;
      // }
    }
  }
};
</script>