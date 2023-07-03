<script setup>
import { onMounted } from 'vue'
import { getStoryIdList, fetchStoriesData } from './store'
import StoryImage from './components/StoryImage.vue'

onMounted(async () => {
    await getStoryIdList()
    await fetchStoriesData()
})
</script>

<template>
  <div>
    <StoryImage />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
