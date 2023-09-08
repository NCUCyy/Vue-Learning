// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)


// ----------------------模块化----------------------
// 1、count模块
const countOptions = {
    // 为了开启mapState中的简写形式：...mapState('countOptions', {})
    namespaced: true,
    actions: {
        addOdd(context, value) {
            // 写业务逻辑
            // context中有state
            if (context.state.sum % 2 != 0) {
                context.commit('ADD', value)
            }
        },
        addWait(context, value) {
            // 写业务逻辑
            setTimeout(() => {
                context.commit('ADD', value)
            }, 500)
        },
    },
    mutations: {
        ADD(state, value) {
            // 真正修改数据
            state.sum += value
        },
        REDUCE(state, value) {
            // 真正修改数据
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        },
    }
}
// 2、person模块
const personOptions = {
    // 为了开启mapState中的简写形式：...mapState('countOptions', {})
    namespaced: true,
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.push({ id: value.id, name: value.name })
            // 存到localStorage当中(修改后的persons，直接覆盖原来的persons)————持久化
            localStorage.setItem('persons', JSON.stringify(state.persons))
        }
    },
    state: {
        // 从localStorage当中取（为null，则为[]）
        persons: JSON.parse(localStorage.getItem('persons')) || []
    },
    getters: {
        personsSum(state) {
            return state.persons.length
        }
    }
}

//创建并暴露store
export default new Vuex.Store({
    // 配置两个模块
    modules: {
        countOptions,
        personOptions
    }
})