<template>
    <div class="wrapper">
        <div class="home">
            <RouterView />
            <SkillsComponent />
        </div>
        <div class="sidebar">
            <ButtonsComponent />
            <div class="nav">
                <router-link to="/" class="link">Certificaciones</router-link>
                <router-link to="/projects" class="link">Projects</router-link>
                <router-link to="/about" class="link">About</router-link>
            </div>
            <LogoComponent />
        </div>

    </div>
</template>
<script setup lang="ts">
import ButtonsComponent from './ButtonsComponent.vue';
import LogoComponent from './LogoComponent.vue';
import SkillsComponent from './SkillsComponent.vue';
</script>

<style scoped lang="scss">
.wrapper {
    display: grid;
    grid-template-columns: 2.5fr 1.5fr;
    gap: 2rem;
    width: 100%;
    height: 100%;

    .home {
        display: grid;
        grid-template-rows: 4fr 2fr;
        border-radius: 0.3rem;
        gap: 1rem;

    }

    .sidebar {
        background-color: aliceblue;
        border-radius: 0.3rem;
        color: black;
        padding: 3rem;

        .nav {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 4rem 1rem;

            .link {
                color: black;
                font-size: 3rem;
                transition: ease-in-out 0.3s;

                &:hover {
                    transform-origin: left;
                    transform: scale(1.2);
                    color: #3ea078;
                    letter-spacing: 0.4rem;

                }
            }

            a {
                text-decoration: none;
                font-size: 1.5rem;
                transition: ease-in-out 0.5s;

                &:hover {
                    color: #3ea078;
                }
            }
        }
    }

}
</style>