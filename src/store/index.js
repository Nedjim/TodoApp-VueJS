/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  todos: [
    { name: 'Dormir', completed: true, editing: false },
    { name: 'Manger', completed: false, editing: false },
  ],
  filter: 'all',
}

const getters = {
  todos: () => state.todos.length,
  todosFilter: () => {
    if (state.filter === 'done') return state.todos.filter(todo => todo.completed)
    else if (state.filter === 'todo') return state.todos.filter(todo => !todo.completed)
    return state.todos
  },
  remainingTodosCount: () => state.todos.filter(todo => !todo.completed).length,
  isEmpty: () => state.todos.length === 0,
  filter: () => state.filter,
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true,
})

global.store = store
export default store

