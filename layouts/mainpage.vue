<template>
    <div class="container">
        <Header :class="{'navShow' : navShow}" :sitewide="sitewide" :navItems="nav"/>
        <nuxt/>
        <Footer :sitewide="sitewide" :navItems="nav"/>
    </div>
</template>

<script>
import Header from '~/components/header/Header.vue';
import Footer from '~/components/footer/Footer.vue';

export default {
    components: {
        Header,
        Footer
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        nav: function () {
            return this.$store.state.nav
        }
    },
    created() {
        this.$nuxt.$on('navShow', data => {
            if (data === false) {
                this.navShow = false;
            } else if (data === true) {
                this.navShow = true;
            } else {
                this.navShow = !this.navShow;
            }
        });
    },
    data() {
        return {
            navShow: false,
            contactShow: false
        }
    }
}
</script>

<style>
:root {
    --site-white: #FFF;
    --dark-yellow: #fec303;
    --lightest-grey: #f2f2f2;
    --teal: #139487;
    --cyan: #1dbad3;
    --aqua: #0ED7F4;
    --blue-grey: #607C8a;
    --blue: #009CD6;
    --light-blue: #F1F5F6;
    --dark-blue: #36485f;
    --dark-grey: #2B373C;
    --lime-green: #98C93C;
    --light-red: #CF2255;
    --deep-red: #901D00;
    --light-orange: #FA9E0D;
    --logo-orange: #F0512B;
    --powder-blue: #BCF2FC;
    --turkish-blue: #50A3B1;
    --default-font: 'Work Sans', 'Helvetica Neue', Arial, sans-serif;
    --text-color: #2B373C;
}
body, html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body * {
    box-sizing: border-box;
}
html {
    font-family: var(--default-font);
    font-size: 21px;
    line-height: 21px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: var(--dark-blue);
    background-color: var(--light-orange);
    background-color: var(--dark-blue);
}
main {
    width: 100%;
    background-color: #FFF;
    margin: -60px 0 0;
}
.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    flex-wrap: wrap;
    opacity: 1; 
}
.containerShow {
    opacity: 0;
}
h1 {
    text-align: left;
    font-size: 2.2em;
    line-height: 1em;
    font-weight: 700;
    margin: 10px 0;
    color: #FFF;
    text-shadow: 1px 1px 1px var(--dark-grey);
}
h2 {
    font-size: 1.9em;
    line-height: 1em;
    font-weight: 500;
    margin: 10px 0;
}
h3 {
    font-size: 1.5em;
    line-height: 1.2em;
    font-weight: 400;
    margin: 10px auto 0;
}
h4 {
    font-size: 1.2em;
    line-height: 1.2em;
    font-weight: 400;
    margin: 10px auto 0;
}
h5 {
    font-size: 1em;
    line-height: 1.2em;
    font-weight: 400;
    margin: 10px auto 0;
}
h6 {
    font-size: 1em;
    line-height: 1.2em;
    font-weight: 300;
    margin: 10px auto 0;
}
p {
    font-size: 1em;
    line-height: 1.3em;
    font-weight: 400;
    margin: 14px 0 0;
}
ul, li {
    font-size: 1em;
    line-height: 1.3em;
    font-weight: 500;
}
a {
    color: var(--dark-grey);
    font-size: 1em;
    line-height: 1em;
    font-weight: 400;
}
.site__section, .page__section {
    padding: 7vh 16px 8vh;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    margin-left: auto;
    margin-right: auto;
}
.page__section--constrained {
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-self: center;
}
.page__section__inner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-self: center;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 1500px) {
    html {
        font-size: 18px;
        line-height: 18px;
    } 
}
/* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:900px) {
    html {
        font-size: 17px;
        line-height: 17px;
    }
}
    /* ----------------------------  MEDIA QUERY ------------------------------ */
@media screen and (max-width:700px) {
    html {
        font-size: 16px;
        line-height: 16px;
    }
    body .page__section {
        padding: 7vh 14px;
    }
    h1 {
        font-size: 2em;
        line-height: 1em;
        margin: 10px 0;
    }
    h2 {
        font-size: 1.6em;
        line-height: 1em;
        font-weight: 500;
        margin: 10px 0;
    }
}
</style>
