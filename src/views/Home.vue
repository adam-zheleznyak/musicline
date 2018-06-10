<template>
    <div class="home">
        <transition name="fade" appear>
            <img src="../assets/logo.svg" class="logo">
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Home'
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
}

.logo {
    width: 400px;
    filter: invert(100%);
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
