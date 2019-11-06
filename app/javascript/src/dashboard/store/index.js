import Vue from "vue";
import Vuex from "vuex";
import { getOrganizations } from "../backend/api.js";

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      filter: "",
      organizations: [],
      organization: {},
    },
    mutations: {
      updateFilter(state, value) {
        state.filter = value
      },
      indexOrganizations(state, value) {
        state.organizations = value
      },
      updateOrganization(state, value) {
        state.organization = value
      }
    },
    actions: {
      getList({ commit }, value) {
        getOrganizations(value).then((response) => {
          commit("indexOrganizations", response.data)
        })
      }
    },
    modules: {

    },
    plugins: [],
  }
);
