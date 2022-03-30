import { createStore } from "vuex";

export default createStore({
  state: {
    color: "blue",
  },
  getters: {},
  mutations: {
    colorChange(state, color) {
      state.color = color;
    },
  },
  actions: {
    colorChange({ commit }, color) {
      commit("colorChange", color);
    },
  },
  modules: {},
});
