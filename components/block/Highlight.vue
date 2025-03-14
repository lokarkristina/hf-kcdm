<script setup lang="ts">
import { highlight } from '~/db/content'
</script>

<template>
  <div class="block block-hightlight block--offset">
    <p class="text-2xl/[1.5]">
      {{ highlight }}
    </p>
  </div>
</template>
