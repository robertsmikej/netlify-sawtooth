<template>
    <div class="page__overlay" @click="contactToggle()"></div>
</template>

<script>
export default {
    methods: {
        contactToggle: function(event) {
            this.$nuxt.$emit("showContact", false);
        }
    }
}
</script>

<style>
    .page__overlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(54, 72, 95, 0.9);
        z-index: 10;
        display: none;
    }
    .pageOverlayShow .page__overlay {
        display: flex;
    }
</style>
