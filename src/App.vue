<template>
  <spDialog @cevt="handleEvent($event, funcs, emit)" v-if="showDialog==true"></spDialog>
</template>

<script setup>
import {useEventHandler} from "./components/eventHandler.js";
import {c} from "./components/constants";
import {ref} from 'vue';
//import {getHandleCmd} from "./components/cmdHandler.js";
const {handleEvent} = useEventHandler();
const emit = defineEmits(['cevt']);
const funcs = [];
const cmdHandlers = {};


const showDialog = ref(true);

const testCmd = function(){
  cmdHandlers['dynaComponentTest']([c.CMD_SET_VALUE, "test field1",'*']);
}

funcs[c.SET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  cmdHandlers[evt[2]]=evt[1];
}
funcs[c.UNSET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  let dlt = delete cmdHandlers[evt[2]];
}
funcs[c.EXIT_DIALOG]= function(evt){
  debugger;
  console.log('EXIT_DIALOG-', evt);
  showDialog.value=false;
}

//import backgroundPickerTest from "./components/backgroundPickerTest.vue";
//import dbTransTest from "./components/dbTransTest.vue";
//import htmlCheckboxTest from "./components/htmlCheckboxTest.vue"
//import htmlTextInputTest from "./components/htmlTextInputTest.vue"
//import inpTestTest from "./components/inpTestTest.vue"
//import AppButton from "./components/AppButton.vue";
import spDialog from "./components/dialog4.vue"

</script>

