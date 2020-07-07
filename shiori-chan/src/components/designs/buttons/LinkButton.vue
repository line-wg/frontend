<template lang="pug">
  v-btn( 
    text
    small
    :disable="disable"
    @click="$emit('click')"
  ) {{ text }}
</template>
<script>
export default {
  props: {
    disable: {
      type: Boolean,
      default: false ,
    },
    text:{
      type: String ,
      require : true ,
    }
  } ,
}
</script>
<style lang="scss">
</style>
