<script setup lang="ts">
import MainComponent from './components/MainComponent.vue';

</script>

<template>
  <div id="app">
    <main>
      <MainComponent class="main" />
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
