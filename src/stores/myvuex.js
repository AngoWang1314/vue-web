import Vue from 'vue';
import Vuex from 'vuex';
import state from './vuex/state';
import mutations from './vuex/mutations';
import actions from './vuex/actions';
import getters from './vuex/getters';

const loadModules = () => {
    const context = require.context('./vuex/modules', false, /([a-z_]+)\.js$/i);

    const modules = context
        .keys()
        .map(key => ({ key, name: key.match(/([a-z_]+)\.js$/i)[1] }))
        .reduce(
            (modules, { key, name }) => ({
                ...modules,
                [name]: context(key).default
            }),
            {}
        );

    return { context, modules };
};

const { context, modules } = loadModules();

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations,
    actions,
    getters,
    modules
});
export default store;

if (module.hot) {
    module.hot.accept(context.id, () => {
        const {modules} = loadModules();

        store.hotUpdate({
            modules
        });
    });
}
