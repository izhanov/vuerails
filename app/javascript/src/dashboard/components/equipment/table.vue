<template lang="pug">
  div
    q-dialog(v-model="edit")
      q-card(style="width: 700px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Редактирование
        q-card-section
          equipmentForm(
            :forEdit="findedEquipment"
            :organizations="organizationsList"
            @updated-data="toUpdate"
          )
        q-card-actions(align="right")
          q-btn(flat label="Oтмена" color="primary" @click.prevent="edit = false")
    q-table(
      class="my-sticky-header-table"
      title="Оборудование"
      :data="data"
      :columns="columns"
      row-key="id"
      :separator="separator"
      :pagination.sync="pagination"
      :rows-per-page-options="[10, 20]"
      flat
      bordered)
      template(v-slot:body-cell-action="equipment")
        q-td
          .columns
            .column
              q-btn.edit-button(size="xs" icon="fas fa-edit" @click.prevent="findEquipment(equipment.row.id)")
            .column
              q-btn(size="xs" color="red" icon="fas fa-trash-alt" @click="deleteEquipment(equipment.row.id)")
</template>

<script>
  import equipmentForm from "./form.vue";

  export default {
    props: {
      data: Array,
      findedEquipment: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    data () {
      return {
        edit: false,
        equipment: {},
        organizationsList: [],
        pagination: {
          rowsPerPage: 10,
          rowNumber: 10,
        },
        separator: "vertical",
        columns: [
          {
            name: "id",
            required: true,
            label: "ID",
            align: "left",
            field: row => row.id,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: "title",
            required: true,
            label: "Нименование",
            align: "left",
            field: row => row.title,
            format: val => `${val}`,
            sortable: false
          },
          {
            name: "kind",
            required: true,
            label: "Тип",
            align: "left",
            field: row => row.kind,
            format: val => `${val}`,
            sortable: false
          },
          {
            name: "serail_number",
            required: true,
            label: "Email",
            align: "left",
            field: row => row.serial_number,
            format: val => `${val}`,
            sortable: false
          },
         {
            name: "action",
            required: true,
            label: "Действие",
            align: "left",
          },
        ],
      }
    },
    components: {
      equipmentForm,
    },
    methods: {
      findEquipment(id) {
        this.$emit("findEquipment", id)
      },
      toUpdate(data) {
        this.$emit("updateEquipment", data)
        this.edit = false
      },
      deleteEquipment(id) {
        this.$emit("removeEquipment", id)
      },
    },
    watch: {
      findedEquipment: function () {
        this.edit = true
      }
    }
  }
</script>

<style lang="styl">
  .edit-button
    color #fff
    background-color #00FF7F
</style>
