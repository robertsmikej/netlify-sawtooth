export const state = () => ({
    blogPosts: [],
    pages: {},
});

export const mutations = {
    setBlogPosts(state, list) {
        state.blogPosts = list;
    },
    setPages(state, data) {
        for (var page in data) {
            state.pages[data[page].page_name] = data[page];
        }
    },
};

export const getters = {
    pages: state => state.pages
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
    },
};