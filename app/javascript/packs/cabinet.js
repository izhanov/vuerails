import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';
import Vue from 'vue';
import Navbar from 'src/cabinet/components/navbar.vue';

import "src/cabinet/scss/main.scss";

Rails.start();
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  const navbar = new Vue({
    render: h => h(Navbar)
  }).$mount()

  const header = document.getElementById("header")

  if (header) {header.appendChild(navbar.$el)}
})
