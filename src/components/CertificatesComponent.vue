<template>
    <transition name="swipe">
        <div class="certificates-container" :key="languageKey">
            <div class="certificates">
                <div v-for="certificate in certificates" :key="certificate.title" class="card certificate">
                    <h3>{{ certificate.title }}</h3>
                    <img :src="certificate.image" :alt="certificate.title" />
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
const certificates = computed(() => store.language.presentation.certificates);
const languageKey = computed(() => store.btnLang);

</script>

<style scoped lang="scss">
@import '../../src/assets/styles/transitions.scss';
@import '../../src/assets/styles/themes.scss';

.certificates-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    color: var(--text);

    .certificates {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 2rem;
        justify-content: center;

        .certificate {
            display: grid;
            grid-template-rows: 1fr 2fr 1fr;
            gap: 1rem;
            padding: 1rem;
            border-radius: 0.3rem;
            place-content: center;

            h3 {
                font-size: 1.5rem;
                text-align: center;
                color: var(--text);
            }

            h4 {
                font-size: 1rem;
                text-align: center;
                color: #666;
            }

            img {
                max-width: 100%;
                max-height: 70%;
                object-fit: cover;
                border-radius: 0.3rem;
            }
        }
    }
}
</style>