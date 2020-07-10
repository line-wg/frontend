<template lang="pug">
  div
    participant-event-button
    block-button( 
      class="mb-2"
      text="新しくイベントを作る"
      @click="nextTo('EventCreate')" 
    )
    event-list
</template>
<script>
import BlockButton from '../../components/designs/buttons/BlockButton'
import EventList from '../../components/view-models/events/EventList'
import ParticipantEventButton from '../../components/designs/events/ParticipationEventButton'
export default {
  components:{
    BlockButton ,
    EventList ,
    ParticipantEventButton ,
  },
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
