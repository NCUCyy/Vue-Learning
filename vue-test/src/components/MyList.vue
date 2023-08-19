<template>
    <ul class="todo-main">
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name: "MyList",
    components: { MyItem },
    data() {
        return {
            todos: [
                { id: "001", title: "吃饭", done: true },
                { id: "002", title: "睡觉", done: false },
                { id: "003", title: "学习", done: true }
            ]
        }
    },

}
</script>

<style></style>