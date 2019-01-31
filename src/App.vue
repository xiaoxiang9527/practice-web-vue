<template>
  <div id="app">
    <el-container>
      <el-header height>
        <NavBar/>
      </el-header>
      <el-main> 
        <Home/>
      </el-main>
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
    padding: 1rem 0 !important
  }
  .el-header{
    padding: 0 0.5rem !important;
  }
  
</style>
