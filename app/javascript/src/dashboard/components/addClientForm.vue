<template lang="pug">
  div
    div(class="notification is-danger", v-show="error")
      |The form is incorrect! Check input fields!
    div(class="field")
      label(class="label") Full name
      div(class="control")
        input(class="input", v-model="credentials.full_name", @focus="notify('full_name')")
      p(class="help is-info", v-show="info.full_name") Full name must be greater than 5 chars

    div(class="field")
      label(class="label") Phone
      div(class="control")
        input(class="input", v-model="credentials.phone", @focus="notify('phone')", @blur="verifyPhone", @keydown="reset_verify('phone')")
      p(class="help is-info", v-show="info.phone") The phone should only consist of numbers
      p(class="help is-danger", v-show="verify.phone") This phone already exists in system

    div(class="field")
      label(class="label") Email
      div(class="control")
        input(class="input", type="email",v-model="credentials.email", @focus="notify('email')", @blur="verifyEmail", @keydown="reset_verify('email')")
      p(class="help is-info", v-show="info.email")  Email must be a valid
      p(class="help is-danger", v-show="verify.email") This email already exists in system

    div(class="field is-grouped")
      div(class="control")
        button(class="button is-success", @click="submit") Ok
</template>

<script>
  import validateData from './helpers/validateData';
  import { requestVerifyPhone, requestVerifyEmail } from '../api/api'

  export default {
    data: function () {
      return {
        credentials: {
          full_name: '',
          phone: '',
          email: '',
        },
        error: false,
        info: {
          full_name: false,
          phone: false,
          email: false,
        },
        verify: {
          phone: false,
          email: false,
        }
      }
    },
    methods: {
      submit: function () {
        if (validateData(this.credentials)) {
          this.$emit('verified-data', this.credentials)
          this.credentials = {
            full_name: '',
            phone: '',
            email: '',
          }
        } else {
          this.error = true
        }
      },
      notify: function(message) {
        this.info[message] = true
      },
      verifyPhone: function () {
        requestVerifyPhone(this.credentials.phone).then((response) => {
          if (response.data.message === "Already exist!") {
            this.verify.phone = true
          }
        });
      },
      verifyEmail: function () {
        requestVerifyEmail(this.credentials.email).then((response) => {
          if (response.data.message === "Already exist!") {
            this.verify.email = true
          }
        });
      },
      reset_verify: function (message) {
        this.verify[message] = false
      }
    },
    watch: {
      'info.full_name': function () {
        setTimeout(() => {this.info.full_name = false}, 2500)
      },
      'info.phone': function () {
        setTimeout(() => {this.info.phone = false}, 2500)
      },
      'info.email': function () {
        setTimeout(() => {this.info.email = false}, 2500)
      },
      error: function() {
        setTimeout(() => {this.error = false}, 4000)
      },
    }
  }
</script>

<style lang="scss">
</style>
