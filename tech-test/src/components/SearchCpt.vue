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
            this.$bus.$emit("getData", { isFirst: false, isLoading: true, users: [], errorMsg: '' })
            // ES6模版字符串
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response => {
                    this.$bus.$emit("getData", { isLoading: false, users: response.data.items, errorMsg: '' })
                },
                error => {
                    this.$bus.$emit("getData", { isLoading: false, users: [], errorMsg: error.message })
                }
            )
        }
    }
}
</script>

<style scoped></style>