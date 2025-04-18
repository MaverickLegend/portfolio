<template>
    <div class="navbar-container">
        <ButtonsComponent class="buttons" />
        <NameComponent class="presentation" />
        <transition name="disolve" mode="out-in">
            <nav class="nav" :key="languageKey">
                <router-link v-for="(section, index) in sections" :key="index" :to=section.url class="link"
                    active-class="active"> {{
                        section.name }}
                </router-link>
            </nav>
        </transition>
        <LogoComponent class="logo" />
    </div>
</template>

<script setup lang="ts">

import ButtonsComponent from './ButtonsComponent.vue';
import LogoComponent from './LogoComponent.vue';
import NameComponent from './PresentationComponent.vue';
import { computed } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore';

const store = useLanguageStore();
const sections = computed(() => store.sections);
const languageKey = computed(() => store.current.code);

</script>

<style scoped lang="scss">
.navbar-container {
    display: grid;
    grid-template-areas:
        "buttons"
        "presentation"
        "nav"
        "logo";
    grid-template-rows: 1fr 3fr 1fr 2fr;
    gap: 2rem;
    border-radius: 0.3rem;

    .nav {
        grid-area: nav;
        display: flex;
        height: 3rem;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        box-shadow: var(--shadow);
        background-color: var(--primary);
        border-radius: 0.3rem;


        .link {
            flex-grow: 1;
            text-align: center;
            font-family: var(--font-main);
            color: var(--text);
            font-size: var(--text-m);
            font-weight: var(--font-medium);
            text-decoration: none;
            transition: color ease-in-out 0.3s, transform ease-in-out 0.3s, letter-spacing ease-in-out 0.3s, background-color ease-in-out 0.3s;

            &:not(:last-child)::after {
                content: "|";
                margin-left: 1rem;
                color: var(--accent-blue);
            }

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

}
</style>