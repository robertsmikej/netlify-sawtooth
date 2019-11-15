export const state = () => ({
    blogPosts: [],
    pages: {},
    nav: [],
    sitewide: {}
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
        state.navItems = data;
    },
    setSitewide(state, data) {
        state.sitewide = data;
    }
};

// export const getters = {
//     pages: state => state.pages
// };

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
    },
};