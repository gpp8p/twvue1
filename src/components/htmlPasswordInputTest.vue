<template>
  <div>
    <htmlPasswordInput
        :config="{
        name: 'password',
        label: 'Enter Password',
        labelStyle: 'text-lg text-gray-700',
        fieldSize: 30,
        initialFocus: true,
      }"
        @error="handleError"
        @input="handleInput"
    />
  </div>
</template>

<script setup>
import htmlPasswordInput from "./htmlPasswordInput.vue";
const handleError = (message) => {
  console.error(message);
};

const handleInput = (data) => {
  console.log('Input:', data);
};
</script>
