<template>
    <div class="skill-story">
        <h1
            v-if="props.title"
            class="skill-story__title"
        >
            {{ props.title }}
        </h1>
        <h2
            v-if="props.subTitle"
            class="skill-story__subtitle"
        >
            {{ props.subTitle }}
        </h2>
        <div
            v-if="infos.length"
            class="skill-story__info-wrap"
        >
            <div
                v-for="(info, index) in validInfoList"
                :key="index"
                class="skill-story__info-item"
            >
                <h2 class="skill-story__info-title">
                    {{ info.title }}
                </h2>
                <ul>
                    <li
                        v-for="(skill, index) in info.skills"
                        :key="index"
                        class="skill-story__info-skill"
                    >{{ skill }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

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

const validInfoList = computed(() => props.infos.filter(info => info.skills.length))
</script>

<style lang="scss" scoped>

.skill-story {
    position: relative;
    z-index: 2;
    color: white;

    &__info-wrap {
        text-align: start;
        padding: 0 5%;
    }

    &__info-skill {
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
    }
}
</style>