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
    justify-content: center;
    padding-left: 1rem;


    .logo {
        background-image: url('../assets/img/wizard_logo2.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 15rem;
        height: 15rem;
    }

}
</style>