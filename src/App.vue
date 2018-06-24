
<template>
    <div id="app">
        <p><router-link to="/user/23">nihao</router-link></p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app' ,
}
</script>
<style lang="less">
#app{
    font-size: 14px;
    color: black;
}
</style>


