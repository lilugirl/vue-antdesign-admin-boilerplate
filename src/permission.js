import Vue from "vue";
import router from "./router";
import store from "./store";

import NProgress from "nprogress"; // progress bar
import "@/components/NProgress/nprogress.scss"; // progress bar custom style
import notification from "ant-design-vue/es/notification";
import { setDocumentTitle, domTitle } from "@/utils/domUtil";
import { ACCESS_TOKEN } from "@/store/mutation-types";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["Login", "About", "Home"]; // no redirect whitelist
const defaultRoutePath = "/product";

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  to.meta &&
    typeof to.meta.title !== "undefined" &&
    setDocumentTitle(`${to.meta.title} - ${domTitle}`);
  if (Vue.ls.get(ACCESS_TOKEN)) {
    /* has token */
    if (to.path === "/page/login") {
      next({ path: defaultRoutePath });
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch("GetInfo")
          .then(res => {
            console.log("res", res);
            // 请求带有 redirect 重定向时，登录自动重定向到该地址
            const redirect = decodeURIComponent(from.query.redirect || to.path);
            if (to.path === redirect) {
              // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              next({ ...to, replace: true });
            } else {
              // 跳转到目的路由
              next({ path: redirect });
            }
          })
          .catch(() => {
            notification.error({
              message: "错误",
              description: "请求用户信息失败，请重试"
            });
            store.dispatch("Logout").then(() => {
              next({ path: "/page/login", query: { redirect: to.fullPath } });
            });
          });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next({ path: "/page/login", query: { redirect: to.fullPath } });
      NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
