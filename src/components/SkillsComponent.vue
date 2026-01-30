<template>
    <div class="skills-container">
        <transition name="disolve" mode="out-in">
            <div class="title" :key="languageKey">
                <h1 class="section-title">{{ skillsTitle.toUpperCase() }}</h1>
            </div>
        </transition>
        <div class="skills" v-observe>
            <div v-for="skill in skills" :key="skill.title" :title="skill.title">
                <Icon :icon="skill.icon" class="skill"></Icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';

const store = useLanguageStore();
const skillsTitle = computed(() => store.skills.title);
const skills = computed(() => store.skills.items);
const languageKey = computed(() => store.current.code);
</script>

<style scoped lang="scss">
.skills-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--primary);
    border-radius: 0.3rem;
    justify-content: center;

    @media (max-width: 900px) {
        padding: 0.5rem;
    }

    .title {
        padding-left: 1rem;
    }

    .skills {
        display: flex;
        width: 100%;
        padding: 1rem;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;

        @media (max-width: 900px) {
            gap: 0.5rem;
        }

        .skill {
            width: 3rem;
            height: 3rem;
            transition: transform 0.4s ease-in-out;

            @media (max-width: 900px) {
                width: 2.5rem;
                /* Iconos ligeramente más pequeños en móvil */
                height: 2.5rem;
            }

            &:hover {
                transform: scale(1.2);
            }
        }
    }
}
</style>