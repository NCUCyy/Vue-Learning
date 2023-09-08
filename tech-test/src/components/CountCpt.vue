<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>放大十倍后的和：{{ bigSum }}</h3>
    <span style="color:red">人数为：{{ personsSum }}</span>
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
    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState('countOptions', ['sum', 'school', 'subject']),
    //借助mapState生成计算属性，从getters中读取数据。（数组写法）
    // 1、count模块
    ...mapGetters('countOptions', ['bigSum']),
    // 2、person模块
    ...mapGetters('personOptions',['personsSum'])
  },
  methods: {
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    ...mapActions('countOptions', { incrementOdd: 'addOdd', incrementWait: 'addWait' }),
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations('countOptions', { increment: 'ADD', decrement: 'REDUCE' })
  },
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>