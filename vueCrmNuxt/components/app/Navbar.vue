<template>
  <b-navbar class="app-navbar" type="light" variant="warning">
    <b-navbar-nav>
      <b-nav-text class="d-flex justify-content-center align-items-center">
        <a @click.prevent="$emit('click')" class="mr-3 d-block">
          <i class="material-icons black-text d-block">dehaze</i>
        </a>
      </b-nav-text>
      <b-nav-text>{{ date | date('datetime')}}</b-nav-text>
      <!-- <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>-->

      <!-- <b-nav-item-dropdown right>
      
        <template v-slot:button-content>
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>-->
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown class="m-0" no-caret right>
        <template v-slot:button-content>{{user.name}}</template>

        <!-- Using 'button-content' slot -->
        <!-- <template v-slot:button-content>{{user.name}}</template> -->
        <b-dropdown-item size="sm">
          <nuxt-link tag="div" to="/profile">
            Профиль
            <!-- <a class="black-text">
            <i class="material-icons">account_circle</i>
            </a>-->
          </nuxt-link>
        </b-dropdown-item>

        <!-- <li class="divider" tabindex="-1"></li> -->
        <b-dropdown-item @click.prevent="logout">
          Выйти
          <!-- <li>
          <a @click.prevent="logout" class="black-text">
            <i class="material-icons">assignment_return</i>Выйти
          </a>
          </li>-->
        </b-dropdown-item>
        <!-- <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
  </b-navbar>

  <!-- <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a ref="dropDown" class="dropdown-trigger black-text" href="#" data-target="dropdown">
            {{user.name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <nuxt-link to="/profile" tag="li">
              <a class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </nuxt-link>

            <li class="divider" tabindex="-1"></li>

            <li>
              <a @click.prevent="logout" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>-->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    interval: null,
    date: new Date(),
    dropDownInstance: null
  }),
  computed: {
    //  ...mapGetters([
    //   'doneTodosCount',
    //   'anotherGetter',
    //   // ...
    // ])

    user() {
      return this.$store.getters["user/user"];
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push({ path: "./login", query: { message: "logout" } });
    }
  },
  mounted() {
    this.dropDownInstance = M.Dropdown.init(this.$refs.dropDown, {
      constrainWidth: false
    });
    this.interval = setInterval(() => (this.date = new Date()), 1000);
  },
  beforeDestroy() {
    if (this.dropDownInstance && this.dropDownInstance.destroy()) {
      this.dropDownInstance.destroy();
    }
    clearTimeout(this.interval);
  }
};
</script>
<style scoped>
.app-navbar {
  font-size: 120%;
}
</style>