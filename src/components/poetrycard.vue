<template>
  <div class="poetryCardContainer">
    <div class="boxHeader">
      <span>>>随机诗词推荐</span> <el-button type="text" class="switchPoem" @click="switchRandomPoem">点我换一首</el-button>
    </div>
    <transition name="fade" v-if="cardShow" mode="out-in" appear>
      <el-card class="box-poetry-card">
      <div slot="header" class="clearfix cardHeader">
        <span class="cardTitle">{{title}}</span>
        <span class="cardDelimeter"></span>
        <span class="cardAuthor">{{author}}</span>
      </div>
      <div v-for="(item,index) in content" :key="index" class="item cardContent">
        {{item }}
      </div>
    </el-card>
    </transition>
  </div>
</template>

<script>
import {recommendPoetry} from '@/apis'
export default {
  mounted(){
   this.switchRandomPoem()
  },
  data(){
    return{
      cardShow:false,
      title:'',
      author:'',
      content:[]
    }
  },
  methods:{
    switchRandomPoem(){
      this.cardShow=false
      this.$axios.get(recommendPoetry).then(
      res=>{let r=res.data.result;this.title=r.title;this.author=r.authors;
      this.content=r.content.split("|");this.cardShow=true}).catch(err=>{console.log(err)})
    }
  }
}
</script>

<style scoped>

  .item {
    margin-bottom: 1rem;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-poetry-card, .poetryCardContainer {
    width: 100%;
    max-width: 1210px;
    margin:0 auto;
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
    font-weight: 600
  }
    .cardContent{
    font-size: 1rem;
    text-align: center
  }
  .cardHeader{
    text-align: center
  }
  .boxHeader{
    position: relative;
  }
  .switchPoem{
    font-size: 1rem;
    padding: 0 3px;
    float: right;
  }
  .fade-enter-active, .fade-appear-active {
    transition: width .3s;
  }
  .fade-leave-active{
    transition:width 0;
  }
  .fade-enter, .fade-leave-to, .fade-appear {
    width:0;
  }

</style>
