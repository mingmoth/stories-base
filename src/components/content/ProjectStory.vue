<template>
    <div class="project-story">
        <h1
            v-if="props.title"
            class="project-story__title"
        >
            {{ props.title }}
        </h1>
        <h2
            v-if="props.subTitle"
            class="project-story__subtitle"
        >
            {{ props.subTitle }}
        </h2>
        <div
            v-if="infos.length"
            class="project-story__info-wrap"
        >
            <div
                v-for="(info, index) in infos"
                :key="index"
                class="project-story__info-item"
            >
                <h2 class="project-story__info-title">
                    {{ info.name }}
                    <a
                        v-if="info.link"
                        :href="info.link"
                        role="button"
                        target="_blank"
                        class="project-story__link"
                    >
                        <img
                            src="/contact/github.png"
                            class="project-story__icon"
                        >
                    </a>
                </h2>
                <ul>
                    <li
                        v-for="(tech, index) in info.techs"
                        :key="index"
                        class="project-story__info-project"
                    >{{ tech }}</li>
                </ul>
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
</script>

<style lang="scss" scoped>

.project-story {
    position: relative;
    z-index: 1;
    color: white;

    &__info-wrap {
        text-align: start;
        padding: 0 5%;
    }

    &__info-project {
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
    }

    &__link {
        display: inline;
    }

    &__icon {
        height: 32px;
        width: 32px;
    }
}

</style>