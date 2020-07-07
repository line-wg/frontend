export default {
  namespaced : true ,
  state: () => ({
    isShowing : false ,
  }) ,
  actions: {
    show({state}){
      state.isShowing = true
    }
  }
}