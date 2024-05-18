<script setup>
// vue
import { nextTick } from 'vue'
// store
import {
    currentStory,
    isCurrentStoryReady,
    updateCurrentStoryReady,
    updateDisplaying
} from '../store'

// component
import AvatarImage from './AvatarImage.vue'
import AboutStory from './content/AboutStory.vue'
import CoverStory from './content/CoverStory.vue'
import ContactStory from './content/ContactStory.vue'
import LoadSpinner from './common/LoadSpinner.vue'
import SkillStory from './content/SkillStory.vue'
import ProjectStory from './content/ProjectStory.vue'

function imageLoaded () {
    console.log('imageLoaded')
    updateCurrentStoryReady(false)
    nextTick(() => {
        updateCurrentStoryReady(true)
    })
}

// const component = computed(() => import(`./content/${currentStory.component}.vue`))

</script>

<template>
    <div
        @mousedown="updateDisplaying(false)"
        @mouseup="updateDisplaying(true)"
        class="story-image"
    >
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
        <ProjectStory
            v-if="currentStory.component === 'ProjectStory'"
            v-bind="currentStory"
        />
        <ContactStory
            v-if="currentStory.component === 'ContactStory'"
            v-bind="currentStory"
        />
        <keep-alive>
            <img
                v-show="currentStory.imageUrl"
                :src="currentStory.imageUrl"
                alt="story_image"
                class="story-image__img"
                @load="imageLoaded"
            >
        </keep-alive>
        <div
            v-if="!isCurrentStoryReady"
            class="loading-container"
        >
            <LoadSpinner />
        </div>
    </div>
</template>

<style lang="scss" scoped>

.story-image {
    margin: auto;
    width: 100%;
    height: 100vh;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    position: relative;
    background: black;
    box-sizing: border-box;

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

.loading-container {
    height: 100vh;
    width: 100vw;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: grid;
}

@media (min-width: 500px) {
    .story-image {
        width: 500px;
    }
}
</style>