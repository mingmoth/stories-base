import { onMounted, ref } from 'vue'
// store
import {
    nextStory
} from '../store'

export const useDisplay = (props) => {
    // 播放參數
    const isAutoDisplay = ref(null)
    const isDisplayStory = ref(false)
    const remainingTime = ref(0)
    const startDisplayTime = ref(new Date())

    function autoDisplay () {
        if (!startTime.value) {
            startTime.value = new Date()
        }

        if (isAutoDisplay.value) {
            clearTimeout(isAutoDisplay.value)
            isAutoDisplay.value = null
        }

        const runtime = new Date() - startTime.value - lapseTime.value
        progress.value = (runtime / props.duration) * 100

        isDisplayStory.value = true
        startDisplayTime.value = new Date()
        isAutoDisplay.value = setTimeout(() => {
            remainingTime.value = 0
            nextStory()
        }, remainingTime.value)
    }

    // 暫停播放
    function pauseDisplay () {
        clearTimeout(isAutoDisplay.value)
        isDisplayStory.value = false
        isAutoDisplay.value = null
        remainingTime.value -= new Date() - startDisplayTime.value
    }

    // 恢復播放
    function resumeDisplay () {
        isDisplayStory.value = true
        startDisplayTime.value = new Date()
        isAutoDisplay.value = setTimeout(() => {
            remainingTime.value = 0
            nextStory()
        }, remainingTime.value)
    }

    onMounted(() => {
        isDisplayStory.value = true
    })

    return {
        autoDisplay,
        isAutoDisplay,
        isDisplayStory,
        pauseDisplay,
        resumeDisplay,
        remainingTime,
        startDisplayTime
    }
}
