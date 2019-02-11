<template>
<div>
  <SearchBar/>
  <Carousel v-if="homeShow" />
  <PoetryCard v-if="homeShow" />
  <SearchCard v-if="!homeShow"/>
</div>
</template>

<script>
import SearchBar from '@/components/searchbar'
import Carousel from '@/components/carousel'
import PoetryCard from '@/components/poetrycard'
import SearchCard from '@/components/searchcard'
export default {
computed:{
  homeShow(){
    return this.$store.state.homeShow
  }
},
components:{
  SearchBar,Carousel,PoetryCard,SearchCard
}
}
</script>

<style scoped>

</style>
