<template>
    <div class="home">
        <transition name="fade" appear>
            <div>
                <img src="../assets/logo.svg" class="logo">
                <md-button @click="auth()">Get Started</md-button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        auth () {
            const scopes = [
                "playlist-read-private",
                "user-modify-playback-state",
                "user-read-playback-state",
                "user-library-read",
                "user-read-private",
                "user-read-birthdate",
                "user-read-email",
                "streaming"
            ]
            window.location.href = this.spotify.createAuthorizeURL(scopes)
        }
    }
}
</script>

<style>
.home {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.logo {
    width: 400px;
    filter: invert(100%);
    display: block;
    margin-bottom: 20px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s, transform .5s;
}

.fade-enter {
    opacity: 0;
    transform: translateY(-50px);
}

.fade-leave-to {
    opacity: 0;
}
</style>
