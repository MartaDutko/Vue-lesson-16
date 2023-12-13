import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('appointment')
export default {
    namespaced: true,
    state: () => ({
        listAppointment: [],

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getAppointmentList: (state) => state.listAppointment,
        getAppointmentByIdDriver: (state) => (itemId) => state.listAppointment.find((item) => item.driver == itemId),
        getAppointmentByIdBus: (state) => (itemId) => state.listAppointment.find((item) => item.bus == itemId),
        getAppointmentById: (state) => (itemId) => state.listAppointment.find((item) => item.id == itemId),
        getFillAppointmentList: (state, getters,
            rootState, rootGetters) => {
            return state.listAppointment.map(item => ({
                id: item.id,
                driver: rootGetters['drivers/getDriverById'](item.driver)?.name || null,
                bus: rootGetters['buses/getBusById'](item.bus)?.number || null
            })
            )
        }
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.listAppointment = itemsList
        },
        deleteItem(state, itemId) {
            state.listAppointment = state.listAppointment.filter((item) => item.id !== itemId)
        },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadlistAppointment({ commit }) {
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
        addAppointment({ commit, dispatch }, item) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItem(item)
                .then(() => {
                    dispatch('loadlistAppointment')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        deleteApointment({ commit }, itemId) {
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
        updateBuses({ commit, dispatch }, { itemId, data }) {
            commit('setError', null)
            commit('setLoading', true)

            collectionDB
                .updateItem(itemId, data)
                .then(() => {
                    dispatch('loadlistAppointment')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        loadFiltered({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
            commit('setError', null)
            commit('setLoading', true)
            console.log({ fieldTitle, compareOperator, valueToCompare });
            collectionDB
                .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
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
