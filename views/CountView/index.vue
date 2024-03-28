<script setup lang="ts">
  import { useCounter } from './hooks';

  const { counter, inc, dec } = useCounter();
  const xxx = '';
</script>

<template>
  <div class="bg-red-600">
    カウンター: {{ counter }}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </div>
</template>
