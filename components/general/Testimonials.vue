<template>
    <section v-if="status === 'published'" class="page__section testimonials__section">
        <SectionHeader :header="header" :para="para"/>
        <div class="testimonial__inner">
            <div v-for="(ball, index) in testes" :key="index" class="testimonial__cell">
                <div v-if="ball.status === 'published'" class="testimonial__cell__inner">
                    <div class="teste__cell__inner">
                        <blockquote>
                            <p class="teste__para">{{ ball.text }}</p>
                        </blockquote>
                        <hr>
                        <p class="teste__name">{{ ball.name }}</p>
                        <p class="teste__description">{{ ball.string }}</p>
                    </div>
                    <div class="teste__cell__transparent"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
// import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        SectionHeader
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
.testimonials__section {
    background-color: var(--light-blue);
}
.testimonial__inner {
    max-width: 1000px;
    margin: 30px auto;
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
    flex: 1 0 45%;
    margin: 10px 0 20px;
}
.testimonial__cell__inner {
    flex: 1;
    padding: 0 20px;
}
.teste__cell__transparent {
    width: 100%;
    height: 40px;
    flex: 1;
}
.teste__cell__inner {
    width: 100%;
    height: 90%;
    padding: 26px 50px;
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
	bottom: -6px;
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
    background-color: var(--dark-grey);
}
.testimonial__cell:nth-of-type(5n + 3) .teste__cell__inner::after {
    border-top-color: var(--dark-grey);
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
@media screen and (max-width: 900px) {
    .teste__cell__inner::after {
        bottom: 0;
    }
    .testimonial__cell {
        flex: 1 1 45%;
        min-width: 270px;
        margin: 10px 0 20px;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 500px) {
    .testimonial__inner {
        margin: 20px auto 10px;
    }
    .testimonial__cell {
        margin: 10px 0 10px;
    }
    .teste__cell__inner {
        padding: 20px 20px 20px 30px;
        border-radius: 20px;
    }
    .teste__para::before {
        top: 4px;
        left: -26px;
        font-size: 60px;
    }
}
</style>
