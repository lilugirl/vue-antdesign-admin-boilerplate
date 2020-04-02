<template>
    <div>
         <h1> Page layout</h1> 
         <LocaleChange />
         <h2> {{ $t("message.hello") }}</h2>

        <div id="nav">
              <router-link to="/page">Home</router-link> |
      <router-link to="/page/login">Login</router-link> |
      <router-link to="/page/about">About</router-link> |
       <router-link to="/">控制面板</router-link>
    </div>
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