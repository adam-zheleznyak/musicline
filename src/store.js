import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        schedule: [
            [1, 15],
            [5, 15],
            [3, 30]
        ]
    },
    mutations: {
        inc_time (state, index) {
            Vue.set(state.schedule[index], 1, state.schedule[index][1] + 15)
        },
        dec_time (state, index) {
            if (state.schedule[index][1] - 15 > 0) {
                Vue.set(state.schedule[index], 1, state.schedule[index][1] - 15)
            } else {
                state.schedule.splice(index, 1)
            }
        },
        add_elem (state, payload) {
            if (state.schedule.length > 0 && state.schedule[state.schedule.length-1][0] === payload[0]) {
                Vue.set(state.schedule[state.schedule.length-1], 1, state.schedule[state.schedule.length-1][1] + payload[1])
            } else if (state.schedule.length < 5) {
                state.schedule.push(payload)
            }
        }
    },
    actions: {

    }
})
