export const state = () => ({
    blogPosts: [],
    pages: {},
    nav: [],
    sitewide: {},
    services: {}
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
    setBlogPosts(state, data) {
        state.blogPosts = data;
    },
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
        state.services = sortItems(data);
    },
    setProcesses(state, data) {
        state.processes = sortItems(data);
    },
    setTestimonials(state, data) {
        state.testimonials = sortItems(data);
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
        let blogfiles = await require.context('~/assets/content/blog/', false, /\.json$/);
        let blogPosts = blogfiles.keys().map(key => {
            let res = blogfiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setBlogPosts', blogPosts);

        let pagefiles = await require.context('~/assets/content/page/', false, /\.json$/);
        let pages = pagefiles.keys().map(key => {
            let res = pagefiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPages', pages);

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
    },
};