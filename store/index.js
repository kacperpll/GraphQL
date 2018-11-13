import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

const store = () => {
  return new Vuex.Store({
    state: state,
    actions: actions,
    mutations: mutations,
    getters: getters
  })
}

export default store