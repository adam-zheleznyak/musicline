<template>
    <div class="wrapper">
        <div class="leftp">
            <div class="prevTrack">
                <img :src="this.prevUrl" class="prev">
                <skip-forward-icon class="prevIcon" />
            </div>
        </div>
        <div class="track">
            <img :src="this.coverUrl" class="cover" onclick="pause()">
            <pause-circle-icon id="pause" class="pause" />
            <h2 class="title">{{this.coverTitle}}</h2>
            <p2 class="artist">{{this.coverArt}}</p2>
        </div>
        <div class="rightp">
            <div class="nextTrack">
                <img :src="this.nextUrl" class="next">
                <skip-forward-icon class="nextIcon" />
            </div>
        </div>
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

function pause() {
    document.getElementById('pause').style.opacity = 0;
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.leftp {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translateX(-25%) translateY(-50%);
    perspective: 1000px;
}
.rightp {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translateX(-75%) translateY(-50%);
    perspective: 1000px;
}
.wrapper {
    display: block;
    width: 1000px;
    height: 300px;
}
.prevTrack {
    width: 250px;
    height: 250px;
    top: 50%;
    left: 25%;
    transform: translateX(-25%) translateY(-50%) rotateY(-40deg);
    border-radius: 8px;
    position: absolute;
}
.track {
    width: 250px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 8px;
    position: absolute;
}
.nextTrack {
    width: 250px;
    height: 250px;
    top: 50%;
    left: 75%;
    transform: translateX(-75%) translateY(-50%) rotateY(40deg);
    border-radius: 8px;
    position: absolute;
}
.prev {
    width: 225px;
    height: 225px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 8px;
}
.cover {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 8px;
}
.next {
    width: 225px;
    height: 225px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 8px;
}
.prevIcon {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(180deg);
    color: white;
    opacity: 0;
    transition: 0.5s ease;
}
.pause {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
    opacity: 0;
    transition: 0.5s ease;
}
.nextIcon {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
    opacity: 0;
    transition: 0.5s ease;
}
.title {
    width: auto;
    height: auto;
    position: absolute;
    top: 88%;
    left: 50%;
    transform: translateX(-50%) translateY(-88%);
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    color: white;
}
.artist {
    width: auto;
    height: auto;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    color: white;
}
.track:hover .pause {
    opacity: 1;
}
.prevTrack:hover .prevIcon {
    opacity: 1;
}
.nextTrack:hover .nextIcon {
    opacity: 1;
}
</style>
