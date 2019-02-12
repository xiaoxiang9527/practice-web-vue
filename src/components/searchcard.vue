<template>
<div class="searchCardContainer">
  <el-card class="search-box-card">
    <div v-if="1" class="authorBox">
     <div class="authorName">{{authorName}}</div>
     <div class="authorDesc">{{authorDesc}}</div>
    </div>
  </el-card>
</div>
</template>

<script>
import { mapState } from 'vuex'
import {authorSearch} from '@/apis'
export default {
  mounted() {
    this.$store.dispatch('search')
  },
  computed:mapState([
    'authorName','authorDesc'
  ]),
  methods: {

  }
}
</script>

<style scoped>
.searchCardContainer{
  width: 100%;
  max-width: 1210px;
  margin:1rem auto 0 auto;
}
.authorName{
  font-size: 1.2rem;
  padding-bottom: .5rem;
  text-align: center
}
.authorDesc{
 text-align: center;
 line-height: 1.8
}
</style>
