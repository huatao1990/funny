<template>
    
</template>
<script>
export default {
    asyncData({store,route}) {
        return store.dispatch('fetchData',route.params.id)
    },
    computed: {
        item () {
            return this.$store.state.item[this.$route.params.id]
        }
    }
}
</script>
<style>

</style>


