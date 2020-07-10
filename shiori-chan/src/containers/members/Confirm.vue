<template lang="pug">
  div メンバー情報変更確認画面
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
