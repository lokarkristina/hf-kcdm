<script setup lang="ts">
import { highlight } from '~/db/content'
</script>

<template>
  <div class="content content-hightlight content--offset">
    <p class="text-2xl/[1.5]">
      {{ highlight }}
    </p>
  </div>
</template>
