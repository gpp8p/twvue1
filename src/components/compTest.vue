<template>
  <component :is="components"></component>
</template>

<script setup>
  import { ref, defineAsyncComponent, onMounted } from 'vue';
  const components = ref();
  onMounted(() => {
    const ComponentA= defineAsyncComponent(() =>
        import("./ComponentA.vue")
    );
    components.value = ComponentA;
  })

</script>

<style scoped>

</style>
