// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 引入两个模块
import countOptions from './count.js'
import personOptions from './person.js'



//创建并暴露store
export default new Vuex.Store({
    // 配置两个模块
    modules: {
        countOptions,
        personOptions
    }
})