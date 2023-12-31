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
// hooks
import { useDisplay } from '../hooks/display'
import AvatarImage from './AvatarImage.vue'
// component
import ProgressItem from './ProgressItem.vue'

const {
    autoDisplay,
    isDiplayStory,
    pauseDisplay,
    remainingTime,
    resumeDisplay
} = useDisplay()

// story 顯示相關參數
const isStoryLoaded = computed(() => Object.keys(currentStory).length > 0)
const itemNum = computed(() => {
    return mapState.stories.length
})

function imageLoaded () {
    remainingTime.value = currentStory.value.duration
    autoDisplay()
}

</script>

<template>
    <div
        v-if="!mapState.isLoading && isStoryLoaded"
        class="story-container"
    >
        <button
            class="story-btn prev-btn"
            @click="prevStory"
        >&lt;</button>
        <div
            class="story-img"
            @mousedown="pauseDisplay"
            @mouseup="resumeDisplay"
        >
            <div
                class="story-progress"
                :style="{ '--num': itemNum }"
            >
                <AvatarImage />
                <ProgressItem
                    v-for="(story, index) in mapState.stories"
                    :key="story.id"
                    :current-display-index="mapState.index"
                    :duration="story.duration"
                    :is-auto-display="isDiplayStory"
                    :remaining-time="remainingTime"
                    :story-index="index"
                    :style="{
                        background: mapState.index > index ? 'white' : ''
                    }"
                    class="story-bar"
                />
            </div>
            <div>{{ currentStory.id }}</div>
            <div>{{ currentStory.text }}</div>
            <img
                v-show="currentStory.imageUrl"
                :src="currentStory.imageUrl"
                alt="story_image"
                class="story-image"
                @load="imageLoaded"
            >
        </div>
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
            class="story-img"
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
    background: lightgray;
    display: grid;

    .story-img {
        margin: auto;
        width: 500px;
        height: 100%;
        cursor: pointer;
        text-align: center;
        background: gray;
        padding: 20px;
        position: relative;
    }

    .story-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
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

    .story-progress {
        position: absolute;
        top: 12px;
        left: 0;
        width: 100%;
        height: 2px;
        display: grid;
        grid-template-columns: repeat(var(--num), 1fr);
        gap: 4px;
    }

    .story-bar {
        width: 100%;
        height: 2px;
        background: black;
        position: relative;
    }
}
</style>
