<template>
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect">
  <el-menu-item index="1">主页</el-menu-item>
  <el-menu-item index="2">挑战</el-menu-item>
  <el-menu-item index="3"><a href="#" target="_blank">登陆</a></el-menu-item>
</el-menu>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-menu--horizontal>.el-menu-item{
  height: 3rem !important;
  line-height: 3rem ! important;
}
.el-menu--horizontal{
  max-width: 1210px;
  margin: 0 auto;
}
</style>

