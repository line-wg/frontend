<template lang="pug">
  v-app
    side-menu
    v-main
      Header
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
  }
}
</script>
<style lang="scss">
</style>
