<template>
    <div class="tracks">
        <md-card class="track" md-with-hover>
            <md-ripple>
                <md-card-media-cover>
                    <md-card-media md-ratio="1:1">
                        <img :src="this.prevUrl">
                    </md-card-media>
                </md-card-media-cover>
                <md-icon class="md-size-5x track-icon left">skip_previous</md-icon>
            </md-ripple>
        </md-card>
        <md-card class="track current" md-with-hover>
            <md-ripple>
                <md-card-media-cover>
                    <md-card-media md-ratio="1:1">
                        <img :src="this.coverUrl">
                    </md-card-media>

                    <md-card-area>
                        <md-card-header>
                            <span class="md-title">{{ this.coverTitle }}</span>
                            <span class="md-subhead">{{ this.coverArt }}</span>
                        </md-card-header>
                    </md-card-area>
                </md-card-media-cover>
                <md-icon class="md-size-5x track-icon">play_arrow</md-icon>
            </md-ripple>
        </md-card>
        <md-card class="track" md-with-hover>
            <md-ripple>
                <md-card-media-cover>
                    <md-card-media md-ratio="1:1">
                        <img :src="this.nextUrl">
                    </md-card-media>
                </md-card-media-cover>
                <md-icon class="md-size-5x track-icon right">skip_next</md-icon>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
import { PauseCircleIcon, SkipForwardIcon } from 'vue-feather-icons'

export default {
    name: 'Track',
    props: {
        prevUrl: String,
        coverUrl: String,
        coverTitle: String,
        coverArt: String,
        nextUrl: String,
        icon: String
    },
    components: {
        PauseCircleIcon,
        SkipForwardIcon
    }
}
</script>

<style scoped>
.track {
    height: 250px;
    width: 250px;
    display: inline-block;
    vertical-align: middle;
}

.current {
    height: 400px;
    width: 400px;
    margin-left: -100px;
    margin-right: -100px;
    z-index: 1000;
}

.current img {
    transition: filter 0.2s;
}

.track-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
    transition: opacity 0.2s;
}

.left {
    left: 30%;
}

.right {
    left: 70%;
}

.track:hover .track-icon {
    opacity: 1;
}

.track:hover img {
    filter: brightness(80%);
}
</style>
