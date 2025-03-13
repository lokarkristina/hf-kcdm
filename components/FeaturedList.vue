<script setup lang="ts">
import news from '~/db/news'
import events from '~/db/events'

const { type, count } = defineProps<{
  type: string
  count: number
}>()

const list = computed(() =>
  [...(isNews.value ? news : events)]
    .sort(() => Math.random() - 0.5)
    .slice(0, count),
)

const isNews = computed(() => type === 'news')
</script>

<template>
  <div>
    <p><slot name="title" /></p>

    <ul>
      <li
        v-for="item in list"
        :key="item.id"
      >
        <template v-if="isNews">
          <p>
            {{ item.title }}
          </p>
          <span>
            {{ item.date }}
          </span>
        </template>
        <template v-else>
          <p>
            {{ item.location }}
          </p>
          <span>
            {{ item.date }}
          </span>
          <p>{{ item.title }}</p>
        </template>
      </li>
    </ul>

    <!-- learm more -->
    <UButton :label="`Več ${isNews ? 'novic' : 'dogodkov'}`" />
  </div>
</template>

<style scoped></style>
