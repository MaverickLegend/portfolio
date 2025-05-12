<template>
    <div class="logo-container">
        <div class="logo"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    height: 100%;
    width: 100%;

    @media (max-width: 1200px) {
        padding: 0;
        height: auto;
    }

    .logo {
        background-image: url('/assets/img/layout/wizard_logo2.webp');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 18rem;
        height: 18rem;

        @media (max-width: 1200px) {
            width: 20rem;
            height: 20rem;
        }
    }
}
</style>