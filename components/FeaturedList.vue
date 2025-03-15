<script setup lang="ts">
import newsList from '~/db/news'
import eventsList from '~/db/events'
import type { NewsItem } from '~/types/NewsItem'
import type { EventItem } from '~/types/EventItem'

const news = ref<NewsItem[]>([...newsList])
const events = ref<EventItem[]>([...eventsList])

const { type, count } = defineProps<{
  type: string
  count: number
}>()

const isNews = computed(() => type === 'news')

const list = computed<Array<NewsItem | EventItem>>(() =>
  [...(isNews.value ? news.value : events.value)]
    .sort(() => Math.random() - 0.5)
    .slice(0, count),
)
</script>

<template>
  <div class="featured-list">
    <!-- list title -->
    <p><slot /></p>
    <!-- list items -->
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
      >
        <template v-if="isNews">
          <p>
            {{ item.title }}
          </p>
          <span>{{ item.date }}</span>
        </template>
        <template v-else>
          <p v-if="Object.keys(item).includes('location')">
            {{ item.location }}
          </p>
          <span>{{ item.date }}</span>
          <p>{{ item.title }}</p>
        </template>
      </li>
    </ul>

    <!-- learm more link -->
    <ULink
      to="#"
      class="flex items-center gap-2 uppercase text-ocean-green-500"
    >
      {{ `Več ${isNews ? 'novic' : 'dogodkov'}` }}
      <AppArrow
        direction="right"
        size="lg"
      />
    </ULink>
  </div>
</template>
