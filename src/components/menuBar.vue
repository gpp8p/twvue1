<template>
  <div class="flex justify-evenly">
    <menuItem v-for="(item, index) in config.items" :key="index" :config="item" @input="handleInput" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import menuItem from './menuItem.vue';

export default defineComponent({
  name: 'menuBar',
  components: {
    menuItem,
  },
  props: {
    config: {
      type: Object,
      required: true,
      validator: (config) => {
        return config.items && Array.isArray(config.items);
      },
    },
  },
  setup(props, { emit }) {
    const handleInput = (label) => {
      emit('input', label);
    };

    return {
      handleInput,
    };
  },
});
</script>
