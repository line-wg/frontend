<template lang="pug">
  div イベント一覧画面
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
