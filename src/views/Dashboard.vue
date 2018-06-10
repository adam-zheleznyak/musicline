<template>
    <div class="dashboard">
        <PlaylistDropdown />
        <div><img src="../assets/logo.svg" class="logo"></div>
        <div class="selector-wrapper">
            <p class="less md-body-2">Less intense</p>
            <Selector v-for="num in [1,2,3,4,5]" :num="num" :key="`${num}`"/>
            <p class="more md-body-2">More intense</p>
        </div>
        <Timeline />
        <Track
          prevUrl="https://images.rapgenius.com/dc547861a593b54a64ea80a468661ade.1000x1000x1.png"
          coverUrl="https://jazjaz.net/wp-content/uploads/2013/05/The-Black-Arrow-In-Bloom-Large_thumb.jpg"
          coverTitle="Song"
          coverArt="Artist"
          nextUrl="https://kottke.org/plus/misc/images/joy-division-unknown-pleasures.jpg" />
    </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
import Track from '@/components/Track.vue'
import Selector from '@/components/Selector.vue'
import PlaylistDropdown from '@/components/PlaylistDropdown.vue'

export default {
    name: 'Dashboard',
    components: {
        Timeline,
        Track,
        Selector,
        PlaylistDropdown
    },
    async mounted () {
        const me = await this.spotify.getMe()
        console.log(me)
        this.$store.commit('set_user', me.body)
        const playlists = await this.spotify.getUserPlaylists(me.body.id)
        console.log(playlists)
        this.$store.commit('set_playlists', playlists.body)
    }
}
</script>

<style>
.dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dashboard > div {
    margin: 25px;
}

.playlist-dropdown {
    position: absolute;
    left: 20px;
}

.md-button-content {
    font-size: 20px;
}

.selector {
    margin-left: 15px !important;
    margin-right: 15px !important;
}

.selector-wrapper {
    display: flex;
    flex-direction: row;
}

.less {
    color: #4F3FE4;
    padding-right: 20px;
}

.more {
    color: #F0403E;
    padding-left: 20px;
}

.intense-1 {
    background-color: #4F3FE4;
}

.intense-2 {
    background-color: #1ab47b;
}

.intense-3 {
    background-color: #c6ba31;
}

.intense-4 {
    background-color: #D68325;
}

.intense-5 {
    background-color: #F0403E;
}

</style>
