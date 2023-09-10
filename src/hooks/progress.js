import {
    nextStory
} from '../store'
import { computed, ref, toRefs, watch } from 'vue'

export default function useDisplay (props) {
    const {
        currentDisplayIndex,
        duration,
        isCurrentStoryReady,
        storyIndex
    } = toRefs(props)

    const animFrameId = ref(-1)
    const progress = ref(0)
    const startTime = ref(0)
    const lastPauseTime = ref(0)
    const lapseTime = ref(0)

    const isCurrentStoryIndex = computed(() => currentDisplayIndex.value === storyIndex.value)

    function displayProgress () {
        if (!startTime.value) {
            startTime.value = new Date()
        }
        const runtime = new Date() - startTime.value - lapseTime.value
        progress.value = (runtime / duration.value) * 100

        if (progress.value < 100) {
            animFrameId.value = requestAnimationFrame(displayProgress)
        } else {
            pauseProgress()
            progress.value = 100
            nextStory()
        }
    }

    function pauseProgress () {
        cancelAnimationFrame(animFrameId.value)
        animFrameId.value = -1
    }

    watch(isCurrentStoryReady, (val) => {
        progress.value = 0
        startTime.value = 0
        lastPauseTime.value = 0
        lapseTime.value = 0
        if (val && isCurrentStoryIndex.value) {
            animFrameId.value = requestAnimationFrame(displayProgress)
        } else {
            pauseProgress()
        }
    })

    return {
        isCurrentStoryIndex,
        progress,
        pauseProgress
    }
}