<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: "SearchCpt",
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        searchUsers() {
            // ES6模版字符串
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    console.log("请求成功！", response.data.items)
                    this.$bus.$emit("getUsers", response.data.items)
                },
                error => {
                    console.log("请求失败！", error.data)
                }
            )
        }
    }
}
</script>

<style scoped></style>