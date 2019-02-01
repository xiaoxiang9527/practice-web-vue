<template>
<div id="searchBar">
  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="诗词查询" value="1"></el-option>
      <el-option label="作者查询" value="2"></el-option>
      <el-option label="模糊查询" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
</template>

<script>
export default {
  data(){
    return{
      input:'',
      select:''
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
