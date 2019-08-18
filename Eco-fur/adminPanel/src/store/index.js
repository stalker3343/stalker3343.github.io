import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    Common

  }

})