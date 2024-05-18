<script setup>
// vue
import { computed } from 'vue'
// store
import {
    currentStory,
    mapState,
    nextStory,
    prevStory
} from '../store'

// component
import StoryProgress from './StoryProgress.vue'
import StoryImage from './StoryImage.vue'

// story 顯示相關參數
const isStoryLoaded = computed(() => Object.keys(currentStory).length > 0)

</script>

<template>
    <div
        class="story-container"
    >
        <button
            class="story-btn prev-btn"
            @click="prevStory"
        ></button>
        <StoryImage
            v-if="!mapState.isLoading && isStoryLoaded"
            class="story-image"
        />
        <button
            class="story-btn next-btn"
            @click="nextStory"
        ></button>
        <StoryProgress />
    </div>
</template>

<style lang="scss">
.story-container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: grid;

    .story-btn {
        border: none;
        position: fixed;
        top: 0;
        width: 50vw;
        height: 100vh;
        z-index: 2;
        border: none;
        outline: none;
        background-color: transparent;
    }

    .prev-btn {
        left: 0;
    }

    .next-btn {
        right: 0;
    }
}
</style>
