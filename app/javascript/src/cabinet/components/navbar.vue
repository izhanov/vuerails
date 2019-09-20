<template lang="pug">
  nav(class="navbar is-primary")
    div(class="container")
      div(class="navbar-brand")
        a(class="navbar-item", href="#")
          img(:src="logo")

      div(class="navbar-menu")
        div(class="navbar-end")
          div(class="navbar-item") {{current_user}}
          div(class="navbar-item")
            div(class="buttons")
              a(class="button is-light", href="cabinet/clients/sign_out", data-method="delete") Log out
</template>

<script>
  import {getCurrentUser, signOut} from "../api/api";

  export default {
    data: function() {
      return {
        logo: require('../static/images/vue-logo.png'),
        current_user: ""
      }
    },
    created: function() {
      getCurrentUser().then(response => this.current_user = response.data.user)
    }
}
</script>

<style lang="scss">
</style>
