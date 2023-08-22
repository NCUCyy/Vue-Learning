<template>
    <li>
        <label>
            <!-- 以下代码也可以实现，但是有点违反规则，因为修改了prop -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <input type="checkbox" :checked="todo.done" @click="handleCheck" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input ref="inputTitle" v-show="todo.isEdit" type="text" :value="todo.title" @blur="handelBlur($event, todo)" />
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
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
        },
        // 编辑
        handleEdit(todo) {
            // 添加一个isEdit属性
            // 两张方式：Vue.set()或this.$set()
            // 注意：不能直接——todo.isEdit=true（这样添加的属性，不是响应式的，vue检测不到它的变化）
            if (todo.isEdit === undefined) {
                this.$set(todo, 'isEdit', true)
            } else {
                todo.isEdit = true
            }
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        },
        // 失去焦点事件（真正地修改todo的title）
        handelBlur(e, todo) {
            todo.isEdit = false
            if (!e.target.value.trim()) {
                return alert("输入不能为空")
            }
            // 使用事件总线的写法（子——>父数据）
            this.$bus.$emit("updateTodo", todo.id, e.target.value)
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