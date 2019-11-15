<template>
    <section class="page__section recent__work">
        <div class="page__section__inner">
            <SectionHeader :header="header" :para="para"/>
            <div class="recent__work__inner recent__work__inner__cell">
                <RecentCell v-for="(recent, index) in recentWork" :key="index" :ind="index" :recent="recent"/>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '~/components/general/SectionHeader.vue';
import RecentCell from '~/components/index/RecentCell.vue';

export default {
    components: {
        SectionHeader,
        RecentCell
    },
    props: {
        recentWork: Array,
        header: String,
        para: String,
        status: String
    }
}
</script>

<style>
    .recent__work {
        width: 100%;
        margin: 0 auto 0;
        background-color: var(--light-blue);
        padding-bottom: 14vh;
    }
    .recent__work__inner {
        max-width: 1260px;
        margin: 0 auto;
        display: grid;
        grid-gap: 6px;
        margin-top: 50px;
    }
    .recent__work__inner__cell {
        grid-template-areas: 
            'large1 large1 small1 medium1'
            'large1 large1 small2 medium1'
            'small3 small4 medium2 medium2';
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: min-content 1fr;
    }
    /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:950px) {
        .recent__work__inner__cell {
            grid-template-areas: 
                'large1 large1 large1'
                'small1 medium1 medium1'
                'small2 small3 small4'
                'medium2 medium2 medium2';
            grid-template-columns: 33.333% 33.333% 33.333%;
            grid-template-rows: 400px 400px 400px 400px;
        }
        
    }
     /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:700px) {
        .recent__work__inner__cell {
            grid-template-areas: 
                'large1 large1'
                'small1 small2'
                'medium1 medium1'
                'small3 small4'
                'medium2 medium2';
            grid-template-columns: 50% 50%;
            grid-template-rows: auto auto auto auto auto;
        }
    }
    /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:530px) {
        .recent__work__inner {
            grid-gap: 4px;
        }
    }
</style>
