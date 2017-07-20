<template lang="html">
  <div class="container">
    <b-navbar toggleable type="inverse" variant="success" v-if="islogin">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <span>Erwar-Vue</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <!-- <b-nav is-nav-bar>
          <b-nav-item>Support</b-nav-item>
          <b-nav-item>Docs</b-nav-item>
          <b-nav-item>Contact Us</b-nav-item>
        </b-nav> -->

        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item-dropdown right>

            <!-- Using button-content slot -->
            <template slot="button-content">
              <span style="font-weight: bold;">Grettings, {{ name }}</span>
            </template>

            <b-dropdown-item to="/add_article">+ Add Article</b-dropdown-item>
            <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar toggleable type="inverse" variant="success" v-else>

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <span>Erwar-Vue</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item-dropdown right>

            <!-- Using button-content slot -->
            <template slot="button-content">
              <span style="font-weight: bold;">User</span>
            </template>

            <b-dropdown-item to="/auth">SignIn</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import Auth from '@/components/Auth'
export default {
  components: {
    Auth
  },
  data () {
    return {
      name: '',
      islogin: false
    }
  },
  // computed: {
  //   ...mapGetters([
  //     'islogin'
  //   ])
  // },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.name = localStorage.getItem('username')
    if (localStorage.getItem('token')) {
      this.islogin = true
    }
    // if (localStorage.getItem('token')) {
    //   this.$sotre.commit('cekLogin', true)
    // } else {
    //   this.$sotre.commit('cekLogin', false)
    // }
  }
}
</script>

<style lang="css" scoped>

</style>
