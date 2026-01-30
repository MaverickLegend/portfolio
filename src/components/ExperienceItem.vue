<template>
    <div class="timeline-item">
        <div class="timeline-content">
            <div class="experience-header">
                <div class="experience-title-section">
                    <h3 class="experience-position">{{ item.position }}</h3>
                    <div class="experience-meta">
                        <span class="experience-company">{{ item.company }}</span>
                        <!-- <span class="experience-separator">•</span> -->
                        <!-- <span class="experience-type">{{ item.type }}</span> -->
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
    gap: 0.75rem;

    @media (max-width: 900px) {
        gap: 0.5rem;
    }

    .timeline-content {
        flex: 1;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: 0.35rem; // Reduced radius
        padding: 0.75rem; // Reduced padding
        border-left: 2px solid var(--accent-purple);
        transition: all 0.2s ease;

        @media (max-width: 900px) {
            padding: 0.5rem;
        }

        &:hover {
            background: rgba(255, 255, 255, 0.05);
            border-left-color: var(--accent-blue);
            transform: translateX(2px);
        }

        .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: center; // Align center
            margin-bottom: 0.35rem; // Reduced margin
            gap: 0.5rem;

            @media (max-width: 900px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 0;
            }

            .experience-title-section {
                flex: 1;
                display: flex; // Flex title and meta
                align-items: baseline;
                gap: 0.5rem;
                flex-wrap: wrap;

                @media (max-width: 900px) {
                    flex-direction: column;
                    gap: 0;
                }

                .experience-position {
                    font-size: 1rem; // Smaller font
                    font-weight: 600;
                    color: var(--accent-purple);
                    margin: 0;

                    @media (max-width: 900px) {
                        font-size: 0.95rem;
                    }
                }

                .experience-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.8rem; // Smaller meta
                    color: rgba(255, 255, 255, 0.6);

                    @media (max-width: 900px) {
                        font-size: 0.75rem;
                    }

                    .experience-company {
                        font-weight: 500;
                        color: rgba(255, 255, 255, 0.8);
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
                display: flex;
                flex-direction: column; 
                font-size: 0.8rem;
                font-weight: 600;
                color: var(--accent-blue);
                white-space: nowrap;
                display: flex;
                align-items: center;
                gap: 0.5rem;

                @media (max-width: 900px) {
                    font-size: 0.75rem;
                }

                .experience-status {
                    margin-left: auto;
                    font-size: 0.7rem; // Tiny status
                    font-weight: 500;
                    padding: 0.1rem 0.3rem;
                    background: rgba(167, 129, 255, 0.15);
                    border-radius: 0.2rem;
                    color: var(--accent-purple);
                }
            }
        }

        .experience-description {
            font-size: 0.85rem;
            line-height: 1.4;
            color: rgba(255, 255, 255, 0.75);
            margin-bottom: 0.5rem; // Reduced margin

            @media (max-width: 900px) {
                font-size: 0.8rem;
                margin-bottom: 0.4rem;
            }
        }

        .technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 0.3rem; // Tighter gap
            margin-bottom: 0.5rem;

            .tech-badge {
                padding: 0.1rem 0.4rem; // Compact badge
                background: rgba(94, 162, 255, 0.1);
                border: 1px solid rgba(94, 162, 255, 0.3); // Subtler border
                border-radius: 0.8rem;
                font-size: 0.7rem; // Tiny font
                font-weight: 500;
                color: var(--accent-blue);
                transition: all 0.2s ease;

                &:hover {
                    background: rgba(94, 162, 255, 0.2);
                    transform: translateY(-1px);
                }
            }
        }

        .achievements {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.25rem; // Tighter list

            li {
                display: flex;
                align-items: baseline;
                gap: 0.4rem;
                font-size: 0.8rem;
                line-height: 1.3;
                color: rgba(255, 255, 255, 0.65);

                .achievement-dot {
                    min-width: 4px;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: var(--accent-blue);
                    opacity: 0.7;
                    transform: translateY(-2px); // visual alignment
                }
            }
        }
    }
}
</style>
