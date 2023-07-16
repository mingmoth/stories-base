import { ref } from 'vue'
// store
import {
    nextStory
} from '../store'

export const useDisplay = () => {
    // 播放參數
    const isAutoDisplay = ref(null)
    const isDiplayStory = ref(false)
    const remainingTime = ref(0)
    const startDisplayTime = ref(new Date())

    function autoDisplay () {
        if (isAutoDisplay.value) {
            clearTimeout(isAutoDisplay.value)
            isAutoDisplay.value = null
        }
        isDiplayStory.value = true
        startDisplayTime.value = new Date()
        isAutoDisplay.value = setTimeout(() => {
            remainingTime.value = 0
            nextStory()
        }, remainingTime.value)
    }

    // 暫停播放
    function pauseDisplay () {
        clearTimeout(isAutoDisplay.value)
        isDiplayStory.value = false
        isAutoDisplay.value = null
        remainingTime.value -= new Date() - startDisplayTime.value
        console.log('pause, remainingTime', new Date() - startDisplayTime.value)
    }

    // 恢復播放
    function resumeDisplay () {
        isDiplayStory.value = true
        console.log('resume, remainingTime', remainingTime.value)
        isAutoDisplay.value = setTimeout(() => {
            nextStory()
        }, remainingTime.value)
    }

    return {
        autoDisplay,
        isAutoDisplay,
        isDiplayStory,
        pauseDisplay,
        resumeDisplay,
        remainingTime,
        startDisplayTime
    }
}
