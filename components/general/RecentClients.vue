<template>
    <section class="page__section recent__clients">
        <SectionHeader :header="header" :para="para"/>
        <div class="recent__client__cells">
            <nuxt-link :to="'portfolio/' + client.slug" v-for="(client, index) in featured" :key="index" class="recent__client__cell">
                <div v-if="client.logo" class="recent__client__image__container">
                    <img :src="client.logo" :alt="client.name + ' Logo'" class="recent__client__image">
                </div>
            </nuxt-link>
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
        featured: Array,
        header: String,
        para: String
    },
    computed: {
        
    }
}
</script>

<style>
.recent__clients {
    background: var(--turkish-blue);
    color: #FFF;
}
.recent__client__cells {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-around;
    max-width: 1200px;
    width: 100%;
    margin: 30px auto;
}
.recent__client__cell {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    flex: 1 1 auto;
    margin: 10px;
}
.recent__client__image__container {

}
.recent__client__image {
    max-width: 220px;
    max-height: 120px;
}
</style>