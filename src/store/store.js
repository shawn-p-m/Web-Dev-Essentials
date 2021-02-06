import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    arrowButtonColor: "primary",
    mapButtonColor: "primary",
    reduceButtonColor: "primary",
    promiseButtonColor: "primary",
    spreadButtonColor: "primary",
    generatorButtonColor: "primary",
    callbackButtonColor: "primary",
  },
  mutations: {
    saveArrowButtonColor(state, color) {
      state.arrowButtonColor = color;
    },
    saveMapButtonColor(state, color) {
      state.mapButtonColor = color;
    },
    saveReduceButtonColor(state, color) {
      state.reduceButtonColor = color;
    },
    savePromiseButtonColor(state, color) {
      state.promiseButtonColor = color;
    },
    saveSpreadButtonColor(state, color) {
      state.spreadButtonColor = color;
    },
    saveGeneratorButtonColor(state, color) {
      state.generatorButtonColor = color;
    },
    saveCallbackButtonColor(state, color) {
      state.callbackButtonColor = color;
    },
  },
  getters: {
    arrowButtonColor: (state) => {
      return state.arrowButtonColor;
    },
    mapButtonColor: (state) => {
      return state.mapButtonColor;
    },
    reduceButtonColor: (state) => {
      return state.reduceButtonColor;
    },
    promiseButtonColor: (state) => {
      return state.promiseButtonColor;
    },
    spreadButtonColor: (state) => {
      return state.spreadButtonColor;
    },
    generatorButtonColor: (state) => {
      return state.generatorButtonColor;
    },
    callbackButtonColor: (state) => {
      return state.callbackButtonColor;
    },
  },
  plugins: [createPersistedState()],
});
