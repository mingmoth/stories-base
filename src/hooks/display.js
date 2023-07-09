import { ref } from 'vue'
// store
import {
    nextStory
} from '../store'

export const useDisplay = () => {
    // 播放參數
    const isAutoDisplay = ref(null)
    const remainingTime = ref(0)
    const startDisplayTime = ref(new Date())

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

    return {
        autoDisplay,
        isAutoDisplay,
        pauseDisplay,
        resumeDisplay,
        remainingTime,
        startDisplayTime
    }
}
