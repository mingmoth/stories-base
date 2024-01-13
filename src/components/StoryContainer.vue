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
        v-if="!mapState.isLoading && isStoryLoaded"
        class="story-container"
    >
        <StoryProgress />
        <button
            class="story-btn prev-btn"
            @click="prevStory"
        >&lt;</button>
        <StoryImage class="story-image" />
        <button
            class="story-btn next-btn"
            @click="nextStory"
        >></button>
    </div>
    <div
        v-else
        class="story-container"
    >
        <div
            class="story-image"
        >
            Loading...
        </div>
    </div>
</template>

<style lang="scss" scoped>
.story-container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: grid;

    .story-image {
        margin: auto;
        width: 500px;
        height: 100%;
        cursor: pointer;
        text-align: center;
        padding: 20px;
        position: relative;
        background: black;
    }

    .story-btn {
        border: none;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 2;
    }

    .prev-btn {
        left: 0;
    }

    .next-btn {
        right: 0;
    }
}
</style>
