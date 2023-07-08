<template>
    <div>
        <div
            :class="[
                'progress-item',
                isCurrentStoryIndex && 'active'
            ]"
            :style="{
                transition: isCurrentStoryIndex ? duration + 'ms linear' : ''
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
    storyIndex: {
        type: Number
    },
    duration: {
        type: Number
    },
    remainingTime: {
        type: Number
    }
})

const isCurrentStoryIndex = computed(() => props.currentDisplayIndex === props.storyIndex)
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
