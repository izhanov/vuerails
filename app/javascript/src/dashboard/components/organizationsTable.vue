<template lang="pug">
  div(class="")
    q-table(
      class="my-sticky-header-table"
      title="Организации"
      :data="data"
      :columns="columns"
      row-key="id"
      :separator="separator"
      flat
      bordered)
      template(v-slot:body-cell-action="props")
        q-td(:props="props")
          q-btn(size="xs" color="red" icon="fas fa-trash-alt" @click="deleteOrganization(props.row.id)")
</template>

<script>
  export default {
    props: ["data"],
    data () {
      return {
        separator: "vertical",
        columns: [
          {
            name: 'id',
            required: true,
            label: 'ID',
            align: 'left',
            field: row => row.id,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'title',
            required: true,
            label: 'Название',
            align: 'left',
            field: row => row.title,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'kind',
            required: true,
            label: 'Тип',
            align: 'left',
            field: row => row.kind,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'iin',
            required: true,
            label: 'ИИН',
            align: 'left',
            field: row => row.iin,
            format: val => `${val}`,
            sortable: true
          },
         {
            name: 'ogrn',
            required: true,
            label: 'ОГРН',
            align: 'left',
            field: row => row.ogrn,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'action',
            required: true,
            label: 'Действие',
            align: 'left',
          },
        ],
      }
    },
    methods: {
      deleteOrganization(id) {
        this.$emit("removeOrganization", id)
      }
    }
  }
</script>

<style type="styles">

</style>
