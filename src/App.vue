<template>
  <div id="app">
    <el-container>
      <el-header>
        <NavBar/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
  </el-container>
  </div>
</template>

<script>
import NavBar from './components/navbar'
export default {
  name: 'app',
  components:{
    NavBar
  }
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
