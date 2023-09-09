// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import HomeCpt from '../pages/HomeCpt'
import AboutCpt from '../pages/AboutCpt'
import NewsCpt from '../pages/NewsCpt'
import MessageCpt from '../pages/MessageCpt'
import DetailCpt from '../pages/DetailCpt'

// 创建并暴露VueRouter
const router = new VueRouter({
    routes: [
        // 配置一级路由
        {
            name: 'home',
            path: '/home',
            component: HomeCpt,
            meta: { title: '主页' },
            // 配置二级路由(/home的子路由)
            children: [
                {
                    name: 'news',
                    path: 'news',
                    component: NewsCpt,
                    meta: { isAuth: true, title: '新闻' }
                },
                {
                    name: 'message',
                    path: 'message',
                    component: MessageCpt,
                    meta: { isAuth: true, title: '消息' },
                    // 配置三级路由(/message的子路由)
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title', // 使用占位符生声明接收params参数
                            component: DetailCpt,
                            meta: { title: '详情' },
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
            name: 'about',
            path: '/about',
            component: AboutCpt,
            meta: { title: '关于' }
        }
    ]
})

// 全局前置路由守卫————①初始化时被调用；②每一次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // 只有前往设置了isAuth为true的路由组件才会判断
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') == 'atguigu') {
            // 只有执行了next()，才会往后走
            next()
        } else {
            alert('学校名不对，无权查看！')
        }
    } else {
        // 只有执行了next()，才会往后走
        next()
    }
})
// 全局后置路由守卫————①初始化时被调用；②每一次路由切换之后被调用
router.afterEach((to, from) => {
    // 修改页面标题
    document.title = to.meta.title
})
export default router