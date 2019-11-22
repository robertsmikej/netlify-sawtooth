<template>
    <div class="hero" :class="checkSub(hero)">
        <div v-if="hero" class="hero__background">
            <div class="hero__background__overlay"></div>
            <video v-if="!hero.hero_background_image && hero.hero_background_video" playsinline autoplay muted loop class="hero__header__video">
                <source :src="hero.hero_background_video" type="video/mp4">
            </video>
            <picture v-if="hero.hero_background_image && !hero.hero_background_video" class="hero__header__image">
                <source :srcset="hero.hero_background_image" media="(min-width: 900px)">
                <img :src="hero.hero_background_image"/>
            </picture>
        </div>
        <div v-if="hero" class="hero__inner">
            <div class="hero__text__container">
                <h1 v-if="hero.hero_header" class="hero__header">{{ hero.hero_header }}</h1>
                <hr v-if="hero.hero_header" class="hero__hr">
                <p v-if="hero.hero_para" class="hero__para">{{ hero.hero_para }}</p>
                <div v-if="hero.hero_button_text" class="hero__button__container">
                    <nuxt-link v-if="hero.hero_button_link !== 'contact'" :to="hero.hero_button_link" class="hero__button js__open__contact">
                        {{ hero.hero_button_text }}
                    </nuxt-link>
                    <div v-if="hero.hero_button_link === 'contact'" @click="contactToggle()" class="hero__button js__open__contact">
                        <SiteButton :buttonText="hero.hero_button_text" :backgroundColor="'var(--light-orange)'" :color="'#FFF'"/>
                    </div>
                </div>
            </div>
            <div v-if="hero.hero_sub_image" class="hero__sub__image__container">
                <picture class="hero__sub__image">
                    <source :srcset="hero.hero_sub_image" media="(min-width: 900px)">
                    <img :src="hero.hero_sub_image"/>
                </picture>
            </div>
        </div>
    </div>
</template>

<script>
import SiteButton from '~/components/general/SiteButton.vue';

export default {
    components: {
        SiteButton
    },
    props: {
        hero: Object
    },
    methods: {
        checkVisible: function () {
            let rect = document.getElementsByClassName("hero")[0].getBoundingClientRect();
            let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        },
        changeHeader: function () {
            if (this.checkVisible()) {
                document.getElementsByClassName("header")[0].classList.remove("header__dark");
            } else {
                document.getElementsByClassName("header")[0].classList.add("header__dark");
            }
        },
        contactToggle: function(event) {
            this.$nuxt.$emit("showContact", true);
        },
        checkSub: function (data) {
            if (data.hero_sub_image) {
                return "hero__sub";
            } else {
                return "hero__full";
            }
        }
    },
    mounted() {
        document.getElementsByClassName("header")[0].classList.remove("header__dark");
        this.changeHeader();
        window.addEventListener('scroll', this.changeHeader);
    },
    destroyed () {
        window.removeEventListener('scroll', this.changeHeader);
    }
}
</script>

<style>
    .hero {
        width: 100%;
        min-width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        padding: 0;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        margin: -60px 0 0 0;
    }
    .hero__sub {
        /* margin: 0; */
        background: linear-gradient(to bottom right, var(--blue-grey), var(--blue));
        opacity: 1;
    }
    .hero__sub .hero__background {
        display: none;
    }
    .hero__background {
        width: 100%;
        max-height: 1170px;
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
    .hero__background video {
        min-width: 100%;
        height: auto;
        min-height: 100%;
    }
    .hero__header__image img {
        min-width: 100%;
    }
    .hero__inner {
        z-index: 3;
        width: 100%;
        max-width: 1600px;
        max-height: 840px;
        padding: 50px 6vw 100px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .hero__sub .hero__inner {
        position: relative;
        top: auto;
        left: auto;
        transform: none;
        padding: 7vw 3vw 5vw;
    }
    .hero__text__container {
        width: 100%;
        margin: 0;
        max-width: 520px;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: center;
    }
    .hero__hr {
        width: 110px;
        height: 2px;
        border: none;
        background-color: var(--blue);
        margin: 10px 0;
        padding: 0;
        align-self: flex-start;
    }
    .hero__para {
        font-size: 1.1em;
        line-height: 1.3em;
        color: #FFF;
        text-align: left;
    }
    .hero__button__container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: flex-start
    }

    .hero__sub__image__container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 20px;
        margin: 40px 0;
        width: 100%;
    }
    .hero__sub__image, .hero__sub__image img {
        align-self: center;
        width: auto;
        margin: 0 auto;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 900px) {
        .hero__inner {
            padding: 50px 6vw 50px;
        }
        .hero__background {
            min-height: 50vh;
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: center;
        }
        .hero__background video {
            align-self: center;
            object-fit: cover;
        }
        .hero__background {
            max-height: 700px;
        }
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 700px) {
        .hero__sub .hero__inner {
            flex-wrap: wrap;
            padding: 100px 3vw 70px;
        }
        .hero__sub .hero__sub__image__container {
            padding: 10px;
        }
        .hero__sub .hero__sub__image__container {
            margin: 30px auto 0;
        }
        .hero__background {
            max-height: 500px;
        }
    }
</style>
