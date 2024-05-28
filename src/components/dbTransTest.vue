<template>
<h2>DbTrans Test</h2>
</template>

<script setup>

import {getLogin} from "./login.js";
import {getTrans} from "./dbTrans.js";
import {c} from "./constants";
const emit = defineEmits(['cevt']);

const {doLogin}= getLogin();
const {executeTrans} = getTrans();
const apiPath = 'http://localhost:8000/';
const layoutTransParams   = {
      orgId:1,
      userId:1,
      layoutId:1
    }
const header = '';
debugger;
const getLayoutUrl = apiPath+'api/shan/getLayout?XDEBUG_SESSION_START=19884'

doLogin('gpp8pvirginia@gmail.com', 'n1tad0g', emit, c);

executeTrans(layoutTransParams, 5, getLayoutUrl, 'GET', emit, c, header);



</script>

<style scoped>

</style>
