import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/Login";
import Home from "@/components/Home";
import GroupItem from "@/components/GroupItem";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "https://stalker3343.github.io/Eco-fur/admin/dist/",
      component: Home,
      props: true
    },
    {
      name: "Login",
      path: "/login",
      component: Login
    },
    {
      name: "GroupItem",
      path: "/GroupItem/:group",
      component: GroupItem,
      props: true
    }
  ]
});
