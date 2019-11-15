<template>
    
</template>

<script>
export default {
    data () {
        return {
            navChanged: false   
        }
    },
    props: {
        navitems: Array
    },
    computed: {
        pageInfo: function () {
            return this.$store.state.pages
        }
    },
    methods: {
        navChange: function() {
            this.navChanged = !this.navChanged;
        },
        navStrip: function (name) {
            return name.replace(" ", "-").toLowerCase();
        }
    }
}
</script>

<style>
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
    .nav__item {
        margin: 30px 0;
        text-decoration: none;
        display: block;
    }
    .nav__item:hover .nav__link {
        color: var(--dark-grey);
    }
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
</style>