import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';
import Vue from 'vue';
import Navbar from 'src/dashboard/components/navbar.vue';
import Dashboard from 'src/dashboard/components/dashboard.vue';
import 'src/dashboard/scss/main.scss';

Rails.start();
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  const navbar = new Vue({
    render: h => h(Navbar)
  }).$mount()
  const dashboard = new Vue({
    render: h => h(Dashboard)
  }).$mount()
  const root = document.getElementById("root")
  if (root) {
    root.appendChild(navbar.$el)
    root.appendChild(dashboard.$el)
  }

})
