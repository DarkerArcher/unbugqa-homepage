<template class="flex flex-col min-h-screen font-Inter bg-generic-white">
  <UnbugQA />
</template>

<script>
import UnbugQA from './components/UnbugQAHomepage.vue'

export default {
  name: 'App',
  components: {
    UnbugQA
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
