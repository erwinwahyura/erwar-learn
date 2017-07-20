<template lang="html">
  <div class="container">
    <div class="row">
      <br>
      <br>
      <div class="col-md-6 offset-md-3 add">
        <br>
        <label for="title">TITLE</label>
        <b-form-input v-model="add.title" type="text" placeholder="Enter your title"></b-form-input>
        <br>
        <label for="description">CONTENT</label>
        <b-form-input textarea v-model="add.description" placeholder="Enter your description"></b-form-input>
        <br>
        <label for="title">CATEGORY</label>
        <b-form-input v-model="add.category" type="text" placeholder="Enter your category"></b-form-input>
        <br>
        <div class="row">
          <div class="col-md-12">
            <b-button class="col-md-12 btn btn-success" @click="addArticle()">SUBMIT</b-button>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      add: {
        title: '',
        description: '',
        category: ''
      },
      articles: []
    }
  },
  methods: {
    addArticle () {
      var self = this
      this.axios.post('http://localhost:3000/api/articles', {
        title: self.add.title,
        content: self.add.content,
        category: self.category,
        author: localStorage.getItem('id')
      }, {headers: { token: localStorage.getItem('token') }})
      .then((response) => {
        console.log(response.data)
        alert('Add Todo Success!')
      })
      .catch((err) => { console.log(err) })
    }
  }
}
</script>
<style lang="css" scoped>
.col-md-6 {
  border: 1px solid #e4e6e8;
}
</style>
