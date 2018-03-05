<template>
  <div class="menu">
    <router-link to="/" class="logo"><img src="~assets/images/logo.png" alt=""><span>{{ $nuxt.$options.head.title }}</span></router-link>
    <ul class="nav">
      <li><router-link to="/post">Archive</router-link></li>
      <li><router-link to="/category">Category</router-link></li>
    </ul>
    <ul class="toolbox">
      <li><span><font-awesome-icon :icon="['fas', 'search']" /></span></li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>