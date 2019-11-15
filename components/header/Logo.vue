<template>
    <div class="site__logo__container">
        <img class="site__logo" :src="img" :alt="alt">
    </div>
</template>

<script>
export default {
    props: {
        img: String,
        alt: String
    }
}
</script>

<style>
    .site__logo__container {
        padding: 3px 8px 3px 8px;
        display: flex;
        flex-direction: column;
        justify-content: center; 
    }
    .site__logo {
        height: 52px;
        align-self: center;
        object-fit: contain;
        transition: transform 2.3s ease-in-out;
        transition: all .4s;
    }
</style>
