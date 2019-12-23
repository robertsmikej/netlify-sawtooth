<template>
    <section class="page__section our__process">
        <div class="page__section__inner">
            <SectionHeader :header="details.header" :para="details.para"/>
            <div class="process__text__images">
                <div class="process__text__cells">
                    <ProcessCell v-for="(p, index) in process" :key="index" :ind="parseInt(index) + 1" :process="p"/>
                </div>
                <div class="process__images">
                    <div class="process__images__inner">
                        <div class="process__image__cell" v-for="(img, index) in iconList" :key="index">
                            <img :src="img.icon" :alt="img.alt" class="process__image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import ProcessCell from '~/components/process/ProcessCell.vue';

export default {
    components: {
        SectionHeader,
        ProcessCell
    },
    props: {
        process: Object,
        header: String,
        para: String,
        icons: Array,
        details: Object
    },
    computed: {
        iconList: function () { 
            let images = [
                {
                    icon: "https://www.sawtooth.dev/img/teamwork.png",
                    alt: "Teamwork Makes The Dream Work"
                },
                {
                    icon: "https://www.sawtooth.dev/img/idea.png",
                    alt: "We Make Ideas Come To Life"
                },
                {
                    icon: "https://www.sawtooth.dev/img/launch.png",
                    alt: "We'll Help You Launch Your Business"
                }
            ];
            if (this.details.processes_icons) {
                if (this.details.processes_icons.images) {
                    if (this.details.processes_icons.images.length > 0) {
                        images = this.details.processes_icons.images;
                    }
                }
            }
            return images;
        }
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
        z-index: 2;
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
        margin: 0 30px 0 0;
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
        .process__images {
            display: none;
        }
       .process__text__images {
            flex-direction: column;
            justify-content: center;
            padding: 20px 0;
        }
        .process__text__cells {
            order: 2;
            max-width: 100%;
            margin-right: 0;
        }
        .process__images__inner {
            align-self: center;
            position: relative;
            margin: 0 auto;
            padding: 0;
            height: 350px;
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
