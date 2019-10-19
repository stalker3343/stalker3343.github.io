import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../pages/Home.vue";
import Categories from "../pages/Categories.vue";
import DetailRecord from "../pages/DetailRecord.vue";
import History from "../pages/History.vue";
import Login from "../pages/Login.vue";
import Planning from "../pages/Planning.vue";
import Profile from "../pages/Profile.vue";
import Record from "../pages/Record.vue";
import Register from "../pages/Register.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/register",
      component: Register,
      meta: { layout: "emptyLayout" }
    },
    {
      path: "/login",
      component: Login,
      meta: { layout: "emptyLayout" }
    },
    {
      path: "/categories",
      component: Categories
    },
    {
      path: "/detail-record",
      component: DetailRecord
    },
    {
      path: "/history",
      component: History
    },
    {
      path: "/planning",
      component: Planning
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/record",
      component: Record
    }
  ]
});
