export const state = () => ({
    pages: {},
    nav: [],
    sitewide: {},
    services: {},
    privacyPolicy: [],
    portfolio: [],
    technology: [],
    integrations: [],
    employees: []
});

function sortItems(data) {
    let newdata = [];
    for (var d in data) {
        let keys = Object.keys(newdata);
        let item = data[d];
        if (item.status === 'published' && item.sort_number !== null) {
            newdata.push(item);
        }
    }
    newdata.sort(function (a, b) {
        return a.sort_number - b.sort_number;
    });
    return newdata;
}

export const mutations = {
    setPages(state, data) {
        for (var page in data) {
            state.pages[data[page].page_name] = data[page];
        }
    },
    setNav(state, data) {
        state.navItems = sortItems(data);
    },
    setSitewide(state, data) {
        state.sitewide = data;
    },
    setServices(state, data) {
        let da = sortItems(data);
        for (let d in da) {
            da[d].strippedName = da[d].slug.replace(/-/g,"");
            state.services[da[d].slug] = da[d];
        }
    },
    setPrivacy(state, data) {
        state.privacyPolicy = data[0];
    },
    setProcesses(state, data) {
        state.processes = sortItems(data);
    },
    setPortfolio(state, data) {
        state.portfolio = sortItems(data);
    },
    setTestimonials(state, data) {
        state.testimonials = sortItems(data);
    },
    setTechnology(state, data) {
        state.technologies = sortItems(data);
    },
    setIntegrations(state, data) {
        state.integrations = sortItems(data);
    },
    setEmployees(state, data) {
        state.employees = sortItems(data);
    }
};

function getData(files) {
    var f = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return f;
    });
}

export const actions = {
    async nuxtServerInit({ commit }) {
        // let pageFiles = await require.context('~/assets/content/page/', false, /\.json$/);
        // let pages = pageFiles.keys().map(key => {
        //     let res = pageFiles(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setPages', pages);

        var files = await require.context('~/assets/content/page/', false, /\.json$/);
        var file = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPages', file);

        let navfiles = await require.context('~/assets/content/nav/', false, /\.json$/);
        let navs = navfiles.keys().map(key => {
            let res = navfiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setNav', navs);

        let sitewideFiles = await require.context('~/assets/content/sitewide/', false, /\.json$/);
        let sitewides = sitewideFiles.keys().map(key => {
            let res = sitewideFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setSitewide', sitewides[0]);

        let serviceFiles = await require.context('~/assets/content/services/', false, /\.json$/);
        let services = serviceFiles.keys().map(key => {
            let res = serviceFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setServices', services);

        let processFiles = await require.context('~/assets/content/process/', false, /\.json$/);
        let processes = processFiles.keys().map(key => {
            let res = processFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setProcesses', processes);

        let testFiles = await require.context('~/assets/content/testimonials/', false, /\.json$/);
        let tests = testFiles.keys().map(key => {
            let res = testFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setTestimonials', tests);

        var files = await require.context('~/assets/content/privacy-policy/', false, /\.json$/);
        var file = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPrivacy', file);

        var files = await require.context('~/assets/content/portfolio/', false, /\.json$/);
        var file = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPortfolio', file);

        var files = await require.context('~/assets/content/technologies/', false, /\.json$/);
        var file = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setTechnology', file);

        var files = await require.context('~/assets/content/integrations/', false, /\.json$/);
        var file = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setIntegrations', file);

        var files = await require.context('~/assets/content/employees/', false, /\.json$/);
        var file = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setEmployees', file);
    },
};