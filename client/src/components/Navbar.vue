<template lang="html">
  <div class="container">
    <b-navbar toggleable type="inverse" variant="success">

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
import Auth from '@/components/Auth'
export default {
  components: {
    Auth
  }
}
</script>

<style lang="css" scoped>

</style>
