import axios from 'axios'

export default {
  namespaced: true ,
  actions : {
    getMyProfile(){
      return axios.get('https://localhost:44384/shiori-chan/api/profile')
    }
  } ,
}
