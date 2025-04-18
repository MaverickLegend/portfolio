<template>
    <transition name="disolve" mode="out-in">
        <div class="wrapper" :key="setThemeTransition">
            <div class="home">
                <transition name="swipe" mode="out-in">
                    <div class="content" :key="languageKey">
                        <router-view v-slot="{ Component }">
                            <transition name="fade-slide" mode="out-in">
                                <component :is="Component" :key="$route.path" :sectionTitle="sectionTitle" />
                            </transition>
                        </router-view>
                    </div>
                </transition>
            </div>
            <NavbarComponent class="nav" :languageKey="languageKey" />
            <SkillsComponent class="skills" />
        </div>
    </transition>
</template>
<script setup lang="ts">

import NavbarComponent from './NavbarComponent.vue';
import SkillsComponent from './SkillsComponent.vue';
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';
import { useThemeStore } from '../stores/useThemeStore';
import { useRoute } from 'vue-router';

const store = useLanguageStore();
const storeTheme = useThemeStore();
const setThemeTransition = computed(() => storeTheme.theme);
const languageKey = computed(() => store.current.code);
const sections = computed(() => store.sections);
const route = useRoute();
const sectionTitle = computed(() => {
    const section = sections.value.find(section => section.url === route.path);
    return section?.name;
});

</script>

<style scoped lang="scss">
@import "../assets/styles/transitions.scss";
@import "../assets/styles/themes.scss";


.wrapper {
    display: grid;
    grid-template-areas:
        "home nav"
        "skills nav";
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr;
    gap: 2rem;
    width: 100%;
    height: 100%;
    max-width: 1600px;
    max-height: 900px;
    padding: 3rem;

    .home {
        grid-area: home;
        display: flex;
        border-radius: 0.3rem;
        gap: 1rem;
        height: 100%;
        width: 100%;
        overflow: hidden;

        .content {
            padding: 1rem;
            border-radius: 0.3rem;
            place-content: center;
            background-color: var(--primary);
            border: solid 1px var(--shadow);
            box-shadow: var(--shadow);
            width: 100%;
        }
    }

    .nav {
        grid-area: nav;
    }

    .skills {
        grid-area: skills;
    }
}
</style>