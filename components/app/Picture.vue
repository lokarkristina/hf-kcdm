<script setup lang="ts">
const { src } = defineProps<{
  src: string
}>()
</script>

<template>
  <picture>
    <!-- @todo implement with tailwind breakpoints -->
    <source
      srcset="/shared-assets/images/examples/surfer.jpg"
      media="(min-width: 600px)"
    />
    <img :src="src" alt="" />
  </picture>
</template>

<style scoped></style>
