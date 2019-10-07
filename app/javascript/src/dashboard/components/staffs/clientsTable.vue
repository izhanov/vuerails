<template lang="pug">
  div
    q-table(
      class="my-sticky-header-table"
      title="Клиенты"
      :data="data"
      :columns="columns"
      row-key="id"
      :separator="separator"
      :pagination.sync="pagination"
      :rows-per-page-options="[10, 20]"
      selection="multiple"
      :selected.sync="selected"
      flat
      bordered)
</template>

<script>
  export default {
    props: {
      data: Array,
    },
    data () {
      return {
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
        ],
      }
    },
  }
</script>

<style lang="styl">
  .edit-button
    color #fff
    background-color #00FF7F
</style>
