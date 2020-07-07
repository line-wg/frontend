<template lang="pug">
    img( :src="src" )
</template>
<script>
import NoImage from '../../../assets/noImage.png'
export default {
  props: {
    src : {
      type : String ,
      default : NoImage
    }
  } ,
}
</script>
<style lang="scss">
  // TODO 画像が正方形じゃない場合を考慮
</style>
