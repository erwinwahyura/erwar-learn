<template lang="html">
  <div class="container">
    <b-card>
      <b-media>
        <img slot="aside" src="http://placeskull.com/200/200/ABABAB/-1/0">
        <h5 class="mt-0">{{ detail.title }}</h5>
        <p>{{ detail.content }}</p>
        <p>category: {{ detail.category }}</p>
        <p>author: {{ detail.author.username }}</p>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      detail: []
    }
  },
  watch: {
    id (newId) {
      this.axios.get('http://localhost:3000/api/articles/' + this.id)
      .then(response => {
        console.log(response.data)
        this.detail = response.data
      })
      .catch(err => { console.log(err) })
    }
  },
  methods: {
    getById () {
      this.axios.get('http://localhost:3000/api/articles/' + this.id)
      .then(response => {
        console.log(response.data)
        this.detail = response.data
      })
      .catch(err => { console.log(err) })
    }
  },
  created () {
    this.getById()
  }
}
</script>

<style lang="css">
</style>
