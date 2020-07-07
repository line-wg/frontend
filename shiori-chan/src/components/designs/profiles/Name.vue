<template lang="pug">
    div {{ name }}
</template>
<script>
export default {
  props: {
    name : {
      type: String ,
      default : 'No Name'
    }
  } ,
}
</script>
<style lang="scss">
</style>
