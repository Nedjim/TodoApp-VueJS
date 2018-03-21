<template>
  <div id="form">
    <input type="text"
           placeholder="Nouvelle tâche"
           @keyup.enter="addTodo(newTodo)"
           v-model="newTodo"
           lazy />
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'Form',
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    ...Vuex.mapActions({
      addTodoStore: 'addTodo',
    }),
    addTodo() {
      this.addTodoStore(this.newTodo)
      this.newTodo = ''
    },
  },
}
</script>
