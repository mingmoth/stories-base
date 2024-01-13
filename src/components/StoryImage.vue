<script setup>
// vue
import { nextTick } from 'vue'
// store
import {
    currentStory,
    updateCurrentStoryReady,
    updateDisplaying
} from '../store'

// component
import AvatarImage from './AvatarImage.vue'
import AboutStory from './content/AboutStory.vue'
import CoverStory from './content/CoverStory.vue'
import SkillStory from './content/SkillStory.vue'

function imageLoaded () {
    console.log('imageLoaded')
    updateCurrentStoryReady(false)
    nextTick(() => {
        updateCurrentStoryReady(true)
    })
}

</script>

<template>
    <div
        @mousedown="updateDisplaying(false)"
        @mouseup="updateDisplaying(true)">
        <AvatarImage />
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
            class="story-image__img"
            @load="imageLoaded"
        >
    </div>
</template>

<style lang="scss" scoped>

.story-image {

    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
    }
}
</style>