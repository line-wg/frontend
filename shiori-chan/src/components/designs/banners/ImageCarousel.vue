<template lang="pug">
  v-carousel(
    cycle
    height="auto"
    interval=6000
    mandatory=false
    show-arrows
  )
    image-carousel-item(
      v-for="( item , index ) in items"
      :key="item.id"
      :src="item.src"
      @click="$emit('click' , index )"
    )
</template>
<script>
import ImageCarouselItem from './ImageCarouselItem'
// clickイベントが必要ない場合の考慮
export default {
  components: {
    ImageCarouselItem
  } ,
  props:{
    items:{
      type: Array ,
    }
  }
}
</script>
<style lang="scss">
</style>
