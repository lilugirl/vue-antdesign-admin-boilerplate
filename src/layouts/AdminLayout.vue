<template>
   <div>
      <h1> Admin layout</h1> 
      <LocaleChange />
 <h2> {{ $t("message.hello") }}</h2>
        <router-link to="/">产品</router-link> |
        <router-link to="/user">User</router-link> |
        <router-link to="/page/login">登出</router-link>
        <router-view />
   </div>
</template>
<script>
import LocaleChange from '../components/LocaleChange.vue'

export default {
  components: {
    LocaleChange
  }
}
</script>