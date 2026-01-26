<template>
    <transition name="swipe">
        <div class="container" :key="languageKey">
            <h1 class="section-title">{{ sectionTitle.toUpperCase() }}</h1>
            <div class="project-container">
                <swiper
                    :slide-to-clicked-slide="true"
                    :slides-per-view="1"
                    :space-between="30"
                    :grid="{ rows: 1 }"
                    :grab-cursor="true"
                     :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }"
                    :breakpoints="{
                        '1200': {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }"
                    :pagination="{ clickable: true }"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide
                        v-for="(project, index) in projects"
                        :key="index"
                        class="project-slide"
                    >
                        <div class="project-card">
                            <div class="project-image">
                                <a
                                    v-if="project.url"
                                    :href="project.url"
                                    target="_blank"
                                >
                                    <picture>
                                        <source
                                            :srcset="project.image"
                                            type="image/webp"
                                            loading="lazy"
                                        />
                                        <img
                                            :src="project.image"
                                            :alt="project.title"
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                                <picture v-else>
                                    <source
                                        :srcset="project.image"
                                        type="image/webp"
                                        loading="lazy"
                                    />
                                    <img
                                        :src="project.image"
                                        :alt="project.title"
                                        loading="lazy"
                                    />
                                </picture>
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
                                        <span class="tech-name">{{
                                            tech.title
                                        }}</span>
                                    </div>
                                </div>
                                <div class="project-actions">
                                    <a
                                        v-if="project.url"
                                        :href="project.url"
                                        target="_blank"
                                        class="project-link"
                                    >
                                        <Icon
                                            icon="game-icons:burning-eye"
                                            class="icon"
                                        ></Icon>
                                        {{
                                            store.content.projects.viewProject
                                        }}
                                    </a>
                                    <a
                                        v-if="project.repo"
                                        :href="project.repo"
                                        target="_blank"
                                        class="project-link"
                                    >
                                        <Icon
                                            icon="hugeicons:github"
                                            class="icon"
                                        ></Icon>
                                        {{ store.content.projects.viewCode }}
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
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { useLanguageStore } from "../stores/useLanguageStore";
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const store = useLanguageStore();
const languageKey = computed(() => store.current.code);
const projects = computed(() => store.projects);

const modules = [Grid, Pagination, Autoplay, Navigation];

defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
});
</script>

<style scoped lang="scss">
@import "../../src/assets/styles/transitions.scss";
@import "../../src/assets/styles/themes.scss";

.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.5rem;
    color: var(--text);
    overflow: hidden;
    width: 100%;
    height: 100%;

    @media (max-width: 1200px) {
        padding: 0.5rem;
        height: auto;
    }

    .project-container {
        width: 100%;
        height: 100%;
        padding: 0 1rem;
        overflow: hidden;

        @media (max-width: 1200px) {
            padding: 0.5rem;
        }

        .mySwiper {
            width: 100%;
            height: 100%;
            padding-bottom: 2rem; // space for pagination
            padding-left: 3rem;
            padding-right: 3rem;

            @media (max-width: 900px) {
                padding-left: 0;
                padding-right: 0;
            }
            
            ::v-deep(.swiper-button-prev),
            ::v-deep(.swiper-button-next) {
                color: var(--accent-purple);
                transition: all 0.3s ease;
                
                &:hover {
                    color: var(--accent-teal);
                    transform: scale(1.1);
                }

                @media (max-width: 900px) {
                    display: none;
                }
            }

            ::v-deep(.swiper-pagination-bullet-active) {
                background-color: var(--accent-purple);
            }
        }

        .swiper-wrapper {
            height: 100%;
            align-items: stretch;
        }

        .project-slide {
            height: auto;
            display: flex;
        }

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

                &:hover img {
                    transform: scale(1.05);
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
    }
}
</style>
