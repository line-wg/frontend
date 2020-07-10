<template lang="pug">
  v-carousel-item
    v-card( @click="$emit('click' )" )
      v-img( :src="src" )
</template>
<script>
// clickイベントが必要ない場合の考慮
import NoImage from '../../../assets/noImage.png'
export default {
  props:{
    src:{
      type: String ,
      default : NoImage
    }
  }
}
</script>
<style lang="scss">
</style>
