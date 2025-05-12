<template>
    <transition name="fade">
        <div class="about-container" :key="languageKey">
            <h1 class="section-title">{{ sectionTitle }}</h1>
            <div class="about-top">
                <h2 class="about-title">{{ about.title }}</h2>
                <p class="about-intro">{{ about.intro }}</p>
                <p class="about-description">{{ about.description }}</p>
            </div>
            <div class="about-grid">
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
                    <div class="skills-section">
                        <table class="skills-table">
                            <thead>
                                <tr>
                                    <th v-for="header in about.skills_table.headers" :key="header">
                                        {{ header }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in about.skills_table.rows" :key="row[0]">
                                    <td v-for="cell in row" :key="cell">{{ cell }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
    overflow: auto;


    .about-top {
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
            text-align: justify;
            margin-bottom: 1.5rem;
        }

    }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        height: calc(100% - 3rem);
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
            overflow: auto;

            .skills-section {
                .skills-title {
                    font-size: 1.2rem;
                    font-weight: 500;
                    color: var(--accent-teal, #4ecca3);
                    margin-bottom: 1rem;
                }

                .skills-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;

                    th,
                    td {
                        padding: 0.5rem;
                        text-align: left;
                        font-size: 0.9rem;
                    }

                    th {
                        background-color: rgba(65, 65, 65, 0.3);
                        color: var(--accent-teal, #4ecca3);
                        font-weight: 500;
                        letter-spacing: 1px;
                        border-bottom: 1px solid var(--accent-teal, #4ecca3);
                    }

                    tr:nth-child(even) {
                        background-color: rgba(65, 65, 65, 0.15);
                    }

                    td:first-child {
                        font-weight: 500;
                        color: var(--accent-purple, #a781ff);
                    }

                    td:last-child {
                        color: var(--accent-blue, #61dafb);
                        font-style: italic;
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

    .skills-table {
        font-size: 0.85rem;

        th,
        td {
            padding: 0.5rem;
        }
    }

    .about-quote {
        margin: 0.75rem 0;
    }
}
</style>