<template lang="pug">
  div(class="container")
    div(class="columns")
      div(class="column is-6")
        div(class="title has-text-centered has-bottom-margin") List of clients

        clientList(v-for="client in list" :client="client.full_name" :key="client.id")

      div(class="column is-6")
        div(class="title has-text-centered") Add new client

        addClientForm(@verified-data="post")
</template>

<script >
  import addClientForm from './addClientForm';
  import clientList from './clientList';
  import { getClientList, persistResource } from '../api/api';

  export default {
    data: function() {
      return {
        list: []
      }
    },
    methods: {
      post(data) {
        persistResource(data).then(() => {
          getClientList()
          .then((response) => {
            this.list = response.data
          })
          .catch((error) => {
            console.log(error.data.result)
          })
          .finally(() => {

          });
        })
      }
    }
    ,
    created: function () {
      getClientList()
      .then((response) => {
        console.log(response.data)
        this.list = response.data
      })
      .catch((error) => {

      })
      .finally(() => {

      });
    },
    components: {
      addClientForm,
      clientList
    }
  }
</script>

<style lang="scss" scoped>
  .has-bottom-margin {
    margin-bottom: 1.7em !important;
  }
</style>
