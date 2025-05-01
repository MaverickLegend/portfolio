<template>
    <transition name="swipe">
        <div class="certificates-container" :key="languageKey">
            <h1 class="section-title">{{ sectionTitle.toUpperCase() }}</h1>
            <swiper :pagination="{ type: 'fraction' }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="certificate in certificates" :key="certificate.title">
                    <div class="certificate">
                        <div class="left-container">
                            <a :href="certificate.link" target="_blank">
                                <picture>
                                    <source :srcset="certificate.image" type="image/webp" loading="lazy" />
                                    <img :src="certificate.image" :alt="certificate.title" loading="lazy" />
                                </picture>
                                <!-- <img :src="certificate.image" :alt="certificate.title" loading="lazy" /> -->
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
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const store = useLanguageStore();
const certificates = computed(() => store.certificates);
const languageKey = computed(() => store.current.code);
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
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: var(--text);
    overflow: hidden;
    width: 100%;
    height: 100%;

    @media (max-width: 900px) {
        padding: 0.5rem;
        height: auto;
    }

    .mySwiper {
        width: 100%;
        height: 100%;

        @media (max-width: 900px) {
            height: auto;
        }
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;

        @media (max-width: 900px) {
            height: auto;
            padding: 2rem;
        }

        .certificate {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            place-content: center;
            gap: 1rem;
            width: 100%;
            height: 100%;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
                grid-template-rows: auto auto;
            }

            .left-container {
                height: 20rem;
                overflow: hidden;
                border-radius: 0.5rem;

                @media (max-width: 900px) {
                    height: 20rem;
                    gap: 0.5rem;
                }

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    transition: ease-in-out 0.3s;

                    &:hover {
                        transform: scale(1.1);
                    }

                    @media (max-width: 900px) {
                        height: 100%;
                        width: 100%;
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

                @media (max-width: 900px) {
                    padding: 0.5rem;
                    gap: 0.5rem;
                }

                h2 {
                    font-size: var(--text-2xl);
                    color: var(--accent-blue);

                    @media (max-width: 900px) {
                        font-size: var(--text-xl);
                    }
                }

                h3 {
                    font-size: var(--text);
                    color: var(--accent-teal);

                    @media (max-width: 900px) {
                        font-size: var(--text-sm);
                    }
                }

                p {
                    font-size: var(--text-sm);
                    color: var(--text);
                    text-align: center;

                    @media (max-width: 900px) {
                        font-size: var(--text-xs);
                        margin-bottom: 2rem;
                    }
                }
            }
        }
    }
}
</style>