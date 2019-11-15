<template>
    <section v-if="service.status === 'published'" class="page__section services__section" :data-section-type="pagetype">
        <div class="page__section__inner services__section__inner">
            <div class="service__cell__split service__cell__text">
                <div class="section__header__container">
                    <h2 v-if="header" class="page__section__header">{{ header }}</h2>
                    <h3 v-if="headerSub" class="page__section__sub__header">{{ headerSub }}</h3>
                    <div v-if="headerPara" v-html="headerPara" class="page__section__header__para"></div>
                </div>
                <div class="section__sub__services">
                    <ul class="sub__section__list">
                        <li class="sub__section__list__item" v-for="item in subservices[pagetype]">{{ item.sub_service_name }}</li>
                    </ul>
                </div>
            </div>
            <div class="service__cell__split service__cell__image__container">
                <img :src="service.service_cell_image.data.full_url" :alt="service.services_section_header" class="service__cell__image">
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';

export default {
    components: {
        SectionHeader
    },
    props: {
        service: Object,
        status: String,
        header: String,
        headerSub: String,
        headerPara: String,
        subservices: Object
    },
    methods: {
        getSubSections: function () {
            let th = this;
            Object.keys(this.subservices).forEach(function (service) {
                if (service === th.pagetype) {
                    console.log(service);
                    return service;
                }
            });
        }
    },
    computed: {
        pagetype: function () {
            return this.header.toLowerCase().replace(/ /g, '-');
        }
    }
}
</script>

<style>
    .services__section__inner {
        width: 96%;
        margin: 20px auto;
        max-width: 1100px;
        padding: 10px 10px 20px;
        /* box-shadow: 2px 2px 10px var(--blue-grey); */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .service__cell__split {
        padding: 30px;
    }

    .service__cell__text {
        text-align: left;
        flex: 1 1 65%;
    }
    .service__cell__text .page__section__header::after {
        display: none;
    }
    .service__cell__image__container {
        flex: 1 1 35%;
    }
    .service__cell__image {
        max-width: 90%;
    }
    .section__sub__services {

    }
    .sub__section__list {

    }
    .sub__section__list__item {
        margin: 6px 0;
    }
</style>