<template>
    <md-button class="md-icon-button md-raised selector" :class="[`intense-${num}`]" @click="add_elem([num, 15])">
        {{ num }}
    </md-button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Selector',
    props: {
        num: Number
    },
    methods: mapMutations(['add_elem'])
}
</script>

<style scoped>
.intense-1 {
    background-color: #4F3FE4 !important;
}

.intense-2 {
    background-color: #1ab47b !important;
}

.intense-3 {
    background-color: #c6ba31 !important;
}

.intense-4 {
    background-color: #D68325 !important;
}

.intense-5 {
    background-color: #F0403E !important;
}
</style>
