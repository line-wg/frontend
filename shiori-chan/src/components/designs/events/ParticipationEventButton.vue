<template lang="pug">
  v-card( @click="$emit('click')" )
    v-img( :src="src" )
      v-card-title 参加中のイベント
      v-card-subtitle {{ eventName }}
</template>
<script>
import NoImage from '../../../assets/noImage.png'
// TODO 参加しているイベントがなかった場合に@clickが効いてしまう
// factoryから切り替える処理が必要
export default {
  data: () => ({}),
  props: {
    src : {
      type : String ,
      default : NoImage
    } ,
    eventName : {
      type : String ,
      default : ""
    }
  } ,
}
</script>
<style lang="scss">
</style>
