<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SchoolCpt/>
    <StudentCpt />
  </div>
</template>

<script>
import SchoolCpt from './components/SchoolCpt.vue'
import StudentCpt from './components/StudentCpt.vue';

export default {
  name: 'App',
  components: {
    SchoolCpt,
    StudentCpt
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
