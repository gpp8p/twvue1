<template>
  <div :class="config.componentStyle">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  config: {
    type: Object,
    required: true
  }
});
</script>
