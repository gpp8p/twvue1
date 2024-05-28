<template>
  <div>
    <button @click="showDialog = true">Open Dialog</button>
    <spDialog style="margin-left: 40%; margin-top: 200px;" v-if="showDialog" :config="dialogConfig">
      <h2>Dialog Content</h2>
      <p>This is the content of the dialog.</p>
      <button @click="showDialog = false">Close</button>
    </spDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import spDialog from './spDialog.vue';

const showDialog = ref(false);
const dialogConfig = {
  componentStyle: "w-100 h-40 bg-slate-300 border-blue-500 border-solid border-2   absolute z-50"
};
</script>
