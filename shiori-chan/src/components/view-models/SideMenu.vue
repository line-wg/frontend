<template lang="pug">
  v-navigation-drawer( 
    app
    temporary
    v-model="$store.state.SideMenu.isShowing" 
  )
    v-container
      v-row
        v-col( col=6 )
          profile-image( :src="$store.state.Profile.image" )
        v-col( cols=6 )
          profile-name( :name="$store.state.Profile.username" )
          link-button( text="変更する" @click="$emit('clickEditProfile')" )
      participation-event-button(
        :eventName="$store.state.Profile.eventName"
        :src="$store.state.Profile.eventSrc"
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
}
</script>
<style lang="scss">
</style>
