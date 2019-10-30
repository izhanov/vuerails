<template lang="pug">
  div
    q-dialog(v-model="edit")
      q-card(style="width: 700px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Редактирование
        q-card-section
          organizationForm(:forEdit="findedOrganization" @update-data="toUpdate")
        q-card-actions(align="right")
          q-btn(flat label="Oтмена" color="primary" @click.prevent="edit = false")
    q-table(
      class="my-sticky-header-table"
      title="Организации"
      :data="list"
      :columns="columns"
      :filter="filter"
      row-key="id"
      ref="table"
      :separator="separator"
      :pagination.sync="pagination"
      :rows-per-page-options="[10, 20]"
      @request="onRequest"
      flat
      bordered)
      template(v-slot:body-cell-action="organization")
        q-td
          .columns
            .column
              q-btn.edit-button(size="xs" icon="fas fa-edit" @click.prevent="findOrganization(organization.row.id)")
            .column
              q-btn(size="xs" color="red" icon="fas fa-trash-alt" @click="deleteOrganization(organization.row.id)")
      template(v-slot:top-right)
        q-input(borderless dense debounce="300" v-model="filter" placeholder="Search")
          template(v-slot:append)
            q-icon(name="fa fa-search")
</template>

<script>
  import organizationForm from "./form.vue";

  export default {
    props: {
      data: Array,
      findedOrganization: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    data () {
      return {
        edit: false,
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
            sortable: true
          },
          {
            name: "iin",
            required: true,
            label: "ИНН",
            align: "left",
            field: row => row.iin,
            format: val => `${val}`,
            sortable: true
          },
         {
            name: "ogrn",
            required: true,
            label: "ОГРН",
            align: "left",
            field: row => row.ogrn,
            format: val => `${val}`,
            sortable: true
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
    methods: {
      onRequest(props) {
        let filter = props.filter
        this.$store.dispatch("getList", filter)
      },
      findOrganization(id) {
        this.$emit("findOrganization", id)
      },
      toUpdate(data) {
        this.$emit("updateOrganization", data)
        this.edit = false
      },
      deleteOrganization(id) {
        this.$emit("removeOrganization", id)
      },
      refresh() {
        this.$refs.table.requestServerInteraction()
      }
    },
    watch: {
      findedOrganization: function () {
        this.edit = true
      },
      filter: function () {
        this.$refs.table.requestServerInteraction()
      },
    },
    computed: {
      filter: {
        get() {
          return this.$store.state.filter
        },
        set(value) {
          return this.$store.commit("updateFilter", value)
        }
      },
      list() { return this.$store.state.organizations }
    },
    created: function () {
      this.$store.dispatch("getList", this.filter)
    },
    components: {
      organizationForm,
    },
    channels: {
      OrganizationsChannel: {
        connected() {
          console.log("I am connected.");
        },
        received(data) {
          console.log(data)
          this.$refs.table.requestServerInteraction()
        },
        disconnected() {
        console.log("! disconnected")
        },
      },
    },
    mounted() {
      this.$cable.subscribe({ channel: "OrganizationsChannel", room: "organizations" })
    }
  }
</script>

<style type="styles">

</style>
