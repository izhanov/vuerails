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
      label="ИИН"
      hint="Укажите ИИН организации"
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
    q-btn(label="Добавить" type="submit" color="primary")
</template>

<script>
  export default {
    data: function () {
     return {
      credentials: {
        title: "",
        kind: "",
        iin: "",
        ogrn: ""
      }
     }
    },
    methods: {
      submit: function () {
        this.$emit('addOrganization', this.credentials)
      },
    }
  }
</script>
