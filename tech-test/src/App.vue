<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SchoolCpt/>
    <StudentCpt/>
  </div>
</template>

<script>
import SchoolCpt from './components/SchoolCpt.vue';
import StudentCpt from './components/StudentCpt.vue';

export default {
  name: 'App',
  components: {
    SchoolCpt, StudentCpt
  }
}
</script>