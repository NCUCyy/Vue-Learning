// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import HomeCpt from '../pages/HomeCpt'
import AboutCpt from '../pages/AboutCpt'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: HomeCpt
        },
        {
            path: '/about',
            component: AboutCpt
        }
    ]
})