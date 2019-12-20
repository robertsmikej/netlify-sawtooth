const pkg = require('./package');

module.exports = {
    mode: 'universal',
    generate: {
        routes: function () {
            const fs = require('fs');
            let portfolio = fs.readdirSync('./assets/content/portfolio').map(file => {
                return {
                    route: `/portfolio/${file.split(".")[0]}`, // Remove the .json from the end of the filename
                    payload: require(`./assets/content/portfolio/${file}`),
                };
            });
            let services = fs.readdirSync('./assets/content/services').map(file => {
                return {
                    route: `/services/${file.split(".")[0]}`, // Remove the .json from the end of the filename
                    payload: require(`./assets/content/services/${file}`),
                };
            });
            let technologies = fs.readdirSync('./assets/content/technologies').map(file => {
                return {
                    route: `/technology/${file.split(".")[0]}`, // Remove the .json from the end of the filename
                    payload: require(`./assets/content/technologies/${file}`),
                };
            });

            let employees = fs.readdirSync('./assets/content/employees').map(file => {
                return {
                    route: `/technology/${file.split(".")[0]}`, // Remove the .json from the end of the filename
                    payload: require(`./assets/content/employees/${file}`),
                };
            });
            let emps = employees[0].payload.list.map(emp => {
                return {
                    route: "/about-us/" + emp.name.toLowerCase().replace(" ", "-"),
                }
            });
            return Promise.all([portfolio, services, technologies, emps]).then(values => {
                return [...values[0], ...values[1], ...values[2], ...values[3]]
            })
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
            { name: 'viewport', content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" }
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
        '~plugins/vue-scrollto.js'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
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
        extend(config, ctx) {
            if(ctx.idDev) {
                config.entry.push('eventsource-polyfill')
            }
        }
    }
};