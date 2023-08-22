<template>
	<div class="school">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
		<button @click="sendSchoolName">点我给Student传递SchoolName</button>
	</div>
</template>

<script>
export default {
	name: 'SchoolCpt',
	data() {
		return {
			name: '尚硅谷',
			address: '北京',
		}
	},
	methods: {
		sendSchoolName() {
			this.$bus.$emit("getSchoolName", this.name)
		}
	},
}
</script>
