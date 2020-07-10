import axios from 'axios'

export default {
  namespaced : true ,
  actions: {
    getShortTermContents(){
      return axios.get('https://localhost:44384/shiori-chan/api/content/short-term')
    },
    getLongTermContents(){
      return axios.get('https://localhost:44384/shiori-chan/api/content/long-term')
    },
  }
}