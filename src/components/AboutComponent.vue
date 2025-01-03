<template>
    <transition name="swipe">
        <div class="about-container" :key="languageKey">
            <h1>{{ about.title.toUpperCase() }}</h1>
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
    background-color: #104660;
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;

    h1 {
        align-self: baseline;
        font-size: 6rem;
        padding: 2rem;
        letter-spacing: 0.1rem;
        font-weight: lighter;
    }

    p {
        font-size: 1.5rem;
        padding: 2rem;
    }
}
</style>