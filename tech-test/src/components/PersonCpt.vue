<template>
    <div>
        <h1>人员列表</h1>
        <span style="color:red">人数为：{{ personsSum }}</span>
        <h3 style="color:red">Count组件求和为：{{ countSum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addPerson({ id: id(), name })">添加</button>
        <ul>
            <li v-for="p in persons" :key="p.id">
                {{ p.id }}-{{ p.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { nanoid } from 'nanoid'

export default {
    name: 'PersonCpt',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        // 对象写法
        // 1、person模块
        ...mapState('personOptions', { persons: 'persons' }),
        // 2、count模块
        ...mapState('countOptions', { countSum: 'sum' }),
        // 数组写法
        ...mapGetters('personOptions', ['personsSum'])
    },
    methods: {
        id() {
            // 获取随机id
            return nanoid()
        },
        // 对象写法
        ...mapMutations('personOptions', { addPerson: 'ADD_PERSON' })
    }
}
</script>

<style></style>