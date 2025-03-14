<script setup lang="ts">
import { highlight } from '~/db/content'
</script>

<template>
  <div class="mb-5 border-s-4 border-lines">
    <p class="px-6 py-2 text-2xl/[1.5] text-accent">
      {{ highlight }}
    </p>
  </div>
</template>
