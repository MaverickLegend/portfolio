<script setup lang="ts">
import AboutComponent from './components/AboutComponent.vue'
import ButtonsComponent from './components/ButtonsComponent.vue';
import CertificatesContainer from './components/CertificatesContainer.vue';
import LogoComponent from './components/LogoComponent.vue';
import MainContainer from './components/MainContainer.vue';
import NameComponent from './components/NameComponent.vue';
import SkillComponent from './components/SkillsComponent.vue';

</script>

<template>
  <div id="app">
    <main>
      <MainContainer class="main" />
      <!-- <ButtonsComponent class="buttons" />
      <NameComponent class="name" />
      <LogoComponent class="logo" />
      <CertificatesContainer class="certificates" />
      <AboutComponent class="about" />
      <SkillComponent class="skills" /> -->
    </main>
  </div>
</template>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #041732;
  padding: 3rem;
}
</style>
