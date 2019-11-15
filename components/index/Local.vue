<template>
    <section class="page__section local__work">
        <div class="page__section__inner">
            <div class="work__background">
                <div class="work__background__overlay"></div>
                <img src="~/assets/imgs/clientimgs/sawtoothdev/redfish-lake-stanley-idaho-sawtooth.jpg" alt="" class="work__background__img">
            </div>
            <div class="work__text">
                <SectionHeader :header="header" :para="para"/>
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
        header: String,
        para: String
    }
}
</script>

<style>
    .local__work {
        min-height: 40vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 8vh 16px 8vh;
    }
    .work__background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .work__background__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(54, 72, 95, .7);
        z-index: 1;
    }
    .work__background img {
        min-width: 100%;
    }
    .work__text {
        z-index: 2;
        color: #FFF;
        align-self: center;
    }
    .work__text .page__section__header::after {
        background: var(--light-orange) !important;
    }
</style>
