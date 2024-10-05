<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

body {
  font-family: "neuropolitical", sans-serif;
}

.grotesk {
  font-family: "Space Grotesk", sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

*,
*::before,
*::after {
  box-sizing: content-box;
}
</style>
<script setup lang="ts">
// import aframe from "aframe";
</script>
