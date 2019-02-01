<template>
<div>
  <SearchBar/>
  <Carousel/>
  <PoetryCard/>
</div>
</template>

<script>
import SearchBar from '@/components/searchbar'
import Carousel from '@/components/carousel'
import PoetryCard from '@/components/poetrycard'
export default {
components:{
  SearchBar,Carousel,PoetryCard
}
}
</script>

<style scoped>

</style>
