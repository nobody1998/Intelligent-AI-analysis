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
    path: "/setMeal",
    name: "SetMeal",
    component: () => import("../views/setMeal.vue"),
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
  {
    path: "/KOLDetail",
    name: "KOLDetail",
    component: () => import("../views/KOLDetail.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/TiktokDetail",
    name: "TiktokDetail",
    component: () => import("../views/TiktokDetail.vue"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (
      !localStorage.getItem("token") &&
      localStorage.getItem("token") === null
    ) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
