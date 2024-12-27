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
    justify-content: center;
    align-items: center;


    .logo {
        background-image: url('../../public/assets/files/wizard_logo2.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 12rem;
        height: 12rem;
    }
}
</style>