<template>
  <div>
    <CountCpt />
    <hr>
    <PersonCpt />
  </div>
</template>

<script>
import CountCpt from './components/CountCpt.vue';
import PersonCpt from './components/PersonCpt.vue';
export default {
  name: 'App',
  components: {
    CountCpt, PersonCpt
  }
}
</script>