<template>
    <div class="container">
        
        <Header :sitewide="sitewide" :navItems="nav"/>
        <nuxt/>
        <!-- <div>
            {{nav}}
            {{sitewide}}
        </div> -->
    </div>
</template>

<script>
import Header from '~/components/header/Header.vue';

export default {
    components: {
        Header,
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        nav: function () {
            return this.$store.state.navItems
        }
    }
}
</script>

<style>
:root {
        --dark-yellow: #fec303;
        --dark-grey: #1d1d1d;
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
        --powder-blue: #BCF2FC;
        --turkish-blue: #50A3B1;
        --default-font: 'Work Sans', 'Helvetica Neue', Arial, sans-serif;
    }
    body, html {
        padding: 0;
        margin: 0;
    } 
    body * {
        box-sizing: border-box;
    }
    html {
        font-family: var(--default-font);
        font-size: 16px;
        line-height: 16px;
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
        /* transform: translateX(0);
        align-self: flex-start; */
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
        /* backface-visibility: hidden;
	    transform: translate3d(0, 0, 0); */
    }
    .containerShow {
        opacity: 0;
    }
    h1 {
        text-align: left;
        font-size: 3.5em;
        line-height: 1em;
        font-weight: 700;
        margin: 10px 0;
        color: #FFF;
        text-shadow: 1px 1px 1px var(--dark-grey);
    }
    h2 {
        font-weight: 400;
    }

    p {
        font-size: 1em;
        line-height: 1.4em;
        font-weight: 500;
    }
    ul, li {
        font-size: 1.1em;
        line-height: 1.4em;
        font-weight: 500;
    }
    a {
        color: var(--dark-grey);
    }
    
    .page__section {
        padding: 8vh 16px 11vh;
        position: relative;
        box-sizing: border-box;
    }
    .page__section__inner {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-self: center;
    }
    
    .site__button {
        font-size: 1.1em;
        margin: 20px 0 0;
        padding: 14px 24px;
        min-width: 170px;
        text-decoration: none;
        display: block;
        align-self: center;
        text-transform: capitalize;
        transition: all .5s;
        cursor: pointer;
        font-weight: 600;
    }
    .site__button:hover {
        background: #FFF;
        color: var(--dark-blue);
        font-size: 1.2em;
    }
    /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:900px) {
        html {
            font-size: 13px;
            line-height: 13px;
        }
    }
     /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:700px) {
        .page__section {
            padding: 6vh 5px 8vh;
        }
        h1 {
            font-size: 2.7em;
        }
    }
</style>
