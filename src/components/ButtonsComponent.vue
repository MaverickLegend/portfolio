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
import { ref } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore'
import { useThemeStore } from '../stores/useThemeStore';
import { Icon } from '@iconify/vue/dist/iconify.js';


const store = useLanguageStore();
const isLangChecked = ref(store.btnLang === 'es');
const toggleLanguage = () => {
    const lang = isLangChecked.value ? 'en' : 'es';
    store.handleLanguage(lang);
    isLangChecked.value = !isLangChecked.value;
};

const handleLink = (link: string) => {
    window.open(link, '_blank');
};

const themeStore = useThemeStore();
const toggleTheme = () => {
    themeStore.toggleTheme();
};

interface Icon {
    name: string;
    icon: string;
    link: string;
}

const icons: Icon[] = [
    { name: 'Github', icon: 'github fa-brands fa-github fa-xl', link: 'https://github.com/MaverickLegend' },
    { name: 'Gmail', icon: 'gmail fa-solid fa-square-envelope fa-xl', link: 'mailto:malcolmrojas.f@gmail.com' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin fa-xl', link: 'https://www.linkedin.com/in/malcolmrojas/' },
    { name: 'CV', icon: 'fa-solid fa-file-pdf fa-xl', link: '/assets/files/CV-es.pdf' },
];
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    border-bottom: solid 1px var(--text);
    height: 5rem;

    .icon-container {

        .icon {
            transition: ease-in-out 0.5s;

            a {
                color: var(--accent-purple);
                text-decoration: none;
                padding-right: 2rem;

                i {
                    font-size: 2rem;
                    transition: ease-in-out 0.5s;

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
                    color: var(--accent-blue);
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

            &:hover {
                transform: scale(1.2);
                cursor: pointer;
                color: var(--text);
            }
        }
    }
}
</style>
