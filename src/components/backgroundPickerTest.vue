<template>
  <div class="w-[50%]">
    <backgroundPicker :config = "backgroundPickerConfig" @cevt = "handleEvent($event, funcs, emit)"></backgroundPicker>
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
import backgroundPicker from "./backgroundPicker.vue";
import {ref} from 'vue';


const {handleEvent} = useEventHandler();
const emit = defineEmits(['cevt']);
const name = 'componentName'
const funcs = [];
const cmdHandlers = {}

const backgroundPickerConfig = ref({
  componentStyle:{
    display: "grid",
    gridTemplateColumns: "15% 20% 20%",
    marginTop: "7px"
  },
  backgroundType: 'color',
  type: "backgroundPicker",
  fieldLabel: "Background:",
  hasLabel: "true",
  leafComponent: true,
  labelStyle: "text-base text-blue-500",
  fieldIdentifier: 'pageBackground',
  name: "pageBackground",
  colorValue: "#bf1a6d",
  fileUploadConfig :{
    fileAlreadyUploaded: false,
    backgroundDisplayType: 'image'
  }
});

funcs[c.FIELD_CHANGED]= function(evt){
  console.log('in c.FIELD_CHANGED-', evt);
}
funcs[c.SET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  cmdHandlers[evt[2]]=evt[1];
}
funcs[c.UNSET_CMD_HANDLER]= function(evt){
  console.log('in SET_CMD_HANDLER-', evt);
  let dlt = delete cmdHandlers[evt[2]];
}
/*
onMounted(() => {
  debugger;
  emit('cevt', [c.SET_CMD_HANDLER, handleCmd, name]);
})

onUnmounted(() => {
  emit('cevt', [c.UNSET_CMD_HANDLER, name]);
})
*/
</script>

<style scoped>

</style>

