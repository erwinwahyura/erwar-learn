<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <b-tabs>
          <b-tab title="Sign In" active>
            <br>
            <div class="col-md-6 offset-md-3 auth">
              <br>
              <label for="username">USERNAME</label>
              <b-form-input v-model="user.username" type="text" placeholder="Enter your name"></b-form-input>
              <br>
              <label for="password">PASSWORD</label>
              <b-form-input v-model="user.password" type="password" placeholder="Enter your password"></b-form-input>
              <br>
              <div class="row">
                <div class="col-md-12">
                  <b-button class="col-md-12 btn btn-success" @click="signin()">SUBMIT</b-button>
                </div>
              </div>
              <br>
            </div>
          </b-tab>
          <b-tab title="Sign Up" >
            <br>
            <div class="col-md-6 offset-md-3 auth">
              <br>
              <label for="username">USERNAME</label>
              <b-form-input v-model="userRegis.username" type="text" placeholder="Enter your name"></b-form-input>
              <br>
              <label for="password">PASSWORD</label>
              <b-form-input v-model="userRegis.password" type="password" placeholder="Enter your password"></b-form-input>
              <br>
              <div class="row">
                <div class="col-md-12">
                  <b-button class="col-md-12 btn btn-success" @click="signup()">SUBMIT</b-button>
                </div>
              </div>
              <br>
            </div>
          </b-tab>
        </b-tabs>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      userRegis: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      var self = this
      this.axios.post('http://localhost:3000/users/signin', {
        username: self.user.username,
        password: self.user.password
      })
      .then(response => {
        console.log(response.data)
        var token = response.data.token
        var id = response.data.id
        var username = response.data.username
        localStorage.setItem('token', token)
        localStorage.setItem('username', username)
        localStorage.setItem('id', id)
        self.$router.push('/')
      })
      .catch(err => console.log(err))
    },
    signup () {
      this.axios.post('http://localhost:3000/users/signup', {
        username: this.userRegis.username,
        password: this.userRegis.password
      })
      .then(response => {
        this.userRegis.username = ''
        this.userRegis.password = ''
        console.log(response.data)

        this.$router.push('/auth')
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="css">
label {
  display: flex;
  margin-bottom: 1.5rem;
}
.auth {
  border: 1px solid #e4e6e8;
  margin-top: 50px;

}
.col-md-12 {
  margin-top: 20px;
}
</style>
