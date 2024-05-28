<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-[98%] h-[14.5%] mx-auto mt-[1%] mb-[1%] bg-neutral-100 rounded border-2 border-blue-500"></div>
    <div class="w-[98%] h-[84.5%] mx-auto mb-[1%] bg-neutral-100 rounded border-2 border-blue-500"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const handleResize = () => {
  // Add any necessary resize handling logic here
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
