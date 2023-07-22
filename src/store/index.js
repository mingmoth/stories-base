import { computed, reactive, readonly } from 'vue'
import { ajaxGetStoryIdList, ajaxGetStory } from '../api'

// state
const state = reactive({
    storyIdList: [],
    stories: [],
    index: -1,
    isLoading: true
})

export const mapState = readonly(state)

// getter
export const currentStory = computed(() => {
    return state.stories[state.index] || {}
})

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

export const nextStory = () => {
    state.index += 1
    if (state.index === state.storyIdList.length) {
        setTimeout(() => {
            state.index = 0
        })
    }
}

export const prevStory = () => {
    state.index -= 1
    if (state.index === -1) {
        setTimeout(() => {
            state.index = 0
        })
    }
}
