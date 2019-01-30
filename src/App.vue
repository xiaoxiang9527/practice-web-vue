<template>
  <div id="app">
    <el-container>
      <el-header height>
        <NavBar/>
        <Home/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
  </el-container>
  </div>
</template>

<script>
import NavBar from './components/navbar'
import Home from '@/views/home'
export default {
  name: 'app',
  components:{
    NavBar,Home
  }
}
</script>

<style>
 
  .el-main {
    background-color: #E9EEF3;
  }
  
</style>
