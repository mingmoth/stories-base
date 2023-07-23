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
        <div
            v-if="infos.length"
            class="cover-story__info-wrap"
        >
            <div
                v-for="(info, index) in props.infos"
                :key="index"
                class="cover-story__info-item"
            >
                <a
                    :href="`${getUrlIconPrefix(info)}${ info.url }`"
                    role="button"
                >
                    <img
                        :src="`/contact/${ info.icon }.png`"
                        :alt="`contact-${ info.icon }-icon`"
                        class="cover-story__icon"
                    >
                </a>
            </div>
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

function getUrlIconPrefix (info) {
    return info.icon === 'email' ? 'mailto: ' : ''
}
</script>

<style lang="scss" scoped>

.cover-story {
    position: relative;
    z-index: 2;

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