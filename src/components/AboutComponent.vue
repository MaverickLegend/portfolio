<template>
    <transition name="swipe">
        <div class="about-container" :key="languageKey">
            <h1 class="heading-1">{{ sectionTitle.toUpperCase() }}</h1>
            <section class="about">
                <div class="about-presentation">
                    <h2 class="about-presentation__title">{{ about.title }}</h2>
                    <span class="about-presentation__intro">{{ about.intro }}</span>
                    <p class="about__description">
                        {{ about.description }}
                    </p>
                </div>
                <div class="about-skills">
                    <ul class="about-skills__highlights">
                        <li v-for="point in about.highlights" :key="point">{{ point }}</li>
                    </ul>
                    <blockquote class="about-skills__quote">
                        <span>“</span>{{ about.quote }}<span>”</span>
                    </blockquote>
                </div>
            </section>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore'

const store = useLanguageStore();
const about = computed(() => store.about);
const languageKey = computed(() => store.current.code);
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
    width: 100%;
    height: 100%;

    .about {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        max-width: 1000px;
        margin: 0 auto;
        overflow-y: auto;

        .about-presentation {
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
            text-align: center;
            margin-bottom: 2rem;

            &__title {
                color: var(--accent-teal);
            }

            &__intro {
                color: var(--accent-purple);
                font-style: italic;
                position: relative;
                padding: 0.3rem 0;
                margin-bottom: 2rem;
            }

            .about__description {
                line-height: 1.5;
                font-weight: 500;
            }
        }

        .about-skills {
            &__highlights {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                list-style: none;
                padding: 0;
                margin: 0 0 1rem;

                li {
                    display: flex;
                    padding-left: 1rem;
                    position: relative;
                    margin-bottom: 0.5rem;
                    color: var(--accent-blue);

                    &:before {
                        content: "•";
                        color: var(--accent-purple);
                        position: absolute;
                        left: 0;
                    }
                }
            }

            &__quote {
                font-size: 0.85rem;
                font-style: italic;
                color: var(--accent-purple);
                padding: 0.6rem;
                border-left: 2px solid var(--accent-purple);
                background-color: rgba(var(--accent-purple-rgb, 128, 0, 128), 0.05);
                margin: 0.5rem 0;
            }
        }
    }
}

@media (max-width: 640px) or (max-height: 600px) {
    .about-container {
        .heading-1 {
            font-size: 1.2rem;
        }

        .about {
            .about-presentation {
                &__title {
                    font-size: 1rem;
                }

                &__intro {
                    font-size: 1rem;
                    margin-bottom: 0.2rem;
                }
            }

            .about-skills {
                &__highlights li {
                    font-size: 1rem;
                }

                &__quote {
                    font-size: 1rem;
                    text-align: center;
                }
            }
        }
    }
}
</style>