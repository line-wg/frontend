<template lang="pug">
  div
    banner(
      v-for="( item , index ) in contents"
      class="mb-2"
      :key="item.id"
      :src="item.src"
      @click="clickImage( index )"
    )
</template>
<script>
import Banner from '../../designs/banners/Banner'
export default {
  data:() => ({
    contents : [] ,
  }),
  components:{
    Banner
  },
  mounted(){
    this.$store.dispatch('Content/getLongTermContents')
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
