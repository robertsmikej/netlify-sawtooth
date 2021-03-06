export const state = () => ({
    pages: {},
    nav: [],
    sitewide: {},
    services: {},
    privacyPolicy: [],
    portfolio: [],
    technology: [],
    integrations: [],
    employees: {}
});

function sortItems(data) {
    let newdata = [];
    for (var d in data) {
        let keys = Object.keys(newdata);
        let item = data[d];
        if (item.shown || item.status || item.status === 'published') {
            newdata.push(item);
        }
    }
    return newdata;
}

export const mutations = {
    setPages(state, data) {
        for (var page in data) {
            state.pages[data[page].page_name] = data[page];
            let newsections = {};
            for (var s in data[page].sections) {
                var section = data[page].sections[s];
                var slug = section.header.toLowerCase().replace(/ /g, "_");
                section.slug = slug;
                newsections[slug] = section;
            }
            data[page].sections = newsections;
        }
        for (var page in data) {
            state.pages[data[page].slug.toLowerCase().replace(/ /g, "_").replace(/-/g, "_")] = data[page];
        }
    },
    setNav(state, data) {
        var checkLive = sortItems(data);
        var populate = checkLive[0].nav_items;
        state.nav = populate;
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
        state.processes = data;
    },
    setPortfolio(state, data) {
        state.portfolio = sortItems(data);
    },
    setTechnology(state, data) {
        // console.log(data);
        state.technologies = sortItems(data);
    },
    setIntegrations(state, data) {
        state.integrations = sortItems(data);
    },
    setEmployees(state, data) {
        let newObj = {};
        for (let d in data.list) {
            let datas = data.list[d];
            newObj[datas.name.toLowerCase().replace(/ /g, "-")] = datas;
        }
        state.employees = newObj;
    }
};

export const getters = {
    sitewide: state => state.sitewide,
    nav: state => state.nav,
    pages: state => state.pages,
    services: state => state.services,
    privacyPolicy: state => state.privacyPolicy,
    portfolio: state => state.portfolio,
    technologies: state => state.technologies,
    integrations: state => state.integrations,
    employees: state => state.employees
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
        var pages = await require.context('~/assets/content/page/', false, /\.json$/);
        var p = pages.keys().map(key => {
            let res = pages(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPages', p);

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
        await commit('setEmployees', file[0]);
    },
};