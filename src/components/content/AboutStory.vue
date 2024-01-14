<template>
    <div class="about-story">
        <h1
            v-if="props.title"
            class="about-story__title"
        >
            {{ props.title }}
        </h1>
        <h2
            v-if="props.subTitle"
            class="about-story__subtitle"
        >
            {{ props.subTitle }}
        </h2>
        <div
            v-if="infos.length"
            class="about-story__info-wrap"
        >
            <h3
                v-for="(info, index) in props.infos"
                :key="index"
                class="about-story__info-item"
            >
                {{ info }}
            </h3>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    infos: {
        type: Array,
        default: () => ([])
    },
    subTitle: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>

.about-story {
    position: relative;
    z-index: 1;
    color: white;

    &__info-wrap {
        text-align: start;
        padding: 0 5%;
    }
}
</style>