<template>
    <div class="navbar-container">
        <ButtonsComponent class="buttons" />
        <NameComponent class="presentation" />
        <LogoComponent class="logo" />
        <transition name="disolve" mode="out-in">
            <nav class="nav" :key="languageKey">
                <router-link v-for="(section, index) in sections" :key="index" :to=section.url class="link"
                    active-class="active"> {{
                        section.name }}
                </router-link>
            </nav>
        </transition>
        <SkillsComponent class="skill" />
    </div>
</template>

<script setup lang="ts">

import ButtonsComponent from './ButtonsComponent.vue';
import NameComponent from './PresentationComponent.vue';
import { computed } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore';
import SkillsComponent from './SkillsComponent.vue';
import LogoComponent from './LogoComponent.vue';
const store = useLanguageStore();
const sections = computed(() => store.sections);
const languageKey = computed(() => store.current.code);

</script>

<style scoped lang="scss">
.navbar-container {
    display: grid;
    grid-template-areas:
        "buttons buttons"
        "presentation logo"
        "nav nav"
        "skill skill";
    grid-template-rows: 1fr 3fr 0.5fr 4fr;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    border-radius: 0.3rem;
    height: 100%;
    width: 100%;

    @media (max-width: 1200px) {
        grid-template-rows: auto auto auto auto;
        gap: 1rem;
    }

    .nav {
        grid-area: nav;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        place-content: center;
        height: 3rem;
        padding: 1rem;
        box-shadow: var(--shadow);
        background-color: var(--primary);
        border-radius: 0.3rem;

        @media (max-width: 1400px) {
            padding: 0.5rem;
            height: auto;
        }

        @media (max-width: 900px) {
            padding: 1rem 0;
            grid-template-columns: 1fr;
        }

        .link {
            flex-grow: 1;
            text-align: center;
            font-family: var(--font-main);
            color: var(--text);
            font-size: var(--text-m);
            font-weight: var(--font-medium);
            text-decoration: none;
            transition: color ease-in-out 0.3s, transform ease-in-out 0.3s, letter-spacing ease-in-out 0.3s, background-color ease-in-out 0.3s;

            @media (max-width: 1400px) {
                width: 100%;
                font-size: var(--text-sm);

                &:not(:last-child)::after {
                    display: none;
                }
            }

            @media (max-width: 900px) {
                padding: 0.5rem 0;
                width: 100%;
                font-size: var(--text-sm);

                &:not(:last-child)::after {
                    display: none;
                }

            }

            //&:not(:last-child)::after {
            //content: "|";
            //margin: 2rem;
            //color: var(--accent-blue);
            //}

            &:hover {
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

    .logo {
        grid-area: logo;
    }

    .buttons {
        grid-area: buttons;
    }

    .presentation {
        grid-area: presentation;
    }

    .skill {
        grid-area: skill;
    }
}
</style>