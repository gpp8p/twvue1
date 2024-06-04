<template>
  <span :class = dialogAppearence.twstyle>
    <dialogFields :config="dialogFieldsConfig" :data="dialogFieldsData" @cevt="handleEvent($event, funcs, emit)"></dialogFields>
  </span>

</template>


<script setup>
const props = defineProps({
  config: {
    type: Object,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
})

import {c} from "../components/constants.js";
import { onMounted, onUnmounted } from 'vue'
import {useEventHandler} from "./eventHandler.js";
import {ref} from 'vue';

import dialogFields from "../components/dialogFields3.vue";

import {getDialogDefinitions} from "../components/dialogDefinitions3.js";
const {getDialogAppearence, getDialogFields, getDefaultData, getDialogSequence} = getDialogDefinitions();


const dialogFieldsConfig = ref({});
dialogFieldsConfig.value.dialogFields = getDialogFields('testDialog', 'test1');
//dialogFieldsConfig.value.existingData = getDefaultData('testDialog');

dialogFieldsConfig.value.preInitialize = props.config.preInitialize;

const dialogAppearence = getDialogAppearence('testDialog');

const dialogFieldsData = ref({});
dialogFieldsData.value = getDefaultData('testDialog');

const dialogSequence = getDialogSequence('testDialog');

const {handleEvent} = useEventHandler();
const emit = defineEmits(['cevt']);
const name = props.config.name;

const funcs = [];
const cmdHandlers = {}

const fieldValue = ref('');
if(typeof(props.config.value)=='function'){
  fieldValue.value = props.config.value(props.data);
}
const handleCmd = function(args){
  console.log('handleCmd-', name, args);
  debugger;
  if(name==args[2] || args[2]=='*') {
    if(typeof(funcs[args[0]])!='undefined'){
      console.log('Found func-', args[1]);
      funcs[args[0]](args);
    }else{
      passCmdDown(args);
    }
  }else{
    passCmdDown(args);
  }
}
const passCmdDown = function(args){
  var availableHandlers = Object.keys(cmdHandlers);
  if(availableHandlers.length>0){
    for(var a=0;a<availableHandlers.length;a++){
//                debugger;
      cmdHandlers[availableHandlers[a]]([args[0], args[1], args[2]]);
    }
  }
}

const dialogData = {};

funcs[c.SET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  cmdHandlers[evt[2]]=evt[1];
}
funcs[c.UNSET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  let dlt = delete cmdHandlers[evt[2]];
}
funcs[c.FIELD_CHANGED]= function(evt){
  console.log('in c.FIELD_CHANGED-', evt);
  dialogData[evt[1]]=evt[2];
  debugger;
  dialogSequence(c.DATA_EVTYPE, dialogData, 0, 0);
}
funcs[c.FIELD_INITIALIZED]= function(evt){
  console.log('in c.FIELD_INITIALIZED-', evt);
  dialogData[evt[1]]=evt[2];
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
.inputCss {
  margin-top: 1%;
  display: grid;
  grid-template-columns: 20% 40%;
}
</style>
