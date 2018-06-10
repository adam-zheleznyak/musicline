<template>
    <md-menu md-size="auto" class="playlist-dropdown">
        <md-button md-menu-trigger> {{ message }} </md-button>
        <md-menu-content>
            <md-menu-item v-for="playlist in playlists" :key="playlist"> {{ playlist }} </md-menu-item>
        </md-menu-content>
    </md-menu>
</template>

<script>
    export default {
        name: 'PlaylistDropdown',
        data: function () {
                return {
                selected: null,
                playlists: ['playlist 1', 'testing', 'playlist 2 is SUPER COOL']
            }
        },
        computed: {
            message: function () {
                if (this.selected == null) {
                    return "Select a playlist"
                } else {
                    return this.selected
                }
            }
        }
    }
</script>
