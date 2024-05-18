<template>
    <div class="cover-story">
        <h1
            v-if="props.title"
            class="cover-story__title"
        >
            {{ props.title }}
        </h1>
        <h2
            v-if="props.subTitle"
            class="cover-story__subtitle"
        >
            {{ props.subTitle }}
        </h2>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    // infos: {
    //     type: Array,
    //     default: () => ([])
    // },
    subTitle: {
        type: String,
        default: ''
    }
})

// function getUrlIconPrefix (info) {
//     return info.icon === 'email' ? 'mailto: ' : ''
// }
</script>

<style lang="scss" scoped>

.cover-story {
    position: relative;
    z-index: 1;
    color: white;

    &__info-wrap {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin: auto;
    }

    &__icon {
        height: 32px;
        width: 32px;
    }
}
</style>