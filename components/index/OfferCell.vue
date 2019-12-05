<template>
    <div class="offer__grid__cell">
        <div class="offer__cell__side">
            <div v-if="service.icon" class="offer__image__container">
                <img :src="service.icon" :alt="service.service_type" class="offer__image"/>
            </div>
            <h4 v-if="service.service_type" class="offer__header">{{ service.service_type }}</h4>
            <h5 v-if="service.sub_header" class="offer__sub__header">{{ service.sub_header }}</h5>
            <div v-if="service.short_description" v-html="$md.render(service.short_description)" class="offer__short__description"></div>
        </div>
        <div class="offer__cell__side">
            <div class="technology__cells">
                <div class="tech__cell" v-for="(item, index) in technologies" :key="index">
                    <TechnologyCell :type="'technology'" :cell="item" :description="false"/>
                </div>
            </div>
        </div>
        <SiteButton :buttonText="'Learn More'" :buttonLink="'/services/' + service.slug" :backgroundColor="1" :color="1"/>
    </div>
</template>

<script>
import SiteButton from '~/components/general/SiteButton.vue';
import TechnologyCell from '~/components/general/TechnologyCell.vue';

export default {
    components: {
        SiteButton,
        TechnologyCell
    },
    props: {
        service: Object,
        technologies: Array
    }
}
</script>

<style>
    .offer__grid__cell {
        padding: 26px 20px;
        margin: 5px 10px;
        flex: 1 1 46%;
        /* max-width: 50%; */
        min-width: 200px;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: flex-start;
        background: var(--light-blue);
        overflow: hidden;
    }
    .offer__grid__cell:nth-of-type(2) {
        flex-direction: row-reverse;
    }
    .offer__cell__side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1 1 auto;
        width: 100%;
    }
    .offer__cell__side:nth-of-type(2) {
        flex: 2 1 auto;
    }
    .offer__image__container {
        margin: 0 auto;
        border-radius: 50%;
        background: var(--light-orange);
        padding: 22px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        transition: backgroundColor .4s;
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
        font-weight: 500;
        margin: 14px 0 0;
    }
    .offer__sub__header {
        margin-bottom: 0px;
        width: 100%;
    }
    .offer__short__description {
        margin: 0 auto 2px;
        width: 90%;
    }
    .offer__cell__side .technology__cells {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        flex: 1;
    } 
    .offer__cell__side .tech__cell {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        padding: 10px;
    } 
    .offer__grid__cell .site__button {
        margin-top: 20px;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 800px) {
        .offer__grid__cell {
            
        }
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 450px) {
        .offer__header {
            font-size: 1.7em;
            line-height: 1.1em;
        }
        .offer__grid__cell {
            
        }
    }
</style>
