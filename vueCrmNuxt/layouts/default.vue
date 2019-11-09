<template>
  <div class="app-main-layout">
    <template>
      <Navbar @click="sidebar = !sidebar"></Navbar>
      <Sidebar :sidebar="sidebar"></Sidebar>
      <main class="app-content" :class="{ 'full' : !sidebar }">
        <div class="app-page">
          <nuxt />
        </div>
      </main>

      <div v-b-tooltip.hover title="Создать новую запись" class="fixed-action-btn">
        <nuxt-link class="fixed-action-btn__icon" to="/record">
          <i class="large material-icons">add</i>
        </nuxt-link>
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
    sidebar: true
  }),
  async mounted() {
    console.log("создаем приложуху");

    // try {
    //   this.loading = true;
    //   await this.$store.dispatch("user/loadUser");
    //   this.loading = false;
    // } catch (e) {
    //   console.log(e);
    // }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    massage() {
      return this.$store.getters.massage;
    }
  },

  watch: {
    error(data) {
      this.$message(data, "error");
      this.$store.commit("clearError", null, { root: true });
    },
    massage(data) {
      this.$message(data);
      this.$store.commit("clearMessage", null, { root: true });
    }
  }
};
</script>

<style >
.fixed-action-btn {
  position: fixed;
  bottom: 50px;
  right: 50px;
  padding: 15px;
  padding-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #28a745;
  border-radius: 50%;
}
.fixed-action-btn__icon {
  color: white;
}
.fixed-action-btn__icon:hover {
  color: white;
}
.empty-layout {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 5rem;
  height: 100vh;
}
.auth-card {
  width: 500px;
}
.auth-submit {
  width: 100%;
}
.helper-text.invalid {
  color: #f44336;
}
.app-page {
  padding: 2rem;
}
.app-main-layout {
  position: relative;
  min-height: 100vh;
}

.nav-wrapper {
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.nav-wrapper,
.navbar-left {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.navbar-left > a {
  margin-right: 1rem;
}
.app-content {
  padding-left: 250px;
  transition: padding-left 0.3s;
  position: relative;
}
.app-content.full {
  padding-left: 0;
}
.page-title {
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: solid 1px rgba(51, 51, 51, 0.12);
}
.page-title a {
  color: #000;
  opacity: 0.8;
}
.page-subtitle h4,
.page-title h3,
.page-title h4 {
  margin: 0;
  font-size: 2rem;
}
.page-subtitle h4,
.page-title {
  margin-bottom: 2rem;
}
.app-loader,
.currency-line,
.page-title {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.app-loader {
  width: 100%;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 2rem;
}
.currency-line {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 2px solid #fff;
  padding-bottom: 1rem;
  padding-top: 1.5rem;
}
.currency-line span {
  font-size: 1.5rem;
}
.bill-card {
  height: 310px;
}
.pointer {
  cursor: pointer;
}
.form {
  max-width: 500px;
}
.breadcrumb-wrap,
.breadcrumb-wrap a,
.breadcrumb-wrap a:before {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.breadcrumb-wrap {
  position: relative;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.breadcrumb-wrap a,
.breadcrumb-wrap a:before {
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: rgba(0, 0, 0, 0.7) !important;
}
.history-chart {
  max-width: 600px;
  margin: 0 auto;
}
</style>