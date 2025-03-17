<script setup lang="ts">
const { type } = defineProps<{
  type: string
}>()
</script>

<template>
  <!-- @todo add hover -->
  <UButton
    to="#"
    :padded="false"
    target="_blank"
    :ui="{
      base: 'grid justify-center items-center text-white size-12',
      rounded: 'rounded-full',
    }"
  >
    <img
      :src="`/logos/${type}.png`"
      :alt="`${type} icon`"
      class="object-contain size-7"
    >
  </UButton>
</template>

<style scoped></style>
