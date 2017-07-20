<template lang="html">
  <div class="container">
    <div class="sidebar">
      <div class="col-md-3">
        <ArticleList></ArticleList>
      </div>
    </div>
    <div class="col-md-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
export default {
  components: {
    ArticleList
  }
}
</script>

<style lang="css" scoped>
.container {
  margin-top: 30px;
  text-align: left;
}
img {
  height: 50px;
  width: auto;
}
</style>
