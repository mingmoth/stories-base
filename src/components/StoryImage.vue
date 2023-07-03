<script setup>
import { computed, ref, watch } from 'vue'
import {
    currentStory,
    mapState,
    nextStory,
    prevStory
} from '../store'

// story 顯示相關參數
const isStoryLoaded = computed(() => Object.keys(currentStory).length > 0)
const storyIndex = computed(() => mapState.index)

// 播放參數
const isAutoDisplay = ref(null)
const remainingTime = ref(0)
const startDisplayTime = ref(new Date())

// 自動播放
function autoDisplay () {
    if (isAutoDisplay.value) {
        clearTimeout(isAutoDisplay.value)
        isAutoDisplay.value = null
    }
    startDisplayTime.value = new Date()
    isAutoDisplay.value = setTimeout(() => {
        nextStory()
    }, remainingTime.value)
}

// 暫停播放
function pauseDisplay () {
    clearTimeout(isAutoDisplay.value)
    isAutoDisplay.value = null
    remainingTime.value -= new Date() - startDisplayTime.value
    console.log('pause, remainingTime', new Date() - startDisplayTime.value)
}

// 恢復播放
function resumeDisplay () {
    console.log('resume, remainingTime', remainingTime.value)
    isAutoDisplay.value = setTimeout(() => {
        nextStory()
    }, remainingTime.value)
}

// 先依 story index '是否變化' 決定播放行為
watch(storyIndex, async (storyIndex, prevStoryIndex) => {
    remainingTime.value = currentStory.value.duration
    autoDisplay()
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
            @mousedown="pauseDisplay"
            @mouseup="resumeDisplay"
        >
            <div>{{ currentStory.id }}</div>
            <div>{{ currentStory.text }}</div>
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
