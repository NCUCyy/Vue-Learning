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
                            path: 'detail',
                            component: DetailCpt
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