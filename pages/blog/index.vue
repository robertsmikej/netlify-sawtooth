<template>
    {{blogPosts}}
</template>

<script>
    export default {
        computed: {
            blogPosts() {
                return this.$store.state.blogPosts;
            },
        },
    };
</script>

<style>

</style>