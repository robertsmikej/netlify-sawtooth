<template>
    <div class="site__button">
        <nuxt-link v-if="buttonLink" :to="buttonLink" :style="{backgroundColor: backgroundColor, color: color, border: '1px solid ' + backgroundColor}" class="site__button__inner">
            {{ buttonText.trim() }}
        </nuxt-link>
        <div v-if="!buttonLink" :style="{backgroundColor: backgroundColor, color: color, border: '1px solid ' + backgroundColor}" class="site__button__inner">
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
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    align-content: center;
    flex: 0 1 auto;
}
.site__button__inner {
    width: 100%;
    font-size: 1em;
    padding: 10px 24px;
    margin: 0 auto;
    text-decoration: none;
    /* display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    align-content: center; */
    text-transform: uppercase;
    transition: all .5s;
    cursor: pointer;
    font-weight: 400;
    text-align: center;
}
.site__button__inner:hover {
    background-color: #FFF !important;
    color: var(--dark-blue) !important;
    font-size: 1.1em !important;
}
</style>
