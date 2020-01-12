<template>
  <div>
    <Header></Header>
    <!-- <app-logo /> -->
    <h1 class="title">palmarius</h1>
    <h2 class="subtitle">Nuxt.js project</h2>
    <div class="links">
      <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
    </div>
  </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
</style>

