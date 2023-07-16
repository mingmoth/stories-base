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

const props = defineProps({
    currentDisplayIndex: {
        type: Number
    },
    duration: {
        type: Number
    },
    isAutoDisplay: {
        type: Boolean
    },
    remainingTime: {
        type: Number
    },
    storyIndex: {
        type: Number
    }
})

const isCurrentStoryIndex = computed(() => props.currentDisplayIndex === props.storyIndex)
const isAutoDisplay = computed(() => props.isAutoDisplay)

const animFrameId = ref(-1)
const lastPaused = ref(0)
const progress = ref(0)
const startTime = ref(0)

function incrementCount () {
    if (!startTime.value) {
        startTime.value = new Date()
    }
    const runtime = new Date() - startTime.value - lastPaused.value
    progress.value = (runtime / props.duration) * 100

    if (progress.value < 100) {
        animFrameId.value = requestAnimationFrame(incrementCount)
    } else {
        cancelCount()
        progress.value = 100
    }
}

function cancelCount () {
    cancelAnimationFrame(animFrameId.value)
    animFrameId.value = -1
}

watch(isCurrentStoryIndex, (val) => {
    progress.value = 0
    startTime.value = 0
    if (val) {
        console.log('currentIndex', props.currentDisplayIndex)
        animFrameId.value = requestAnimationFrame(incrementCount)
    } else {
        cancelCount()
    }
})

watch(isAutoDisplay, (val) => {
    // console.log('val', val)
    // if (!val) {
    //     lastPaused.value = new Date() - startTime.value
    //     cancelCount()
    // }
})
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
