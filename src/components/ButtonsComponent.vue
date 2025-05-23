<template>
    <div class="container">
        <div class="icon-container">
            <div class="icon">
                <a v-for="icon in icons" :key="icon.name" :href="icon.link" target="_blank"
                    :class="icon.name.toLowerCase()" @click.prevent="handleLink(icon.link)">
                    <i :class="icon.icon"></i>
                </a>
            </div>
        </div>
        <div class="toggle-container">
            <div class="theme-btn">
                <div class="toggle-btn" @click="toggleTheme">
                    <Icon icon="stash:moon-solid" v-if="themeStore.theme === 'light'" />
                    <Icon icon="stash:sun-solid" v-else />
                </div>
            </div>
            <div class="lang-btn">
                <div class="toggle-btn" @click="toggleLanguage">
                    <Icon icon="openmoji:flag-united-kingdom" v-if="isLangChecked" />
                    <Icon icon="openmoji:flag-spain" v-else />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore'
import { useThemeStore } from '../stores/useThemeStore';
import { Icon } from '@iconify/vue/dist/iconify.js';


const store = useLanguageStore();

const isLangChecked = ref(store.current.code === 'es');

const toggleLanguage = () => {
    const lang = isLangChecked.value ? 'en' : 'es';
    store.setLanguage(lang);
    isLangChecked.value = !isLangChecked.value;
};

const handleLink = (link: string) => {
    window.open(link, '_blank');
};

const themeStore = useThemeStore();
const toggleTheme = () => {
    themeStore.toggleTheme();
};

const cv = computed(() => store.cv)
interface Icon {
    name: string;
    icon: string;
    link: string;
}

const icons = computed<Icon[]>(() => [
    { name: 'Github', icon: 'github fa-brands fa-github fa-xl', link: 'https://github.com/MaverickLegend' },
    // { name: 'Gmail', icon: 'gmail fa-solid fa-square-envelope fa-xl', link: 'mailto:malcolmrojas.f@gmail.com' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin fa-xl', link: 'https://www.linkedin.com/in/malcolmrojas/' },
    { name: 'CV', icon: 'fa-solid fa-file-pdf fa-xl', link: cv.value },
]);
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    height: 5rem;
    background-color: var(--primary);
    box-shadow: var(--shadow);
    border-radius: 0.3rem;
    height: 100%;

    @media (max-width: 900px) {
        padding: 0.5rem;
        flex-direction: row;
        justify-content: space-between;
        height: auto;
        min-height: 3rem;
    }

    .icon-container {
        .icon {
            transition: ease-in-out 0.5s;
            display: flex;
            align-items: center;

            @media (max-width: 900px) {
                justify-content: flex-start;
            }

            a {
                color: var(--accent-purple);
                text-decoration: none;
                padding-right: 2rem;

                @media (max-width: 900px) {
                    padding-right: 1rem;
                }

                i {
                    font-size: 2rem;
                    transition: ease-in-out 0.5s;

                    @media (max-width: 900px) {
                        font-size: 1.5rem;
                    }

                    &:hover {
                        transform: rotate(360deg);
                        scale: 1.2;
                    }
                }
            }

            .github {
                &:hover {
                    color: var(--text);
                }
            }

            .gmail {
                &:hover {
                    color: #C71610;
                }
            }

            .linkedin {
                &:hover {
                    color: #0A66C2;
                }
            }

            .cv {
                &:hover {
                    color: #da140d;
                }
            }
        }
    }

    .toggle-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .toggle-btn {
            color: var(--accent-purple);
            font-size: 2rem;
            transition: ease-in-out 0.5s;
            padding-right: 1rem;

            @media (max-width: 900px) {
                font-size: 1.5rem;
                padding-right: 0.5rem;
            }

            &:hover {
                transform: scale(1.2);
                cursor: pointer;
                color: var(--text);
            }
        }
    }
}
</style>
