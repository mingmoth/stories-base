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
                    target="_blank"
                >
                    <img
                        :src="`/src/assets/contact/${ info.icon }.png`"
                        :alt="`contact-${ info.icon }-icon`"
                        class="cover-story__icon"
                    >
                </a>
            </div>
        </div>
        <div
            v-if="intros.length"
            class="cover-story__intro-wrap"
        >
            <li
                v-for="(intro, index) in props.intros"
                :key="index"
                class="cover-story__intro-item"
            >
                {{ intro }}
            </li>
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
    intros: {
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

    &__intro-wrap {
        text-align: start;
        padding: 0 5%;
        font-size: 18px;
        line-height: 30px;
        font-weight: 600;
    }
}
</style>