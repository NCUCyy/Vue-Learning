// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// actions——用于响应组件中的动作
const actions = {
    // add(context, value) {
    //     // context中有state
    //     context.commit('ADD', value)
    // },
    // reduce(context, value) {
    //     context.commit('REDUCE', value)
    // },
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
    }
}
// mutations——用于操作数据（state）
const mutations = {
    ADD(state, value) {
        // 真正修改数据
        state.sum += value
    },
    REDUCE(state, value) {
        // 真正修改数据
        state.sum -= value
    },
}
// state——用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端'
}
// getters——用于将state中的数据进行加工 
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions, mutations, state, getters
})