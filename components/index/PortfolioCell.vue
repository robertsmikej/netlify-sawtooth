<template>
    <a :href="'/portfolio/' + cell.slug" class="portfolio__cell__inner">
        <div class="portfolio__img__container">
            <img :src="cell.main_image" :alt="cell.name" class="portfolio__img">
        </div>
        <div class="portfolio__text__container">
            <h3 class="portfolio__name">{{ cell.name }}</h3>
            <p class="portfolio__para">{{ cell.para }}</p>
            <div class="portfolio__link">More Information</div>
        </div>
    </a>
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
        background: rgba(000, 000, 000, .7);
        transition: opacity .5s;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        flex: 1;
        color: var(--dark-grey);
        padding: 30px;
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
        font-weight: 400;
    }
    .portfolio__para {
        margin: 0 auto;
        font-weight: 400;
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
</style>
