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
  {
    path: "/detail",
    name: "PageDetail",
    component: () => import("../views/detail.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/package",
    name: "Package",
    component: () => import("../views/package.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("../views/payment.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/personalCenter",
    name: "PersonalCenter",
    component: () => import("../views/personalCenter.vue"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
