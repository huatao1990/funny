import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {fetchData} from './api'

export function createStore () {
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            fetchData ({commit},id) {
              return  fetchData(id).then(item=> {
                  commit('setItem',{id,item})
              })
            }
        },
        mutations: {
            setItem (state,{id,item}) {
                Vue.set(state.items,id,item)
            }
        }
    })
}