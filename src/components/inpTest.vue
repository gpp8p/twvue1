<template>
  <div>
    <br/>
    <h2>Field -
      <input type="text"
             :class="props.config.tailwindStyle || 'text-lg outline outline-2 outline-blue-500 focus:outline-red-500 hover:outline-red-500 rounded'"
             :size = "props.config.size"
             :value = "fieldValue"
             :placeholder = "fieldPlaceholder"
             :maxlength="props.config.maxlength"
             @keydown.tab="checkInputOnTab"
            ref="thisInput"
      /></h2>
   </div>
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
import {ref, nextTick } from 'vue';


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
const fieldPlaceholder = ref('');
const fieldValue = ref('');

if(typeof(props.config.value)=='function'){
  fieldValue.value = props.config.value(props.data);
}else if(typeof(props.config.placeholder)!='undefined'){
  fieldPlaceholder.value = props.config.placeholder;
}

const thisInput = ref(null);
if(props.config.startFocus==true){
  debugger;


  nextTick(() => {
    thisInput.value.focus();
  });

}
const checkInputOnTab = function($event){
  console.log("checkInputOnTab called", event);
  if(typeof(props.config.required)!='undefined' && props.config.required==true){
    if (fieldValue.value.trim()== '') {
      console.log('No entry in the input field');
      // Perform any other actions for no entry
      alert('entry required');
      event.preventDefault(); // Prevent the default tab behavior if needed
    } else {
      console.log('Input value:', fieldValue.value);
      // Perform actions with the input value
    }
  }
}

const focusChanged = function(){
  console.log('focus changed');
}

const handleInput = (event) =>{
  debugger;
  if(fieldValue.value.length==0){
    debugger;
    nextTick(() => {
      thisInput.value.focus();
    });
  }
  console.log('handleInput-',event);
  console.log('fieldValue-', fieldValue.value);
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
//  startField.value.focus();
/*
  var input = inputs['f2']?.value;
  input?.focus();
  emit('cevt', [c.SET_CMD_HANDLER, handleCmd, name]);
 */
  const setFocusHere = function(){
    nextTick(() => {
      thisInput.value.focus();
    });
  }

})

onUnmounted(() => {
  emit('cevt', [c.UNSET_CMD_HANDLER, name]);
})

</script>

<style scoped>

</style>

