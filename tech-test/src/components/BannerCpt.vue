<template>
    <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header">
                <h2>Vue Router Demo</h2>
                <button @click="$router.back()">后退</button>
                <button @click="$router.forward()">前进</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerCpt",
}
</script>

<style></style>