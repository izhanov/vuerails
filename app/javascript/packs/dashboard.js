import Rails from "rails-ujs";
import Turbolinks from "turbolinks";


import Vue from "vue";
import Dashboard from "src/dashboard/components/dashboard.vue";

import "src/dashboard/scss/main.scss";
import "src/dashboard/quasar/index.js";

import router from "src/dashboard/router/index.js";
import store from "src/dashboard/store";
import ActionCableVue from "actioncable-vue";

Vue.use(ActionCableVue, {
  debug: true,
  debugLevel: "error",
  connectionUrl: "ws://localhost:3000/cable",
  connectImmediately: true
});




Rails.start();
Turbolinks.start();
require("@rails/activestorage").start()
require("channels");

document.addEventListener("turbolinks:load", () => {
  const dashboard = new Vue({
    render: h => h(Dashboard),
    router,
    store
  }).$mount()

  const root = document.getElementById("root")
  if (root) {
    root.appendChild(dashboard.$el)
  }

})
