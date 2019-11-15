<template>
    <section class="page__section our__process">
        <div class="page__section__inner">
            <SectionHeader :header="header" :para="para"/>
            <div class="process__text__images">
                <div class="process__text__cells">
                    <ProcessCell v-for="(proc, index) in process" v-if="proc.status === 'published'" :ind="index + 1" :process="proc" :key="index"/>
                    <!-- <nuxt-link to="/process" class="site__button process__see__more__button">
                        See More Process
                    </nuxt-link> -->
                </div>
                <div class="process__images">
                    <div class="process__images__inner">
                        <div class="process__image__cell">
                            <img src="~/assets/imgs/icons/teamwork.png" alt="Teamwork is paramount" class="process__image">
                        </div>
                        <div class="process__image__cell">
                            <img src="~/assets/imgs/icons/idea.png" alt="Strategize your goals" class="process__image">
                        </div>
                        <div class="process__image__cell">
                            <img src="~/assets/imgs/icons/launch.png" alt="Launch your Website" class="process__image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import ProcessCell from '~/components/index/ProcessCell.vue';

export default {
    components: {
        SectionHeader,
        ProcessCell
    },
    props: {
        process: Array,
        header: String,
        para: String
    }
}
</script>

<style>
    .our__process {
        background-color: #fff;
    }
    .our__process::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: #fff;
        transform: rotate(1deg) skewX(1deg);
        transform-origin: 100% 0;
    }
    .our__process .page__section__header::after {
        background: var(--light-orange) !important;
    }
    .process__text__images {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 20px 0;
    }
    .process__text__cells {
        flex: 2 1 66.6666%;
        max-width: 670px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: flex-start;
        margin: 0 10px 0 0;
        box-sizing: border-box;
    }
    
    .process__images {
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: flex-start;
    }
    .process__images__inner {
        width: 300px;
        height: 400px;
        position: sticky;
        align-self: flex-start;
        top: 0;
        left: 0;
        min-height: 150px;
        padding: 80px 0 0;
    }
    .process__image__cell {
        width: 180px;
        height: 180px;
        background-color: var(--light-orange);
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        opacity: .85;
        box-shadow: 2px 2px 8px #888888;
    }
    .process__image__cell:nth-of-type(1) {
        background-color: var(--light-orange);
        align-self: center;
        margin: 0 auto;
    }
    .process__image__cell:nth-of-type(2) {
        background-color: var(--blue);
        position: absolute;
        top: 165px;
        left: 0;
    }
    .process__image__cell:nth-of-type(3) {
        background-color: var(--teal);
        position: absolute;
        top: 195px;
        left: 120px;
    }
    .process__image {
        filter: invert(1);
        object-fit: contain;
    }
    .process__see__more__button {
        background-color: var(--blue);
        color: #FFF;
    }
     /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:1000px) {
       .process__text__images {
            flex-direction: column;
            justify-content: center;
            padding: 20px 0;
        }
        .process__text__cells {
            order: 2;
            max-width: 100%;
        }
        .process__images__inner {
            align-self: center;
            position: relative;
            margin: 0 auto;
            padding: 0;
            height: 360px;
        }
        .process__image__cell:nth-of-type(2) {
            top: 125px;
        }
        .process__image__cell:nth-of-type(3) {
            top: 155px;
        }
    }
        /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:700px) {
        .process__text__cell {
            padding: 12px 5px;
        }
        .process__text {
            padding: 0 0 0 10px;
        }
        .process__text__images {
            padding: 20px 0 0;
        }
        .work__cell__logo__image {
            max-width: 90%;
        }
        .our__process {
            padding: 5vh 8px 5vh;
        }
    }
</style>
