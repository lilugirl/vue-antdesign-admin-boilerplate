import Vue from "vue";
import VueRouter from "vue-router";
import PageLayout from "../layouts/PageLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import Home from "../views/Page/Home.vue";
import Product from "../views/Admin/Product.vue";
import User from "../views/Admin/User.vue";
import Login from "../views/Page/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: AdminLayout,
    redirect: "/product",
    children: [
      {
        path: "/product",
        name: "Product",
        component: Product
      },
      {
        path: "/user",
        name: "User",
        component: User
      }
    ]
  },
  {
    path: "/page",
    name: "Page",
    component: PageLayout,
    redirect: "/page/home",
    children: [
      {
        path: "/page/login",
        name: "Login",
        component: Login
      },
      {
        path: "/page/about",
        name: "About",
        component: () =>
          import(
            /* webpackChunkName: "group-about" */ "../views/Page/About.vue"
          )
      },
      {
        path: "/page/home",
        name: "Home",
        component: Home
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
