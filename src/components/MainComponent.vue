<template>
    <div class="wrapper">
        <div class="home">
            <transition name="swipe" mode="out-in">
                <div class="content" :key="languageKey">
                    <transition name="fade-slide" mode="in-out">
                        <RouterView />
                    </transition>
                </div>
            </transition>
            <SkillsComponent />
        </div>
        <div class="sidebar">
            <ButtonsComponent />
            <transition name="disolve" mode="out-in">
                <div class="nav" :key="languageKey">
                    <router-link v-for="(section, index) in sections" :key="index" :to=section.url class="link"> {{
                        section.name }}
                    </router-link>
                </div>
            </transition>
            <LogoComponent />
        </div>
    </div>
</template>
<script setup lang="ts">
import ButtonsComponent from './ButtonsComponent.vue';
import LogoComponent from './LogoComponent.vue';
import SkillsComponent from './SkillsComponent.vue';
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';

const store = useLanguageStore();
const language = computed(() => store.language);
const languageKey = computed(() => store.btnLang);
const sections = computed(() => language.value.sections);

</script>

<style scoped lang="scss">
@import "../assets/styles/transitions.scss";

.wrapper {
    display: grid;
    grid-template-columns: 2.5fr 1.5fr;
    gap: 2rem;
    width: 100%;
    height: 100vh;
    padding: 3rem 1rem;

    .home {
        display: grid;
        grid-template-rows: 4fr 2fr;
        border-radius: 0.3rem;
        gap: 1rem;

        .content {
            padding: 1rem;
            border-radius: 0.3rem;
            background-color: #104660;
            color: white;
        }
    }

    .sidebar {
        background-color: aliceblue;
        border-radius: 0.3rem;
        color: black;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .nav {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 4rem 1rem;

            .link {
                color: black;
                font-size: 2rem;
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