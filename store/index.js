export const state = () => ({
    blogPosts: [],
    pages: {},
    nav: [],
    sitewide: {},
    services: {}
});

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
        let newdata = {};
        state.navItems = data;
    },
    setSitewide(state, data) {
        state.sitewide = data;
    },
    setServices(state, data) {
        let newdata = [];
        for (var d in data) {
            let keys = Object.keys(newdata);
            let item = data[d];
            if (item.status === 'published' && item.sort_number !== null) {
                if (keys.indexOf(item.slug) >= 0) {
                    newdata.push(item);
                } else {
                    newdata.push(item);
                }
            }
        }
        state.services = newdata.sort(function (a, b) {
            return a.sort_number - b.sort_number;
        });
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
    },
};