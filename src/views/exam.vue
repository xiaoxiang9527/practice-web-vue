<template>
<LogIn v-if="!this.$store.state.loggedIn" />
<div v-else>
  <div class="beforeExam" v-show="!examStart">
    <div class="examRule">请补全诗句中缺少的一个字</div>
     <el-button type="primary" round  @click="startExam">点击我开始挑战</el-button>
  </div>
  <Report v-show="examStart && resultShow" @event="nextOne"/>
  <div class="examArea" v-show="examStart && !resultShow">
    <CountDown v-if="$store.state.counting && this.$store.state.countShow" />
    <span>{{firstHalf}}</span>
    <input type="text" class="fill" maxlength="1" @blur="checkInput" :disabled="disabled" v-model="charInput">
    <span>{{lastHalf}}</span>
    <div v-show="correctOrNot" class="correctOrNot">
      <div :class="correct?'correct':'incorrect'">{{errInfo}}</div>
    </div>
    <div class="nextOne" v-show="disabled">
      <el-button type="primary" round v-show="nextOneButton" @click="nextOne()">下一题</el-button>
      <el-button type="warning" round v-show="nextOneButton" @click="checkReport">看成绩</el-button>
      <div v-show=" (errInfo==='回答错误' || errInfo==='答案不能为空') && counting===false  " style="margin-top:.8rem"  >
        <span class="rightAnswer">正确答案是:{{single}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {recommendPoetry} from '@/apis'
import { setTimeout } from 'timers'

export default {
mounted(){
  this.$store.commit('changeActiveIndex',"2")
  this.char="";this.single=""
},
data(){
  return{
    single:"",
    char:"",
    index:1,
    charInput:"",
    correctOrNot:false,
    correct:false,
    errInfo:"回答错误",
    nextOneButton:true,
  }
},
watch:{
  counting:function(newVal,oldVal){
    if (!newVal && oldVal){
      this.correctOrNot=true
    }
  }
},
computed:{
  resultShow(){
    return this.$store.state.resultShow
  },
  firstHalf(){
   return this.single.slice(0,this.index)
  },
  lastHalf(){
   return this.single.slice(this.index+1,this.single.length)
  },
  examStart(){
    return this.$store.state.examStart
  },
  disabled(){
    if (this.char===this.charInput || !this.counting){
      return true
    }
    else{
      return false
    }
  },
  counting(){
    return this.$store.state.counting
  }
},
components:{
  'LogIn':()=>import('@/components/login'),
  'CountDown':()=>import('@/components/countdown'),
  'Report':()=>import('@/components/report')
},
methods:{
  checkReport(){
    this.$store.commit('changeResultShow',true)
  },
  genChar(juZi){
    let randomC=this.randomNum(juZi.length-1)
    let c= juZi[randomC]
    if (c!==undefined && c!=='，' && c!== '。' && c!==''){
      return {
        char:c,
        index:randomC
      }

    }
    else{
      return {char:juZi[randomC-1],index:randomC-1}
    }
  },
  startExam(){
    this.genPoem()
    setTimeout(()=>{this.$store.commit('startExam');this.$store.commit('startCounting')},500)
  },
  randomNum(Max){
    return (Math.random() * (Max + 1) ) << 0
  },
  genPoem(){
    this.$store.commit('changeCountShow',false)
    this.$axios.get(recommendPoetry).then(
    res=>{
    let content=res.data.result.content.split("|")
    let juZiMaxNum=(content.length-1)
    this.single=content[this.randomNum(juZiMaxNum)]
    let r= this.genChar(this.single)
    this.char=r.char
    this.index=r.index
    this.$store.commit('changeCountShow',true)
    }).catch(err=>{console.log(err)})
    },
  checkInput(){
    this.correctOrNot=true
    if (this.charInput===this.char){
      this.correct=true
      this.$store.commit('increaseRightNum')
      this.errInfo="回答正确"
      this.$store.commit('stopCounting')
    }
    else{
      this.correct=false
      this.errInfo=this.charInput===""?"答案不能为空":"回答错误"
    }
  },
  nextOne(){
      this.genPoem()
      this.charInput=""
      this.correctOrNot=false,
      this.$store.commit('startCounting')
  }
}
}
</script>

<style scoped>
.fill{
  width: 2rem;
  height: 1.5rem;
}
.beforeExam{
  width: 100%;
  max-width: 1210px;
  text-align: center;
  margin:auto
}
.examArea{
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  max-width: 1210px;
  margin: auto
}
.nextOne{
  width: 100%;
  max-width: 1210px;
  text-align: center;
  margin-top: 1.5rem
}
.correct{
  font-size: .9rem;
  color: green
}
.incorrect{
  font-size: .9rem;
  color: red
}
.correctOrNot{
  margin-top: .3rem
}
.examRule{
  margin-bottom: .8rem
}
.rightAnswer{
  font-size: 1rem;
  font-style: italic;
  color: green
}

</style>