<template lang="pug">
  div イベント詳細画面
</template>
<script>
export default {
  created(){
    this.$store.dispatch( 'SideMenu/canShowing' , true )
  },
}
</script>
<style lang="scss">
</style>
