<template>
<div class="timeline">
    <div v-for="(elem, index) in schedule" :class="[ 'timeline-child', `intense-${elem[0]}` ]" :style="{ 'flex-grow': elem[1] }" v-popover="{ name: `popover-${index}`}">

        <popover :name="`popover-${index}`" class="time-changer">
            <button class="minus" @click="dec_time(index)"><minus-icon></minus-icon></button>
            <div class='time'>{{ elem[1] }} mins</div>
            <button class="plus" @click="inc_time(index)"><plus-icon></plus-icon></button>
        </popover>

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
.timeline {
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.timeline-child {
    height: 50px;
    flex-grow: 1;
    margin-left: -20px;
    margin-right: -20px;
}

.timeline-child:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-left: 0;
}

.timeline-child:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-right: 0;
}

.fffff {
    flex-grow: 2;
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

.time-changer {
    display: flex;
}

.minus,
.plus {
    flex-grow: 0;
}

.time {
    flex-grow: 1;
    text-align: center;
    line-height: 30px;
    font-family: Arial;
}
</style>
