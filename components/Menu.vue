<template>
  <div class="menu">
    <div class="logo">
      <router-link to="/"><span>{{ $nuxt.$options.head.title }}</span></router-link>
    </div>
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