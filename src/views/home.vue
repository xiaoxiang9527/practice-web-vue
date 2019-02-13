<template>
<div>
  <SearchBar/>
  <SearchCard v-if="!homeShow"/>
  <Carousel/>
  <PoetryCard />
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
