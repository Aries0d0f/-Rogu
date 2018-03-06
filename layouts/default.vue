<template>
  <div id="app">
    <Menu/>
    <nuxt class="main" />
    <mainFooter/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import model from '~/components'
export default {
  components: model,
  async mounted () {
    await this.getPost()
  },
  methods: {
    ...mapActions({ getPost: 'getAllPost' })
  }
}
</script>

<style lang="scss">
@import "~assets/scss/main.scss";
</style>