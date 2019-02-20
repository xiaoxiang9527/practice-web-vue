<template>
<div class="report">
  <span>xiao, 你一共答对了{{rightNum}}道题目，请继续加油！</span>
  <div class="report">
    <el-button type="primary" round @click="restartExam()">重新开始测试</el-button>
  </div>
</div>
</template>

<script>
export default {
computed:{
  rightNum(){
    return this.$store.state.rightNum
  }
},
methods:{
  restartExam(){
    this.$store.commit('resetRightNum')
    this.$store.commit('changeResultShow',false)
    this.$emit('event')
  }
}
}
</script>

<style scoped>
.report{
  width: 100%;
  max-width: 1210px;
  text-align: center;
  margin-top: .8rem;
  margin: auto
}
</style>
