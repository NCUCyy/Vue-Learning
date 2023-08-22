<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 改为自定义事件：addTodo -->
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <!-- 改为自定义事件：checkAllTodo、clearAllTodo -->
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyList
  },
  data() {
    return {
      // 初始化列表（从localStorage中读取）
      // 当没有元素时,getItem返回null，再todos.length时会报错；所以要保证这是个数组不为null
      todos: JSON.parse(localStorage.getItem("todos")) || []
    }
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    // 勾选或取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
          return
        }
      })
    },
    // 删除一个todo
    deleteTodo(_,id) {
      // 需要一个_下划线作为占位符（因为第一个参数是消息名）
      // 使用过滤函数，删除后的数组，覆盖原数组
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // 全选 or 全不选
    checkAllTodo(done) {
      this.todos.forEach(todo => {
        todo.done = done
      });
    },
    // 删除所有√的框框
    clearAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
    },
  },
  watch: {
    todos: {
      // 开启深度监视（监视到数组中每个todo对象的属性修改）
      deep: true,
      handler(value) {
        // 当数组发生改变时，把新数组value覆盖localStorage中的原数组
        localStorage.setItem("todos", JSON.stringify(value))
      }
    }
  },
  mounted() {
    // 挂载后，绑定事件
    // 注意：this不要忘记写！！！！！！
    this.$bus.$on("checkTodo", this.checkTodo)
    // 全局总线【写法】
    // this.$bus.$on("deleteTodo", this.deleteTodo)
    // 消息订阅预发布【写法】
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    // 销毁后，解绑事件
    this.$bus.$off("checkTodo")
    // this.$bus.$off("deleteTodo")
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}



/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
