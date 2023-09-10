<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: "AboutCpt",
    // ------------------------------------3、组件内路由守卫------------------------------------
    beforeRouteEnter(to, from, next) {
        // 通过路由规则，进入组件时，被调用
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') == 'atguigu') {
                // 只有执行了next()，才会往后走
                next()
            } else {
                alert('学校名不对，无权查看！')
            }
        }
        else {
            next()
        }
    },
    beforeRouteLeave(to, from, next) {
        // 通过路由规则，离开组件时，被调用
        console.log("离开About")
        next()
    }
}
</script>

<style></style>