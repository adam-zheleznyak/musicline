<template>
    <div class="dashboard">
        <div><img src="../assets/logo.svg" class="logo"></div>
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

export default {
    name: 'Dashboard',
    components: {
        Timeline,
        Track
    }
}
</script>

<style>
.dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
}

.dashboard > div {
    margin: 25px;
}
</style>
