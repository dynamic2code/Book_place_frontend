import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    loginUser({ commit }, { user, token }) {
      commit('setUser', user);
      commit('setToken', token);
    },
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
});

export default store;