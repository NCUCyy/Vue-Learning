<template>
    <div>
        <h1>人员列表</h1>
        <span style="color:red">人数为：{{ personsSum }}</span>
        <h3 style="color:red">Count组件求和为：{{ countSum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addPerson">添加</button>
        <button @click="addPersonWang">添加一个姓王的人</button>
        <button @click="addPersonServer">向服务器请求一个名字</button>
        <ul>
            <li v-for="p in persons" :key="p.id">
                {{ p.id }}-{{ p.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
    name: 'PersonCpt',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        // 1、person模块
        // ...mapState('personOptions', { persons: 'persons' }),
        persons() {
            return this.$store.state.personOptions.persons
        },
        // ...mapGetters('personOptions', ['personsSum'])
        personsSum() {
            return this.$store.getters['personOptions/personsSum']
        },
        // 2、count模块
        // ...mapState('countOptions', { countSum: 'sum' }),
        countSum() {
            return this.$store.state.countOptions.sum
        },
    },
    methods: {
        // ...mapMutations('personOptions', { addPerson: 'ADD_PERSON' })
        addPerson() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('personOptions/ADD_PERSON', personObj)
        },
        addPersonWang() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.dispatch('personOptions/addPersonWang', personObj)
        },
        addPersonServer() {
            this.$store.dispatch('personOptions/addPersonServer')
        }
    },
    mounted() {
        console.log(this.$store)
    }
}
</script>

<style></style>