<template>
<div id="list">
  <div v-if="isEmpty">
    <h3>Le liste est vide</h3>
  </div>
  <ul v-else>
    <li v-for="todo in todosFilter" :key="todo.id" :class="{ underline: todo.completed }">
      <input type="checkbox" v-model="todo.completed" />
      <div v-if="todo.editing">
        <input
        type="text"
        :placeholder="todo.name"
        v-model="newName"
        @keyup.enter="updateTodo(todo)"
        @keyup.esc="toggleEditMode(todo)"/>
      </div>
      <span v-else @dblclick="toggleEditTodo(todo)">{{ todo.name }}</span>
      <button @click="deleteTodoStore(todo)">X</button>
    </li>
  </ul>
  
  <p>
    {{ todosFilter.length }} tâche(s)
    <span v-show="filter === 'todo'">restante(s)</span>
    <span v-show="filter === 'done'">finie(s)</span>
  </p>
</div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'List',
  data() {
    return {
      newName: '',
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'todos',
      'todosFilter',
      'remainingTodosCount',
      'isEmpty',
      'filter',
    ]),
  },
  methods: {
    ...Vuex.mapActions({
      deleteTodoStore: 'deleteTodo',
      updateTodoStore: 'updateTodo',
      toggleEditTodo: 'toggleEdit',
    }),
    updateTodo(todo) {
      this.updateTodoStore({ todo, newName: this.newName })
      this.newName = ''
    },

    toggleEditMode(todo) {
      this.toggleEditTodo(todo)
      if (this.newName !== '') {
        this.newName = ''
      }
    },
  },
}
</script>
