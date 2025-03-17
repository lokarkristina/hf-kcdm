<script setup lang="ts">
import type { NewsItem } from '~/types/NewsItem'
import { formatDate } from '#imports'

const { item } = defineProps<{
  item: NewsItem
}>()
</script>

<template>
  <div class="pt-4 pb-5 border-b news-item border-hf-lines-gray">
    <NuxtLink :to="`/news/${item.id}`">
      <!-- @todo decoration thickness -->
      <h2
        class="text-primary underline decoration-dotted font-ultra text-big-title leading-[0.9]"
      >
        {{ item.title }}
      </h2>
      <p class="text-sm text-captions">
        {{ formatDate(item.date) }}
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
