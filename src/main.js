import Vue from "vue";
import VueI18n from "vue-i18n";
import I18nMessages from "./locale";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import axios from "axios";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueI18n);

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: "ja", // 设置地区
  messages: I18nMessages // 设置地区信息
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
