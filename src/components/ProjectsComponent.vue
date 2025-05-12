<template>
  <transition name="swipe">
    <div class="projects-container" :key="languageKey">
      <h1 class="section-title">{{ sectionTitle.toUpperCase() }}</h1>
      <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="project in projects" :key="project.title">
          <div class="project-card">
            <div class="project-image">
              <a :href="project.url" target="_blank">
                <picture>
                  <source :srcset="project.image" type="image/webp" loading="lazy" />
                  <img :src="project.image" :alt="project.title" loading="lazy" />
                </picture>
              </a>
            </div>
            <div class="project-content">
              <h2 class="project-title">{{ project.title }}</h2>
              <p class="project-description">{{ project.description }}</p>
              <div class="tech-badges">
                <div v-for="tech in project.technologies" :key="tech.title" class="tech-badge"
                  :style="{ backgroundColor: tech.color + '50' }">
                  <Icon v-if="tech.icon" :icon="tech.icon" class="tech-icon" />
                  <span class="tech-name">{{ tech.title }}</span>
                </div>
              </div>
              <div class="project-actions">
                <a :href="project.url" target="_blank" class="project-link">
                  <Icon icon="game-icons:burning-eye" class="icon"></Icon>
                  {{ store.content.projects.viewProject }}
                </a>
                <a :href="project.repo" v-if="project.repo" target="_blank" class="project-link">
                  <Icon icon="hugeicons:github" class="icon"></Icon>
                  {{ store.content.projects.viewCode }}
                </a>
              </div>
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
import { Icon } from '@iconify/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const store = useLanguageStore();
const languageKey = computed(() => store.current.code);
const projects = computed(() => store.projects);
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

.projects-container {
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

  .mySwiper {
    width: 100%;
    height: 100%;

    @media (max-width: 1200px) {
      height: auto;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;


      @media (max-width: 1200px) {
        height: auto;
      }

      .project-card {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 1.5rem;
        width: 100%;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

        @media (max-width: 1200px) {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          height: auto;
        }

        .project-image {
          height: 100%;
          overflow: hidden;
          border-radius: 0.5rem 0 0 0.5rem;

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
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
          background-color: var(--glass-bg);
          border-radius: 0 0.5rem 0.5rem 0;
          gap: 1rem;

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
          }

          .tech-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.5rem;

            .tech-badge {
              display: flex;
              align-items: center;
              gap: 0.3rem;
              padding: 0.4rem 0.7rem;
              border-radius: 2rem;
              font-size: var(--text-sm);
              font-weight: 200;
              transition: transform 0.2s ease;
              color: var(--text);

              &:hover {
                transform: translateY(-2px);
              }
            }
          }

          .project-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;

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

              &:visited {
                color: white;
              }
            }
          }
        }
      }
    }
  }
}
</style>