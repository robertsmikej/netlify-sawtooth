<template>
    <section v-if="intro.status === 'published'" class="page__section page__intro">
        <div class="page__section__inner">
            <SectionHeader :para="intro.page_intro_para"/>
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
        intro: Object
    }
}
</script>

<style>

</style>
