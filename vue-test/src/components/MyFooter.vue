<template>
    <!-- 注意：直接用total是否为0，控制是否显示整个组件 -->
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="deleteAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    computed: {
        // 计算有多少个todo
        total() {
            return this.todos.length
        },
        // 计算打√的todo有多少个
        doneTotal() {
            /*
            let cnt = 0
            this.todos.forEach(todo => {
                if (todo.done)
                    cnt++
            });
            return cnt
            */
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        },
        // 判断todo是否全被选中了
        isAll: {
            get() {
                return (this.doneTotal === this.total) && this.total > 0
            },
            set(value) {
                // 传函数
                // this.checkAllTodo(value)
                // 触发自定义事件
                this.$emit('checkAllTodo',value)
            }
        }
    },
    methods: {
        // 删除所有todo
        deleteAll() {
            if (confirm("确认删除所有选中的Todo项?"))
            // 传函数
            // this.clearAllTodo()
            // 触发自定义事件
            this.$emit("clearAllTodo")
        },
        // // 选中 or 不选所有todo
        // checkAll(e) {
        //     this.checkAllTodo(e.target.checked)
        // }
        //
        //
    },
    props: ["todos", "checkAllTodo", "clearAllTodo"]
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>