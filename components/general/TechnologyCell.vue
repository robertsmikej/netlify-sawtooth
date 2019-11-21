<template>
    <nuxt-link :to="'/' + cell.type + '/' + cell.slug" class="tech__cell__inner">
        <div class="tech__cell__img__container">
            <img :src="cell.icon" :alt="cell.name + ' Logo'" class="tech__cell__logo">
        </div>
        <div class="tech__cell__text__container">
            <h4>{{ cell.name }}</h4>
            <p v-if="cell.short_description">{{ cell.short_description }}</p>
            <SiteButton v-if="cell.showLink" :buttonText="'See More'" :backgroundColor="'var(--light-orange)'" :color="'#FFF'"/>
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
        cell: Object
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
}
.tech__cell__img__container {
    width: 64px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.tech__cell__img__container img {
    max-width: 100%;
    width: auto;
    max-height: 100%;
    height: auto;
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
.tech__cell__text__container h3 {
    margin: 10px auto 0;
}
.tech__cell__text__container p {
    font-size: 19px;
    line-height: 23px;
    font-weight: 300;
    margin: 10px auto 0;
}
.see__more__link {

}
</style>