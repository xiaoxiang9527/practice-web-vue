<template>
<LogIn v-if="!this.$store.state.loggedIn" />
<div v-else>哈哈哈哈哈</div>
</template>

<script>
export default {
mounted(){
  this.$store.commit('changeActiveIndex',"2")
},
components:{
  'LogIn':()=>import('@/components/login')
}
}
</script>

<style scoped>

</style>