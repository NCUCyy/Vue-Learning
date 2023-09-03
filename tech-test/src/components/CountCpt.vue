<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>放大十倍后的和：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习我在{{ subject }}</h3>
      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button>
      <button @click="incrementOdd(n)">当前求和为奇数再加</button>
      <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'CountCpt',
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed: {
    ...mapState(['sum', 'school', 'subject']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapActions({ incrementOdd: 'addOdd', incrementWait: 'addWait' }),
    ...mapMutations({ increment: 'ADD', decrement: 'REDUCE' })
  },
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>