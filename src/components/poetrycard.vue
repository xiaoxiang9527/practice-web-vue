<template>
  <div class="cardContainer">
    <div class="boxHeader">
      <span>>>随机诗词推荐</span> <el-button type="text" class="switchPoem" @click="switchRandomPoem">点我换一首</el-button>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix cardHeader">
        <span class="cardTitle">{{title}}</span>
        <span class="cardDelimeter"></span>
        <span class="cardAuthor">{{author}}</span>
      </div>
      <div v-for="(item,index) in content" :key="index" class="item cardContent">
        {{item }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted(){
   this.switchRandomPoem()
  },
  data(){
    return{
      title:'',
      author:'',
      content:[]
    }
  },
  methods:{
    switchRandomPoem(){
      this.$axios.get('https://api.apiopen.top/recommendPoetry').then(
      res=>{let r=res.data.result;this.title=r.title;this.author=r.authors;
      this.content=r.content.split("|")}).catch(err=>{console.log(err)})
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

  .box-card, .cardContainer {
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
</style>
