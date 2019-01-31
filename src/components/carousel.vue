<template>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="18rem">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="@/assets/100.jpg" alt="carousel">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-carousel{
  max-width: 1210px;
  margin: 0 auto
}


</style>
