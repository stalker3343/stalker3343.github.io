<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-title>
        <div>Админ панель</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="link in links" :key="link.title" :to="link.url" flat>{{link.title}}</v-btn>
        <v-btn v-if="isUserLogedIn" @click="logOut" flat>Выйти</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  // data() {
  //   return {
  //     links: [
  //       {
  //         title: "Главная",
  //         url: "/"
  //       },
  //       {
  //         title: "Войти",
  //         url: "/login"
  //       }
  //     ]
  //   };
  // },
  methods: {
    logOut() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  computed: {
    isUserLogedIn() {
      return this.$store.getters.isUserLogedIn;
    },
    links() {
      if (this.isUserLogedIn) {
        return [
          {
            title: "Главная",
            url: "/"
          }
        ];
      }
      // return [
      //   {
      //     title: "Войти",
      //     url: "/login"
      //   }
      // ];
    }
  }
};
</script>


<style>
</style>
