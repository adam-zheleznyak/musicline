import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        schedule: [
            [4, 15],
            [5, 15],
            [3, 30]
        ],
        playing: 0,
        user: {},
        playlists: { items: [] },
        tracks: [[], [], [], [], []]
    },
    getters: {
        int: state => state.schedule[0][0] - 1
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
        },
        set_user (state, user) {
            state.user = user
        },
        set_playlists (state, payload) {
            state.playlists = payload
        },
        reset_tracks (state) {
            state.tracks = [[], [], [], [], []]
        },
        add_track (state, { energy, track }) {
            state.tracks[energy].push(track)
        },
        next (state) {
            state.playing ++
        },
        previous (state) {
            state.playing --
        }
    },
    actions: {
        async order_tracks ({ commit, dispatch }, { spotify, payload }) {
            commit('reset_tracks')
            const tracks = payload.items.map((elem) => elem.track.id)
            const featuresr = await spotify.getAudioFeaturesForTracks(tracks)
            const features = featuresr.body.audio_features
            for (const [ index, value ] of payload.items.entries()) {
                commit('add_track', {
                    energy: Math.floor(features[index].energy * 5),
                    track: value.track
                })
            }
        }
    }
})
