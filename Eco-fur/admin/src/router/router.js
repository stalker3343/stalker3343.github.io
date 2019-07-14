import Vue from "vue";
import Router from "vue-router";
import authGuard from './auth-guard'

import Login from "@/components/Login";
import Home from "@/components/Home";
import GroupItem from "@/components/GroupItem";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      name: "Home",
      path: "/",
      component: Home,
      props: true,
      beforeEnter: authGuard
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
      props: true,
      beforeEnter: authGuard
    }
  ]
});