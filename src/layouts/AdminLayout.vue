<template>
   <div>
      <h1> Admin layout</h1> 

        <router-link to="/">产品</router-link> |
        <router-link to="/user">User</router-link> |
        <router-link to="/page/login">登出</router-link>
        <router-view />
   </div>
</template>
<script>
export default {
    
}
</script>