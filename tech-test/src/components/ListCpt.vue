<template>
    <div class="row">
        <div v-show="info.users" class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px' />
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <!-- 展示欢迎页面 -->
        <h1 v-show="info.isFirst">Welcome to use!</h1>
        <!-- 展示加载页面 -->
        <h1 v-show="info.isLoading">Loading...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="info.errorMsg">{{ info.errorMsg }}</h1>
    </div>
</template>

<script>
export default {
    name: "ListCpt",
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                users: [],
                errorMsg: '',
            }
        }
    },
    mounted() {
        this.$bus.$on("getData", dataObj => {
            // es6语法
            // 把dataObj中的属性值覆盖掉info中的属性值（info中有，而dataObj中没有的属性，保持不变）
            this.info = { ...this.info, ...dataObj }
        })
    }
}
</script>


<style scoped>
.album {
    min-height: 50rem;
    /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>