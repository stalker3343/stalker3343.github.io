import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("../pages/Home.vue"),
      meta: { layout: "mainLayout" }
    },
    {
      name: "Register",
      path: "/register",
      component: () => import("../pages/Register.vue"),
      meta: { layout: "emptyLayout" }
    },
    {
      name: "Login",
      path: "/login",
      component: () => import("../pages/Login.vue"),
      meta: { layout: "emptyLayout" }
    },
    {
      name: "Categories",
      path: "/categories",
      component: () => import("../pages/Categories.vue"),
      meta: { layout: "mainLayout" }
    },
    {
      name: "DetailRecord",
      path: "/detail-record",
      component: () => import("../pages/DetailRecord.vue"),
      meta: { layout: "mainLayout" }
    },
    {
      name: "History",
      path: "/history",
      component: () => import("../pages/History.vue"),
      meta: { layout: "mainLayout" }
    },
    {
      name: "Planning",
      path: "/planning",
      component: () => import("../pages/Planning.vue"),
      meta: { layout: "mainLayout" }
    },
    {
      name: "Profile",
      path: "/profile",
      component: () => import("../pages/Profile.vue"),
      meta: { layout: "mainLayout" }
    },
    {
      name: "Record",
      path: "/record",
      component: () => import("../pages/Record.vue"),
      meta: { layout: "mainLayout" }
    }
  ]
});
