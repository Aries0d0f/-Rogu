<template>
  <div class="menu">
    <router-link to="/" class="logo"><img src="~assets/images/logo.png" alt=""><span>{{ $nuxt.$options.head.title }}</span></router-link>
    <ul class="nav">
      <li><router-link to="/post">文章列表</router-link></li>
      <li><router-link to="/category">文章分類</router-link></li>
    </ul>
    <ul class="toolbox">
      <li><font-awesome-icon :icon="['fas', 'search']" /></li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>