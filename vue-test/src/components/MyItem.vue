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
import pubsub from 'pubsub-js'
export default {
    name: "MyItem",
    props: ["todo"],
    methods: {
        // 勾选 or 取消勾选
        handleCheck() {
            // 获取id的方式1
            // 触发checkTodo的事件
            this.$bus.$emit("checkTodo", this.todo.id)
        },
        // 删除
        handleDelete() {
            if (confirm("确认是否删除" + this.todo.title))
                // 法1：父组件传过来一个函数
                // this.deleteTodo(this.todo.id)
                // 法2：全局总线（触发deleteTodo的事件）
                // this.$bus.$emit("deleteTodo",this.todo.id)
                // 法3：消息订阅与发布
                pubsub.publish('deleteTodo', this.todo.id)
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