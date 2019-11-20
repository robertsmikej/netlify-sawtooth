<template>
    <div class="site__button">
        <nuxt-link v-if="buttonLink" :to="buttonLink" :style="{backgroundColor: backgroundColor, color: color}" class="site__button__inner">
            {{ buttonText.trim() }}
        </nuxt-link>
        <div v-if="!buttonLink" :style="{backgroundColor: backgroundColor, color: color}" class="site__button__inner">
            {{ buttonText.trim() }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonLink: String,
        buttonText: String,
        backgroundColor: String,
        color: String
    }
}
</script>

<style>
.site__button {
    margin: 20px auto;
    display: flex;
}
.site__button__inner {
    width: 100%;
    font-size: 1.1em;
    padding: 14px 24px;
    margin: 0 auto;
    min-width: 170px;
    text-decoration: none;
    display: flex;
    align-self: center;
    align-items: center;
    align-content: center;
    text-transform: capitalize;
    transition: all .5s;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
}
.site__button__inner:hover {
    background: #FFF;
    color: var(--dark-blue);
    font-size: 1.2em;
}
</style>
