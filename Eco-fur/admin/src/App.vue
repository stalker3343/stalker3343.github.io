<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-title>
        <router-link tag="div" to="/">Админ панель</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="link in links" :key="link.title" :to="link.url" flat>{{link.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Главная",
          url: "/"
        },
        {
          title: "Войти",
          url: "/login"
        }
      ]
    };
  }
};
</script>


<style>
</style>
