<template>
    <header class="header">
        <div class="header__inner" >
            <div class="site__nav">
                <div class="nav__icon" @click="navChange" :class="{navchanger: navChanged}">
                    <div class="nav__lines">
                        <div class="nav__line nav__line--1"></div>
                        <div class="nav__line nav__line--2"></div>
                        <div class="nav__line nav__line--3"></div>
                        <div class="nav__line nav__line--4"></div>
                        <div class="nav__line nav__line--5"></div>
                        <div class="nav__line nav__line--6"></div>
                    </div>
                </div>
                <nav class="nav__container" :class="{navexpand: navChanged}">
                    <div class="nav__items" @click="navChange">
                    <nuxt-link v-for="(item, index) in navItemsHeader" v-if="item.nav_type === 'mainnav' && item.status === 'published' && item.nav_link" :to="item.nav_link" class="nav__item" :key="index" >
                            <h2 class="nav__link">{{ item.nav_title }}</h2>
                            <p class="nav__para">{{ item.nav_para }}</p>
                    </nuxt-link>
                    </div>
                </nav>
            </div>
            <div @click="navClose">
                <nuxt-link to="/" class="header__logo__and__name">
                    <div class="site__logo__container">
                        <img class="site__logo" :src="sitewide.company_logo.data.full_url" :alt="'Sawtooth Digital Logo - Fox'">
                    </div>
                    <h2 class="header__name"><span>{{ boldName(sitewide.company_name) }}</span>{{ notBoldName(sitewide.company_name) }}</h2>
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '~/components/header/Logo.vue';
// import Nav from '~/components/header/Nav.vue';

export default {
    data () {
        return {
            navChanged: false   
        }
    },
    components: {
        Logo
    },
    computed: {
        pageInfo: function () {
            return this.$store.state.pages
        }
    },
    props: {
        sitewide: Object,
        navItemsHeader: Array
    },
    methods: {
        boldName: function (name) {
            return name.split(" ")[0];
        },
        notBoldName: function (name) {
            return name.split(" ")[1];
        },
        navChange: function() {
            this.navChanged = !this.navChanged;
        },
        navStrip: function (name) {
            return name.replace(" ", "-").toLowerCase();
        },
        navClose: function () {
            document.querySelector(".nav__container").classList.remove("navexpand");
            document.querySelector(".nav__icon").classList.remove("navchanger");
            this.navChanged = false;
        },
        contact: function() {
            this.$nuxt.$emit("contact_show", !this.$parent.contactShow);
        }
    }
    // ,
    // mounted() {
    //     this.navChanged = true;
    // }
}
</script>

<style>
    .header {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        padding: 0 0 2px;
        z-index: 20;
        transition: all .7s;
    }
    .header__inner {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
        padding: 0;
    }
    .header__logo__and__name {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        order: 1;
        text-decoration: none;
        z-index: 2;
    }
    .site__logo {
        max-height: 52px;
    }
    .header__name {
        margin: 0;
        align-self: center;
        text-align: left;
        color: #FFF;
        transition: color .4s;
    }
    .header__dark {
        background-color: var(--dark-grey);
    }
    .header__dark .header__name {
        /* color: var(--dark-grey); */
    }
    .header__name span:nth-of-type(1) {
        font-weight: 500;
    }
    .header__name span {
        margin-right: 2px;
    }
    .site__nav {
        margin-left: auto;
        align-self: center;
        order: 2;
        padding-right: 10px;
    }
    .nav__icon {
        width: 24px;
        height: 28px;
        padding: 5px 0;
        box-sizing: border-box;
        z-index: 20;
        cursor: pointer;
    }
    .nav__lines {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .nav__line {
        width: 24px;
        height: 2px;
        align-self: center;
        background-color: var(--dark-grey);
        background-color: #FFF;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .6s;
    }
    .nav__line--1 {
        top: 0;
    }
    .nav__line--2 {
        top: 0;
    }
    .nav__line--3 {
        top: 50%;
    }
    .nav__line--4 {
        top: 50%;
    }
    .nav__line--5 {
        top: 100%;
    }
    .nav__line--6 {
        top: 100%;
    }
    /* .header__dark .nav__line {
        background-color: var(--dark-grey);
    } */
    .navchanger .nav__line--1 {
        top: -2px; 
    }
    .navchanger .nav__line--2 {
        top: -2px;        
    }
    .navchanger .nav__line--3 {
        top: calc(50%);
        transform: rotate(-45deg);
        width: 20px;
        left: 2px;
    }
    .navchanger .nav__line--4 {
        top: calc(50%);
        transform: rotate(45deg);
        width: 20px;
        left: 2px;
    }
    .navchanger .nav__line--5 {
        top: calc(100% + 2px);
    }
    .navchanger .nav__line--6 {
        top: calc(100% + 2px);
    }
    .nav__container {
        width: 100vw;
        height: 100vh;
        background-color: var(--light-orange);
        position: fixed;
        top: 0;
        left: -100vw;
        z-index: -1;
        transition: left .4s;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .navexpand {
        left: 0;
    }
    .nav__items {
        align-self: center;
    }
    .nav__items .nav__item:nth-of-type(1) {
        margin-top: 0;
    }
    .nav__item {
        margin: 30px 0;
        text-decoration: none;
        display: block;
    }
    /* .nav__item:hover .nav__link {
        color: var(--dark-grey);
    } */
    .nav__link {
        color: #FFF;
        font-size: 3.5em;
        line-height: 1em;
        font-weight: 300;
        margin: 0;
        transition: all .6s;
    }
    .nav__para {
        margin: 5px 0 0;
        color: var(--dark-grey);
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 500px) {
        .site__logo {
            height: 42px;
        }
    }
</style>