<template>
  <div :style="config.componentStyle">
    <div :style="config.labelStyle">
      {{props.config.fieldLabel}}
    </div>
    <div>
      <input type="checkbox" v-model = "isSelected" :checked="props.config.isSelected==true" @change="fieldChanged" />
    </div>

  </div>
</template>

<script setup>

const props = defineProps({
  config: {
    type: Object,
    required: true
  }
});



import {c} from "../components/constants.js";
import { onMounted, onUnmounted } from 'vue'
import {useEventHandler} from "./eventHandler.js";
import {ref} from 'vue';


const {handleEvent} = useEventHandler();
const emit = defineEmits(['cevt']);
const name = props.config.name;
const funcs = [];
const cmdHandlers = {}
const isSelected = ref(props.config.isSelected);
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
const fieldChanged = function(){
  emit('cevt', [c.FIELD_CHANGED, isSelected.value, name]);
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

</style>

