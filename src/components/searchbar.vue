<template>
<div id="searchBar">
  <el-input placeholder="请输入查询内容" v-model="searchInput" class="input-with-select">
    <el-select v-model="searchValue" slot="prepend" placeholder="请选择" @change="clearAll" :disabled="$store.state.loadingStatus">
      <el-option label="诗名查询" value="1"></el-option>
      <el-option label="作者查询" value="2"></el-option>
      <el-option label="模糊查询" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="triggerSearch"></el-button>
  </el-input>
</div>
</template>

<script>
export default {
  computed:{
    searchValue:{
    get:function(){
      return this.$store.state.searchValue
    },
    set:function(newValue){
      this.$store.commit('changeSearch',newValue)
    }
    },
    searchInput:{
    get:function(){
      return this.$store.state.searchInput
    },
    set:function(newValue){
      this.$store.commit('changeSearchInput',newValue)
    }
    }
  },
  methods:{
    clearAll(){
      this.$store.commit('clearAll')
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
  }
}

</script>

<style scoped>
#searchBar{
  text-align: center;
}
  .el-select{
    width: 110px;
  }
.el-input__inner{
  width: auto;
  padding: 0 !important
}
.el-input{
  max-width: 550px;
}
</style>
