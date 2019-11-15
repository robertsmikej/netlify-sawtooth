<template>
    <div class="hero__sub__page">
        
<!--
        <div class="hero__background">
            <div class="hero__background__overlay"></div>
            <video playsinline autoplay muted loop class="hero__header__video">
                <source :src="hero.hero_background_video.data.full_url" type="video/mp4">
            </video>
        </div>
-->
        <div class="hero__sub__inner">
            <div class="hero__background__overlay"></div>
            <div class="hero__sub__text__container">
                <h1 class="hero__sub__header">{{ hero.hero_header }}</h1>
                <hr class="hero__sub__hr">
                <p class="hero__sub__para">{{ hero.hero_para }}</p>
            </div>
            <div class="hero____video__image__container">
                <video playsinline autoplay muted loop class="hero__header__video">
                    <source :src="hero.hero_background_video.data.full_url" type="video/mp4">
                </video>
                <!-- <picture v-if="hero.hero_background_image" class="hero__header__image">
                    <source :srcset="hero.hero_background_image.data.full_url" media="(min-width: 900px)">
                    <img :src="hero.hero_background_image.data.full_url"/>
                </picture> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hero: Object
    },
    methods: {
        changeHeader: function () {
            document.getElementsByClassName("header")[0].classList.remove("header__dark");
        }
    },
    mounted() {
        this.changeHeader();
    }
}
</script>

<style>
    .hero__sub__page {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        padding: 0;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        margin: -70px 0 0 0;
        /* min-height: 40vh; */
        /* background: linear-gradient(to top right, var(--light-blue), var(--blue-grey)); */
        background: #FFF;
        z-index: 10;
    }
    .hero__background__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: #000;
        opacity: .5;
    }
    .hero__sub__inner {
        z-index: 1;
        width: 100%;
        padding: 100px 6vw;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-between;
        box-sizing: border-box;
        min-height: 60vh;
    }
    .hero__sub__text__container {
        width: 100%;
        margin: 0 0 0;
        max-width: 40vw;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        z-index: 3;
    }
    .hero__sub__header {
        color: #FFF;
    }
    .hero__sub__hr {
        width: 80%;
        height: 2px;
        border: none;
        background-color: var(--blue);
        margin: 10px 0;
        padding: 0;
        align-self: flex-start;
    }
    .hero__sub__para {
        font-size: 1.2em;
        line-height: 1.5em;
        /* color: var(--dark-blue); */
        color: #FFF;
        text-align: left;
    }
    .hero____video__image__container {
        align-self: center;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .hero__header__video {
        width: auto;
        min-width: 100%;
        height: auto;
        min-height: 100%;
        z-index: 1;
        display: block;
    }
    .hero__header__image, .hero__header__image img {
        width: auto;
        height: 100%;
        max-height: 500px;
    }
</style>