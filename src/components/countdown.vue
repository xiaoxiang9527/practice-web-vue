<template>
  <div>
    <div><span style="font-size:1rem;margin-bottom:.5rem;display:inline-block">倒计时:</span></div>
    <div><span :class="$store.state.countNum<=3?'countnum orange':'countnum aqua'">{{$store.state.countNum}}</span></div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers'
var timer
export default {
mounted(){
 timer=setInterval(()=>{this.$store.commit('countDown')},1000)
},
beforeDestroy(){
  clearInterval(timer)
  this.$store.commit('resetCountNum')
  timer=null
}
}
</script>

<style scoped>
.countnum{
display: inline-block;
width: 3rem;
border-radius: 50%;
margin-bottom:1rem;
font-size: 2rem;
}
.aqua{
  background-color: aqua
}
.orange{
  background-color: orange
}
</style>
