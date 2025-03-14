<script setup lang="ts">
import content from '~/db/content'

const { type } = defineProps<{
  type: string
}>()
</script>

<template>
  <component
    :is="type"
    :class="[{ 'font-ultra': type === 'h2' }]"
    class="block block-heading text-ocean-green-600 text-2xl/[1] md:text-3xl/[1] font-sans mb-3"
  >
    {{ content[type === 'h2' ? 'heading2' : 'heading3'] }}
  </component>
</template>
