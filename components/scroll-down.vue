<template>
  <DoubleArrowDownIcon
    @click="handleClick"
    class="absolute bottom-5 size-7 text-white anim cursor left-[46%]"
    style="transform: translateX(-500%)"
  ></DoubleArrowDownIcon>
</template>
<script setup lang="ts">
import { DoubleArrowDownIcon } from "@radix-icons/vue";

const props = defineProps<{ goTo: number }>();
const handleClick = () => {
  const pageContainer = document.querySelector(".page-container");
  const pageHeight = pageContainer.offsetHeight;
  console.log("test", pageContainer, pageHeight);
  const targetScrollPosition = (props.goTo - 1) * pageHeight; // Calculate scroll position based on index
  pageContainer.scrollTo({
    top: targetScrollPosition,
    behavior: "smooth", // Smooth scrolling
  });
};
</script>
<style scoped>
.anim {
  animation: upDown infinite 1.5s ease-in-out;
  cursor: pointer;
}
@keyframes upDown {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-50%);
  }
}
</style>
