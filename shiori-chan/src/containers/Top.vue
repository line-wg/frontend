<template lang="pug">
  div 
    topic( 
      class="mb-2"
      @click="nextTo"
    )
    participation-event-button( 
      v-if="$store.state.Profile.eventSrc" 
      class="mb-2"
      :eventName="$store.state.Profile.eventName"
      :src="$store.state.Profile.eventSrc" 
    )
    block-button( 
      class="mb-2"
      text="新しくイベントを作る"
      @click="nextTo('EventCreate')" 
    )
    banners( @click="nextTo" )
</template>
<script>
// designs
import BlockButton from '../components/designs/buttons/BlockButton'
import ParticipationEventButton from '../components/designs/events/ParticipationEventButton'

// view-models
import Banners from '../components/view-models/contents/Banners'
import Topic from '../components/view-models/contents/Topic'

export default {
  components:{
    Banners ,
    BlockButton ,
    ParticipationEventButton ,
    Topic ,
  } ,
  created(){
    this.$store.dispatch( 'SideMenu/canShowing' , true )
  },
  methods:{
    nextTo( name ){
      this.$router.push( { name } )
    }
  }
}
</script>
<style lang="scss">
</style>

