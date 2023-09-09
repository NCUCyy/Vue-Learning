<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                <!-- 1、跳转路由并携带query参数，to的字符串写法 -->
                <!-- (JS的模版字符串：`param1=${}&param2=${}`) -->
                <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{ message.title}}</router-link> -->
                <!-- 2、跳转路由并携带query参数，to的对象写法 -->
                <router-link :to="{
                    name:'detail',
                    query: {
                        id: message.id,
                        title: message.title
                    }
                }">
                    {{ message.title }}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "MessageCpt",
    data() {
        return {
            messageList: [
                { id: '001', title: "message1" },
                { id: '002', title: "message2" },
                { id: '003', title: "message3" },

            ]
        }
    },
}
</script>

<style></style>