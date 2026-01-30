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
                        v-observe
                    >
                        <ProjectCard
                            :project="project"
                            :view-project="store.content.projects.viewProject"
                            :view-code="store.content.projects.viewCode"
                            :view-demo="store.content.projects.viewDemo"
                            @open-modal="openModal(project.images, $event)"
                        />
                    </swiper-slide>
                </swiper>
            </div>
            
            <ProjectImageModal
                :images="modalImages"
                :is-open="isModalOpen"
                :initial-index="modalInitialIndex"
                @close="closeModal"
            />
        </div>
    </transition>
</template>

<script setup lang="ts">
import { useLanguageStore } from "../../stores/useLanguageStore";
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid, Pagination, Autoplay, Navigation } from "swiper/modules";
import ProjectCard from "./ProjectCard.vue";
import ProjectImageModal from "./ProjectImageModal.vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const store = useLanguageStore();
const languageKey = computed(() => store.current.code);
const projects = computed(() => store.projects);

const modules = [Grid, Pagination, Autoplay, Navigation];

// Modal state
const isModalOpen = ref(false);
const modalImages = ref<string[]>([]);
const modalInitialIndex = ref(0);

const openModal = (images: string[], initialIndex: number) => {
    modalImages.value = images;
    modalInitialIndex.value = initialIndex;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
});
</script>

<style scoped lang="scss">
@import "../../assets/styles/transitions.scss";
@import "../../assets/styles/themes.scss";

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
            padding: 2rem 3rem;

            @media (max-width: 900px) {
                padding-left: 0;
                padding-right: 0;
            }
            
            :deep(.swiper-button-prev),
            :deep(.swiper-button-next) {
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

            :deep(.swiper-pagination-bullet-active) {
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
    }
}
</style>
