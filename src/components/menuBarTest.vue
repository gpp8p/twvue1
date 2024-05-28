<template>
  <div>
    <menuBar :config="menuBarConfig" @input="handleInput" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import menuBar from './menuBar.vue';

export default defineComponent({
  components: {
    menuBar,
  },
  setup() {
    const menuBarConfig = {
      items: [
        { label: 'Home' },
        { label: 'About' },
        { label: 'Services' },
        { label: 'Contact' },
      ],
    };

    const handleInput = (label) => {
      console.log(`Clicked menu item: ${label}`);
    };

    return {
      menuBarConfig,
      handleInput,
    };
  },
});
</script>

