<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: '张三',
			sex: '男',
		}
	},
	methods: {
		getSchoolName(name) {
			console.log("Student组件接收到了学校名:", name)
		}
	},
	mounted() {
		this.$bus.$on("getSchoolName", getSchoolName)
	},
}
</script>

<style lang="less" scoped>
.student {
	background-color: pink;
	padding: 5px;
	margin-top: 30px;
}
</style>
