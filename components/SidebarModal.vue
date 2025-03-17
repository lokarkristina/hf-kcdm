<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <USlideover v-model="isOpen">
    <div class="flex-1 p-4">
      <UButton
        variant="solid"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="absolute z-10 flex end-5 top-5"
        square
        padded
        @click="isOpen = false"
      />
      <Placeholder class="h-full" />
    </div>
  </USlideover>
</template>

<style scoped></style>
