<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @click="handleCheck" />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: "MyItem",
    props: ["todo", "checkTodo", "deleteTodo"],
    methods: {
        // 勾选 or 取消勾选
        handleCheck() {
            // 获取id的方式1
            // 通知App组件将对应id的todo的done值取反
            this.checkTodo(this.todo.id)
        },
        // 删除
        handleDelete(id) {
            if (confirm("确认是否删除" + this.todo.title))
                // 获取id的方式2
                this.deleteTodo(id)
        }
    },
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

/* 鼠标悬浮效果 */
li:hover {
    background-color: #ddd;
}

/* 显示删除按钮 */
li:hover button {
    display: block;
}
</style>