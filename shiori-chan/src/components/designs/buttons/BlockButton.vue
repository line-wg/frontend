<template lang="pug">
  v-btn( 
    block
    @click="$emit('click')"
  ) {{ text }}
</template>
<script>
export default {
  props: {
    text:{
      type: String ,
      require : true ,
    }
  } ,
}
</script>
<style lang="scss">
</style>
