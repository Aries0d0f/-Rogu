<template>
  <div id="app">
    <Menu/>
    <nuxt class="main" />
    <mainFooter/>
  </div>
</template>

<script>
import model from '~/components'
export default {
  components: model
}
</script>

<style lang="scss">
@import "~assets/scss/main.scss";
</style>