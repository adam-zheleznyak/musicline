<template>
    <div class="timeline-wrapper">
        <div class="timeline">
            <div v-for="(elem, index) in schedule" :class="[ 'timeline-child', `intense-${elem[0]}` ]" :style="{ 'flex-grow': elem[1] }">
                <md-button class="md-icon-button md-dense minus" @click="dec_time(index)"><md-icon>remove</md-icon></md-button>
                <div class='time'>{{ elem[1] }} mins</div>
                <md-button class="md-icon-button md-dense plus" @click="inc_time(index)"><md-icon>add</md-icon></md-button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    MinusIcon,
    PlusIcon
} from 'vue-feather-icons'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Timeline',
    components: {
        MinusIcon,
        PlusIcon
    },
    computed: mapState(['schedule']),
    methods: mapMutations(['inc_time', 'dec_time'])
}
</script>

<style scoped>
.timeline-wrapper {
    display: inline-block;
}

.timeline {
    display: flex;
    width: 800px;
}

.timeline-child {
    flex-grow: 1;
    padding: 5px;
    border-radius: 21px;
    margin-right: -42px;
    padding-right: 42px;
    transition: flex-grow .2s;
    display: flex;
}

.timeline-child:last-child {
    margin-right: 0;
    padding-right: 0;
}

.intense-1 {
    background-color: #4F3FE4;
}

.intense-2 {
    background-color: #1DC486;
}

.intense-3 {
    background-color: #E5D738;
}

.intense-4 {
    background-color: #D68325;
}

.intense-5 {
    background-color: #F0403E;
}

.plus {
    flex-grow: 0;
    color: black;
}

.time {
    flex-grow: 1;
    text-align: center;
    line-height: 30px;
}
</style>
