import constants from '../constants'

const addTodo = ({ commit }, name) => commit({ type: constants.ADD_TODO, name })
const deleteTodo = ({ commit }, todo) => commit({ type: constants.DELETE_TODO, todo })
const deleteTodoCompleted = ({ commit }) => commit({ type: constants.DELETE_TODO_COMPLETED })
const changeFilter = ({ commit }, filter) => commit({ type: constants.CHANGE_FILTER, filter })
const updateTodo = ({ commit }, input) => {
  commit({ type: constants.UPDATE_TODO, todo: input.todo, newName: input.newName })
}
const toggleEdit = ({ commit }, todo) => commit({ type: constants.TOGGLE_EDIT, todo })

export default {
  addTodo,
  deleteTodo,
  deleteTodoCompleted,
  changeFilter,
  toggleEdit,
  updateTodo,
}
