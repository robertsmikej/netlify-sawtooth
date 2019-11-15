<template>
    <!-- <nuxt-link to="/process" class="process__text__cell"> -->
    <div class="process__text__cell">
        <div class="process__text__number">{{ ind }}</div>
        <div class="process__text">
            <h3>{{ process.process_header }}</h3>
            <p>{{ process.process_para }}</p>
        </div>
    </div>
    <!-- </nuxt-link> -->
</template>

<script>
export default {
    props: {
        process: Object,
        ind: Number
    }
}
</script>

<style>
    .process__text__cell {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        text-decoration: none;
        margin: 4px auto;
        transition: all .4s;
        padding: 12px;
        border-radius: 15px;
    }
    .process__text__number {
        align-self: flex-start;
        color: #FFF;
        border-radius: 50%;
        padding: 11px 15px;
        text-align: center;
        font-weight: 700;
        transition: color .4s, background-color .4s;
    }
    .process__text__cell:nth-of-type(1) .process__text__number {
        background-color: var(--light-orange);
    }
    .process__text__cell:nth-of-type(2) .process__text__number {
        background-color: var(--teal);
    }
    .process__text__cell:nth-of-type(3) .process__text__number {
        background-color: var(--light-red);
    }
    .process__text__cell:nth-of-type(4) .process__text__number {
        background-color: var(--cyan);
    }
    .process__text__cell:nth-of-type(5) .process__text__number {
        background-color: var(--dark-blue);
    }
    .process__text__cell:nth-of-type(6) .process__text__number {
        background-color: var(--dark-yellow);
    }
    .process__text__cell:hover .process__text__number {
        background-color: #FFF;
    }
    .process__text__cell:nth-of-type(1):hover {
        background: var(--light-orange);
    }
    .process__text__cell:nth-of-type(2):hover {
        background: var(--teal);
    }
    .process__text__cell:nth-of-type(3):hover {
        background: var(--light-red);
    }
    .process__text__cell:nth-of-type(4):hover {
        background: var(--cyan);
    }
    .process__text__cell:nth-of-type(5):hover {
        background: var(--dark-blue);
    }
    .process__text__cell:nth-of-type(6):hover {
        background: var(--dark-yellow);
    }
    .process__text__cell:nth-of-type(1):hover .process__text__number {
        color: var(--light-orange);
    }
    .process__text__cell:nth-of-type(2):hover .process__text__number {
        color: var(--teal);
    }
    .process__text__cell:nth-of-type(3):hover .process__text__number {
        color: var(--light-red);
    }
    .process__text__cell:nth-of-type(4):hover .process__text__number {;
        color: var(--cyan);
    }
    .process__text__cell:nth-of-type(5):hover .process__text__number {
        color: var(--dark-blue);
    }
    .process__text__cell:nth-of-type(6):hover .process__text__number {
        color: var(--dark-yellow);
    }
    .process__text {
        padding: 0 0 0 18px;
        color: var(--dark-grey);
        transition: color .4s;
    }
    .process__text__cell:hover .process__text {
        color: #FFF;
    }
    .process__text h3 {
        text-align: left;
        margin: 10px 0 0;
    }
    .process__text p {
        text-align: left;
        margin: 8px 0 4px;
    }
</style>
