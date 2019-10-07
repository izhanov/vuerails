import Vue from "vue"
import iconSet from "quasar/icon-set/fontawesome-v5.js";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";

import "../static/styles/quasar.styl";
import "quasar/dist/quasar.ie.polyfills";

import {
   Quasar,
   QAvatar,
   QBanner,
   QChip,
   QCard,
   QCardSection,
   QCardActions,
   QLayout,
   QHeader,
   QDrawer,
   QDialog,
   QForm,
   QItem,
   QItemSection,
   QInput,
   QList,
   QPageContainer,
   QPage,
   QBtn,
   QToolbar,
   QScrollArea,
   QSpinner,
   QSpinnerGears,
   QSpace,
   QTable,
   QTh,
   QTr,
   QTd,
   Notify,
 } from "quasar"

 Vue.use(Quasar, {
    config: {
      notify: "bottom-right"
    },
    components: {
      QAvatar,
      QBanner,
      QChip,
      QCard,
      QCardSection,
      QCardActions,
      QLayout,
      QHeader,
      QDrawer,
      QDialog,
      QForm,
      QInput,
      QItem,
      QItemSection,
      QList,
      QPageContainer,
      QPage,
      QBtn,
      QToolbar,
      QScrollArea,
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
      Notify
    }
 })
