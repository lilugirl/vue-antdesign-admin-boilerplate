<template>
    <div>
         <h1> Page layout</h1> 

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
export default {
    
}
</script>