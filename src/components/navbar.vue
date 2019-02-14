<template>
<el-menu
  :default-active="this.$store.state.activeIndex"
  mode="horizontal">
  <el-menu-item index="1"><router-link to="/" class="link">主页</router-link></el-menu-item>
  <el-menu-item index="2"><router-link to="/exam" class="link">挑战</router-link></el-menu-item>
  <el-button v-if="this.$store.state.loggedIn===true"  type="info" plain size="small" round class="logout" @click="logOut">退出登陆</el-button>
</el-menu>
</template>

<script>
import Cookies from 'js-cookie'
import {site} from '@/apis'
export default {
  mounted(){
    if(Cookies.get(site)==="xiao:xiang"){
    this.$store.commit('logIn')
    }
    else{
    this.$store.commit('logOut')
    }
  },
  methods:{
    logOut(){
      setTimeout(()=>{this.$store.commit('logOut')
      Cookies.remove(site)
      },300)
    }
  }
  }
</script>

<style scoped>
.el-menu--horizontal>.el-menu-item{
  height: 3rem !important;
  line-height: 3rem ! important;
  width: 4rem;
  padding: 0 !important
}
.el-menu--horizontal{
  max-width: 1210px;
  margin: 0 auto;
}
.link{
  display: inline-block;
  width: 4rem;
  text-align: center
}
.logout{
  float:right;
  margin-top: .6rem
}
</style>

