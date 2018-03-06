<template>
  <div>
    <div class="banner" :style="{ 'background-image': `url(${banner.image})` }">
      <div class="content">
        <h1 class="title">{{ $nuxt.$options.head.title }}</h1>
        <p class="subtitle">{{ banner.subtitle }}</p>
      </div>
    </div>
    <section class="container">
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      banner: {
        image: 'https://images.unsplash.com/photo-1517583106829-61e14fcbddf5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8a51e7f1bf1b8bc291eacdb9b912af2&fit=crop&w=1000&h=1000&q=80',
        subtitle: 'A lightweight blog integration system based on Node.js'
      }
    }
  },
  computed: {
    ...mapGetters({ post: 'allPost' })
  }
}
</script>
