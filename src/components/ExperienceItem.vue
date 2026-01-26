<template>
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <div class="experience-header">
                <div class="experience-title-section">
                    <h3 class="experience-position">{{ item.position }}</h3>
                    <div class="experience-meta">
                        <span class="experience-company">{{ item.company }}</span>
                        <span class="experience-separator">•</span>
                        <span class="experience-type">{{ item.type }}</span>
                    </div>
                </div>
                <div class="experience-year">
                    {{ item.year }}
                    <span v-if="item.status" class="experience-status">{{
                        item.status
                    }}</span>
                </div>
            </div>
            <p class="experience-description">{{ item.description }}</p>
            <div
                v-if="item.technologies && item.technologies.length"
                class="technologies"
            >
                <span
                    v-for="tech in item.technologies"
                    :key="tech"
                    class="tech-badge"
                >
                    {{ tech }}
                </span>
            </div>
            <ul
                v-if="item.achievements && item.achievements.length"
                class="achievements"
            >
                <li
                    v-for="achievement in item.achievements"
                    :key="achievement"
                >
                    <span class="achievement-dot"></span>
                    {{ achievement }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    item: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped lang="scss">
@import "../assets/styles/themes.scss";

.timeline-item {
    position: relative;
    display: flex;
    gap: 1rem;

    @media (max-width: 900px) {
        gap: 0.75rem;
    }

    .timeline-marker {
        position: absolute;
        left: -1.75rem;
        top: 0.5rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: var(--accent-purple);
        border: 2px solid var(--primary);
        z-index: 1;
        box-shadow: 0 0 10px rgba(167, 129, 255, 0.5);

        @media (max-width: 900px) {
             left: -1.25rem;
             width: 0.6rem;
             height: 0.6rem;
        }
    }

    .timeline-content {
        flex: 1;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: 0.5rem;
        padding: 1rem;
        border-left: 2px solid var(--accent-purple);
        transition: all 0.3s ease;

        @media (max-width: 900px) {
            padding: 0.75rem;
        }

        &:hover {
            background: rgba(255, 255, 255, 0.08);
            border-left-color: var(--accent-blue);
            transform: translateX(3px);
        }

        .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 0.5rem;
            gap: 1rem;

            @media (max-width: 900px) {
                flex-direction: column;
                gap: 0.25rem;
            }

            .experience-title-section {
                flex: 1;

                .experience-position {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--accent-purple);
                    margin: 0 0 0.25rem 0;

                    @media (max-width: 900px) {
                        font-size: 1rem;
                    }
                }

                .experience-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.7);

                    @media (max-width: 900px) {
                        font-size: 0.8rem;
                        flex-wrap: wrap;
                    }

                    .experience-company {
                        font-weight: 500;
                        color: rgba(255, 255, 255, 0.9);
                    }

                    .experience-separator {
                        opacity: 0.5;
                    }

                    .experience-type {
                        font-style: italic;
                    }
                }
            }

            .experience-year {
                font-size: 0.9rem;
                font-weight: 600;
                color: var(--accent-blue);
                white-space: nowrap;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 0.25rem;

                @media (max-width: 900px) {
                    align-self: flex-start;
                    align-items: flex-start;
                    font-size: 0.85rem;
                    flex-direction: row;
                }

                .experience-status {
                    font-size: 0.75rem;
                    font-weight: 500;
                    padding: 0.15rem 0.4rem;
                    background: rgba(167, 129, 255, 0.2);
                    border-radius: 0.25rem;
                    color: var(--accent-purple);
                }
            }
        }

        .experience-description {
            font-size: 0.9rem;
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 0.75rem;

            @media (max-width: 900px) {
                font-size: 0.85rem;
            }
        }

        .technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-bottom: 0.75rem;

            .tech-badge {
                padding: 0.2rem 0.6rem;
                background: rgba(94, 162, 255, 0.15);
                border: 1px solid var(--accent-blue);
                border-radius: 1rem;
                font-size: 0.75rem;
                font-weight: 500;
                color: var(--accent-blue);
                transition: all 0.2s ease;

                @media (max-width: 900px) {
                    font-size: 0.7rem;
                    padding: 0.15rem 0.5rem;
                }

                &:hover {
                    background: rgba(94, 162, 255, 0.25);
                    transform: translateY(-2px);
                }
            }
        }

        .achievements {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.4rem;

            li {
                display: flex;
                align-items: flex-start;
                gap: 0.5rem;
                font-size: 0.85rem;
                line-height: 1.4;
                color: rgba(255, 255, 255, 0.75);

                @media (max-width: 900px) {
                    font-size: 0.8rem;
                }

                .achievement-dot {
                    min-width: 5px;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: var(--accent-blue);
                    margin-top: 0.4rem;
                }
            }
        }
    }
}
</style>
