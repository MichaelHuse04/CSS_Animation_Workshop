<script setup lang="ts">

</script>
<template>
  <ul>
    <li tabindex="1"><RouterLink to="/">Home</RouterLink></li>
    <li tabindex="1"><RouterLink to="/WarmUp">Warm up</RouterLink></li>
    <li tabindex="1">Aufgabe 1</li>
    <li tabindex="1">Aufgabe 2</li>
    <li tabindex="1">Aufgabe 3</li>
    <li tabindex="1">Aufgabe 4</li>
    <li tabindex="1">Aufgabe 5</li>
  </ul>
</template>
<style scoped>

ul {
  display: flex;
  background-color: aliceblue;
  margin: 0;
  padding: 0;
  border: 1px solid #000000;
}

li {
  flex: 1 1 0;
  text-align: center;
  padding: 1rem;
  transition: 0.2s ease-in-out;
  font-size: large;
  text-decoration: underline;
}

li:hover, li:focus {
  flex-grow: 1.2;
  background-color: #c5ccd1;
}

li + li {
  border-left: 1px solid #000000;
}

li::marker {
  color: rgba(0, 0, 0, 0);
}

</style>
