<template>
    <transition name="swipe">
        <div class="contact-container" :key="languageKey">
            <h1 class="section-title">{{ sectionTitle.toUpperCase() }}</h1>
            <h2>{{ contact.title }}</h2>
        </div>
    </transition>

</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useLanguageStore } from '../stores/useLanguageStore';

const store = useLanguageStore();
const languageKey = computed(() => store.current.code);
const contact = computed(() => store.contact);

defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
});

</script>

<style scoped lang="scss">
.contact-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
</style>
