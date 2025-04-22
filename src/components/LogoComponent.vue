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

    @media (max-width: 900px) {
        padding: 0;
        height: auto;
        /* Ajusta la altura automáticamente */
    }

    .logo {
        background-image: url('../../public/assets/img/layout/wizard_logo2.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 15rem;
        height: 15rem;

        @media (max-width: 900px) {
            width: 10rem;
            height: 10rem;
        }
    }
}
</style>