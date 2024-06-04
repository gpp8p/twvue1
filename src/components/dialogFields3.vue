<template>
    <component v-for="(aComponent, i) in dialogFields"
                   :key="i"
                   :config="dialogFields[i]"
                   :data="existingData"
                   :is="morphs[aComponent.type]"
                   :name="aComponent"
                   @cevt="handleEvent($event, funcs, emit)"
        />
</template>

<script setup>

const props = defineProps({
  config: {
    type: Object,
    required: true
  },
  data:{
    type: Object,
    required: true
  }
});



import {c} from "../components/constants.js";
import { onMounted, onUnmounted } from 'vue'
import {useEventHandler} from "./eventHandler.js";
import {ref} from 'vue';

import inputText from "../components/inputText.vue";
import inputNumber from "../components/inputNumber.vue"
import inputCheckbox from "../components/inputCheckbox.vue"
import backgroundPicker from "../components/backgroundPicker.vue";
import radioGroup from "../components/radioGroup.vue";
import vselect from "../components/vselect.vue";
import vtextarea from "../components/vtextarea.vue";

//import {getDialogDefinitions} from "../components/dialogDefinitions3.js";
//const {getDialogAppearence, getDialogFields, getDefaultData, getDialogSequence} = getDialogDefinitions();

//const dialogFields = getDialogFields('testDialog', 'test1');
//const dialogAppearence = getDialogAppearence('testDialog');

const dialogFields = props.config.dialogFields;
const existingData = props.data;

debugger;
const emit = defineEmits(['cevt']);
if(props.config.preInitialize){
  Object.keys(existingData).forEach(function(key) {
    console.log('Key : ' + key + ', Value : ' + existingData[key]);
    emit('cevt', [c.FIELD_INITIALIZED,  key, existingData[key]]);
  });
}


const {handleEvent} = useEventHandler();
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

//const dialogData = {};
const morphs = {
  inputText,
  inputNumber,
  inputCheckbox,
  backgroundPicker,
  radioGroup,
  vselect,
  vtextarea
}






funcs[c.SET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  cmdHandlers[evt[2]]=evt[1];
}
funcs[c.UNSET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  let dlt = delete cmdHandlers[evt[2]];
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

