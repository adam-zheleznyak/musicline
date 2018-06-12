<template>
    <md-menu md-size="auto" class="playlist-dropdown">
        <md-button md-menu-trigger> {{ message }} </md-button>
        <md-menu-content>
            <md-menu-item v-for="(playlist, index) in playlists.items" :key="playlist.id" @click="select(index)">
                {{ playlist.name }}
            </md-menu-item>
        </md-menu-content>
    </md-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'PlaylistDropdown',
    data: function () {
        return {
            selected: null,
        }
    },
    computed: {
        ...mapState(['playlists']),
        message () {
            if (this.selected == null) {
                return "Select a playlist"
            } else {
                return this.playlists.items[this.selected].name
            }
        }
    },
    methods: {
        async select (index) {
            this.selected = index
            const tracks = await this.spotify.getPlaylistTracks(this.$store.state.user.id, this.playlists.items[this.selected].id)
            this.$store.dispatch('order_tracks', { spotify: this.spotify, payload: tracks.body })
        }
    }
}
</script>
