<template>
  <div>
    <h1>Menu Item Drop Example</h1>
    <menuItemDrop :config="menuConfig" @input="handleActionCode" />
  </div>
</template>

<script>
import { ref } from 'vue';
import menuItemDrop from '../components/menuItemDrop.vue';

export default {
  name: 'menuItemDropTest',
  components: {
    menuItemDrop,
  },
  setup() {
    const menuConfig = ref({
      label: 'Menu',
      subItems: [
        { subLabel: 'Option 1', actionCode: 'OPTION_1' },
        { subLabel: 'Option 2', actionCode: 'OPTION_2' },
        { subLabel: 'Option 3', actionCode: 'OPTION_3' },
      ],
    });

    const handleActionCode = (actionCode) => {
      console.log('Selected action code:', actionCode);
    };

    return {
      menuConfig,
      handleActionCode,
    };
  },
};
</script>
