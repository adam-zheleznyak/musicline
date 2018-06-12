import Vue from 'vue'
import Popover from 'vue-js-popover'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import SpotifyApi from 'spotify-web-api-node'
import VueSpotify from 'vue-spotify'

Vue.use(VueSpotify, new SpotifyApi({
    redirectUri: "http://206.189.223.220:8080/callback",
    clientId: "b82cbfef542541bfb57f2e9077b09176"
}))
Vue.use(VueMaterial)
Vue.use(Popover)

Vue.config.productionTip = false

const vue = new Vue({
    router,
    store,
    render: h => h(App)
})

if (!!localStorage.getItem('access-token')) {
    vue.spotify.setAccessToken(localStorage.getItem('access-token'))
    vue.spotify.setRefreshToken(localStorage.getItem('fresh-token'))
}

vue.$mount('#app')
