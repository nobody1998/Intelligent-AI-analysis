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
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let token = "";
  console.log(localStorage.getItem("user"), 'localStorage.getItem("user")');
  if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")) !== null) {
    token = JSON.parse(localStorage.getItem("user")).access_token;
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
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
