<template>
  <div id="app">
    <Todos/>
  </div>
</template>

<script>
import store from './store'
import Todos from './components/Todos'

export default {
  name: 'App',
  store,
  components: { Todos },
}
</script>
