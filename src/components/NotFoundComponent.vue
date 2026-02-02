<template>
    <div class="not-found-container">
        <div class="content-wrapper">
            <div class="error-card">
                <div class="error-icon">
                    <Icon icon="mdi:space-invaders" class="invader" />
                </div>
                <h1 class="error-code">404</h1>
                <h2 class="error-title">{{ title }}</h2>
                <p class="error-message">{{ message }}</p>
                
                <div class="action-buttons">
                    <router-link to="/" class="btn btn-primary">
                        <Icon icon="mdi:home" class="icon" />
                        {{ homeButton }}
                    </router-link>
                    <router-link to="/projects" class="btn btn-secondary">
                        <Icon icon="mdi:rocket-launch" class="icon" />
                        {{ projectsButton }}
                    </router-link>
                </div>

                <div class="suggestions">
                    <p class="suggestions-title">{{ suggestionsTitle }}</p>
                    <div class="links">
                        <router-link v-for="section in sections" :key="section.id" :to="section.url" class="link">
                            {{ section.name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useLanguageStore } from '../stores/useLanguageStore';

const store = useLanguageStore();
const sections = computed(() => store.sections);
const isSpanish = computed(() => store.current.code === 'es');

const title = computed(() => 
    isSpanish.value ? 'Página no encontrada' : 'Page not found'
);

const message = computed(() => 
    isSpanish.value 
        ? 'Lo sentimos, la página que buscas no existe o fue movida a otra dimensión.' 
        : 'Sorry, the page you are looking for does not exist or was moved to another dimension.'
);

const homeButton = computed(() => 
    isSpanish.value ? 'Ir al inicio' : 'Go home'
);

const projectsButton = computed(() => 
    isSpanish.value ? 'Ver proyectos' : 'View projects'
);

const suggestionsTitle = computed(() => 
    isSpanish.value ? 'O visita alguna de estas secciones:' : 'Or visit any of these sections:'
);
</script>

<style scoped lang="scss">
@import '../assets/styles/themes.scss';

.not-found-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    width: 100%;
    padding: 2rem;
    color: var(--text);

    @media (max-width: 900px) {
        padding: 1rem;
    }

    .content-wrapper {
        width: 100%;
        max-width: 600px;

        .error-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 3rem 2rem;
            border-radius: 1rem;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            backdrop-filter: blur(var(--glass-blur));
            box-shadow: var(--shadow);
            text-align: center;

            @media (max-width: 900px) {
                padding: 2rem 1.5rem;
                gap: 1rem;
            }

            .error-icon {
                font-size: 5rem;
                color: var(--accent-purple);
                animation: float 3s ease-in-out infinite;

                @media (max-width: 900px) {
                    font-size: 4rem;
                }

                .invader {
                    filter: drop-shadow(0 0 20px var(--accent-purple));
                }
            }

            .error-code {
                font-size: 6rem;
                font-weight: 900;
                background: linear-gradient(
                    135deg,
                    var(--accent-purple) 0%,
                    var(--accent-blue) 50%,
                    var(--accent-teal) 100%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin: 0;
                line-height: 1;

                @media (max-width: 900px) {
                    font-size: 4rem;
                }
            }

            .error-title {
                font-size: var(--text-2xl);
                font-weight: 700;
                color: var(--accent-blue);
                margin: 0;

                @media (max-width: 900px) {
                    font-size: var(--text-xl);
                }
            }

            .error-message {
                font-size: var(--text);
                color: var(--text);
                opacity: 0.9;
                max-width: 500px;
                line-height: 1.6;
                margin: 0;

                @media (max-width: 900px) {
                    font-size: var(--text-sm);
                }
            }

            .action-buttons {
                display: flex;
                gap: 1rem;
                margin-top: 1rem;
                flex-wrap: wrap;
                justify-content: center;

                @media (max-width: 900px) {
                    flex-direction: column;
                    width: 100%;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.5rem;
                    border-radius: 0.5rem;
                    font-size: var(--text);
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: none;
                    cursor: pointer;

                    @media (max-width: 900px) {
                        width: 100%;
                        justify-content: center;
                        padding: 1rem;
                    }

                    .icon {
                        font-size: 1.5rem;
                    }

                    &.btn-primary {
                        background: var(--accent-blue);
                        color: white;

                        &:hover {
                            background: var(--accent-teal);
                            transform: translateY(-2px);
                            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                        }
                    }

                    &.btn-secondary {
                        background: rgba(167, 129, 255, 0.2);
                        color: var(--accent-purple);
                        border: 2px solid var(--accent-purple);

                        &:hover {
                            background: var(--accent-purple);
                            color: white;
                            transform: translateY(-2px);
                            box-shadow: 0 10px 20px rgba(167, 129, 255, 0.3);
                        }
                    }
                }
            }

            .suggestions {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-top: 2rem;
                width: 100%;
                padding-top: 2rem;
                border-top: 1px solid var(--glass-border);

                @media (max-width: 900px) {
                    margin-top: 1rem;
                    padding-top: 1rem;
                }

                .suggestions-title {
                    font-size: var(--text-sm);
                    color: var(--text);
                    opacity: 0.8;
                    margin: 0;
                }

                .links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    justify-content: center;

                    .link {
                        padding: 0.5rem 1rem;
                        border-radius: 0.375rem;
                        font-size: var(--text-sm);
                        font-weight: 500;
                        text-decoration: none;
                        color: var(--text);
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid var(--glass-border);
                        transition: all 0.3s ease;

                        &:hover {
                            background: rgba(255, 255, 255, 0.1);
                            border-color: var(--accent-teal);
                            color: var(--accent-teal);
                            transform: translateY(-2px);
                        }
                    }
                }
            }
        }
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}
</style>
