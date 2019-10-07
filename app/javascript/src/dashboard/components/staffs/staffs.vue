<template lang="pug">
  div
    q-dialog(v-model="form")
      q-card(style="width: 700px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Добавить сотрудника
        q-card-section
          staffForm(@verified-data="addStaff")
        q-card-actions(align="right")
          q-btn(flat label="Oтмена" color="primary" @click.prevent="form = false")
    q-btn(color="secondary" label="Добавить" @click="form = true" class="has-margin-2")
    staffList(
      :data="list"
      v-bind:findedStaff="staff"
      @findStaff = "findStaff"
      @updateStaff="updateStaff"
      @removeStaff="removeStaff"
    )
</template>

<script>
  import {
    getStaffs,
    persistStaff,
    getStaff,
    updateStaff,
    destroyStaff } from "../../backend/api.js";

  import staffList from "./table.vue";
  import staffForm from "./form.vue";

  export default {
    data: function () {
      return {
        form: false,
        list: [],
        staff: {}
      }
    },
    created: function () {
      getStaffs().then((response) => {
        this.list = response.data
      })
    },
    components: {
      staffList,
      staffForm,
    },
    methods: {
      addStaff(data) {
        persistStaff(data).then(() => {
          getStaffs().then((response) => {this.list = response.data})
          this.form = false
        })
      },
      updateStaff(data) {
        updateStaff(data).then(() => {
          getStaffs().then((response) => {
            this.list = response.data
          })
        })
      },
      findStaff(id) {
        console.log(id, "from staffs component")
        getStaff(id).then((response) => {
          this.staff = response.data.staff
        })
      },
      removeStaff(id) {
        destroyStaff(id).then(() => {
          getStaffs().then((response) => {
            this.list = response.data
          })
        })
      }
    }
  }
</script>

<style lang="styl">
  .has-margin-2
    margin 2em 0
</style>
