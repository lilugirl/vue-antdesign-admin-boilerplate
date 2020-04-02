import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueI18n);

// 准备翻译的语言环境信息
const messages = {
  zh: {
    message: {
      hello: "你好 世界"
    }
  },
  en: {
    message: {
      hello: "hello world"
    }
  },
  ja: {
    message: {
      hello: "こんにちは、世界"
    }
  }
};

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: "ja", // 设置地区
  messages // 设置地区信息
});

const app = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.prototype.$i18n = app.$i18n;
