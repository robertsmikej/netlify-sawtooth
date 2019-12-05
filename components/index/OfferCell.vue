<template>
    <nuxt-link :to="'/services/' + service.slug" v-if="service.status === 'published'" class="offer__grid__cell">
        <div class="offer__image__container">
            <img :src="service.icon" :alt="service.service_type" class="offer__image">
        </div>
        <h4 class="offer__header">{{ service.service_type }}</h4>
        <p class="offer__text__para">{{ service.service_short_description }}</p>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        service: Object
    }
}
</script>

<style>
    .offer__grid__cell {
        padding: 20px 0 16px;
        margin: 5px 5px;
        flex: 1 1 31%;
        /* max-width: 50%; */
        min-width: 200px;
        text-decoration: none;
        transition: all .4s;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .offer__grid__cell:hover {
        background: #FFF;
    }
    .offer__image__container {
        margin: 0 auto;
        border-radius: 50%;
        background: #FFF;
        padding: 22px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        transition: background .4s;
    }
    .offer__grid__cell:hover .offer__image__container {
        background: var(--light-orange);
    }
    .offer__image {
        align-self: center;
        object-fit: contain;
        margin: 0px 0 -2px;
        transition: filter .3s;
    }
    .offer__header {
        font-size: 24px;
        line-height: 24px;
        margin: 14px 0;
        color: #FFF;
        transition: color .4s;
    }
    .offer__grid__cell:hover .offer__header {
        color: var(--light-orange);
    }
    .offer__text__para {
        margin: 0 auto 2px;
        width: 90%;
    }
    .offer__grid__cell:hover .offer__text__para {
        color: var(--dark-grey);
        transition: color .4s;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 800px) {
        .offer__grid__cell {
            min-width: 0;
            border-radius: 30px;
        }
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 450px) {
        .offer__header {
            font-size: 1.7em;
            line-height: 1.1em;
        }
        .offer__grid__cell {
            padding: 14px 0 18px;
            margin: 3px;
            flex: 1 1 46%;
            max-width: 46%;
            
        }
    }
</style>
