<template lang="pug">
  div
    q-dialog(v-model="form")
      q-card(style="width: 700px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Добавить клиента
        q-card-section
          organizationForm(@addOrganization="addOrganization")
        q-card-actions(align="right")
          q-btn(flat label="Oтмена" color="primary" @click.prevent="form = false")
    q-btn(color="secondary" label="Добавить" @click="form = true" class="has-margin-2")
    organizationList(
      v-bind:findedOrganization="organization"
      @findOrganization = "findOrganization"
      @updateOrganization="updateOrganization"
      @removeOrganization="removeOrganization"
    )
</template>

<script>
  import {
    persistOrganization,
    getOrganization,
    updateOrganization,
    destroyOrganization,
    } from "../../backend/api.js";

  import organizationList from "./table.vue";
  import organizationForm from "./form.vue";

  export default {
    data: function () {
      return {
        form: false,
      }
    },
    components: {
      organizationList,
      organizationForm,
    },
    methods: {
      addOrganization(data) {
        persistOrganization(data).then(() => {
          this.$store.dispatch("getList", "")
          this.form = false
        })
      },
      updateOrganization(data) {
        updateOrganization(data).then(() => {
          this.$store.dispatch("getList", "")
        })
      },
      findOrganization(id) {
        getOrganization(id).then((response) => {
          this.$store.commit("updateOrganization", response.data.organization)
        })
      },
      removeOrganization(id) {
        destroyOrganization(id).then(() => {
          this.$store.dispatch("getList", "")
        })
      },
    },
    computed: {
      organization() {
        return this.$store.state.organization
      }
    }
  }
</script>

<style lang="styl">
  .has-margin-2
    margin 2em 0
</style>
