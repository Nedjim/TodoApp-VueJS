<template>
<div>
  <Header />
  <section>
    <Form />
    <List />
    <Actions />
  </section>
</div>
</template>

<script>
import Header from './includes/Header'
import Form from './Form'
import List from './List'
import Actions from './Actions'

export default {
  name: 'Todos',
  components: { Header, Form, List, Actions },
}
</script>

<style lang="scss" src="../style/index.scss">
</style>
