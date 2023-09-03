<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    放大十倍后的和：{{ $store.getters.bigSum }}
    我在{{ $store.state.school }}，学习我在{{ $store.state.subject }}
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'CountCpt',
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  methods: {
    increment() {
      // 直接调mutations中的函数，操作数据
      this.$store.commit('ADD', this.n)
    },
    decrement() {
      // 直接调mutations中的函数，操作数据
      this.$store.commit('REDUCE', this.n)
    },
    incrementOdd() {
      // 先调actions中的函数，完成某些业务逻辑；再调mutations中的函数，操作数据
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      // 先调actions中的函数，完成某些业务逻辑；再调mutations中的函数，操作数据
      this.$store.dispatch('addWait', this.n)
    },
  },
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>