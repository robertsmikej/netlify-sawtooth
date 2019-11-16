<template>
    <div class="page__overlay" @click="contact()"></div>
</template>

<script>
export default {
    methods: {
        contact: function() {
            this.$nuxt.$emit("contact_hide", !this.$parent.contactShow);
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
    .pageOverlayShow {
        display: flex;
    }
</style>
