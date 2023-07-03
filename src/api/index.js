import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const DATABASE = 'stories'
const STORY_ID_LIST = 'storyIdList'

// 取得 storyIdList (Array)
export async function ajaxGetStoryIdList () {
    const storyIdListData = doc(db, DATABASE, STORY_ID_LIST)
    try {
        const response = await getDoc(storyIdListData)
        if (!response.exists()) {
            throw new Error('No Such StoryIdList')
        }
        return response.data()
    } catch (error) {
        console.error(error)
    }
}

// 取得 單一story (Object)
export async function ajaxGetStory (storyId) {
    const storyData = doc(db, DATABASE, storyId)
    try {
        const response = await getDoc(storyData)
        if (!response.exists()) {
            throw new Error('No Such StoryIdList')
        }
        return response.data()
    } catch (error) {
        console.error(error)
    }
}
