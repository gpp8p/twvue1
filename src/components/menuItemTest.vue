<template>
  <div>
    <menuItem :config="menuConfig" @input="handleInput" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import menuItem from './menuItem.vue';

export default defineComponent({
  components: {
    menuItem,
  },
  setup() {
    const menuConfig = {
      label: 'Menu ITem One',
      // tailwindStyle: 'text-xl font-bold text-green-500 hover:text-yellow-500',
    };

    const handleInput = (label) => {
      console.log(`Clicked menu item: ${label}`);
    };

    return {
      menuConfig,
      handleInput,
    };
  },
});
</script>

