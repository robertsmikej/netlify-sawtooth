<template>
    <nuxt-link :to="'/portfolio/' + cell.slug" class="portfolio__cell__inner">
        <div class="portfolio__img__container">
            <img :src="cell.main_image" :alt="cell.name" class="portfolio__img">
        </div>
        <div class="portfolio__text__container">
            <h4 class="portfolio__name">{{ cell.name }}</h4>
            <p class="portfolio__para">{{ cell.para }}</p>
            <div class="portfolio__link">More Information</div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        cell: Object
    }
}
</script>

<style>
    .portfolio__cell__inner {
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
        position: relative;
        min-height: 100%;
    }
    .portfolio__cell:nth-of-type(even) .portfolio__cell__inner {
        flex-direction: row-reverse;
    }
    .portfolio__img__container {
        flex: 1;
    }
    .portfolio__img {
        width: 100%;
        display: block;
        object-fit: contain;
    }
    .portfolio__cell:hover .portfolio__text__container {
        opacity: 1;
    }
    .portfolio__text__container {
        background: rgba(000, 000, 000, .9);
        transition: opacity .5s;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        flex: 1;
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        color: #FFF;
    }
    .portfolio__name {
        margin: 0 auto 20px;
        text-transform: uppercase;
    }
    .portfolio__para {
        margin: 0 auto;
        font-size: .9em
;
    }
    .portfolio__link {
        background: var(--blue-grey);
        text-decoration: none;
        margin: 20px auto;
        text-align: center;
        padding: 8px 20px;
        color: #FFF;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        text-transform: uppercase;
        font-size: 16px;
        border-radius: 5px;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 700px) {
        .portfolio__cell__inner {
            flex-direction: column;
            text-decoration: none;
        }
        .portfolio__text__container {
            opacity: 1;
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            height: auto;
            flex: 1;
            padding: 20px 16px 10px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: center;
            color: var(--dark-grey);
            background: var(--site-white);
            min-width: 100%;
        }
        .portfolio__cell:nth-of-type(even) .portfolio__cell__inner {
            flex-direction: column;
        }
        .portfolio__name {
            margin: 0 auto 6px;
            text-transform: uppercase;
        }
    }
</style>
