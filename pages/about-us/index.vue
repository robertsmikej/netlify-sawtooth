<template>
    <main>
        <Hero :hero="pageInfo.hero"/>
        <section class="page__section page__section__inner">
            <SectionHeader :header="pageInfo.page_intro.page_intro_header" :para="pageInfo.page_intro.page_intro_para"/>
        </section>
        <section class="page__section employee__cells">
            <SectionHeader :header="pageInfo.page_section_1.page_section_1_header" :para="pageInfo.page_section_1.page_section_1_para"/>
            <div class="employee__cells__inner">
                <div v-for="(emp, index) in employees" :key="index">
                    <Employee v-if="emp.status === 'published'" :employee="emp" class="employee__cell"/>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import SectionHeader from '~/components/general/SectionHeader.vue';
import Employee from '~/components/about-us/Employee.vue';

export default {
    components: {
        Hero,
        SectionHeader,
        Employee
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageInfo: function () {
            return this.$store.state.pages.about_us
        },
        employees: function () {
            return this.$store.state.employees
        }
    },
    head() {
        return {
            title: "Sawtooth Digital | Employees",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Check out everything we offer you and your business."
                }
            ]
        };
    }
}
</script>

<style>
.employee__cells {
    background-color: var(--light-blue);
}
.employee__cells__inner {
    max-width: 1000px;
    margin: 30px auto 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-around;
}
</style>