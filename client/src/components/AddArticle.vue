<template lang="html">
  <div class="container">
    <div class="row">
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
        <b-form-input v-model="add.category" type="text" placeholder="Enter your title"></b-form-input>
        <br>
        <div class="row">
          <div class="col-md-12">
            <b-button class="col-md-12 btn btn-success" @click="add()">SUBMIT</b-button>
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
      }
    }
  },
  methods: {
    add () {
      this.axios.post('http://localhost:3000/api/articles', {
        
      })
    }
  }
}
</script>

<style lang="css">
</style>
