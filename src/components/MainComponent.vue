<template>
    <transition name="disolve" mode="out-in">
        <div class="wrapper" :key="setThemeTransition">
            <div class="home">
                <transition name="swipe" mode="out-in">
                    <div class="content" :key="languageKey">
                        <router-view v-slot="{ Component }">
                            <transition name="fade-slide" mode="out-in">
                                <component :is="Component" :key="$route.path" />
                            </transition>
                        </router-view>
                        <!-- <transition name="fade-slide" mode="in-out">
                            <RouterView />
                        </transition> -->
                    </div>
                </transition>
                <SkillsComponent />
            </div>
            <aside class="sidebar">
                <ButtonsComponent />
                <transition name="disolve" mode="out-in">
                    <nav class="nav" :key="languageKey">
                        <router-link v-for="(section, index) in sections" :key="index" :to=section.url class="link"
                            active-class="active"> {{
                                section.name }}
                        </router-link>
                    </nav>
                </transition>
                <LogoComponent />
            </aside>
        </div>
    </transition>
</template>
<script setup lang="ts">
import ButtonsComponent from './ButtonsComponent.vue';
import LogoComponent from './LogoComponent.vue';
import SkillsComponent from './SkillsComponent.vue';
import { useLanguageStore } from '../stores/useLanguageStore';
import { computed } from 'vue';
import { useThemeStore } from '../stores/useThemeStore';

const store = useLanguageStore();
const storeTheme = useThemeStore();
const setThemeTransition = computed(() => storeTheme.theme);
const language = computed(() => store.language);
const languageKey = computed(() => store.btnLang);
const sections = computed(() => language.value.sections);

</script>

<style scoped lang="scss">
@import "../assets/styles/transitions.scss";
@import "../assets/styles/themes.scss";


.wrapper {
    display: grid;
    grid-template-columns: 2.5fr 1.5fr;
    gap: 2rem;
    width: 100%;
    height: 100vh;
    padding: 3rem;

    .home {
        display: grid;
        grid-template-rows: 4fr 2fr;
        border-radius: 0.3rem;
        gap: 1rem;

        .content {
            padding: 1rem;
            border-radius: 0.3rem;
            place-content: center;
            background-color: var(--primary);
            border: solid 1px var(--shadow);
            box-shadow: var(--shadow);
        }
    }

    .sidebar {
        border-radius: 0.3rem;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: var(--shadow);
        background-color: var(--primary);

        .nav {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 4rem 1rem;

            .link {
                font-family: var(--font-main);
                color: var(--text);
                font-size: var(--text-2xl);
                font-weight: var(--font-medium);
                text-decoration: none;
                transition: color ease-in-out 0.3s, transform ease-in-out 0.3s, letter-spacing ease-in-out 0.3s;

                &:hover {
                    transform-origin: left;
                    color: var(--accent-teal);
                    letter-spacing: var(--tracking-wider);
                }

                &.active {
                    color: var(--accent-teal);
                    font-weight: var(--font-semibold);
                    letter-spacing: var(--tracking-wisder);
                }
            }
        }
    }
}
</style>