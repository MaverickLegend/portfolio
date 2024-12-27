<template>
    <transition name="swipe">
        <div class="about-container" :key="languageKey">
            <h1>{{ about.title }}</h1>
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
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #104660;
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }
}
</style>