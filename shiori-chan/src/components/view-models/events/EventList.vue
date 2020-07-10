<template lang="pug">
  div
    v-tabs(
      v-model="tab"
      grow
    )
      v-tab(
        v-for="( content , index ) in contents"
        :key="index"
      ) {{ content.name }}
      v-tabs-items(
        v-model="tab"
      )
</template>
<script>
export default {
  data:()=>({
    tab: null ,
    contents: [
      {
        name:"参加中のイベント" ,
      } ,
      {
        name:"参加できるイベント" ,
      } ,
      {
        name:"あなたにおすすめのイベント" ,
      } ,
      {
        name:"終了したイベント" ,
      } ,
    ]
  }) ,
}
</script>
<style lang="scss">
</style>
