<template>
    <Transition name="modal">
        <div v-if="isOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <button class="close-button" @click="closeModal">
                    <Icon icon="mdi:close" />
                </button>
                <swiper
                    :slides-per-view="1"
                    :space-between="30"
                    :navigation="true"
                    :pagination="{ clickable: true }"
                    :modules="modules"
                    :initial-slide="initialIndex"
                    class="image-swiper"
                >
                    <swiper-slide
                        v-for="(image, index) in images"
                        :key="index"
                        class="image-slide"
                    >
                        <img :src="image" :alt="`Image ${index + 1}`" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { watch, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps<{
    images: string[];
    isOpen: boolean;
    initialIndex: number;
}>();

const emit = defineEmits<{
    close: [];
}>();

const modules = [Navigation, Pagination];

const closeModal = () => {
    emit("close");
};

const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && props.isOpen) {
        closeModal();
    }
};

watch(
    () => props.isOpen,
    (newValue) => {
        if (newValue) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
);

onMounted(() => {
    document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
    document.body.style.overflow = "";
});
</script>

<style scoped lang="scss">
@import "../../assets/styles/themes.scss";

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
}

.modal-content {
    position: relative;
    width: 90%;
    max-width: 1200px;
    max-height: 90vh;
    background: var(--glass-bg);
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid var(--glass-border);

    @media (max-width: 768px) {
        width: 95%;
        padding: 1rem;
    }
}

.close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;

    @media (max-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
        top: 0.5rem;
        right: 0.5rem;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(90deg);
    }

    svg {
        font-size: 2rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
}

.image-swiper {
    width: 100%;
    height: 70vh;

    @media (max-width: 768px) {
        height: 60vh;
    }

    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
        color: var(--accent-purple);
        background: rgba(0, 0, 0, 0.5);
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        
        &:after {
            font-size: 1.5rem;
        }

        &:hover {
            background: rgba(0, 0, 0, 0.7);
            color: var(--accent-teal);
        }

        @media (max-width: 768px) {
            width: 2rem;
            height: 2rem;
            
            &:after {
                font-size: 1rem;
            }
        }
    }

    :deep(.swiper-pagination-bullet) {
        background: rgba(255, 255, 255, 0.5);
    }
    
    :deep(.swiper-pagination-bullet-active) {
        background: var(--accent-purple);
    }
}

.image-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 0.5rem;
    }
}

// Modal transitions
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
    transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
    transform: scale(0.9);
}
</style>
