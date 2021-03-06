import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist' // The vuex-persist package ensures that our Vuex state is saved between page reloads or refreshes.
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        loading: false,
        sending: false,
        error: null,
        user: [],
        reconnect: false,
        activeRoom: null,
        rooms: [],
        users: [],
        messages: [],
        userTyping: null
    },
    getters: {
        // eslint-disable-next-line
        hasError: state => state.error ? true : false
    },
    mutations,
    actions,
    plugins: [vuexLocal.plugin],
    strict: debug
})
