<template>
  <div>
    <div class="app-main-layout">
      <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
          <div class="navbar-left">
            <a @click.prevent="sidebar = !sidebar">
              <i class="material-icons black-text">dehaze</i>
            </a>
            <span class="black-text">{{ date | date('datetime')}}</span>
          </div>

          <ul class="right hide-on-small-and-down">
            <li>
              <a ref="dropDown" class="dropdown-trigger black-text" href="#" data-target="dropdown">
                USER NAME
                <i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id="dropdown" class="dropdown-content">
                <router-link to="/profile" tag="li">
                  <a class="black-text">
                    <i class="material-icons">account_circle</i>Профиль
                  </a>
                </router-link>

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
      </nav>

      <ul class="sidenav app-sidenav" :class="{'open': sidebar }">
        <router-link
          active-class="active"
          v-for="link in routes"
          :key="link.name"
          :to="link.path"
          exact
          tag="li"
        >
          <a class="waves-effect waves-orange pointer">{{link.name}}</a>
        </router-link>
      </ul>

      <main class="app-content" :class="{ 'full' : !sidebar }">
        <div class="app-page">
          <router-view></router-view>
        </div>
      </main>

      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    interval: null,
    date: new Date(),
    routes: [
      {
        name: "Счет",
        path: "./"
      },
      {
        name: "История",
        path: "/history"
      },
      {
        name: "Планирование",
        path: "/planning"
      },
      {
        name: "Новая запись",
        path: "/record"
      },
      {
        name: "Категории",
        path: "/categories"
      }
    ],
    sidebar: true,
    dropDownInstance: null
  }),
  methods: {
    logout() {
      this.$router.push({ path: "./login", query: { logout: true } });
    }
  },

  mounted() {
    this.dropDownInstance = M.Dropdown.init(this.$refs.dropDown);
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