import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Clients from "../components/clients/clients.vue";
import Organizations from "../components/organizations/organizations.vue";
import Staffs from "../components/staffs/staffs.vue";
import Equipment from "../components/equipment/equipment.vue";

export default new VueRouter({
  mode: "history",
  hashbang: false,
  routes: [
    { path: "/dashboard", redirect: "/dashboard/manage/clients" },
    { path: "/dashboard/manage/clients", component: Clients, name: "clients" },
    {
      path: "/dashboard/manage/organizations", component: Organizations,
      name: "organizations"
    },
    { path: "/dashboard/manage/staffs", component: Staffs, name: "staffs" },
    { path: "/dashboard/manage/equipment", component: Equipment, name: "equipment" },

  ]
})
