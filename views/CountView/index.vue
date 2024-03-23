<script setup lang="ts">
  import { useCounter } from './hooks';

  const { counter, inc, dec } = useCounter();
</script>

<template>
  <div class="bg-red-600">
    カウンター: {{ counter }}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <!-- <button
      class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
    >
      ...
    </button> -->
  </div>
</template>
