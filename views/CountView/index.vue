<script setup lang="ts">
  import { useCounter } from './hooks';

  const { counter, inc, dec } = useCounter();
</script>

<template>
  <div class="bg-red-600">
    カウンター: {{ counter }}
    <button data-testid="inc-button" @click="inc">+</button>
    <button data-testid="dec-button" @click="dec">-</button>
  </div>
</template>
