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
import useDisplay from '../hooks/progress'

const props = defineProps({
    currentDisplayIndex: {
        type: Number
    },
    duration: {
        type: Number
    },
    isCurrentStoryReady: {
        type: Boolean,
        default: false
    },
    storyIndex: {
        type: Number
    }
})

const {
    isCurrentStoryIndex,
    progress
} = useDisplay(props)

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
