<template>
<div>
  <SearchBar/>
  <SearchCard v-if="!homeShow"/>
  <Carousel/>
  <PoetryCard />
</div>
</template>

<script>

export default {
mounted(){
  this.$store.commit('changeActiveIndex',"1")
},
computed:{
  homeShow(){
    return this.$store.state.homeShow
  }
},
components:{
  'SearchBar':()=>import('@/components/searchbar'),
  'Carousel':()=>import('@/components/carousel'),
  'PoetryCard':()=>import('@/components/poetrycard'),
  'SearchCard':()=>import('@/components/searchcard')
}
}
</script>

<style scoped>

</style>
