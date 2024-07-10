import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/css/reset200802.css";
import VueI18n from "vue-i18n";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/theme/element/index.css"

// 引入语言文件
import en from "./locales/en.json";
import zh from "./locales/zh.json";

Vue.use(VueI18n);
Vue.use(ElementUI);

// 创建i18n实例，并传入选项
const i18n = new VueI18n({
  locale: "zh", // 设置地区
  messages: {
    en: en, // 英文语言包
    zh: zh, // 中文语言包
  },
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
