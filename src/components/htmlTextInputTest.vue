<template>
  <div>
    <HtmlTextInput :config="firstNameConfig" ref="firstNameInput" @input="handleInput" @error="handleError" />
    <HtmlTextInput :config="lastNameConfig" @input="handleInput" @error="handleError" />
    <HtmlTextInput :config="ageConfig" @input="handleInput" @error="handleError" />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import HtmlTextInput from './htmlTextInput.vue';

export default defineComponent({
  components: {
    HtmlTextInput,
  },
  setup() {
    const firstNameInput = ref(null);

    const firstNameConfig = {
      name: 'firstNameInput',
      fieldSize: 15,
      label: 'First Name:',
      required: true,
      initialFocus: true,
      labelStyle:'text-sm text-blue-500 mr-2.5',
      tailwindStyle:'text-sm my-0.5 outline-blue-500 rounded focus:outline-2 focus:outline-blue-500 hover:outline-2 hover:outline-red-500 rounded'

    };

    const lastNameConfig = {
      name: 'lastNameInput',
      fieldSize: 30,
      label: 'Last Name:',
      required: true,
      labelStyle:'text-sm text-blue-500 mr-2.5',
      tailwindStyle:'text-sm my-0.5 outline-blue-500 rounded focus:outline-2 focus:outline-blue-500 hover:outline-2 hover:outline-red-500 rounded'

    };

    const ageConfig = {
      name: 'ageInput',
      fieldSize: 4,
      label: 'Age:',
      required: false,
      labelStyle:'text-sm text-blue-500 mr-2.5',
      tailwindStyle:'text-sm my-0.5 outline-blue-500 rounded focus:outline-2 focus:outline-blue-500 hover:outline-2 hover:outline-red-500 rounded'

    };

    const handleInput = (data) => {
 //     console.log('handleEvent-', data);
      if(typeof(data.name)!='undefined'){
        console.log(`Input: ${data.name} - ${data.value}`);
      }

    };

    const handleError = (message) => {
      console.error(`Error: ${message}`);
    };

//    onMounted(() => {
//      firstNameInput.value.focus();
//    });

    return {
      firstNameInput,
      firstNameConfig,
      lastNameConfig,
      ageConfig,
      handleInput,
      handleError,
    };
  },
});
</script>
