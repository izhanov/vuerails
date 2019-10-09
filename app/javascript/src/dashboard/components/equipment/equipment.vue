<template lang="pug">
  div
    q-dialog(v-model="form")
      q-card(style="width: 700px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Добавить Оборудование
        q-card-section
          equipmentForm(@addEquipment="addEquipment", :organizations="organizationsList")
        q-card-actions(align="right")
          q-btn(flat label="Oтмена" color="primary" @click.prevent="form = false")
    q-btn(color="secondary" label="Добавить" @click="form = true" class="has-margin-2")
    equipmentList(
      v-bind:data="list"
      v-bind:findedEquipment="equipment"
      @findEquipment="findEquipment"
      @updateEquipment="updateEquipment"
      @removeEquipment="removeEquipment"
    )
</template>

<script>
  import {
    persistEquipment,
    getEquipmentList,
    updateEquipment,
    destroyEquipment,
    getOrganizations,
    getEquipment,
  } from "../../backend/api.js";

  import equipmentList from "./table.vue";
  import equipmentForm from "./form.vue";

  export default {
    data: function () {
      return {
        form: false,
        list: [],
        equipment: {},
        organizationsList: [],
      }
    },
    created: function () {
      getEquipmentList().then((response) => this.list = response.data)
      getOrganizations().then((response) => this.organizationsList = response.data)
    },
    components: {
      equipmentList,
      equipmentForm,
    },
    methods: {
      addEquipment: function(data) {
        persistEquipment(data).then(() => {
          getEquipmentList().then((response) => {
            console.log(response)
            this.list = response.data
            this.form = false
          })
        })
      },
      findEquipment: function(id) {
        getEquipment(id).then((response) => {
          this.equipment = response.data.equipment
        })
      },
      updateEquipment(data) {
        console.log(data)
        updateEquipment(data).then(() => {
          getEquipmentList().then((response) => {
            this.list = response.data
          })
        })
      },
      removeEquipment(id) {
        destroyEquipment(id).then(() => {
          getEquipmentList().then((response) => {
            this.list = response.data
          })
        })
      },
    }
  }
</script>

<style lang="styl">
  .has-margin-2
    margin 2em
</style>
