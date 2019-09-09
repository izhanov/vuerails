import Rails from 'rails-ujs'
import Turbolinks from 'turbolinks'
import Vue from 'vue'
import App from 'src/cabinet/components/app.vue'

Rails.start();
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount()
  const root = document.getElementById("root")

  root.appendChild(app.$el)

  console.log(app)
})
