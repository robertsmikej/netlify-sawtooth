<template>
    <section class="page__section testimonial__section">
        <div class="testimonial__inner">
            <p>{{ testimonial.quote }}</p>
            <h5 class="testimonial__name">- {{ testimonial.name }}</h5>
        </div>
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
    background-color: var(--light-blue);
}
.testimonial__section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: var(--light-blue);
    transform: rotate(-1deg) skewX(-1deg);
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
}
.testimonial__name {
    text-align: right;
    width: 100%;
}
</style>
