export default {
  namespaced : true ,
  state: () => ({
    isShowing : false ,
    canShowing : false
  }) ,
  actions: {
    show({state}){
      state.isShowing = true
    } ,
    canShowing({ state , canShowing }){
      state.canShowing = !canShowing
    }
  }
}