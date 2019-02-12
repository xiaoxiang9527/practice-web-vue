import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeShow:false,
    searchValue:"2",
    searchInput:"",
    authorName:"",
    authorDesc:""
  },
  mutations: {
    changeSearch(state,n){
      state.searchValue=n
    },
    changeSearchInput(state,newInput){
      state.searchInput=newInput
    },
    changeAuthor(state,newvalue){
      state.authorName=newvalue.name
      state.authorDesc=newvalue.desc
    },
  },
  actions: {
    search({commit}){
        axios.get("http://api.apiopen.top/searchAuthors?name=李白").then(
        res=>{commit('changeAuthor',res.data.result[0])}).catch(err=>{console.log(err)})
    }
  }
})
