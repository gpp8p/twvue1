<template>
  <div class="grid grid-flow-row auto-rows-max">
    <div>
      <button @click="showSubMenu" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Button
      </button>
    </div>

    <div v-if="subShow==true" class=" absolute z-50 my-10 bg-white opacity-100 border-solid border-2 border-indigo-600">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
    <div class="absolute z-0 my-10">
      Bad boyz<br/>
      Kiss<br>
      Good Girls but violet gives willingly
    </div>

  </div>

</template>

<script setup>
  import { ref } from 'vue';
  const subShow = ref(false);

  function showSubMenu(){
    subShow.value = true;
    console.log('showSubMenu was clicked', subShow);
  }
</script>

<style scoped>

</style>
