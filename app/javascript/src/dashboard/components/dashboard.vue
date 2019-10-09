<template lang="pug">
  q-layout(view="hhh lpr fff")
    q-header(elevated class="bg-cyan text-white" height-hint="100")
      q-toolbar
        q-btn(dense flat round icon="fas fa-menorah")

        q-space
        div
          | {{ current_user }}
        q-btn(type="a" dense flat round icon="fas fa-sign-out-alt" data-method="delete", href="/dashboard/staffs/sign_out")
    q-drawer(
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3")
      q-scroll-area(class="fit")
        q-list
          q-item(clickable)
            q-item-section
              router-link(to="/dashboard/manage/clients" exact) Клиенты
          q-item(clickable)
            q-item-section
              router-link(to="/dashboard/manage/organizations" exact) Организации
          q-item(clickable)
            q-item-section
              router-link(to="/dashboard/manage/staffs" exact) Сотрудники
          q-item(clickable)
            q-item-section
              router-link(to="/dashboard/manage/equipment" exact) Оборудование
    q-page-container
      div
        div(v-if="loading")
          div.row.justify-center(class="col-2 items-center spinner-height-10")
            q-spinner-gears(color="primary" size="12em")
        div(v-else-if="error")
          q-banner(inline-actions class="text-white bg-red")
            |Oops! Something goes wrong...
        div(v-else)
          router-view

</template>

<script >
  import { getCurrentUser } from "../backend/api";
  export default {
    data: function () {
      return {
        loading: true,
        error: false,
        current_user: "",
      }
    },
    created: function () {
      getCurrentUser()
      .then((response) => {
        this.current_user = response.data.user
        }
      )
      .catch(() => this.error = true)
      .finally(() => this.loading = false)
    }
  }
</script>

<style lang="styl" scoped>
</style>
