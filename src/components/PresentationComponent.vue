<template>
    <transition name="disolve" mode="out-in">
        <div class="presentation-container" :key="languageKey">
            <div class="name-container">
                <h1>{{ name.name }}</h1>
            </div>
            <div class="alias-container">
                <h3>{{ name.webdeveloper }}</h3>
                <span>{{ name.alias }}</span>
            </div>
        </div>
    </transition>

</template>

<script setup lang="ts">
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';

const store = useLanguageStore();
const language = computed(() => store.language);
const name = computed(() => language.value.presentation);
const languageKey = computed(() => store.btnLang);
</script>

<style lang="scss" scoped>
@import '../../src/assets/styles/transitions.scss';
@import '../../src/assets/styles/fonts.scss';

.presentation-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 0.3rem;
    text-align: center;
    background-color: var(--primary);
    box-shadow: var(--shadow);
    height: 100%;

    .name-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100%;

        h1 {
            font-size: 4rem;
            color: var(--accent-teal);
        }

        h2 {
            font-size: 2rem;
            color: var(--text);
        }

    }

    .alias-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        h3 {
            font-size: 1.5rem;
            color: var(--accent-blue);
        }

        span {
            font-size: 1rem;
            color: var(--accent-purple);
        }
    }
}
</style>