import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeShow:false,
    searchValue:"2",
    searchInput:""
  },
  mutations: {
    changeSearch(state,n){
      state.searchValue=n
    },
    changeSearchInput(state,newInput){
      state.searchInput=newInput
    }
  },
  actions: {

  }
})
