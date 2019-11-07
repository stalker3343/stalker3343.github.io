<template>
  <ul class="app-sidenav" :class="{'open': sidebar }">
    <!-- <b-list-group> -->
    <nuxt-link
      tag="a"
      class="app-sidenav__li"
      v-for="link in routes"
      :key="link.name"
      active-class="active"
      :to="link.path"
      exact
    >
      {{link.name}}
      <!-- <b-list-group-item></b-list-group-item> -->
    </nuxt-link>

    <!-- <b-list-group-item href="#" active>Link with active state</b-list-group-item>
      <b-list-group-item href="#">Action links are easy</b-list-group-item>
    <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>-->
    <!-- </b-list-group> -->
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
<style >
.app-sidenav {
  padding: 0px;
  position: absolute;
  top: 61px;
  width: 250px;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  bottom: 0 !important;
  height: auto !important;
  padding-bottom: 60px;

  background-color: #fff;
  z-index: 999;
  overflow-y: auto;
  will-change: transform;
  backface-visibility: hidden;
  left: 0;
  margin: 0;
  transform: translateX(-100%);
  border-right: 1px solid gray;
}

.app-sidenav.open {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.app-sidenav__li {
  display: block;
  padding: 10px 0px;
  padding-left: 30px;

  color: black;
  border-bottom: 1px solid gray;
}
.app-sidenav__li:hover {
  text-decoration: none;
  transition: 0.1s;
  background-color: #007bff59;
  color: black;
}
.app-sidenav__li.active {
  background: #007bff;
  color: white;
}
</style>

