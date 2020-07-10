<template lang="pug">
  v-app-bar(
    app
    dense
    elevate-on-scroll
  )
    v-app-bar-nav-icon( v-if="$store.state.SideMenu.canShowing" @click="showSideMenu()" )
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
