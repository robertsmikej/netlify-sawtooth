<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__section footer__locations">
                <div class="footer__brand">
                    <div class="footer__brand--nowrap">
                        <div v-if="sitewide.footer_company_logo" class="footer__logo__container">
                            <img class="site__logo" :src="sitewide.company_logo" :alt="sitewide.company_name + ' Logo'">
                        </div>
                        <h3 class="footer__name"><span>{{ boldName(sitewide.company_name) }}</span>{{ notBoldName(sitewide.company_name) }}</h3>
                    </div>
                    <p v-if="sitewide.footer_company_para" class="footer__brand__para">{{ sitewide.footer_company_para }}</p>
                </div>
                <div class="footer__location">
                    <div class="footer__name">
                        <hr>
                        <h3>BOISE</h3>
                    </div>
                    <div class="footer__address">
                        <p v-if="sitewide.company_address_line_1">{{ sitewide.company_address_line_1 }}</p>
                        <p v-if="sitewide.company_address_line_2">{{ sitewide.company_address_line_2 }}</p>
                        <p v-if="sitewide.company_address_line_3">{{ sitewide.company_address_line_3 }}</p>
                        <a v-if="sitewide.company_phone_number" :href="'tel:' + sitewide.company_phone_number">{{ sitewide.company_phone_number }}</a>
                        <a v-if="sitewide.company_email_address" class="footer__email__address" :href="'mailto:' + sitewide.company_email_address">{{ sitewide.company_email_address }}</a>
                    </div>
                </div>
            </div>
            <div class="footer__section footer__nav" v-if="sitewide.footer_details.footer_show_site_links">
                <div v-for="(item, index) in navItems" :key="index">
                    <nuxt-link v-if="item.status === 'published' && item.nav_link" :to="'/' + item.nav_link" class="footer__nav__items">{{ item.nav_title }}</nuxt-link>
                    <div v-else-if="item.status === 'published' && !item.nav_link" class="footer__nav__items" @click="contactToggle()">
                        {{ item.nav_title }}
                    </div>
                </div>
            </div>
            <div class="footer__section footer__social" v-if="sitewide.social_media.footer_show_social">
                <div v-for="(item, index) in sitewide.social_media" :key="index">
                     <nuxt-link v-if="typeof item === 'string'" :to="'/' + item" class="footer__nav__items" >{{ navStrip(index) }}</nuxt-link>
                </div>
            </div>
            <div class=" footer__section footer__legalize">
                <p>©{{sitewide.company_name}}, LLC. - All Rights Reserved |</p>
                <nuxt-link to="/privacy-policy">&nbsp;Privacy Policy</nuxt-link>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from '~/components/header/Logo.vue';

export default {
    components: {
        Logo
    },
    props: {
        navItems: Array,
        sitewide: Object
    },
    methods: {
        boldName: function (name) {
            return name.split(" ")[0];
        },
        notBoldName: function (name) {
            return name.split(" ")[1];
        },
        navStrip: function (name) {
            return name.split("_")[0].toLowerCase();
        }
    }
}
</script>

<style>
    .footer {
        width: 100%;
        background-color: var(--dark-grey);
        padding: 90px 0 50px;
        color: #FFF;
        position: relative;
        z-index: 10;
    }
    .footer::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: var(--dark-grey);
        transform: rotate(1deg) skewX(1deg);
        transform-origin: 100% 0;
    }
    .footer p, .footer a {
        color: #FFF;
        text-decoration: none;
        display: block;
        text-align: left;
    }
    .footer__inner {
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around
    }
    .footer__section {
        max-width: 370px;
        flex: 0 1 auto;
        padding: 0 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: flex-start;
    }
    .footer__small__divider {
        flex: 0 1 100px;
    }
    .footer__section__header {
        text-align: left;
        margin: 0 0 20px;
    }
    .footer__location {
        width: 100%;
    }
    .footer__brand {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 0 0 4px;
        width: 100%;
    }
    .footer__brand--nowrap {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .footer__brand__para {
        margin: 2px 0;
        font-size: 14px;
    }
    .footer__logo__container {
        padding: 5px 8px 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .footer__name {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: flex-start;
        margin: 0;
    }
    .footer__name hr {
        width: 100%;
        height: 2px;
        border: none;
        background-color: #FFF;
        margin: 0;
        padding: 0;
        align-self: center;
    }
    .footer__name h3 {
        align-self: center;
        margin: 0 0 0 5px;
        letter-spacing: 0.5px;
        font-size: 1em;
    }
    .footer__address {
        padding: 0 6px;
    }
    .footer__address p, .footer__address a {
        text-align: left;
        margin: 0 0 4px;
        font-size: 14px;
        line-height: 14px;
        font-weight: 500;
        text-decoration: none;
        display: block;
    }
    a.footer__email__address {
        margin-top: 10px;
    }
    .footer__nav, .footer__social {
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 10px;
    }
    .footer__nav__items {
        margin: 0 0 10px;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        cursor: pointer;
        text-align: left;
    }
    .footer__legalize {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin: 70px 0 0;
        align-self: center;
        max-width: 100%;
    }
    .footer__legalize p, .footer__legalize a {
        margin: 0;
        font-size: .8em;
        line-height: 1em;
        text-decoration: none;
        display: block;
    }
    /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:900px) {
        .footer__small__divider {
            display: none;
        }
    }
     /* ----------------------------  MEDIA QUERY ------------------------------ */
    @media screen and (max-width:750px) {
        .footer__locations {
            flex: 1 1 100%;
            width: 100%;
            max-width: 100%;
            margin: 0 0 30px;
        }
        .footer__location {
            max-width: 300px;
        }
        .footer__address {
            padding: 0;
        }
        .footer__inner {
            justify-content: flex-start;
        }
        .footer__legalize {
            margin: 20px 0 0;
        }
        .footer__legalize p {
            text-align: center;
        }
        .footer__legalize a {
            text-align: center;
            margin: 10px 0;
        }
        .footer__nav, .footer__social {
            flex: 1 1 auto;
        }
    }
    
</style>