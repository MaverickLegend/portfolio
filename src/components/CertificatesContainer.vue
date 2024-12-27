<template>
    <transition name="swipe">
        <div class="certificates-container" :key="languageKey">
            <h2>{{ certificateTitle }}</h2>
            <div class="certificates">
                <div v-for="certificate in certificates" :key="certificate.title" class="certificate">
                    <!-- <img :src="certificate.image" :alt="certificate.title" /> -->
                    <h3>{{ certificate.title }}</h3>
                    <h4>{{ certificate.description }}</h4>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';

const store = useLanguageStore();
const certificateTitle = computed(() => store.language.presentation['certificates-title']);
const certificates = computed(() => store.language.presentation.certificates);
const languageKey = computed(() => store.btnLang);

</script>

<style scoped lang="scss">
@import '../../src/assets/styles/transitions.scss';

.certificates-container {

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: aliceblue;

    h2 {
        font-size: 2rem;
        color: #104660;
        text-align: center;
    }

    .certificates {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .certificate {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: #104660;
            color: aliceblue;
            text-align: center;

            h3 {
                font-size: 1.5rem;
            }

            h4 {
                font-size: 1rem;
            }
        }
    }
}
</style>