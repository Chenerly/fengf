import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import modules from './modules'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)


const store = new Vuex.Store(
  {
    state,
    modules,
    getters,
    mutations,
    actions,
  }
)

export default store
