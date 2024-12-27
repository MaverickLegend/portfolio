<template>
    <div class="skills-container">
        <div class="skills">
            <div v-for="skill in skills" :key="skill.name" :title="skill.name">
                <Icon :icon="skill.icon" class="skill"></Icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Skill {
    name: string;
    color: string;
    icon: string;
}

const skills: Skill[] = [
    { name: 'JavaScript', color: '#F7DF1E', icon: 'skill-icons:javascript' },
    { name: 'TypeScript', color: '#3178C6', icon: 'skill-icons:typescript' },
    { name: 'Vue.js', color: '#42B883', icon: 'skill-icons:vuejs-dark' },
    { name: 'React', color: '#61DAFB', icon: 'skill-icons:react-dark' },
    { name: 'Node.js', color: '#339933', icon: 'skill-icons:nodejs-dark' },
    { name: 'Express', color: '#000000', icon: 'skill-icons:expressjs-dark' },
    { name: 'HTML', color: '#E34F26', icon: 'skill-icons:html' },
    { name: 'CSS', color: '#1572B6', icon: 'skill-icons:css' },
    { name: 'Sass', color: '#CC6699', icon: 'skill-icons:sass' },
    { name: 'PostgreSQL', color: '#336791', icon: 'skill-icons:postgresql-dark' },
    { name: 'MongoDB', color: '#47A248', icon: 'skill-icons:mongodb' },
    { name: 'MySQL', color: '#4479A1', icon: 'skill-icons:mysql-dark' },
    { name: 'NestJS', color: '#E0234E', icon: 'skill-icons:nestjs-dark' },
    { name: 'Git', color: '#F05032', icon: 'skill-icons:git' },
    { name: 'Docker', color: '#2496ED', icon: 'skill-icons:docker' },
    { name: 'Postman', color: '#FF6C37', icon: 'skill-icons:postman' },
    { name: 'Jest', color: '#C21325', icon: 'skill-icons:jest' },
    { name: 'C#', color: '#68217a', icon: 'devicon:csharp' },
];
</script>

<style scoped lang="scss">
.skills-container {
    display: flex;
    justify-content: center;
    padding: 1rem;

    .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;

        .skill {
            width: 3rem;
            height: 3rem;
            transition: transform 0.4s ease-in-out;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
}
</style>