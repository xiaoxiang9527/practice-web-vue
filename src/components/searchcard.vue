<template>
<div class="searchCardContainer">
  <el-card class="search-box-card">
    <div v-for="o in searchContent" :key="o">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  mounted() {
    this.searchPoetry()
  },
  data() {
    return {
      searchContent:["一","二","三","四"]
    }
  },
  methods: {
    searchPoetry(){
      this.$axios.get("http://api.apiopen.top/searchAuthors?name=李白").then(res=>{console.log(res.result)})
    }
  }
}
</script>

<style scoped>
.searchCardContainer{
  width: 100%;
  max-width: 1210px;
  margin:1rem auto 0 auto;
}
</style>
