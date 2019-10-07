<template lang="pug">
  q-form(@submit="submit")
    q-input(
      filled
      v-model="credentials.title"
      label="Название"
      hint="Полное название организации"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Поле не должно быть пустым']"
    )
    q-input(
      filled
      v-model="credentials.kind"
      label="Тип"
      hint="Укажите тип организации: ИП, ЮЛ, АО, ООО"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Поле не должно быть пустым']"
    )
    q-input(
      filled
      v-model="credentials.iin"
      mask="### ### ### ###"
      label="ИНН"
      hint="Укажите ИНН организации"
      lazy-rules
      :rules="[\
        val => val && val.length > 0 || 'Поле не должно быть пустым'\
      ]"
    )
    q-input(
      filled
      v-model="credentials.ogrn"
      label="ОГРН"
      mask="#-##-##-##-#####-#"
      hint="Укажите ОГРН организации"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Поле не должно быть пустым']"
    )
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
    },
    data: function () {
      return {
        credentials: {
          title: "",
          kind: "",
          iin: "",
          ogrn: ""
        },
        updateForm: false,
      }
    },
    methods: {
      submit: function () {
        if (this.updateForm === true) {
          this.$emit("update-data", this.credentials)
        } else {
          this.$emit("addOrganization", this.credentials)
        }
      },
    },
    created: function () {
      if (Object.keys(this.forEdit).length > 0) {
        this.credentials = this.forEdit
        this.updateForm = true
      }
    }
  }
</script>
