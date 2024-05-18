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
        >
            <img src="/src/assets/arrow.png" alt="prev-arrow" class="prev-icon">
        </button>
        <StoryImage
            v-if="!mapState.isLoading && isStoryLoaded"
            class="story-image"
        />
        <button
            class="story-btn next-btn"
            @click="nextStory"
        >
            <img src="/src/assets/arrow.png" alt="next-arrow" class="next-icon">
        </button>
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
        position: fixed;
        top: 50vh;
        width: 40px;
        height: 40px;
        z-index: 2;
        border: none;
        outline: none;
        background-color: transparent;
        display: grid;
        border-radius: 50%;
        background-color: lightgray;
        opacity: 0.5;
        cursor: pointer;
    }

    .prev-btn {
        left: 0;
    }

    .next-btn {
        right: 0;
    }

    .prev-icon {
        margin: auto;
        transform: rotate(180deg);
        width: 20px;
    }

    .next-icon {
        margin: auto;
        width: 20px;
    }
}
</style>
