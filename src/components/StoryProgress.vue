<script setup>
// vue
import { computed } from 'vue'
// store
import {
    isCurrentStoryReady,
    mapState
} from '../store'

// component
import ProgressItem from './ProgressItem.vue'

// story 顯示相關參數
const itemNum = computed(() => {
    return mapState.stories.length
})
</script>

<template>
    <div class="story-progress">
        <ProgressItem
            v-for="(story, index) in mapState.stories"
            :key="story.id"
            :current-display-index="mapState.index"
            :duration="story.duration"
            :is-current-story-ready="isCurrentStoryReady"
            :story-index="index"
            :class="[
                'story-progress__item',
                mapState.index > index && 'story-progress__item--displayed',
            ]"
        />
    </div>
</template>

<style lang="scss" scoped>
.story-progress {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 2px;
    display: grid;
    grid-template-columns: v-bind('`repeat(${itemNum}, 1fr)`');
    gap: 4px;
    z-index: 2;

    &__item {
        width: 100%;
        height: 2px;
        background: black;
        position: relative;

        &--displayed {
            background: white;
        }
    }
}
</style>
