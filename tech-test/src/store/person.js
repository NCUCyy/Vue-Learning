import axios from "axios"
import { nanoid } from 'nanoid'

// 2、person模块
export default {
    // 为了开启mapState中的简写形式：...mapState('countOptions', {})
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            // 只添加姓王的人
            if (value.name.indexOf('王') == 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert("添加的人必须姓王！")
            }
        }, addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
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