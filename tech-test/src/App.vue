<template>
  <div class="container">
    <SearchCpt></SearchCpt>
    <ListCpt></ListCpt>
  </div>
</template>

<script>
import ListCpt from './components/ListCpt.vue'
import SearchCpt from './components/SearchCpt.vue'

export default {
  name: 'App',
  components: {
    ListCpt, SearchCpt
  }
}
</script>