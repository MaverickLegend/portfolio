<script setup lang="ts">
import AboutComponent from './components/AboutComponent.vue'
import ButtonsComponent from './components/ButtonsComponent.vue';
import CertificatesContainer from './components/CertificatesContainer.vue';
import LogoComponent from './components/LogoComponent.vue';
import NameComponent from './components/NameComponent.vue';
import SkillComponent from './components/SkillsComponent.vue';

</script>

<template>
  <div id="app">
    <main class="wrapper">
      <ButtonsComponent class="buttons" />
      <NameComponent class="name" />
      <LogoComponent class="logo" />
      <CertificatesContainer class="certificates" />
      <AboutComponent class="about" />
      <SkillComponent class="skills" />
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
  padding: 0 10rem;

  .wrapper {
    display: grid;
    padding: 1rem;
    border-radius: 1rem;
    grid-template-columns: 1fr 0.5fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 1.5fr 1fr;
    gap: 1rem;
    grid-template-areas:
      "name logo buttons"
      "name logo about"
      "certificates certificates about"
      "certificates certificates skills";
    width: 100%;
  }

  .name {
    grid-area: name;
  }

  .buttons {
    grid-area: buttons;
  }

  .about {
    grid-area: about;
  }

  .skills {
    grid-area: skills;
  }

  .certificates {
    grid-area: certificates;
  }

  .logo {
    grid-area: logo;
  }
}
</style>
