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
    <p class="pb-2 mb-3 text-sm uppercase border-b font-ultra text-title-gray border-lines">
      <slot />
    </p>
    <!-- list items -->
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        class="pb-5 border-b border-lines"
      >
        <template v-if="isNews">
          <p
            class="font-serif underline decoration-dotted text-xl/[1.2] text-primary"
          >
            {{ item.title }}
          </p>
          <span class="date">{{ item.date }}</span>
        </template>
        <template v-else>
          <p
            v-if="Object.keys(item).includes('location')"
            class="text-sm uppercase font-ultra text-ocean-green-700"
          >
            {{ item.location }}
          </p>
          <span class="date color-black">{{ item.date }}</span>
          <p
            class="font-serif underline decoration-dotted text-xl/[1.2] text-primary"
          >
            {{ item.title }}
          </p>
        </template>
      </li>
    </ul>

    <!-- learm more link -->
    <ULink
      to="#"
      class="flex items-center mt-3 uppercase gap-2 text-primary"
    >
      {{ `Več ${isNews ? 'novic' : 'dogodkov'}` }}
      <IconArrow
        direction="right"
        size="lg"
      />
    </ULink>
  </div>
</template>
