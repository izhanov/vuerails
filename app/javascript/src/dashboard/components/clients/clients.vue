<template lang="pug">
  div
    q-dialog(v-model="form")
      q-card(style="width: 700px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Добавить клиента
        q-card-section
          clientForm(@verified-data="addClient")
        q-card-actions(align="right")
          q-btn(flat label="Oтмена" color="primary" @click.prevent="form = false")
    q-btn(color="secondary" label="Добавить" @click="form = true" class="has-margin-2")
    clientList(
      v-bind:data="list"
      v-bind:findedClient="client"
      @findClient="findClient"
      @updateClient="updateClient"
      @removeClient="removeClient"
    )
</template>

<script>
  import {
    getClientList,
    persistClient,
    getClient,
    updateClient,
    destroyClient } from "../../backend/api.js";

  import clientList from "./table.vue";
  import clientForm from "./form.vue";

  export default {
    data: function () {
      return {
        form: false,
        list: [],
        client: {}
      }
    },
    created: function () {
      getClientList().then((response) => {this.list = response.data })
    },
    components: {
      clientList,
      clientForm,
    },
    methods: {
      addClient: function(data) {
        persistClient(data).then(() => {
          getClientList().then((response) => {
            console.log(response)
            this.list = response.data
            this.form = false
          })
        })
      },
      findClient: function(id) {
        getClient(id).then((response) => {
          this.client = response.data.client
        })
      },
      updateClient(data) {
        console.log(data)
        updateClient(data).then(() => {
          getClientList().then((response) => {
            this.list = response.data
          })
        })
      },
      removeClient(id) {
        destroyClient(id).then(() => {
          getClientList().then((response) => {
            this.list = response.data
          })
        })
      }
    }
  }
</script>

<style lang="styl">
  .has-margin-2
    margin 2em
</style>
