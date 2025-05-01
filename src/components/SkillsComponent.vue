<template>
    <div class="skills-container">
        <transition name="disolve" mode="out-in">
            <div class="title" :key="languageKey">
                <h1 class="section-title">{{ skillsTitle.toUpperCase() }}</h1>
            </div>
        </transition>
        <div class="skills">
            <div v-for="skill in skills" :key="skill.name" :title="skill.name">
                <Icon :icon="skill.icon" class="skill"></Icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';


interface Skill {
    name: string;
    color: string;
    icon: string;
}

const store = useLanguageStore();
const skillsTitle = computed(() => store.skills.title);
const languageKey = computed(() => store.current.code);

const skills: Skill[] = [
    { name: 'JavaScript', color: '#F7DF1E', icon: 'skill-icons:javascript' },
    { name: 'TypeScript', color: '#3178C6', icon: 'skill-icons:typescript' },
    { name: 'Vue.js', color: '#42B883', icon: 'skill-icons:vuejs-dark' },
    { name: 'React', color: '#61DAFB', icon: 'skill-icons:react-dark' },
    { name: 'Node.js', color: '#339933', icon: 'skill-icons:nodejs-dark' },
    { name: 'Express', color: '#000000', icon: 'skill-icons:expressjs-dark' },
    { name: 'NestJS', color: '#E0234E', icon: 'skill-icons:nestjs-dark' },
    { name: 'HTML', color: '#E34F26', icon: 'skill-icons:html' },
    { name: 'CSS', color: '#1572B6', icon: 'skill-icons:css' },
    { name: 'Sass', color: '#CC6699', icon: 'skill-icons:sass' },
    { name: 'Tailwind CSS', color: '#38B2AC', icon: 'skill-icons:tailwindcss-dark' },
    { name: 'Bootstrap', color: '#563D7C', icon: 'skill-icons:bootstrap' },
    { name: 'PostgreSQL', color: '#336791', icon: 'skill-icons:postgresql-dark' },
    { name: 'MySQL', color: '#4479A1', icon: 'skill-icons:mysql-dark' },
    { name: 'MongoDB', color: '#47A248', icon: 'skill-icons:mongodb' },
    { name: 'Git', color: '#F05032', icon: 'skill-icons:git' },
    { name: 'Docker', color: '#2496ED', icon: 'skill-icons:docker' },
    { name: 'Postman', color: '#FF6C37', icon: 'skill-icons:postman' },
    { name: 'Jest', color: '#C21325', icon: 'skill-icons:jest' },
    { name: 'C#', color: '#68217a', icon: 'skill-icons:cs' },
    { name: 'Linux', color: '#FCC624', icon: 'skill-icons:linux-dark' },
    { name: 'Pinia', color: '#EAB308', icon: 'skill-icons:pinia-dark' },

];
</script>

<style scoped lang="scss">
.skills-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
    background-color: var(--primary);
    border-radius: 0.3rem;

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
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;

        @media (max-width: 900px) {
            width: 90%;
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