<template>
    <section class="page__section testimonial__section">
        <nuxt-link v-if="testimonial.quote" :to="'/portfolio/' + testimonial.name.toLowerCase().replace('.', '-')" class="testimonial__inner">
            <p>{{ testimonial.quote }}</p>
            <h4 v-if="testimonial.name" class="testimonial__name">- {{ testimonial.name }}</h4>
        </nuxt-link>
    </section>
</template>

<script>
export default {
    props: {
        testimonial: Object
    },
    computed: {
        
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
.testimonial__section {
    background-color: var(--light-orange);
}
.testimonial__section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: var(--light-orange);
    transform: rotate(1deg) skewX(1deg);
    transform-origin: 0 0;
}
.testimonial__inner {
    max-width: 800px;
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    padding: 10px 30px 20px;
    background-color: var(--site-white);
    border-radius: 10px;
    text-decoration: none;
}
.testimonial__inner p {
    line-height: 1.4em;
    text-align: left;
    position: relative;
    z-index: 1;
}
.testimonial__inner p::before {
    content: '\201C';
    position: absolute;
    top: 6px;
    left: -22px;
    color: rgba(14, 215, 244, .5);
    font-size: 50px;
    z-index: 0;
}
.testimonial__name {
    text-align: right;
    width: 100%;
}
</style>
