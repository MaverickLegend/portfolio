<script setup lang="ts">
import MainComponent from './components/MainComponent.vue';
import { ref, onMounted } from 'vue';

const showIntro = ref(true);
const logoOpacity = ref(0);

onMounted(() => {
  // Aparecer gradualmente el logo
  setTimeout(() => {
    logoOpacity.value = 1;
  }, 100);

  // Desvanecer y mostrar el contenido principal
  setTimeout(() => {
    showIntro.value = false;
  }, 2000);
});
</script>

<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <div v-if="showIntro" class="intro-screen">
        <div class="logo" :style="{ opacity: logoOpacity }">
          <h1>MaverickLegend</h1>
          <!-- <h1>Portfolio</h1> -->
        </div>
      </div>
    </transition>

    <MainComponent v-if="!showIntro" />
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
  font-family: 'Arial', sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/assets/img/layout/Leonardo_Phoenix_09_A_mesmerizing_highresolution_outer_spacein_3.webp');
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.intro-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  transition: opacity 1.5s ease;
  text-align: center;
}

.logo h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 6px;
  text-transform: uppercase;
}
</style>