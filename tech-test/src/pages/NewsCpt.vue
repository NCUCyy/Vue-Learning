<template>
    <div>
        <ul>
            <li>
                news001
                <input type="text" />
            </li>
            <li>
                news002
                <input type="text" />
            </li>
            <li>
                news003
                <input type="text" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NewsCpt",
    beforeDestroy(){
        console.log('NewsCpt组件被销毁！')
    }
}
</script>

<style></style>