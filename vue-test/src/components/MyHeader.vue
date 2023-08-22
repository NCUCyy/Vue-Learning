<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="item" @keyup.enter="add" />
    </div>
</template>

<script>
import { nanoid } from "nanoid"

export default {
    name: "MyHeader",
    data() {
        return {
            item: ''
        }
    },
    methods: {
        add() {
            // 1、校验数据
            if (!this.item.trim()) return alert("输出不能为空")
            // 2、将用户的输入包装成一个todo对象
            const todoObj = {
                id: nanoid(),
                title: this.item,
                done: false
            }
            // 3、通知app组件去添加这个todo对象
            // 传函数
            // this.addTodo(todoObj)
            // 触发自定义事件
            this.$emit("addTodo",todoObj)
            // 4、添加完后，清空输入框
            this.item = ''
        }
    },
}
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>