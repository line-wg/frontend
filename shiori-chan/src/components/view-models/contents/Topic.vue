<template lang="pug">
  image-carousel( :items="contents" @click="clickImage" )
</template>
<script>
import ImageCarousel from '../../designs/banners/ImageCarousel'
export default {
  data:() => ({
    contents : [] ,
  }),
  components:{
    ImageCarousel
  },
  mounted(){
    this.$store.dispatch('Content/getShortTermContents')
      .then( response => {
        this.contents = response.data.contents
      });
  },
  methods:{
    clickImage( index ){
      let content = this.contents[index]
      if( content.isExternalWebSiteUrl ){
        window.location.href = content.url
        return;
      }
      this.$emit( "click" , content.url )
    }
  }
}
</script>
<style lang="scss">
</style>
