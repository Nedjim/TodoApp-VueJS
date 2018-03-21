const ADD_TODO = (state, payload) => state.todos.push({
  name: payload.name,
  completed: false,
  editing: false,
})

const DELETE_TODO = (state, payload) => {
  state.todos = state.todos.filter(todo => todo !== payload.todo)
}

const DELETE_TODO_COMPLETED = (state) => {
  state.todos = state.todos.filter(todo => !todo.completed)
}

const CHANGE_FILTER = (state, payload) => {
  state.filter = payload.filter
}

const TOGGLE_EDIT = (state, payload) => {
  const tmp = state.todos.filter(todo => todo === payload.todo)[0]
  tmp.editing = !tmp.editing
}

const UPDATE_TODO = (state, payload) => {
  const tmp = state.todos.filter(todo => todo === payload.todo)[0]
  tmp.name = payload.newName
  tmp.editing = false
}

export default {
  ADD_TODO,
  DELETE_TODO,
  DELETE_TODO_COMPLETED,
  CHANGE_FILTER,
  TOGGLE_EDIT,
  UPDATE_TODO,
}
