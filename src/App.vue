<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
  </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
  }
  .el-main {
    background-color: #E9EEF3;
  }
  
</style>
