<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="3rem" class="demo-ruleForm">
    <div class="note">请使用如下测试账号登陆:</div>
    <div class="note">账号:xiao</div>
    <div class="note">密码:xiang</div>
    <el-form-item label="账号" prop="account">
      <el-input type="text" v-model="ruleForm2.account" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm" @keyup.enter="submitForm">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Cookies from 'js-cookie'
import {site} from '@/apis'
export default {
mounted(){
  this.$store.commit('changeActiveIndex',"3")
  if(Cookies.get(site)==="xiao:xiang"){
    this.$store.commit('logIn')
    this.ruleForm2.account="xiao"
  }
  else{
    this.$store.commit('logOut')
  }
},
data() {
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          setTimeout(() => {
          if (value !== 'xiao') {
            callback(new Error('账号不存在'));
          } else {
            callback()
          }
        }, 600);
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value !== 'xiang') {
            callback(new Error('密码错误'));
          } else {
            callback()
          }
        }
      };
      return {
        ruleForm2: {
          account: '',
          pass: ''
        },
        rules2: {
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(){
        setTimeout(()=>{
          if (this.ruleForm2.account==='xiao' && this.ruleForm2.pass==='xiang' ){
          this.$store.commit('logIn')
          Cookies.set(site,`${this.ruleForm2.account}:${this.ruleForm2.pass}`,{ expires: 7 })
        }
        else{
          return false
        }
        },500)
      }
    }
}
</script>

<style scoped>
.el-form-item {
  max-width: 400px;
  margin: 1rem auto
}
h4{
  text-align: center
}
.note{
  font-size: .8rem;
  text-align: center
}
</style>
