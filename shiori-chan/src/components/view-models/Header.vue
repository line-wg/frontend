<template lang="pug">
  v-app-bar(
    dense
    elevate-on-scroll
  )
    v-app-bar-nav-icon( @click="showSideMenu()" )
</template>
<script>
export default {
  methods: {
    showSideMenu(){
      this.$store.dispatch('SideMenu/show')
    }
  }
}
</script>
<style lang="scss">
</style>
