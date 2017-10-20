/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    safelyStoredNumber: 12,
  },
  getters: {
    safelyStoredNumber: state => state.safelyStoredNumber,
    // storedNumberMatches: state => matchNumber => state.safelyStoredNumber,
  },
  mutations: {
    incrementStoredNumber(state) {
      state.safelyStoredNumber++;
    },
    setStoredNumber(state, newNumber) {
      state.safelyStoredNumber = newNumber;
    },
  },
  actions: {
    async setNumberToRemoteValue(context) {
      // Commits the 'setStoredNumber' mutation with the value of whatever myRemoteService.getRemoteValue() resolves through a promise.
      context.commit('setStoredNumber', await myRemoteService.getRemoteValue());
      return Promise.resolve();
    },
  }
});