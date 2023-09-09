// 1、count模块
export default {
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