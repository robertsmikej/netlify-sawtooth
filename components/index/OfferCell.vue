<template>
    <div v-if="service.status === 'published'" to="'/' + service.service_link" class="offer__grid__cell">
        <div class="offer__image__container">
            <img :src="service.icon" :alt="service.service_type" class="offer__image">
        </div>
        <div class="offer__text__container">
            <h4 class="offer__header">{{ service.service_type }}</h4>
            <div class="offer__text__inner">
                <p class="offer__text__para">{{ service.service_short_description }}</p>
            </div>
        </div>
    </div>
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
        flex: 1 1 33.3333%;
        min-width: 200px;
        text-decoration: none;
        transition: background .4s;
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
</style>
