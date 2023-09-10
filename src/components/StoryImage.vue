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
import AvatarImage from './AvatarImage.vue'
import ProgressItem from './ProgressItem.vue'
import AboutStory from './content/AboutStory.vue'
import CoverStory from './content/CoverStory.vue'
import SkillStory from './content/SkillStory.vue'

// story 顯示相關參數
const isStoryLoaded = computed(() => Object.keys(currentStory).length > 0)
const itemNum = computed(() => {
    return mapState.stories.length
})

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
        >
            <AvatarImage />
            <div
                class="story-progress"
                :style="{ '--num': itemNum }"
            >
                <ProgressItem
                    v-for="(story, index) in mapState.stories"
                    :key="story.id"
                    :current-display-index="mapState.index"
                    :duration="story.duration"
                    :remaining-time="currentStory.duration"
                    :story-index="index"
                    :style="{
                        background: mapState.index > index ? 'white' : ''
                    }"
                    class="story-bar"
                />
            </div>
            <CoverStory
                v-if="currentStory.component === 'CoverStory'"
                v-bind="currentStory"
            />
            <AboutStory
                v-if="currentStory.component === 'AboutStory'"
                v-bind="currentStory"
            />
            <SkillStory
                v-if="currentStory.component === 'SkillStory'"
                v-bind="currentStory"
            />
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
    display: grid;

    .story-img {
        margin: auto;
        width: 500px;
        height: 100%;
        cursor: pointer;
        text-align: center;
        padding: 20px;
        position: relative;
        background: black;
    }

    .story-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
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
        z-index: 1;
    }

    .story-bar {
        width: 100%;
        height: 2px;
        background: black;
        position: relative;
    }
}
</style>
