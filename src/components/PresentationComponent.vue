<template>
    <transition name="disolve" mode="out-in">
        <div class="presentation-container" :key="languageKey">
            <div class="name-container">
                <h1>{{ presentation.name }}</h1>
            </div>
            <div class="alias-container">
                <h3>{{ presentation.webdeveloper }}</h3>
                <span>{{ presentation.alias }}</span>
            </div>
        </div>
    </transition>

</template>

<script setup lang="ts">
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';

const store = useLanguageStore();
const presentation = computed(() => store.presentation);
const languageKey = computed(() => store.current.code);

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
    width: 100%;

    @media (max-width: 900px) {
        padding: 1rem 0;
        height: auto;
        min-height: 10rem;
        justify-content: center;
    }

    .name-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100%;

        @media (max-width: 900px) {
            height: auto;
        }

        h1 {
            font-size: 2rem;
            color: var(--accent-teal);

            @media (max-width: 900px) {
                font-size: 2.5rem;
            }
        }
    }

    .alias-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        @media (max-width: 900px) {
            height: auto;
            margin-top: 0.5rem;
        }

        h3 {
            font-size: 1rem;
            color: var(--accent-blue);

            @media (max-width: 900px) {
                font-size: 1.2rem;
            }
        }

        span {
            font-size: 1rem;
            color: var(--accent-purple);

            @media (max-width: 900px) {
                font-size: 0.8rem;
            }
        }
    }
}
</style>