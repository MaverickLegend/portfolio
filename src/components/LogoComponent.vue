<template>
    <div class="logo-container">
        <router-link to="/">
            <div class="logo"></div>
        </router-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.logo-container {
    display: flex;
    align-items: center;
    padding-left: 1rem;


    .logo {
        background-image: url('../../public/assets/files/wizard_logo2.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20rem;
        height: 20rem;
    }
}
</style>