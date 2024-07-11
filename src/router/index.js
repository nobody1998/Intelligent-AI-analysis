import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
