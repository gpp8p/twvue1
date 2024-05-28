<template>
  <htmlTextInput :config="props.config" ref="props.config.name" v-if="props.config.type=='htmlTextInput'" />
  <htmlPasswordInput :config="props.config" ref="props.config.name" v-if="props.config.type=='htmlPasswordInput'" />
</template>

<script setup>
import { ref } from 'vue';
import {c} from "../components/constants.js";
import { onMounted, onUnmounted } from 'vue'
import {useEventHandler} from "./eventHandler.js";
import htmlTextInput from './htmlTextInput.vue';
import htmlPasswordInput from './htmlPasswordInput.vue'

const {handleEvent} = useEventHandler();
const emit = defineEmits(['cevt']);
const name = 'componentName'
const funcs = [];
const cmdHandlers = {}

const props = defineProps({
  config: {
    type: Object,
    required: true
  }
});

funcs[c.SET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  cmdHandlers[evt[2]]=evt[1];
}
funcs[c.UNSET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  let dlt = delete cmdHandlers[evt[2]];
}

const handleCmd = function(args){
  console.log('dynaComponent handleCmd-', args);
}
onMounted(() => {
  debugger;
  emit('cevt', [c.SET_CMD_HANDLER, handleCmd, name]);
})

onUnmounted(() => {
  emit('cevt', [c.UNSET_CMD_HANDLER, name]);
})

</script>

<style scoped>

</style>
