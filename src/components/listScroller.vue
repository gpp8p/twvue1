<template>
  <div class="inputCss">
    <div>{{props.config.label}}</div>
    <div class="selectWrapper" ref="selectWrapper">
         <select :style="selectWidth" v-model="fieldValue" @change="setFieldValue" :size="props.config.selectSize" :multiple="props.config.selectMultiple"  :class="props.config.selectStyle || 'mr-[10px] text-lg'">
            <option class="selectOpt" v-for="item in props.data[props.config.name]" :key="item">{{trimIt(item)}}</option>
          </select>
    </div>


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
import {ref} from 'vue';
import { useElementSize } from '@vueuse/core'



const {handleEvent} = useEventHandler();
const emit = defineEmits(['cevt']);
const name = props.config.name;
const funcs = [];
const cmdHandlers = {}

const fieldValue = ref('');
if(typeof(props.config.value)=='function'){
  fieldValue.value = props.config.value(props.data);
}

const selectWrapper = ref(null);
const { width, height } = useElementSize(selectWrapper) ;
const selectWidth = ref('');


const selectedIndex = ref(0);
const scrollerRef = ref(null);

const space80 = '                                                                               ';
function trimIt(str){
  console.log(str+space80.length)
  return str+space80.substr(1,80);
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
  console.log('width-', width._value);
  selectWidth.value = 'width:'+(width.value).toFixed()+'px;';
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
  grid-template-columns: 20% 80%;
}

.selectOpt {
  width: 500px;
}
.selectWrapper {
  width: 100%;
  overflow: scroll;
}

</style>

