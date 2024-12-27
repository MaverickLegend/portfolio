<template>
    <transition name="swipe">
        <div class="presentation-container" :key="languageKey">
            <div class="name-container">
                <h2>{{ name.hello }}</h2>
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

.presentation-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #104660;
    padding-top: 1rem;
    border-radius: 0.5rem;
    color: aliceblue;
    text-align: center;

    .name-container {
        padding-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        h2 {
            font-size: 2rem;
        }

        h1 {
            font-size: 4rem;
        }
    }

    .alias-container {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
            font-size: 1.5rem;
        }

        span {
            font-size: 1rem;
        }
    }
}
</style>