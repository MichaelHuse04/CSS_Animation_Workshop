<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <header>
    <navigation/>
  </header>
  <main class="main-view">
    <RouterView />
  </main>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: Arial,serif;
}

.main-view {
  background-color: #abd8ff;
  height: 100%;
  width: 100%;
  position: absolute;
}

</style>
