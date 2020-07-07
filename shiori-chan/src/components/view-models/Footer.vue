<template lang="pug">
  v-footer( 
    absolute 
    app 
  ) {{ copyright }}
</template>
<script>
export default {
  data() {
    return {
      copyright: ''
    }
  },
  mounted() {
    let nowYear = new Date().getYear() + 1900
    this.copyright = `Copyright 2017-${nowYear} Inc, Opensesame Technology All Rights Reserved.`
  }
}
</script>
<style lang="scss">
</style>
