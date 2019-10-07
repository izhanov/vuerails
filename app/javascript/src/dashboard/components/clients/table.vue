<template lang="pug">
  div
    q-dialog(v-model="edit")
      q-card(style="width: 700px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Редактирование
        q-card-section
          clientForm(:forEdit="findedClient" @updated-data="toUpdate")
        q-card-actions(align="right")
          q-btn(flat label="Oтмена" color="primary" @click.prevent="edit = false")
    q-table(
      class="my-sticky-header-table"
      title="Клиенты"
      :data="data"
      :columns="columns"
      row-key="id"
      :separator="separator"
      :pagination.sync="pagination"
      :rows-per-page-options="[10, 20]"
      flat
      bordered)
      template(v-slot:body-cell-action="client")
        q-td
          .columns
            .column
              q-btn.edit-button(size="xs" icon="fas fa-edit" @click.prevent="findClient(client.row.id)")
            .column
              q-btn(size="xs" color="red" icon="fas fa-trash-alt" @click="deleteClient(client.row.id)")
</template>

<script>
  import clientForm from "./form.vue";

  export default {
    props: {
      data: Array,
      findedClient: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data () {
      return {
        edit: false,
        client: {},
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
            name: "full_name",
            required: true,
            label: "Ф.И.О",
            align: "left",
            field: row => row.full_name,
            format: val => `${val}`,
            sortable: false
          },
          {
            name: "phone",
            required: true,
            label: "Телефон",
            align: "left",
            field: row => row.phone,
            format: val => `${val}`,
            sortable: false
          },
          {
            name: "email",
            required: true,
            label: "Email",
            align: "left",
            field: row => row.email,
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
      clientForm,
    },
    methods: {
      findClient(id) {
        this.$emit("findClient", id)
      },
      toUpdate(data) {
        this.$emit("updateClient", data)
        this.edit = false
      },
      deleteClient(id) {
        this.$emit("removeClient", id)
      }
    },
    watch: {
      findedClient: function () {
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
