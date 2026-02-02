<template>
    <transition name="fade">
        <div class="about-container" :key="languageKey">
            <h1 class="section-title">{{ sectionTitle }}</h1>
            <div class="about-top" v-observe>
                <h2 class="about-title">{{ about.title }}</h2>
                <p class="about-intro">{{ about.intro }}</p>
                <p class="about-description">{{ about.description }}</p>
            </div>
            <div class="about-grid" v-observe>
                <div class="about-left">
                    <h3 class="highlights-title">Highlights</h3>
                    <ul class="highlights-list">
                        <li v-for="point in about.highlights" :key="point">
                            <span class="highlight-dot"></span>
                            {{ point }}
                        </li>
                    </ul>
                </div>
                <div class="about-right">
                    <div class="skills-grid">
                        <div 
                            class="skill-card" 
                            v-for="skill in about.professional_skills" 
                            :key="skill.title"
                            :style="{ '--card-color': skill.color }"
                        >
                            <div class="card-icon">
                                <Icon :icon="skill.icon" />
                            </div>
                            <div class="card-content">
                                <h4 class="card-title">{{ skill.title }}</h4>
                                <p class="card-desc">{{ skill.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore'
import { Icon } from '@iconify/vue';

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
    gap: 1rem;
    padding-bottom: 1rem;
    overflow: auto;


    .about-top {
        padding: 1rem;

        .about-title {
            font-size: 1.8rem;
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
            text-align: justify;
            margin-bottom: 1.5rem;
        }
    }

    .about-grid {
        padding: 0 1rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        place-content: center;
        overflow: auto;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .about-left {
            display: flex;
            flex-direction: column;
            overflow: auto;

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
                margin-bottom: 1.5rem;

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

        .about-right {
            display: flex;
            flex-direction: column;
            overflow: hidden;

            @media (max-width: 1400px) {
                overflow: auto;
            }

           .skills-grid {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 0.75rem;
                padding: 0.75rem;
                
                @media(max-width: 1200px) {
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                }
                
                @media(max-width: 600px) {
                    grid-template-columns: 1fr;
                }

                .skill-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                    padding: 0.75rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 0.5rem;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;

                    &:hover {
                        transform: translateY(-2px);
                         background: rgba(255, 255, 255, 0.06);
                        border-color: var(--card-color);
                        box-shadow: 0 0 15px var(--card-color);
                        
                        .card-icon {
                            color: var(--card-color);
                            filter: drop-shadow(0 0 5px var(--card-color));
                        }
                    }

                    .card-icon {
                        font-size: 1.75rem;
                        color: rgba(255, 255, 255, 0.7);
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                    }

                    .card-content {
                        .card-title {
                            font-size: 0.85rem;
                            font-weight: 600;
                            color: var(--text-primary);
                            margin-bottom: 0.25rem;
                        }

                        .card-desc {
                            font-size: 0.7rem;
                            color: rgba(255, 255, 255, 0.6);
                            line-height: 1.2;
                            font-style: italic;
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
        gap: 1.5rem;
    }

    .about-description,
    .highlights-list {
        max-height: none;
    }

    .about-title {
        font-size: 1.3rem;
    }

    .about-quote {
        margin: 0.75rem 0;
    }
}
</style>