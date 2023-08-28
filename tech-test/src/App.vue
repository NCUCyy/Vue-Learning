<template>
  <div>
    <button @click="getStudents">点我显示学生数据</button>
    <button @click="getCars">点我显示汽车数据</button>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'App',
  methods: {
    getStudents() {
      axios.get('http://localhost:8080/students').then(
        response => {
          console.log("请求成功！", response.data)
        },
        error => {
          console.log("请求失败！", error.message)
        }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/ap/cars').then(
        response => {
          console.log('请求成功！', response.data)
        },
        error => {
          console.log('请求失败！', error.message)
        }
      )
    }
  }
}
</script>