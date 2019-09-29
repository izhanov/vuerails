<template lang="pug">
  q-layout(view="hhh lpr fff")
    q-header(elevated class="bg-cyan text-white" height-hint="100")
      q-toolbar
        q-btn(dense flat round icon="fas fa-menorah")

        q-space
        div {{ current_user }}
        q-btn(type="a" dense flat round icon="fas fa-sign-out-alt" data-method="delete", href="/dashboard/staffs/sign_out")
    q-drawer(show-if-above bordered)
    q-page-container
      div(class="column justify-center wrap")
        div(v-if="loading" class="row justify-center")
          div(class="col-2 items-center spinner-height-10")
            q-spinner-gears(color="primary" size="12em")
        div(v-else)
          div(class="row wrap")
            div(class="col-4")
              addOrganizationForm(@addOrganization="createOrganization")
            div(class="col-8")
              organizationsTable(:data="organizations" @removeOrganization="remove")
</template>

<script >
  import addClientForm from './addClientForm';
  import clientList from './clientList';
  import {
    getClientList,
    persistResource,
    getOrganizations,
    getCurrentUser,
    addOrganization,
    removeOrganization
  } from '../api/api';
  import organizationsTable from './organizationsTable';
  import addOrganizationForm from './addOrganizationForm';

  export default {
    data: function() {
      return {
        list: [],
        current_user: '',
        organizations: [],
        loading:true,
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
        })
      },
      createOrganization(data) {
        addOrganization(data).then(() => {
          getOrganizations()
          .then((response) => {
            this.organizations = response.data
          })
        })
      },
      remove: function (id) {
        removeOrganization(id).then(() => {
          getOrganizations()
          .then((response) => {
            this.organizations = response.data
          })
        })
      }
    }
    ,
    created: function () {
      getClientList()
      .then((response) => {
        console.log(response.data)
        this.list = response.data
      }),
      getOrganizations()
      .then((response) => {
        console.log(response.data)
        this.organizations = response.data
        this.loading = false
      })
      .catch((error) => {
        console.log(error.data)
      }),
      getCurrentUser().then((response) => {
        this.current_user = response.data.user
      })
    },
    components: {
      addClientForm,
      clientList,
      organizationsTable,
      addOrganizationForm,
    }
  }
</script>

<style lang="styles" scoped>

</style>
