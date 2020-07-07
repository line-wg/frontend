<template lang="pug">
  v-navigation-drawer( 
    absolute
    temporary
    v-model="$store.state.SideMenu.isShowing" 
  )
    v-container
      v-row
        v-col( col=6 )
          profile-image( :src="image" )
        v-col( cols=6 )
          profile-name( :name="username" )
          link-button( text="変更する" @click="$emit('clickEditProfile')" )
      participation-event-button(
        :eventName="eventName"
        :src="eventSrc"
      )
      block-button( class="mt-3" text="イベント一覧へ" @click="$emit('clickEventList')" )
      block-button( class="mt-3" text="プッシュ通知" @click="$emit('clickNotify')" )
      block-button( class="mt-3" text="点呼する" @click="$emit('clickRollCall')" )
      block-button( class="mt-3" text="使い方" @click="$emit('clickManual')" )
</template>
<script>

// designs
import BlockButton from '../designs/buttons/BlockButton'
import LinkButton from '../designs/buttons/LinkButton'
import ParticipationEventButton from '../designs/events/ParticipationEventButton'
import ProfileImage from '../designs/profiles/Image'
import ProfileName from '../designs/profiles/Name'

export default {
  components: {
    BlockButton ,
    LinkButton ,
    ProfileImage ,
    ProfileName ,
    ParticipationEventButton ,
  } ,
  data: () => ({
    image : null ,
    username : null ,
    eventName : null ,
    eventSrc : undefined , // nullの場合participation-event-buttonでtypeエラーになる
  }),
  mounted(){
    this.$store.dispatch('Profile/getMyProfile')
      .then( response => {
        this.image = response.data.imageBase64
        this.username = response.data.displayUserName
        this.eventName = response.data.participantEventName
        this.eventSrc = response.data.participantEventImageBase64
      })
  },
}
</script>
<style lang="scss">
</style>
