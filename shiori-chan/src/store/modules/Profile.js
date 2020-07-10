import axios from 'axios'

export default {
  namespaced: true ,
  state: () => ({
    image : undefined ,
    username : undefined ,
    eventName : undefined ,
    eventSrc : undefined
  }) ,
  actions : {
    getMyProfile( { state } ){
      axios.get('https://localhost:44384/shiori-chan/api/profile')
        .then( response => {
          state.image = response.data.imageBase64
          state.username = response.data.displayUserName
          state.eventName = response.data.participantEventName
          state.eventSrc = response.data.participantEventImageBase64
        });
    }
  } ,
}
