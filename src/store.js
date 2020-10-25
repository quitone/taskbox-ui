import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    tasks: [
      { id: '1', title: 'something', state: 'TASK_INBOX' },
      { id: '2', title: 'something more', state: 'TASK_INBOX' },
      { id: '3', title: 'something else', state: 'TASK_INBOX' },
      { id: '4', title: 'something again', state: 'TASK_INBOX' },
    ]
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      state.tasks.find(task => task.id === id).state === 'TASK_ARCHIVED'
    },
    PIN_TASK(state, id) {
      state.tasks.find(task => task.id === id).state === 'TASK_PINNED'
    }
  },
  actions: {
    archiveTask({ commit }, id) {
      commit('ARCHIVE_TASK', id)
    },
    pinTask({ commit }, id) {
      commit('PIN_TASK', id)
    }
  }
})

export const pinTask = id => ({ type: 'PIN_TASK', id })
export const archiveTask = id => ({ type: 'ARCHIVE_TASK', id })
