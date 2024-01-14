import { computed, nextTick, reactive, readonly } from 'vue'
import { ajaxGetStoryIdList, ajaxGetStory } from '../api'

// state
const state = reactive({
    storyIdList: [],
    stories: [],
    index: -1,
    isLoading: true,
    isCurrentStoryReady: false,
    isDisplaying: true
})

export const mapState = readonly(state)

// getter
export const currentStory = computed(() => {
    return state.stories[state.index] || {}
})

export const isDisplaying = computed(() => state.isDisplaying)

export const isCurrentStoryReady = computed(() => state.isCurrentStoryReady)

// action
// 取得 StoryIdList
export const getStoryIdList = async () => {
    if (Array.isArray(state.storyIdList) &&
        state.storyIdList.length) {
        return
    }
    state.isLoading = true
    try {
        const response = await ajaxGetStoryIdList()
        const { idList } = response
        if (idList) {
            state.storyIdList = idList
        }
    } catch (error) {
        console.error(error)
    }
    state.isLoading = false
}

// 取得 全部Stories
export async function fetchStoriesData () {
    if (Array.isArray(state.storyIdList) && state.storyIdList.length === 0) {
        return
    }
    for (let index = 0; index < state.storyIdList.length; index++) {
        try {
            const storyId = state.storyIdList[index]
            const story = await ajaxGetStory(storyId)
            if (!story) {
                throw new Error(`No Such ${storyId} Story`)
            }
            state.stories[index] = story
        } catch (error) {
            console.error(error)
        }
    }
    state.index = 0
}

export const isStoryImageSameAsPrev = (idx) => {
    return state.stories[state.index].imageUrl === state.stories[state.index + idx].imageUrl
}

export const nextStory = () => {
    state.index += 1
    if (state.index === state.storyIdList.length) {
        updateCurrentStoryReady(false)
        setTimeout(() => {
            state.index = 0
        })
    } else {
        isNeedCheckImageLoad(-1)
    }
}

export const prevStory = () => {
    state.index -= 1
    if (state.index === -1) {
        updateCurrentStoryReady(false)
        setTimeout(() => {
            state.index = 0
        })
    } else {
        isNeedCheckImageLoad(1)
    }
}

export function updateDisplaying (val) {
    state.isDisplaying = val
}

async function isNeedCheckImageLoad (idx) {
    updateCurrentStoryReady(false)
    await nextTick(() => {
        if (isStoryImageSameAsPrev(idx)) {
            console.log('isStoryImageSameAsPrev', idx)
            updateCurrentStoryReady(false)
            nextTick(() => {
                updateCurrentStoryReady(true)
            })
        }
    })
}

export const updateCurrentStoryReady = (val) => {
    state.isCurrentStoryReady = val
}
