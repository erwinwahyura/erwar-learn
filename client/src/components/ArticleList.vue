<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <b-card v-for="la in listArticles">
          <b-media>
            <img slot="aside" src="http://placeskull.com/200/200/ABABAB/-1/0">
            <h5 class="mt-0"><router-link :to="'/detail/'+la._id">{{ la.title }}</router-link></h5>
            <p>author: {{ la.author.username }}</p>
          </b-media>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listArticles: []
    }
  },
  methods: {
    getArticles () {
      this.axios.get('http://localhost:3000/api/articles')
      .then(response => {
        console.log(response.data)
        this.listArticles = response.data
      })
      .catch(err => console.log(err))
    }
  },
  created () {
    this.getArticles()
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
