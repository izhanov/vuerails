import Rails from "rails-ujs";
import Turbolinks from "turbolinks";

import Vue from "vue";
import Dashboard from "src/dashboard/components/dashboard.vue";

import "src/dashboard/scss/main.scss";
import "src/dashboard/quasar/index.js";

import router from "src/dashboard/router/index.js";

Rails.start();
Turbolinks.start();

document.addEventListener("turbolinks:load", () => {
  const dashboard = new Vue({
    render: h => h(Dashboard),
    router
  }).$mount()

  const root = document.getElementById("root")
  if (root) {
    root.appendChild(dashboard.$el)
  }

})
