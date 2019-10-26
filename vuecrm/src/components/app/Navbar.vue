<template>
  <nav class="navbar orange lighten-1">
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
</template>

<script>
export default {
  data: () => ({
    interval: null,
    date: new Date(),
    dropDownInstance: null
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
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