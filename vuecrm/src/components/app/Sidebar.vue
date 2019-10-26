<template>
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
</template>

<script>
export default {
  props: ["sidebar"],
  data: () => ({
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
    ]
  })
};
</script>