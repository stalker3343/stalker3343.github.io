<template>
  <div class="app-main-layout">
    <div v-if="loading">
      <div class="preloader-wrapper active">
        <div class="spinner-layer spinner-red-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
    <template v-else>
      <Navbar @click="sidebar = !sidebar"></Navbar>
      <Sidebar :sidebar="sidebar"></Sidebar>
      <main class="app-content" :class="{ 'full' : !sidebar }">
        <div class="app-page">
          <router-view></router-view>
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import Navbar from "../components/app/Navbar";
import Sidebar from "../components/app/Sidebar";

export default {
  components: {
    Navbar,
    Sidebar
  },

  data: () => ({
    sidebar: true,
    loading: true
  }),
  async mounted() {
    try {
      this.loading = true;
      await this.$store.dispatch("loadUser");
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>