<template>
    <div>
        <div
            :class="[
                'progress-item',
                isCurrentStoryIndex && 'active'
            ]"
            :style="{
                transition: isCurrentStoryIndex ? duration + 'ms linear' : '',
                width: (isCurrentStoryIndex && !isAutoDisplay) ? (isCurrentStoryIndex && isAutoDisplay) ? '100%' : `${displayPercentage}%` : '',
            }"
        ></div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    currentDisplayIndex: {
        type: Number
    },
    duration: {
        type: Number
    },
    isAutoDisplay: {
        type: Number
    },
    remainingTime: {
        type: Number
    },
    storyIndex: {
        type: Number
    }
})

const isCurrentStoryIndex = computed(() => props.currentDisplayIndex === props.storyIndex)

const displayPercentage = computed(() => (props.duration - props.remainingTime) / props.duration * 100)
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
