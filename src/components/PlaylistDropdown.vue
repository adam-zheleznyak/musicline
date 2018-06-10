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
        select (index) {
            this.selected = index
        }
    }
}
</script>
