<template>
    <div class="project-card">
        <div class="project-image" @click="$emit('openModal', 0)" v-if="project.images && project.images.length > 0">
            <picture>
                <source
                    :srcset="project.images[0]"
                    type="image/webp"
                    loading="lazy"
                />
                <img
                    :src="project.images[0]"
                    :alt="project.title"
                    loading="lazy"
                />
            </picture>
            <div class="image-overlay">
                <Icon icon="mdi:magnify-plus-outline" class="zoom-icon" />
            </div>
        </div>
        <div class="project-content">
            <div class="project-header">
                <h2 class="project-title">
                    {{ project.title }}
                </h2>
                <span
                    v-if="project.status"
                    class="project-status"
                    >{{ project.status }}</span
                >
                <span
                    v-else-if="project.privateProject"
                    class="project-status private"
                    >🔒 Private</span
                >
            </div>
            <p class="project-description">
                {{ project.description }}
            </p>
            <div class="tech-badges">
                <div
                    v-for="tech in project.technologies"
                    :key="tech.title"
                    class="tech-badge"
                >
                    <Icon
                        v-if="tech.icon"
                        :icon="tech.icon"
                        class="tech-icon"
                        :style="{ color: tech.color }"
                    />
                    <span class="tech-name">{{ tech.title }}</span>
                </div>
            </div>
            <div class="project-actions">
                <a
                    v-if="project.url"
                    :href="project.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                >
                    <Icon
                        icon="game-icons:burning-eye"
                        class="icon"
                    ></Icon>
                    {{ viewProject }}
                </a>
                <a
                    v-if="project.repo"
                    :href="project.repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                >
                    <Icon
                        icon="hugeicons:github"
                        class="icon"
                    ></Icon>
                    {{ viewCode }}
                </a>
                <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link demo-link"
                >
                    <Icon
                        icon="mdi:play-circle-outline"
                        class="icon"
                    ></Icon>
                    {{ viewDemo }}
                </a>
                <span
                    v-if="
                        !project.url &&
                        !project.repo &&
                        project.privateProject
                    "
                    class="project-info"
                >
                    <Icon
                        icon="mdi:lock-outline"
                        class="icon"
                    ></Icon>
                    Private Project
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { ProjectItem } from "../../assets/data/data.interfaces";

defineProps<{
    project: ProjectItem;
    viewProject: string;
    viewCode: string;
    viewDemo: string;
}>();

defineEmits<{
    openModal: [imageIndex: number];
}>();
</script>

<style scoped lang="scss">
@import "../../assets/styles/themes.scss";

.project-card {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(var(--glass-blur));
    box-shadow: var(--shadow);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: var(--accent-purple);
    }

    @media (max-width: 1200px) {
        height: auto;
    }

    .project-image {
        height: 50%;
        overflow: hidden;
        border-radius: 0.5rem;
        flex-shrink: 0;
        position: relative;
        cursor: pointer;

        @media (max-width: 900px) {
            display: none;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;

            @media (max-width: 1200px) {
                object-fit: cover;
            }
        }

        .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;

            .zoom-icon {
                font-size: 3rem;
                color: white;
            }
        }

        &:hover {
            img {
                transform: scale(1.05);
            }

            .image-overlay {
                opacity: 1;
            }
        }
    }

    .project-content {
        display: flex;
        height: 50%;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem;
        flex-grow: 1;

        .project-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-wrap: wrap;
            margin-bottom: 0.5rem;

            .project-status {
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                font-size: 0.75rem;
                font-weight: 600;
                background-color: rgba(167, 129, 255, 0.2);
                color: var(--accent-purple, #a781ff);

                &.private {
                    background-color: rgba(255, 193, 7, 0.2);
                    color: #ffc107;
                }
            }
        }

        .project-title {
            font-size: var(--text-2xl);
            font-weight: 700;
            color: var(--accent-blue);
            margin-bottom: 0.5rem;
        }

        .project-description {
            font-size: var(--text-sm);
            line-height: 1.6;
            color: var(--text);
            flex-grow: 1;
            margin-bottom: 1rem;
        }

        .tech-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;

            .tech-badge {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.4rem 0.8rem;
                border-radius: 50px;
                font-size: 0.8rem;
                color: var(--text);
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: var(--accent-teal);
                }

                .tech-icon {
                    font-size: 1.2rem;
                }

                .tech-name {
                    font-weight: 500;
                }
            }
        }

        .project-actions {
            display: flex;
            gap: 1rem;
            margin-top: auto;
            flex-wrap: wrap;

            .project-link {
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
                padding: 0.6rem 1rem;
                background-color: var(--accent-blue);
                color: white;
                border-radius: 0.3rem;
                font-size: var(--text-sm);
                font-weight: 600;
                text-decoration: none;
                transition: background-color 0.2s ease;

                .icon {
                    font-size: 1.5rem;
                }

                &:hover {
                    background-color: var(--accent-teal);
                }

                &.demo-link {
                    background-color: #dc2626;
                    
                    &:hover {
                        background-color: #b91c1c;
                    }
                }
            }

            .project-info {
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
                padding: 0.6rem 1rem;
                background-color: rgba(255, 193, 7, 0.15);
                color: #ffc107;
                border-radius: 0.3rem;
                font-size: var(--text-sm);
                font-weight: 600;
                border: 1px solid rgba(255, 193, 7, 0.3);

                 .icon {
                    font-size: 1.2rem;
                }
            }
        }
    }
}
</style>
