<template>
    <transition name="swipe">
        <div class="certificates-container" :key="languageKey">
            <h1 class="heading-1">{{ sectionTitle.toUpperCase() }}</h1>
            <swiper :pagination="{ type: 'fraction' }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="certificate in certificates" :key="certificate.title">
                    <div class="certificate">
                        <div class="left-container">
                            <a :href="certificate.link" target="_blank">
                                <img :src="certificate.image" :alt="certificate.title" />
                            </a>
                        </div>
                        <div class="right-container">
                            <h2>{{ certificate.title }}</h2>
                            <h3>{{ certificate.subtitle }}</h3>
                            <p>{{ certificate.description }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'; // Estilos de paginación
import 'swiper/css/navigation'; // Estilos de navegación

const store = useLanguageStore();
const certificates = computed(() => store.language.presentation.certificates);
const languageKey = computed(() => store.btnLang);
const modules = [Pagination, Navigation];
defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
});

</script>

<style scoped lang="scss">
@import '../../src/assets/styles/transitions.scss';
@import '../../src/assets/styles/themes.scss';

.certificates-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    color: var(--text);
    overflow: hidden;

    .mySwiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;

        .certificate {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            place-content: center;
            gap: 1rem;
            width: 100%;
            height: 100%;

            .left-container {
                height: 20rem;
                overflow: hidden;
                border-radius: 0.5rem;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    transition: ease-in-out 0.3s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            .right-container {
                background-color: var(--glass-bg);
                display: grid;
                grid-template-rows: auto auto auto;
                place-content: center;
                place-items: center;
                width: 100%;
                padding: 1rem;
                gap: 1rem;
                border-radius: 0.5rem;

                h2 {
                    font-size: var(--text-2xl);
                    color: var(--accent-blue);
                }

                h3 {
                    font-size: var(--text);
                    color: var(--accent-teal);
                }

                p {
                    font-size: var(--text-sm);
                    color: var(--text);
                    text-align: center;
                }


            }
        }
    }
}
</style>