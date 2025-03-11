<template>
    <transition name="swipe">
        <div class="about-container" :key="languageKey">
            <h1 class="heading-1">{{ sectionTitle.toUpperCase() }}</h1>
            <p>{{ about.description }}</p>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore'

const store = useLanguageStore();
const language = computed(() => store.language);
const about = computed(() => language.value.about);
const languageKey = computed(() => store.btnLang);
defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
});

</script>

<style lang="scss" scoped>
@import '../../src/assets/styles/transitions.scss';

.about-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    color: var(--text);

    p {
        font-family: var(--font-secondary);
        font-size: var(--text-lg);
        line-height: var(--leading-relaxed);
        padding: 1rem;
    }
}
</style>