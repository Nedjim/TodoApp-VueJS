<template>
  <div id="actions">
    <button @click="deleteTodoCompleted">Supprimer les tâches finies</button>
    <button @click="changeFilter('all')">Toutes les tâches</button>
    <button @click="changeFilter('done')">Tâches finies</button>
    <button @click="changeFilter('todo')">Tâches restantes</button>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'Actions',
  methods: {
    ...Vuex.mapActions([
      'changeFilter',
      'deleteTodoCompleted',
    ]),
  },
}
</script>
