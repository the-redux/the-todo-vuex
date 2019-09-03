import { SET_VISIBILITY_FILTEER } from "../mutation-types";
import { VisibilityFilter } from "../../constants/visibilityFilter";

const state = {
  filter: VisibilityFilter.SHOW_ALL,
};

const getters = {
};

const mutations = {
  [SET_VISIBILITY_FILTEER] (state, filter) {
    state.filter = filter;
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
