// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import HomeCpt from '../pages/HomeCpt'
import AboutCpt from '../pages/AboutCpt'
import NewsCpt from '../pages/NewsCpt'
import MessageCpt from '../pages/MessageCpt'
import DetailCpt from '../pages/DetailCpt'

export default new VueRouter({
    routes: [
        // 配置一级路由
        {
            path: '/home',
            component: HomeCpt,
            // 配置二级路由(/home的子路由)
            children: [
                {
                    path: 'news',
                    component: NewsCpt
                },
                {
                    path: 'message',
                    component: MessageCpt,
                    // 配置三级路由(/message的子路由)
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title', // 使用占位符生声明接收params参数
                            component: DetailCpt,
                            // 1）对象形式(一般不用；只能是写死的数据)
                            // props:{
                            //     id:'001',
                            //     title:'message1'
                            // }
                            // 2）bool形式(只能出传递params中的参数)
                            // props: true
                            // 3）function形式(推荐；$route作为函数参数，返回值决定传递什么参数)
                            // props($route) {
                            //     // 由return返回值决定传递什么参数
                            //     return {
                            //         id: $route.params.id,
                            //         title: $route.params.title
                            //     }
                            // }
                            // 简化写法（解构赋值）
                            props({ params }) {
                                return {
                                    id: params.id,
                                    title: params.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            component: AboutCpt
        }
    ]
})