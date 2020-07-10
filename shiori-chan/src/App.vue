<template lang="pug">
  v-app
    Header
    side-menu(
      @clickEditProfile="nextTo('Profile')"
      @clickParticipationEvent="nextTo('EventDetail')"
      @clickEventList="nextTo('EventList')"
      @clickNotify="nextTo('Notify')"
      @clickRollCall="nextTo('RollCallList')"
      @clickManual="nextTo('Manual')"
    )
    v-main
      v-container( fluid )
        router-view
      Footer
</template>
<script>
// TODO 参加中のイベントボタンでどのイベントの詳細に遷移するか記載していない
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
  } ,
  methods:{
    nextTo( name ){
      this.$router.push( { name } );
    }
  }
}
</script>
<style lang="scss">
</style>
