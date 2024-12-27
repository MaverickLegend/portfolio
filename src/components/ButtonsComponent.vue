<template>
    <div class="container">
        <div class="icon">
            <a v-for="icon in icons" :key="icon.name" :href="icon.link" target="_blank" :class="icon.name.toLowerCase()"
                @click.prevent="handleLink(icon.link)">
                <i :class="icon.icon"></i>
            </a>
        </div>
        <div class="toggle-switch-container">
            <span class="label">ES</span>
            <div class="toggle-switch">
                <input type="checkbox" id="switch" v-model="isChecked" @change="toggleLanguage" />
                <label for="switch" class="slider"></label>
            </div>
            <span class="label">EN</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore'

const store = useLanguageStore();
const isChecked = ref(store.btnLang === 'en');
const toggleLanguage = () => {
    const lang = isChecked.value ? 'en' : 'es';
    store.handleLanguage(lang);
};

const handleLink = (link: string) => {
    window.open(link, '_blank');
};

interface Icon {
    name: string;
    icon: string;
    link: string;
}

const icons: Icon[] = [
    { name: 'Github', icon: 'github fa-brands fa-github fa-2xl', link: 'https://github.com/MaverickLegend' },
    { name: 'Gmail', icon: 'gmail fa-solid fa-square-envelope fa-2xl', link: 'mailto:malcolmrojas.f@gmail.com' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin fa-2xl', link: 'https://www.linkedin.com/in/malcolmrojas/' },
    { name: 'CV', icon: 'fa-solid fa-file-pdf fa-2xl', link: '../../public/assets/files/CV Cristian Rojas 2024.pdf' },
];
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    padding: 1rem;
    border-radius: 0.5rem;
    z-index: 1;

    .icon {
        color: #3ea078;
        transition: ease-in-out 0.5s;

        a {
            color: #3ea078;
            text-decoration: none;

            i {
                font-size: 2.5rem;
                padding: 0 0.5rem;
                transition: ease-in-out 0.5s;

                &:hover {
                    transform: rotate(360deg);
                }
            }
        }

        .github {
            &:hover {
                color: black;
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
                color: #FF5722;
            }
        }
    }


    .toggle-switch-container {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        transition: ease-in-out 0.3s;

        :hover {
            transform: scale(1.05);
        }

        .label {
            font-size: 1rem;
            color: black;
        }

        .toggle-switch {
            position: relative;
            width: 60px;
            height: 34px;

            input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #3ea078;
                transition: 0.4s;
                border-radius: 34px;

                &:before {
                    position: absolute;
                    content: "";
                    height: 26px;
                    width: 26px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    transition: 0.4s;
                    border-radius: 50%;
                }
            }

            input:checked+.slider {
                background-color: #2196f3;
            }

            input:checked+.slider:before {
                transform: translateX(26px);
            }
        }
    }
}
</style>
