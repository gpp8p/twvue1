<template>
  <div class="text-center">
    <h1>Menu Config Test</h1>
      <span class="flex-row">
        <component :is="mItem"></component>
        <component :is="dropDownMenuItem"></component>
      </span>



  </div>

</template>

<script setup>

import {getMenuConfig} from '../components/menuConfig.js';
import dropDownMenuItem from '../components/dropDownMenuItem.vue';
import mItem from "../components/mItem.vue";


  const {getMenu} = getMenuConfig();

  const thisMenu = getMenu('adminLogged');
  console.log('this menu-', thisMenu);


</script>

<style scoped>

</style>
