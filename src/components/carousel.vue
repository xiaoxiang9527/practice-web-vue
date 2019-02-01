<template>
  <div class="block">
    <el-carousel height="18rem">
      <el-carousel-item v-for="item in bannerPictureList" :key="item.id">
        <img class="carouselImg" :src="item.src" alt="carousel">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
data(){
  return{
    bannerPictureList:[
      {id:1,src:require("@/assets/100.jpg")},
      {id:2,src:require("@/assets/200.jpg")},
      {id:3,src:require("@/assets/300.jpg")},
      {id:4,src:require("@/assets/400.jpg")}
    ]
  }
}
}
</script>

<style scoped>
.el-carousel{
  max-width: 1210px;
  margin: 1.5rem auto
}
.carouselImg{
  object-position: center;
  object-fit: cover
}


</style>
