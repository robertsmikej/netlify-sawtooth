<template>
    <section v-if="status === 'published'" class="page__section testimonials__section">
        <SectionHeader :header="header" :para="para"/>
        <div class="testimonial__inner">
            <carousel v-if="showCarousel" :per-page="1" :mouse-drag="true" :autoplay="true" :scroll-per-page="false" :loop="true" :autoplayHoverPause="true" :speed="700" :autoplay-timeout="6000" :navigation-enabled="true" :spacePadding="0" :pagination-enabled="false" :perPageCustom="[[520, 1], [1000, 2]]">
                <slide v-for="(ball, index) in testes" v-if="ball.status === 'published'" :key="index" class="testimonial__cell">
                    <div class="teste__cell__inner">
                        <blockquote>
                            <p class="teste__para">{{ ball.text }}</p>
                        </blockquote>
                        <hr>
                        <p class="teste__name">{{ ball.name }}</p>
                        <p class="teste__description">{{ ball.string }}</p>
                    </div>
                    <div class="teste__cell__transparent"></div>
                </slide>
            </carousel> 
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
// import { Carousel, Slide } from 'vue-carousel';

export default {
    
    components: {
        SectionHeader,
        Carousel: () => import('vue-carousel').then(m => m.Carousel).catch(),
        Slide: () => import('vue-carousel').then(m => m.Slide).catch()
    },
    props: {
        header: String,
        para: String,
        status: String
    },
    computed: {
        testes: function () {
            return this.$store.state.testimonials
        }
    },
    data() {
        return {
            showCarousel: false
        }
    },
    mounted() {
        this.showCarousel = true
    }
}
</script>

<style>
.VueCarousel {
    width: 100%;
}
.VueCarousel-slide {
    backface-visibility: visible !important;
}
.VueCarousel-navigation-button {
    font-size: 30px;
}
.VueCarousel-navigation-prev {
    color: var(--light-orange) !important;
}
.VueCarousel-navigation-next {
    color: var(--turkish-blue) !important;
}
.testimonials__section {
    background-color: var(--light-blue);
}
/* .testimonials__section::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;
    transform: rotate(-1deg) skewX(-1deg);
    transform-origin: 0 100%;
} */
.testimonial__inner {
    max-width: 1000px;
    margin: 60px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.testimonial__cell {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: relative;
}
.teste__cell__transparent {
    width: 100%;
    height: 40px;
}
.teste__cell__inner {
    width: 93%;
    height: 90%;
    padding: 30px 50px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    align-self: center;
    border-radius: 30px;
    color: #FFF;
}
.teste__cell__inner::after {
    content: "";
    position: absolute;
	bottom: 0px;
	width: 0;
	height: 0;
	border: 40px solid transparent;
	border-bottom: 0;
    background-color: transparent;
}

.testimonial__cell:nth-of-type(5n + 1) .teste__cell__inner {
    background-color: var(--turkish-blue);
}
.testimonial__cell:nth-of-type(5n + 1) .teste__cell__inner::after {
    border-top-color: var(--turkish-blue);
    left: 25%;
    border-left: 0;
}
.testimonial__cell:nth-of-type(5n + 1) .teste__cell__inner .teste__para::before {
    background-color: var(--turkish-blue);
    color: var(--light-orange);
}

.testimonial__cell:nth-of-type(5n + 2) .teste__cell__inner {
    background-color: var(--light-orange);
}
.testimonial__cell:nth-of-type(5n + 2) .teste__cell__inner::after {
    border-top-color: var(--light-orange);
    left: 55%;
    border-right: 0;
}
.testimonial__cell:nth-of-type(5n + 2) .teste__cell__inner .teste__para::before {
    color: #FFF;
}

.testimonial__cell:nth-of-type(5n + 3) .teste__cell__inner {
    background-color: var(--aqua);
}
.testimonial__cell:nth-of-type(5n + 3) .teste__cell__inner::after {
    border-top-color: var(--aqua);
    left: 55%;
    border-right: 0;
}
.testimonial__cell:nth-of-type(5n + 3) .teste__cell__inner .teste__para::before {
    color: #FFF;
}

.testimonial__cell:nth-of-type(5n + 4) .teste__cell__inner {
    background-color: var(--light-red);
}
.testimonial__cell:nth-of-type(5n + 4) .teste__cell__inner::after {
    border-top-color: var(--light-red);
    left: 55%;
    border-right: 0;
}
.testimonial__cell:nth-of-type(5n + 4) .teste__cell__inner .teste__para::before {
    color: #FFF;
}

.testimonial__cell:nth-of-type(5n + 5) .teste__cell__inner {
    background-color: var(--teal);
}
.testimonial__cell:nth-of-type(5n + 5) .teste__cell__inner::after {
    border-top-color: var(--teal);
    left: 55%;
    border-right: 0;
}
.testimonial__cell:nth-of-type(5n + 5) .teste__cell__inner .teste__para::before {
    color: #FFF;
}

blockquote {
    quotes: "\201C" "\201D";
    margin: 0;
}
.teste__para {
    text-align: left;
    position: relative;
    font-size: 17px;
    margin-top: 0px;
}
.teste__para::before {
    content: open-quote;
    position: absolute;
    top: 14px;
    left: -36px;
    font-size: 80px;
    font-family: Georgia, "Times New Roman", Times, serif;
}


.testimonial__cell hr {
    width: 100%;
    min-height: 1px;
    margin: 0px 0;
    border: none;
    background-color: #FFF;
}
.teste__name {
    text-align: left;
    margin: 10px 0 3px;
    font-size: 18px;
    font-weight: 600;
}
.teste__description {
    text-align: left;
    margin: 0 0 10px;
    font-size: 14px;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 500px) {
    .testimonial__inner {
        margin: 40px auto 10px;
    }
    .teste__cell__inner {
        padding: 30px 20px 30px 30px;
        border-radius: 20px;
    }
    .teste__para::before {
        top: 14px;
        left: -26px;
        font-size: 60px;
    }
}
</style>
