<template>
    <div>
        <div
            :class="[
                'progress-item',
                isCurrentStoryIndex && 'active'
            ]"
            :style="{
                width: `${ progress }%`,
            }"
        ></div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
// store
import {
    nextStory
} from '../store'

const props = defineProps({
    currentDisplayIndex: {
        type: Number
    },
    duration: {
        type: Number
    },
    // isAutoDisplay: {
    //     type: Boolean
    // },
    storyIndex: {
        type: Number
    }
})

const animFrameId = ref(-1)
const progress = ref(0)
const startTime = ref(0)
const lastPauseTime = ref(0)
const lapseTime = ref(0)

const isCurrentStoryIndex = computed(() => props.currentDisplayIndex === props.storyIndex)

function displayProgress () {
    if (!startTime.value) {
        startTime.value = new Date()
    }
    const runtime = new Date() - startTime.value - lapseTime.value
    progress.value = (runtime / props.duration) * 100

    if (progress.value < 100) {
        animFrameId.value = requestAnimationFrame(displayProgress)
    } else {
        pauseProgress()
        progress.value = 100
        nextStory()
    }
}

function pauseProgress () {
    cancelAnimationFrame(animFrameId.value)
    animFrameId.value = -1
}

watch(isCurrentStoryIndex, (val) => {
    progress.value = 0
    startTime.value = 0
    lastPauseTime.value = 0
    lapseTime.value = 0
    if (val) {
        animFrameId.value = requestAnimationFrame(displayProgress)
    } else {
        pauseProgress()
    }
})

// watch(isAutoDisplay, (val) => {
//     if (!val && isCurrentStoryIndex.value) {
//         pauseProgress()
//         lastPauseTime.value = new Date()
//     } else if (val && isCurrentStoryIndex.value) {
//         lapseTime.value += new Date() - lastPauseTime.value
//         animFrameId.value = requestAnimationFrame(displayProgress)
//     }
// })
</script>

<style lang="scss" scoped>
.progress-item {
    height: 2px;
    background: white;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
    width: 0%;
}

.active {
    width: 100%;
}
</style>
