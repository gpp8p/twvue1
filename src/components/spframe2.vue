<template>
  <div class="flex flex-col h-screen p-1vh">
    <div  class="w-98vw h-14-5vh mx-auto mb-1vh border-2 border-blue-500 sp-background rounded-lg">
      <div v-if="showMenu" class="my-[1.5%]">
        <dynamicMenu :config="menuConfig" @cevt="handleEvent($event, funcs, emit)" />
      </div>
      <div v-else class="text-center my-[1.5%]">{{message}}</div>
    </div>
    <div class="w-98vw h-84-5vh mx-auto border-2 border-blue-500 sp-background rounded-lg">
      <topLine></topLine>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import {ref} from 'vue';
import {c} from "./constants";
import {useEventHandler} from "./eventHandler";
import dynamicMenu from './dynamicMenu.vue';
import {getMenu} from '../components/menuOpts.js';
import topLine from '../components/topLine.vue';

const emit = defineEmits(['cevt']);

const leafComponent = false;

const getMenuOpts = getMenu();
const menuConfig = ref('');
const message = ref('');
const showMenu=ref(false);
const name = 'spFrame';


const cmdHandlers = {}
const funcs = [];
const {handleEvent} = useEventHandler();
const handleCmd = function(args){
  console.log('handleCmd-', name, args);
  if(name==args[2]) {
    if(typeof(funcs[args[0]]!='undefined')){
      console.log('spFrame found func-', args[1]);
      funcs[args[0]](args);
    }
  }else{

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
funcs[c.CMD_SET_MENU]= function(args){
    console.log('in CMD_SET_MENU-', args);
    menuConfig.value = getMenuOpts(c,args[1]);
    showMenu.value=true;

}
funcs[c.CMD_SET_MESSAGE]=function(args){
  console.log('in CMD_SET_MESSAGE-', args);
  message.value = args[1];
}


const resizeHandler = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

onMounted(() => {
  resizeHandler();
  window.addEventListener('resize', resizeHandler);
  emit('cevt', [c.SET_CMD_HANDLER, handleCmd, name]);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
  emit('cevt', [c.UNSET_CMD_HANDLER, name]);
});
</script>

<style scoped>
.h-14-5vh {
  height: calc(var(--vh, 1vh) * 14.5);
}

.h-84-5vh {
  height: calc(var(--vh, 1vh) * 84.5);
}

.w-98vw {
  width: 98vw;
}

.p-1vh {
  padding-top: calc(var(--vh, 1vh) * 1);
  padding-bottom: calc(var(--vh, 1vh) * 1);
}

.mb-1vh {
  margin-bottom: calc(var(--vh, 1vh) * 1);
}
.sp-background {
  background-color: #ffcd90;
}
</style>
