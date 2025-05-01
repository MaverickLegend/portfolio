<template>
    <transition name="fade">
        <div class="about-container" :key="languageKey">
            <h1 class="section-title">{{ sectionTitle }}</h1>

            <div class="about-grid">
                <div class="about-left">
                    <h2 class="about-title">{{ about.title }}</h2>
                    <p class="about-intro">{{ about.intro }}</p>
                    <p class="about-description">{{ about.description }}</p>
                </div>

                <div class="about-right">
                    <h3 class="highlights-title">Highlights</h3>
                    <ul class="highlights-list">
                        <li v-for="point in about.highlights" :key="point">
                            <span class="highlight-dot"></span>
                            {{ point }}
                        </li>
                    </ul>
                </div>
            </div>
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
.about-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0.5rem 1.5rem;
    overflow: hidden;

    .section-title {
        font-size: 1.8rem;
        font-weight: 300;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: var(--accent-teal, #4ecca3);
        margin-bottom: 1rem;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 120px;
            height: 1px;
            background-color: var(--accent-teal, #4ecca3);
        }
    }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        height: calc(100% - 3rem);
        overflow: hidden;
        place-content: center;

        .about-left {
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .about-title {
                font-size: 1.4rem;
                font-weight: 400;
                color: var(--accent-purple, #a781ff);
                margin-bottom: 0.75rem;
            }

            .about-intro {
                font-size: 1rem;
                font-style: italic;
                color: var(--accent-purple, #a781ff);
                margin-bottom: 1rem;
            }

            .about-description {
                font-size: 0.95rem;
                line-height: 1.6;
                overflow-y: auto;
                padding-right: 0.5rem;
                mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
                text-align: justify;
            }
        }

        .about-right {
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .highlights-title {
                font-size: 1.2rem;
                font-weight: 500;
                color: var(--accent-teal, #4ecca3);
                margin-bottom: 1rem;
            }

            .highlights-list {
                list-style: none;
                padding: 0;
                margin: 0;
                overflow-y: auto;
                padding-right: 0.5rem;

                li {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 0.8rem;
                    font-size: 0.95rem;
                    line-height: 1.4;
                    color: var(--accent-blue, #61dafb);

                    .highlight-dot {
                        flex-shrink: 0;
                        display: inline-block;
                        width: 6px;
                        height: 6px;
                        background-color: var(--accent-blue, #61dafb);
                        border-radius: 50%;
                        margin-right: 0.75rem;
                        position: relative;
                        top: 0.5rem;

                        &::before {
                            content: '';
                            position: absolute;
                            width: 12px;
                            height: 12px;
                            border: 1px solid var(--accent-blue, #61dafb);
                            border-radius: 50%;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            opacity: 0.4;
                        }
                    }
                }
            }
        }
    }
}

.about-description,
.highlights-list {
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--accent-purple, #a781ff);
        border-radius: 4px;
        opacity: 0.6;
    }
}

@media (max-width: 900px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .about-description,
    .highlights-list {
        max-height: none;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .about-title {
        font-size: 1.3rem;
    }
}
</style>