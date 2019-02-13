import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {authorSearch,poetrySearch,likeSearch} from './apis'

const errMsg=[{title:"对不起，找不到您搜索的内容",content:"",authors:""}]

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeShow:true,
    searchValue:"3",
    searchInput:"",
    authorName:"",
    authorDesc:"",
    poetryList:[],
    loadingStatus:false
  },
  mutations: {
    startLoading(state){
      state.loadingStatus=true
    },
    stopLoading(state){
      state.loadingStatus=false
    },
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
    changePoetry(state,newvalue){
      state.poetryList=newvalue;
      state.loadingStatus=false
    },
    clearAll(state){
      state.authorName=""
      state.authorDesc=""
      state.poetryList=[]
      state.loadingStatus=false
    },
    homeHide(state){
      state.homeShow=false
    },
    homeShow(state){
      state.homeShow=true
    }
  },
  actions: {
    search({commit,state}){
      commit('startLoading')
      if(state.searchValue==="2"){
        axios.get(`${authorSearch}${state.searchInput}`).then(
        res=>{commit('changeAuthor',res.data.result[0])
          commit('stopLoading')
      }).catch(
        err=>{state.authorName="对不起，找不到您搜索的内容";state.authorDesc=''
        commit('stopLoading')})
      }
      else if(state.searchValue==="1"){
        axios.get(`${poetrySearch}${state.searchInput}`).then(res=>{
          if (res.data.result.length!==0){
            commit('changePoetry',res.data.result)}
          else{
            commit('changePoetry',errMsg)
          }
        }).catch(err=>{commit('changePoetry',errMsg)}
        )
      }
      else{
        axios.get(`${likeSearch}${state.searchInput}`).then(res=>{
          if (res.data.result.length!==0){
            commit('changePoetry',res.data.result)}
          else{
            commit('changePoetry',errMsg)
          }
        }).catch(err=>{commit('changePoetry',errMsg)}
        )
      }
    }
  }
})
