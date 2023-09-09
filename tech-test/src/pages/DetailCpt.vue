<template>
    <div>
        <ul>
            <li>消息编号:{{ id }}</li>
            <li>消息标题:{{ title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DetailCpt",
    // 添加props配置项
    props: ['id', 'title']
}
</script>

<style></style>