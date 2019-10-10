<template lang="pug">
  q-form(@submit="submit")
    q-input(
      filled
      v-model="credentials.title"
      label="Название"
      hint="Полное название оборудования"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Поле не должно быть пустым']"
    )
    q-input(
      filled
      v-model="credentials.kind"
      label="Тип"
      hint="Укажите тип оборудования"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Поле не должно быть пустым']"
    )
    q-input(
      filled
      v-model="credentials.serial_number"
      mask="### ### ### ###"
      label="Серийный номер"
      hint="Укажите серийный номер"
      lazy-rules
      :rules="[\
        val => val && val.length > 0 || 'Поле не должно быть пустым'\
      ]"
    )
    q-select(
      label="Организация",
      v-model="credentials.organization_id",
      :options="options",
      emit-value)
    q-btn(v-if="updateForm === false" label="Добавить" type="submit" color="green")
    q-btn(v-else label="Сохранить" type="submit" color="green")

</template>

<script>
  export default {
    props: {
      forEdit: {
        type: Object,
        default: function () {
          return {}
        }
      },
      organizations: {
        type: Array,
        default: function () {
          return []
        },
      }
    },
    data: function () {
      return {
        credentials: {
          title: "",
          kind: "",
          serial_number: "",
          organization_id: "",
        },
        updateForm: false,
        options: [],
      }
    },
    methods: {
      submit: function () {
        if (this.updateForm === true) {
          this.$emit("updated-data", this.credentials)
        } else {
          this.$emit("addEquipment", this.credentials)
        }
      },
    },
    created: function () {
      if (Object.keys(this.forEdit).length > 0) {
        this.credentials = this.forEdit
        this.updateForm = true
      }
      if (this.organizations.length > 0) {
        this.options = this.organizations.map((o) => {
          const option = {}
          option.value = o.id
          option.label = o.title
          return option
        })
      }
    },
  }
</script>
