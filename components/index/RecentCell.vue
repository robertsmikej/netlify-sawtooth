<template>
    <!-- <nuxt-link v-if="recent.status === 'published'" :to="'/' + shortenName(recent.recent_page_name)" class="recent__work__cell"> -->
    <a v-if="recent.status === 'published'" :href="recent.recent_url" class="recent__work__cell">
        <div class="work__cell__cover">
            <div class="work__cell__cover__overlay"></div>
            <img :src="recent.recent_page_image.data.full_url" :alt="'Website image of ' + recent.recent_page_name" class="work__cell__cover__image">
        </div>
        <div class="work__cell__content">
            <div class="work__cell__logo__name" v-if="recent.recent_page_logo">
                <img :src="recent.recent_page_logo.data.full_url" :alt="'Logo for ' + recent.recent_page_name" class="work__cell__logo__image">
            </div>
            <div class="work__cell__text">
                <h4 class="work__cell__header">{{ recent.recent_page_name }}</h4>
                <p class="work__cell__text__para">{{ recent.recent_page_para }}</p>
            </div>
        </div>
    </a>
    <!-- </nuxt-link> -->
</template>

<script>
export default {
    props: {
        recent: Object
    },
    methods: {
        shortenName: function (name) {
            return name.replace(" ", "-").replace(".", "-").toLowerCase();
        }
    }
}
</script>

<style>
    .recent__work__cell {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        text-decoration: none;
        flex: 1 1 auto;
        overflow: hidden;
    }
    .recent__work__cell:nth-of-type(1) {
        grid-area: large1;
    }
    .recent__work__cell:nth-of-type(2) {
        grid-area: small1;
    }
    .recent__work__cell:nth-of-type(3) {
        grid-area: small2;
    }
    .recent__work__cell:nth-of-type(4) {
        grid-area: medium1;
    }
    .recent__work__cell:nth-of-type(5) {
        grid-area: small3;
    }
    .recent__work__cell:nth-of-type(6) {
        grid-area: small4;
    }
    .recent__work__cell:nth-of-type(7) {
        grid-area: medium2;
    }
    .work__cell__cover {
        position: relative;
        overflow: hidden;
        height: 100%;
        overflow: hidden;
    }
    .work__cell__cover__overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        opacity: .2;
        background-color: #000;
        transition: opacity .5s;
    }
    .recent__work__cell:hover .work__cell__cover__overlay {
        opacity: .6;
    }
    .work__cell__cover__image {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
    .recent__work__cell:hover .work__cell__cover__image {
        
    }
    .work__cell__content {
           
    }
    .recent__work__cell:hover .work__cell__logo__name {
        opacity: 0;
    }
    .work__cell__logo__name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        transition: all .4s;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto;
    }
    .work__cell__logo__image {
        max-width: 90%;
        max-height: 140px;
        object-fit: contain;
        margin: 0 auto;
        display: block;
    }
    .work__cell__text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 400px;
        transition: all .5s;
        opacity: 0;
    }
    .recent__work__cell:hover .work__cell__text {
        opacity: 1;
    }
    .work__cell__header {
        color: #FFF;
        font-weight: 500;
        font-size: 23px;
        line-height: 23px;
        margin: 5px auto;
    }
    .work__cell__text__para {
        color: #FFF;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
    }
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:950px) {
/*
    .recent__work__cell {
        border: 1px solid var(--dark-blue);
    }
*/
    .recent__work__cell:nth-of-type(1) {
            flex-wrap: nowrap;
            flex-direction: row;
    }
    .recent__work__cell:nth-of-type(2) {
            flex-wrap: nowrap;
            flex-direction: column-reverse;
    }
    .recent__work__cell:nth-of-type(3) {
            flex-wrap: nowrap;
    }
    .recent__work__cell:nth-of-type(4) {
            flex-wrap: nowrap;
            flex-direction: row-reverse;
    }
    .recent__work__cell:nth-of-type(5) {
            flex-wrap: nowrap;
            flex-direction: column-reverse;
    }
    .recent__work__cell:nth-of-type(6) {
            flex-wrap: nowrap;
            flex-direction: column;
    }
    .work__cell__cover {
        flex: 2;
    }
    .work__cell__content {
        background-color: var(--blue-grey);
/*        background-color: #FFF;*/
        flex: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 4px 2px 4px;
        min-width: 180px
    }
    .work__cell__logo__name {
        position: relative;
        top: inherit;
        left: inherit;
        transform: none;
        margin: 0px auto 0;
        width: 85%;
        max-width: 85%;
    }
    .work__cell__logo__image {
        max-height: 50px;
        max-width: 200px;
        margin: 6px auto 0;
    }
    .work__cell__text {
        position: relative;
        top: inherit;
        left: inherit;
        transform: none;
        opacity: 1;
        margin: 6px auto 6px;
    }
    .work__cell__header {
        font-size: 1.4em;
        line-height: 1em;
        font-weight: 400;
        margin: 0px auto;
    }
    .work__cell__text__para {
        font-size: 15px;
        line-height: 19px;
        margin: 0 auto;
        display: none;
    }
    .work__cell__cover__overlay {
        opacity: .1;
    }
    .recent__work__cell:hover .work__cell__cover__overlay {
        opacity: .2;
    }
    .recent__work__cell:hover .work__cell__logo__name {
        opacity: 1;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:700px) {
    .work__cell__content {
        padding: 10px 2px;
    }
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:530px) {
    .recent__work__cell:nth-of-type(1) {
            flex-direction: column;
    }
    .recent__work__cell:nth-of-type(2) {
            
    }
    .recent__work__cell:nth-of-type(4) {
            flex-direction: column;
    }
    .recent__work__cell:nth-of-type(5) {
            flex-direction: column-reverse;
    }
    .recent__work__cell:nth-of-type(5) {
            flex-direction: column;
    }
    .recent__work__cell:nth-of-type(6) {
            flex-direction: column-reverse;
    }
    .recent__work__cell:nth-of-type(7) {
            flex-direction: column;
    }
    
    .work__cell__logo__image {
        max-width: 90%;
        margin: 6px auto 0;
    }
    .work__cell__logo__name {
        width: 92%;
        max-width: 92%;
    }
}
</style>
