import Vue from 'vue'
import Vuex from 'vuex'

import SideMenu from './modules/SideMenu'
import Profile from './modules/Profile'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false ,
  modules: {
    SideMenu ,
    Profile ,
  }
})
