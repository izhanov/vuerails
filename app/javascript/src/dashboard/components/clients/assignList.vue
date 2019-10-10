<template lang="pug">
  div
    q-table(
      class="my-sticky-header-table"
      title="Организации"
      :data="organizations"
      :columns="columns"
      row-key="id"
      :separator="separator"
      :pagination.sync="pagination"
      :rows-per-page-options="[10, 20]"
      selection="multiple"
      :selected.sync="selected"
      flat
      bordered)
    q-btn(label="Прикрепить" color="green" @click.prevent="assign")
</template>

<script>
  export default {
    props: {
      organizations: Array,
      client_id: Number,
    },
    data () {
      return {
        edit: false,
        pagination: {
          rowsPerPage: 10,
          rowNumber: 10,
        },
        selected: [],
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
            label: "Название",
            align: "left",
            field: row => row.title,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: "kind",
            required: true,
            label: "Тип",
            align: "left",
            field: row => row.kind,
            format: val => `${val}`,
            sortable: true,
          }
        ],
      }
    },
    methods: {
      assign() {
        this.$emit("assignClient", {
          organization: this.selected, client_id: this.client_id
        })
      }
    }
  }

</script>
