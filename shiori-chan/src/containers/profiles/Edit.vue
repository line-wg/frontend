<template lang="pug">
  div プロフィール編集画面
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
