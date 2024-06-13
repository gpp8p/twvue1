<template>
  <div :class = dialogAppearence.twstyle>
    <div >
      <component v-for="(aComponent, i) in dialogFields"
                 :key="i"
                 :config="dialogFields[i]"
                 :data="existingData"
                 :is="morphs[aComponent.type]"
                 :name="aComponent"
                 @cevt="handleEvent($event, funcs, emit)"
      />
    </div>
  </div>
</template>

<script setup>


import {c} from "../components/constants.js";
import { onMounted, onUnmounted } from 'vue'
import {useEventHandler} from "./eventHandler.js";
//import {getHandleCmd} from "../components/cmdHandler.js";
//const {handleCmd} = getHandleCmd();

import {ref} from 'vue';

import inputText from "../components/inputText.vue";
import inputNumber from "../components/inputNumber.vue"
import inputCheckbox from "../components/inputCheckbox.vue"
import backgroundPicker from "../components/backgroundPicker.vue";
import radioGroup from "../components/radioGroup.vue";
import vselect from "../components/vselect.vue";
import vtextarea from "../components/vtextarea.vue"
import listTable from "../components/listTable.vue";


debugger;
import {getDialogDefinitions} from "../components/dialogDefinitions2.js";


const {getDialogAppearence, getDialogFields, getDefaultData} = getDialogDefinitions();
const dialogFields = getDialogFields('testDialog');
console.log('dialogFields-',dialogFields);

const dialogAppearence = getDialogAppearence('testDialog');


const {handleEvent} = useEventHandler();
const emit = defineEmits(['cevt']);
const name = 'dynaComponentTest'
const funcs = [];
const cmdHandlers = {}

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
const morphs = {
  inputText,
  inputNumber,
  inputCheckbox,
  backgroundPicker,
  radioGroup,
  vselect,
  vtextarea,
  listTable
}



const existingData = getDefaultData('testDialog');

//console.log("inpTestConfig-",inpTestConfig);



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
}

onMounted(() => {
//  debugger;
  emit('cevt', [c.SET_CMD_HANDLER, handleCmd, name]);
//  cmdHandlers['mainPage'](['createNewCard', msg[1], 'mainPage']);

})

onUnmounted(() => {
  emit('cevt', [c.UNSET_CMD_HANDLER, name]);
})

</script>

<style scoped>
.dynaComponentTest {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
}
</style>


