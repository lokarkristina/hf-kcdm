<script setup lang="ts">
import news from '~/db/news'

const page = ref<number>(1)
// const newsPerPage = 11 @todo set to design
const newsPerPage = 5

const pagedNews = computed(() => {
  const start = (page.value - 1) * newsPerPage
  const end = page.value * newsPerPage

  return news.slice(start, end)
})
</script>

<template>
  <div class="grid-container grid-4-8 news-list__list">
    <div class="news-list grid gap-5 ">
      <NewsItem
        v-for="newsItem in pagedNews"
        :key="newsItem.id"
        :item="newsItem"
        class="grid gap-2.5"
      />
    </div>

    <UPagination
      v-model="page"
      :page-count="newsPerPage"
      :total="news.length"
      :to="
        (page: number) => ({
          query: { page },
        })"
      :ui="{
        wrapper: '',
      }"
    />
  </div>
</template>

<style scoped></style>
