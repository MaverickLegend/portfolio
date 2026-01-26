<template>
    <transition name="fade">
        <div class="experience-container" :key="languageKey">
            <h1 class="section-title">{{ sectionTitle.toUpperCase() }}</h1>
            <div class="timeline">
                <ExperienceItem
                    v-for="(item, index) in experience.items"
                    :key="index"
                    :item="item"
                />
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLanguageStore } from "../stores/useLanguageStore";
import ExperienceItem from "./ExperienceItem.vue";

const store = useLanguageStore();
const experience = computed(() => store.experience);
const languageKey = computed(() => store.current.code);

defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/themes.scss";

.experience-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // gap: 0.5rem;
    padding-bottom: 0.5rem;
    overflow-y: auto; // Keep auto in case content really exceeds 100vh on small screens

    .timeline {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 0.5rem 0.5rem 0.5rem 1.5rem;
        position: relative;
        max-width: 800px; // Limit width for better readability on large screens

        @media (max-width: 900px) {
            padding: 0.5rem 0.5rem 0.5rem 1rem;
            gap: 1rem;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0.5rem;
            top: 0.5rem;
            bottom: 0.5rem;
            width: 2px;
            background: linear-gradient(
                to bottom,
                var(--accent-purple),
                var(--accent-blue)
            );

            @media (max-width: 900px) {
                left: 0.25rem;
            }
        }
    }
}
</style>
