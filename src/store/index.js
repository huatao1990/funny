import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutation'
import * as type from './mutation-type'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count: 0
    },
    getters,
    actions,
    mutations
})
