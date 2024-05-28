<template>
  <inpTest v-for="thisInput in inpTestConfig.fields" :key="thisInput.name"
           :config="thisInput" :data="existingData"
  />
</template>

<script setup>
/*
const props = defineProps({
  config: {
    type: Object,
    required: false
  }
});
*/


import {c} from "../components/constants.js";
import { onMounted, onUnmounted } from 'vue'
import {useEventHandler} from "./eventHandler.js";
import {ref} from 'vue';

import inpTest from "../components/inpTest.vue";


const {handleEvent} = useEventHandler();
const emit = defineEmits(['cevt']);
const name = 'componentName'
const funcs = [];
const cmdHandlers = {}
const handleCmd = function(args){
  console.log('handleCmd-', name, args);
  if(name==args[2]) {
    if(typeof(funcs[args[0]]!='undefined')){
      console.log('Found func-', args[1]);
      funcs[args[0]](args);
    }
  }else{

  }
}
/*
const inpTestConfig = ref({});
inpTestConfig.value.title='title';
inpTestConfig.value.modelValue='modelValue';
inpTestConfig.value.maxlength = "10";
inpTestConfig.value.size = "10";
inpTestConfig.value.field1="field1"
*/
const inpTestConfig = {
  fields:[
      {
        name: 'field1',
        ref: 'field1',
        value: function(existingData){
          debugger;
          return existingData.name;
        },
        required: true,
        size: '10',
        maxlength: '18',
        startFocus: true
      },
      {
          name: 'field2',
          ref: 'field2',
        value: function(existingData){
          debugger;
          return existingData.address;
        },
          size: '25',
          required: true,
          maxlength: '18',
          tailwindStyle: "border py-2 px-3 text-grey-darkest",
          startFocus: false
      },
      {
          name: 'field3',
          ref: 'field3',
          placeholder: 'Please Enter..',
          size: '20',
          maxlength: '18',
          startFocus: false,
        value: function(existingData){
          debugger;
          return existingData.city;
        },

      },
],
}

const existingData = {
  name: "Curious George",
  address: "The Monkey House",
  city: "The Zoo"
}

console.log("inpTestConfig-",inpTestConfig);



funcs[c.SET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  cmdHandlers[evt[2]]=evt[1];
}
funcs[c.UNSET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  let dlt = delete cmdHandlers[evt[2]];
}

onMounted(() => {
//  debugger;
  emit('cevt', [c.SET_CMD_HANDLER, handleCmd, name]);
})

onUnmounted(() => {
  emit('cevt', [c.UNSET_CMD_HANDLER, name]);
})

</script>

<style scoped>

</style>

