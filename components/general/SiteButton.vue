<template>
    <div class="site__button">
        <nuxt-link v-if="buttonLink && buttonLink !== '#contactScroll'" :to="buttonLink" :style="{backgroundColor: backgroundcolor, border: '1px solid ' + backgroundcolor, color: textcolor}" class="site__button__inner">
            {{ buttonText }}
        </nuxt-link>
        <div v-if="!buttonLink" :style="{backgroundColor: backgroundcolor, border: '1px solid ' + backgroundcolor, color: textcolor}" class="site__button__inner">
            {{ buttonText }}
        </div>
        <div v-if="buttonLink && buttonLink === '#contactScroll'" :style="{backgroundColor: backgroundcolor, border: '1px solid ' + backgroundcolor, color: textcolor}" v-scroll-to="'#contact__box'" class="site__button__inner">
            {{ buttonText }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonLink: String,
        buttonText: String,
        backgroundColor: Number,
        color: Number
    },
    computed: {
        backgroundcolor: function () {
            let dataBack = this.backgroundColor;
            let back;
            if (dataBack === 1) {
                back = "var(--light-orange)";
            } else if (dataBack === 2) {
                back = "var(--lightest-grey)";
            } else if (dataBack === 3) {
                back = "var(--logo-orange)";
            } else if (dataBack === 4) {
                back = "var(--turkish-blue";
            }
            return back;
        },
        textcolor: function () {
            let dataColor = this.color;
            let color;
            if (dataColor === 1) {
                color = "#FFF";
            } else if (dataColor === 2) {
                color = "var(--dark-grey)";
            }
            return color;
        }
    }
}
</script>

<style>
.site__button {
    margin: 16px auto;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    align-content: center;
    flex: 0 1 auto;
    z-index: 1;
}
.site__button__inner {
    width: 100%;
    font-size: .9em;
    padding: 10px 24px;
    margin: 0 auto;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .5s;
    cursor: pointer;
    text-align: center;
}
.site__button__inner:hover {
    background-color: var(--light-red) !important;
    border-color: var(--light-red) !important;
    color: #FFF !important;
    font-size: 1.1em !important;
}
</style>
