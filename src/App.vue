<script setup lang="ts">
import MainComponent from './components/MainComponent.vue';

</script>

<template>
  <div id="app">
    <main>
      <MainComponent />
    </main>
  </div>
</template>

<style lang="scss">
@import './assets/styles/themes.scss';
@import './assets/styles/transitions.scss';
@import './assets/styles/fonts.scss';

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-image: url('../src/assets/img/Leonardo_Phoenix_09_A_mesmerizing_highresolution_outer_spacein_3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
