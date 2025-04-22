<script setup lang="ts">
import MainComponent from './components/MainComponent.vue';

</script>

<template>
  <div id="app">
    <MainComponent />
  </div>
</template>

<style lang="scss">
@import './assets/styles/themes.scss';
@import './assets/styles/transitions.scss';
@import './assets/styles/fonts.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../public/assets/img/layout/Leonardo_Phoenix_09_A_mesmerizing_highresolution_outer_spacein_3.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-y: auto;

  @media (max-width: 900px) {
    align-items: flex-start;
    padding: 1rem 0;
  }
}
</style>