const pkg = require('./package');

module.exports = {
    mode: 'universal',
    generate: {
        generate: {
            routes: function () {
                const fs = require('fs');
                return fs.readdirSync('./assets/content/portfolio').map(file => {
                    return {
                    route: `/blog/${file.slice(2, -5)}`, // Remove the .json from the end of the filename
                        payload: require(`./assets/content/portfolio/${file}`),
                    };
                });
            },
        },
    },
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/vue-carousel', ssr: false }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/markdownit'
    ],
    markdownit: {
        injected: true,
    },
    /*

    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        vendor: ['vue-carousel']
    }
}
