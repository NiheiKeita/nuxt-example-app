<script setup lang="ts">
const { counter, inc, dec } = useCounter();
</script>

<template>
  <div class="bg-red-600">
    カウンター: {{ counter }}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </div>
</template>
