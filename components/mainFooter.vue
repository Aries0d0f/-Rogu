<template>
  <div class="footer">
    <div class="footer-content">
      <h1>{{ $nuxt.$options.head.title }}</h1>
      <ul>
        <li><a href="https://github.com/Aries0d0f/uRogu/" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /><span>@Aries0d0f</span></a></li>
        <li><a href="mailto:aries0d0f@gmail.com" target="_blank"><font-awesome-icon :icon="['fas', 'envelope']" /><span>aries0d0f@gmail.com</span></a></li>        
      </ul>
    </div>
    <a href="https://github.com/Aries0d0f/uRogu/" target="_blank" class="brand">
      <img src="~assets/images/logo-dark.png" alt="">
      <div>
        <p>Powered by</p>
        <h1>μRogu</h1>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    
  }
</script>