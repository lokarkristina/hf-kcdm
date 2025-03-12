<script setup lang="ts">
const props = defineProps<{
  type: string
}>()

// const imagePath = computed(() => {
//   // @todo check if this is the way to go
//   return new URL(`../assets/img/${props.type}.png`, import.meta.url).href
// })
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
    <!-- @todo not working yet if used with variable,
    sometimes does tho, but sometimes doesn't -->
    <img
      src="../assets/img/vine.png"
      :alt="`${props.type} icon`"
      class="size-7 object-contain"
    >
  </UButton>
</template>

<style scoped></style>
