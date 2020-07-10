import Vue from 'vue'
import Vuex from 'vuex'

import Content from './modules/Content'
import Profile from './modules/Profile'
import SideMenu from './modules/SideMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false ,
  modules: {
    Content ,
    Profile ,
    SideMenu ,
  }
})
