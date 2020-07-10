<template lang="pug">
  v-app
    Header
    side-menu
    v-main
      v-container( fluid )
        router-view
      Footer
</template>
<script>
import Footer from './components/view-models/Footer'
import Header from './components/view-models/Header'
import SideMenu from './components/view-models/SideMenu'
export default {
  components:{
    Footer ,
    Header ,
    SideMenu ,
  },
  mounted(){
    // TODO ユーザ情報を取得できるキーがあれば
    this.$store.dispatch('Profile/getMyProfile')
  }
}
</script>
<style lang="scss">
</style>
