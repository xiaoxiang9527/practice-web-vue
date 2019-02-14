<template>
  <div id="app">
    <el-container>
      <el-header height>
        <NavBar/>
      </el-header>
      <el-main> 
        <router-view></router-view>
      </el-main>
      <el-footer height="100px">
        <div id="footerImgContainer">
        <img src="@/assets/footer.jpg" alt="此处有词一句">
        </div>
      </el-footer>
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
 
  .el-main {
    padding: 1rem .5rem !important;
  }
  .el-header{
    padding: 0 0.5rem !important;
  }
  .el-footer{
    text-align: center;
    padding: 0 0.5rem !important
  }
  #footerImgContainer{
    max-width: 1210px;
    background-color: #f5f7fa;
    margin: 0 auto
  }
  
</style>
