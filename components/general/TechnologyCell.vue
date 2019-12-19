<template>
    <nuxt-link :to="'/technology/' + cell.slug" class="tech__cell__inner">
        <div class="tech__cell__img__container">
            <img :src="cell.icon" :alt="cell.name + ' Logo'" class="tech__cell__logo">
        </div>
        <div v-if="cell.show_label && cell.name.length > 0" class="tech__cell__text__container">
            <p>{{ cell.name }}</p>
        </div>
        <div v-if="cell.service_type" class="tech__cell__text__container">
            <p>{{ cell.service_type }}</p>
        </div>
    </nuxt-link>   
</template>

<script>
import SiteButton from '~/components/general/SiteButton.vue';

export default {
    components: {
        SiteButton
    },
    props: {
        cell: Object,
        type: String,
        description: Boolean
    }
}
</script>

<style>
.tech__cell__inner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    margin: 10px 0;
    text-decoration: none;
}
.tech__cell__img__container {
    width: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
}
.tech__cell__img__container img {
    max-height: 54px;
    max-width: 120px;
    object-fit: contain;
    align-self: center;
}
.tech__cell__text__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding: 0 10px;
}
.tech__cell__text__container h4 {
    margin: 10px auto 0;
    font-size: .8em;
}
.tech__cell__text__container p {
    font-size: 1em;
    line-height: 23px;
    font-weight: 300;
    margin: 10px auto 0;
}
</style>