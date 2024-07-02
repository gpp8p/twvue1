<template>



    <div class="flex justify-evenly">
      <component
          v-for="(item, index) in config.items"
          :key="index"
          :is="item.type"
          :config="item.config"
          @cevt="handleInput"
      ></component>
    </div>




</template>

<script>
import { defineComponent } from 'vue';
import {ref} from 'vue';
import menuItem from './menuItem1.vue';
//import htmlTextInput from './htmlTextInput.vue';
import menuItemDrop from '../components//menuItemDrop.vue';
import {c} from "./constants";
import {useEventHandler} from "./eventHandler.js";
const {handleEvent} = useEventHandler();


export default defineComponent({
  name: 'dynamicMenu',
  components: {
    menuItem,
    menuItemDrop
//    htmlTextInput,
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
    const handleInput = (data) => {
      debugger;
      emit('cevt', [c.MENU_ITEM_SELECTED, data[1]]);
    };

    return {
      handleInput,
    };
  },
});
</script>
