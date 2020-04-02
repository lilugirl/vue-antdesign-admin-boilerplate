<template>
 <section class="km-layout">
    <header class="km-layout-header">
        <div class="km-logo"></div>
        <div class="km-sitename km-font4">某某某操作平台</div>
        <span>  <LocaleChange
    /></span>
    </header>
    <main class="km-layout-content">
         <div>
        <router-link to="/">产品</router-link> |
        <router-link to="/user">User</router-link> |
        <router-link to="/page/login">登出</router-link>
      </div>
      <h2>{{ $t("message.hello") }}</h2>
      <router-view />
    </main>
    <footer class="km-layout-footer">版权信息</footer>
   </section>
 
</template>
<script>
import "../assets/css/reset.css";
import "../assets/css/main.css";
import LocaleChange from "../components/LocaleChange.vue";

export default {
  components: {
    LocaleChange
  }
};
</script>
