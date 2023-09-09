<template>
    <div>
        <h2>我是Home的内容</h2>
        <!-- 切换路由 -->
        <ul class="nav nav-tabs">
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/message">message</router-link>
            </li>
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/news">news</router-link>
            </li>
        </ul>
        <!-- 展示二级路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "HomeCpt"
}
</script>

<style></style>