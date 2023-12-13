import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('drivers')
export default {
    namespaced: true,
    state: () => ({
        listDrivers: [],

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
        getDriversList: (state) => state.listDrivers,
        getDriverById: (state) => (itemId) => state.listDrivers.find((item) => item.id == itemId),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.listDrivers = itemsList
        },
        deleteItem(state, itemId) {
            state.listDrivers = state.listDrivers.filter((item) => item.id !== itemId)
        },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadListDrivers({ commit }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        addDriver({ commit, dispatch }, item) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItem(item)
                .then(() => {
                    dispatch('loadListDrivers')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        deleteDriver({ commit }, itemId) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .deleteItem(itemId)
                .then(() => {

                    commit('deleteItem', itemId)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        updateDriver({ commit, dispatch }, { itemId, data }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .updateItem(itemId, data)
                .then(() => {
                    dispatch('loadListDrivers')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },

        loadFilteredDriver({ commit }, filterObj) {
            commit('setError', null)
            commit('setLoading', true)
            console.log(filterObj);
            collectionDB
                .loadFilteredData(filterObj)
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },

    },
}
