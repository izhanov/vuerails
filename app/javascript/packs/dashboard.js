import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';
import Vue from 'vue';
import Navbar from 'src/dashboard/components/navbar.vue';
import Dashboard from 'src/dashboard/components/dashboard.vue';
import 'src/dashboard/scss/main.scss';

import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import '../src/dashboard/static/styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'

import {
   Quasar,
   QAvatar,
   QChip,
   QLayout,
   QHeader,
   QDrawer,
   QForm,
   QInput,
   QPageContainer,
   QPage,
   QBtn,
   QToolbar,
   QSpinner,
   QSpinnerGears,
   QSpace,
   QTable,
   QTh,
   QTr,
   QTd,
 } from 'quasar'

 Vue.use(Quasar, {
   config: {},
   components: {
     QAvatar,
     QChip,
     QLayout,
     QHeader,
     QDrawer,
     QForm,
     QInput,
     QPageContainer,
     QPage,
     QBtn,
     QToolbar,
     QSpinner,
     QSpinnerGears,
     QSpace,
     QTable,
     QTh,
     QTr,
     QTd,
   },
   directives: {
   },
   iconSet: iconSet,
   plugins: {
   }
 })

Rails.start();
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  const dashboard = new Vue({
    render: h => h(Dashboard)
  }).$mount()
  const root = document.getElementById("root")
  if (root) {
    root.appendChild(dashboard.$el)
  }

})
