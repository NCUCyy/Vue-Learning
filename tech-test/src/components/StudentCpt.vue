<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
	</div>
</template>

<script>
export default {
	name: 'StudentCpt',
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
		this.$bus.$on("getSchoolName", this.getSchoolName)
	},
	beforeDestroy(){
		this.$bus.$off("getSchoolName")
	}
}
</script>

