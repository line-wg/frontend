<template lang="pug">
  div イベント編集画面
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
