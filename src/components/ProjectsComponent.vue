<template>
  <transition name="swipe">
    <div class="projects-container" :key="languageKey">
      <h1 class="heading-1">{{ sectionTitle.toUpperCase() }}</h1>
      <swiper :pagination="{ type: 'fraction' }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="project in projects" :key="project.title">
          <div class="project-card">
            <div class="project-image">
              <a :href="project.url" target="_blank">
                <img :src="project.image" :alt="project.title" />
              </a>
            </div>
            <div class="project-content">
              <h2 class="project-title">{{ project.title }}</h2>


              <p class="project-description">{{ project.description }}</p>
              <div class="tech-badges">
                <div v-for="tech in project.technologies" :key="tech.title" class="tech-badge"
                  :style="{ backgroundColor: tech.color + '30', color: tech.color }">
                  <Icon v-if="tech.icon" :icon="tech.icon" class="tech-icon" />
                  <span class="tech-name">{{ tech.title }}</span>
                </div>
              </div>
              <div class="project-actions">
                <a :href="project.url" target="_blank" class="project-link">
                  <i class="iconify" data-icon="mdi:eye"></i>
                  {{ store.content.projects.viewProject }}
                </a>
                <a :href="project.repo" v-if="project.repo" target="_blank" class="project-link">
                  <i class="iconify" data-icon="mdi:github"></i>
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

<style scoped>
@import '../../src/assets/styles/transitions.scss';
@import '../../src/assets/styles/themes.scss';

.projects-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  color: var(--text);
  overflow: hidden;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
}

.project-card {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 22rem;
  overflow: hidden;
  border-radius: 0.5rem 0 0 0.5rem;
  position: relative;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.5));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image:hover::after {
  opacity: 1;
}

.project-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-image:hover img {
  transform: scale(1.05);
}

.project-content {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  background-color: var(--glass-bg);
  border-radius: 0 0.5rem 0.5rem 0;
}

.project-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 0.5rem;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  border-radius: 2rem;
  font-size: var(--text-xs);
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tech-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
}

.tech-name {
  white-space: nowrap;
}

.project-description {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--text);
  flex-grow: 1;
}

.project-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background-color: var(--accent-blue);
  color: white;
  border-radius: 0.3rem;
  font-size: var(--text-sm);
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.project-link:hover {
  background-color: var(--accent-teal);
}

/* Responsive styles */
@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 15rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .project-content {
    border-radius: 0 0 0.5rem 0.5rem;
  }
}
</style>