<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <USlideover v-model="isOpen">
    <div class="p-4 flex-1">
      <UButton
        variant="solid"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex absolute end-5 top-5 z-10"
        square
        padded
        @click="isOpen = false"
      />
      <Placeholder class="h-full" />
    </div>
  </USlideover>
</template>

<style scoped></style>
