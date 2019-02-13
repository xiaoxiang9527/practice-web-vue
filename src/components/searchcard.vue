<template>
<div class="searchCardContainer">
  <el-card class="search-box-card">
    <Loading v-if="loadingStatus" />
    <div v-if="(searchValue==='2')&&(!loadingStatus)" class="authorBox">
     <div class="authorName">{{authorName}}</div>
     <div class="authorDesc">{{authorDesc}}</div>
    </div>
    <div v-else-if="(searchValue==='1'||searchValue==='3')&&(!loadingStatus)" class="poetryBox">
      <el-pagination class="pagination" v-if="totalNum!==0 && poetryList[0].title!=='对不起，找不到您搜索的内容'"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="ChangeCurrent"
        layout="total, prev, pager, next, jumper"
        :total="totalNum">
      </el-pagination>
      <div v-for="poem of poetry">
        <div class="poetryHeaderContainer">
          <span class="cardTitle">{{poem.title}}</span>
          <span class="cardDelimeter"></span>
          <span class="cardAuthor">{{poem.authors}}</span>
        </div>
        <div v-for="(juzi,index) in poem.content.split('|')" :key="index" class="item cardContent">
          {{juzi}}
        </div>
      </div>
    </div>
  </el-card>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from './loading'
import {authorSearch} from '@/apis'
export default {
  mounted(){
    this.triggerSearch()
  },
  data(){
    return{
      pageSize:8,
      currentPage:1
    }
  },
  computed:mapState({
    authorName:state=>state.authorName,
    authorDesc:state=>state.authorDesc,
    searchValue:state=>state.searchValue,
    poetryList:state=>state.poetryList,
    totalNum:state=>state.poetryList.length,
    loadingStatus:state=>state.loadingStatus,

    poetry(state){
      if(this.poetryList.length<=8){
        return this.poetryList
      }
      else{
        return this.poetryList.slice(this.pageSize*this.currentPage-8,this.pageSize*this.currentPage)
      }
    }
  }
  ),
  methods:{
    ChangeCurrent(val){
      this.currentPage=val
    },
    triggerSearch(){
      if(this.searchInput===""){
        alert("请输入搜索内容")
      }
      else{
        this.$store.commit('homeHide')
        this.$store.dispatch('search')
      }
    }
  },
  components:{
    Loading
  }
}
</script>

<style scoped>
.searchCardContainer{
  width: 100%;
  max-width: 1210px;
  margin:1rem auto 0 auto;
}
.poetryBox{
  margin-top: -20px;
}
.authorName{
  font-size: 1.2rem;
  padding-bottom: .5rem;
  text-align: center
}
.authorDesc{
 text-align: center;
 line-height: 1.8;
 letter-spacing: .08rem
}
  .cardDelimeter{
    width: 2.5rem;
    display: inline-block;
  }
  .cardAuthor{
    font-style: oblique;
    font-size: .9rem;
    font-weight: 300
  }
   .cardTitle{
    font-size: 1.2rem;
  }
    .cardContent{
    text-align: center;
    padding-top: .8rem;
  }
  .poetryHeaderContainer{
    text-align: center;
    padding-top:2.2rem
  }
 .pagination{
   white-space: normal !important
 }
</style>
